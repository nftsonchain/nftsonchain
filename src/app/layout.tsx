import "./globals.css";
import { ThemeProvider } from "@/context/theme-context";
import { ClerkProvider } from "@clerk/nextjs";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className="
          min-h-screen
          antialiased
          overflow-x-hidden
          transition-colors duration-300
        "
      >
        <ClerkProvider>
          <ThemeProvider>
            {children}
          </ThemeProvider>
        </ClerkProvider>
      </body>
    </html>
  );
}