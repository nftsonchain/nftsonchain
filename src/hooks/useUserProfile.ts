import { useEffect, useState } from "react";
import { useUser } from "@clerk/nextjs";

export interface UserProfile {
  _id: string;
  clerkId: string;
  username: string;
  email: string;
  avatar: string;
  createdAt: string;
  updatedAt: string;
}

export function useUserProfile() {
  const { user: clerkUser, isLoaded } = useUser();
  const [userProfile, setUserProfile] = useState<UserProfile | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (!isLoaded) return;

    if (!clerkUser) {
      setUserProfile(null);
      setLoading(false);
      return;
    }

    const fetchUserProfile = async () => {
      try {
        setLoading(true);
        const response = await fetch(`/api/users/${clerkUser.id}`);

        if (!response.ok) {
          if (response.status === 404) {
            // User doesn't exist in database, create one
            const createResponse = await fetch("/api/users", {
              method: "POST",
              headers: { "Content-Type": "application/json" },
              body: JSON.stringify({
                userId: clerkUser.id,
                email: clerkUser.primaryEmailAddress?.emailAddress || "",
                username: clerkUser.username || `user_${clerkUser.id.slice(0, 8)}`,
              }),
            });

            if (createResponse.ok) {
              const newUser = await createResponse.json();
              setUserProfile(newUser.user);
            }
          } else {
            setError("Failed to load user profile");
          }
        } else {
          const data = await response.json();
          setUserProfile(data);
        }
      } catch (err) {
        console.error("Error fetching user profile:", err);
        setError("Error loading profile");
      } finally {
        setLoading(false);
      }
    };

    fetchUserProfile();
  }, [clerkUser, isLoaded]);

  return {
    userProfile,
    loading,
    error,
    isAuthenticated: !!clerkUser,
  };
}
