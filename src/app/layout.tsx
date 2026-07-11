import "./globals.css";
import { ThemeProvider } from "@/context/theme-context";
import { ClerkProvider } from "@clerk/nextjs";
import MainLayoutWrapper from "@/components/MainLayoutWrapper";

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
            <MainLayoutWrapper>
              {children}
            </MainLayoutWrapper>
          </ThemeProvider>
        </ClerkProvider>
      </body>
    </html>
  );
}