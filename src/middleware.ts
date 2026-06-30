import { clerkMiddleware, createRouteMatcher } from "@clerk/nextjs/server";

const isPublicRoute = createRouteMatcher([
  "/",
  "/search",
  "/ai",
  "/submit",
  "/settings",
  "/help",
  "/about",

  // API routes
  "/api/ai(.*)",
  "/api/nfts(.*)",
  "/api/search(.*)",

  // Auth routes
  "/sign-in(.*)",
  "/sign-up(.*)",
]);

export default clerkMiddleware(async (auth, req) => {
  if (!isPublicRoute(req)) {
    await auth.protect();
  }
});

export const config = {
  matcher: [
    "/((?!_next|[^?]*\\.(?:html?|css|js(?!on)|jpe?g|webp|gif|svg|ttf|woff2?|ico|csv|pdf)(?:$|\\?)|_next/static|_next/image|favicon.ico|robots.txt|sitemap.xml).*)",
  ],
};