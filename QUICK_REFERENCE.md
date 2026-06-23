# 🚀 NFTs OnChain - Quick Reference Card

## 🎯 Core Commands

```bash
# Development
npm run dev              # Start dev server (http://localhost:3000)
npm run build          # Build for production
npm start              # Start production server
npm run lint           # Run ESLint

# Database
npm run seed           # Seed sample data
# First: npm install (add to package.json if needed)
```

## 📋 Environment Variables Template

```env
# Copy to .env.local and fill in your values

# Clerk (https://clerk.com/sign-up)
NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=pk_test_...
CLERK_SECRET_KEY=sk_test_...

# MongoDB Atlas (https://mongodb.com/cloud/atlas)
MONGODB_URI=mongodb+srv://username:password@cluster.mongodb.net/nfts-onchain?retryWrites=true&w=majority

# OpenAI (https://platform.openai.com/api-keys)
OPENAI_API_KEY=sk-...

# App
NEXT_PUBLIC_APP_URL=http://localhost:3000
NODE_ENV=development
```

## 🔗 Setup Links

| Service | URL | Free Tier |
|---------|-----|-----------|
| Clerk Auth | https://clerk.com | ✅ Yes |
| MongoDB | https://mongodb.com/cloud/atlas | ✅ Yes |
| OpenAI | https://platform.openai.com | ❌ Paid |
| Vercel Hosting | https://vercel.com | ✅ Yes |

## 📁 Important Directories

```
src/
├── app/              # Pages and API routes
├── components/       # React components
├── lib/db/          # Database models
├── hooks/           # Custom React hooks
└── data/            # Static data

Key files:
- middleware.ts      # Clerk auth middleware
- app/layout.tsx     # Root layout with ClerkProvider
- app/globals.css    # Tailwind styles
```

## 🔌 Key API Endpoints

### Users
```
POST   /api/users                    # Create user
GET    /api/users/[id]               # Get user
PUT    /api/users/[id]               # Update user
GET    /api/users/check-username     # Check availability
```

### NFTs
```
GET    /api/nfts                     # Get all NFTs
GET    /api/nfts/search              # Search with filters
POST   /api/nfts/[id]/like           # Like NFT
DELETE /api/nfts/[id]/like           # Unlike NFT
POST   /api/nfts/[id]/favorite       # Favorite NFT
DELETE /api/nfts/[id]/favorite       # Unfavorite NFT
```

### Submissions
```
POST   /api/submissions              # Submit NFT
GET    /api/submissions              # Get user submissions
PUT    /api/submissions/[id]         # Update (admin)
```

### AI
```
POST   /api/ai/chat                  # Send message to AI
```

## 📄 Documentation Files

| File | Purpose |
|------|---------|
| EXECUTIVE_SUMMARY.md | High-level overview |
| IMPLEMENTATION_GUIDE.md | Step-by-step setup |
| FEATURES_CHECKLIST.md | What's done, what's left |
| README.md | Project description |

## 🎨 Key UI Components

```
/components:
- Navbar.tsx           # Top navigation
- BottomNav.tsx        # Mobile bottom nav
- SidePanel.tsx        # Sidebar menu
- Footer.tsx           # Footer
- Marquee.tsx          # Collections carousel
- Marketplaces.tsx     # Marketplaces carousel
```

## 📄 Key Pages

```
/              # Home (NFT discovery)
/ai            # AI Assistant chat
/submit        # NFT submission form
/help          # Help center & FAQs
/about         # About page
/search        # Full search page (to create)
/profile       # User profile (to create)
```

## 🎯 Database Models

```javascript
User:
- clerkId (unique)
- username (unique)
- email
- avatar
- likedNFTs
- favoriteNFTs

NFT:
- name
- chain
- category
- supply
- launchYear
- description
- officialX
- officialWebsite
- marketplaces
- likesCount
- favoritesCount

Like/Favorite:
- userId
- nftId
- (unique compound index)

Submission:
- userId
- status (pending|approved|rejected)
- nftData
- createdNFTId
```

## 🔐 Clerk Setup Steps

1. Sign up at https://clerk.com
2. Create application
3. Copy publishable & secret keys
4. Add to `.env.local`
5. Customize sign-in pages (optional)
6. Add allowed URLs

## 🗄️ MongoDB Setup Steps

1. Go to https://mongodb.com/cloud/atlas
2. Create free cluster
3. Create database user
4. Get connection string
5. Add IP to whitelist (or 0.0.0.0)
6. Add to `.env.local`

## 🤖 OpenAI Setup Steps

1. Go to https://platform.openai.com
2. Create API key
3. Set usage limits (recommended)
4. Add to `.env.local`

## 🚀 Deployment to Vercel

```bash
# Install Vercel CLI
npm i -g vercel

# Deploy
vercel

# Set environment variables in Vercel dashboard
# Redeploy with: vercel --prod
```

## 📊 Color Scheme

```css
/* Primary Brand Color */
--primary: #FFCC00 (Yellow)

/* Dark Mode */
--dark-bg: #0B0F1A (Dark Blue-Black)
--dark-text: #FFFFFF (White)

/* Light Mode */
--light-bg: #FFFFFF (White)
--light-text: #000000 (Black)

/* Accents */
--white-10: rgba(255, 255, 255, 0.1)
--black-10: rgba(0, 0, 0, 0.1)
```

## 🔄 Common Tasks

### Add New NFT Manually
```javascript
// In MongoDB
db.nfts.insertOne({
  name: "Collection Name",
  chain: "Ethereum",
  category: "PFP",
  supply: 10000,
  launchYear: 2023,
  description: "...",
  marketplaces: ["OpenSea"]
})
```

### Update Search Index
```bash
# In MongoDB Atlas console:
# db.nfts.createIndex({ name: "text", description: "text" })
```

### Seed Sample Data
```bash
npm run seed
```

### Clear Database
```javascript
// In MongoDB console:
db.nfts.deleteMany({})
db.users.deleteMany({})
```

## 🐛 Troubleshooting

| Issue | Solution |
|-------|----------|
| "MONGODB_URI not found" | Check `.env.local` exists |
| Clerk not working | Check keys in `.env.local` |
| Styles not loading | Run `npm run dev` again |
| AI not responding | Check OpenAI API key |
| Build fails | Delete `.next`, run `npm install` |

## 📱 Responsive Breakpoints

```css
/* Mobile First */
Default: < 640px
md: 640px - 1024px (tablets)
lg: > 1024px (desktop)
```

## 🎯 Next Priorities

1. ✅ Setup environment variables
2. ✅ Test local development
3. ✅ Add sample data
4. ✅ Test all features
5. ⏳ Deploy to Vercel
6. ⏳ Configure domain
7. ⏳ Launch to users

## 💾 Important Files to Keep

```
.env.local              # Never commit!
.env.example            # Template for setup
package.json            # Dependencies
tsconfig.json           # TypeScript config
next.config.ts          # Next.js config
tailwind.config.ts      # Tailwind config
middleware.ts           # Clerk middleware
```

## 🚨 Production Checklist

- [ ] Environment variables set
- [ ] Database configured
- [ ] Clerk production keys
- [ ] OpenAI budget limits
- [ ] HTTPS enabled
- [ ] Error tracking setup
- [ ] Analytics configured
- [ ] Backups enabled
- [ ] Monitoring active

## 📞 Support Resources

- **Clerk:** https://clerk.com/support
- **MongoDB:** https://docs.mongodb.com
- **OpenAI:** https://help.openai.com
- **Next.js:** https://nextjs.org/docs
- **Vercel:** https://vercel.com/support

## 🎓 Useful Commands

```bash
# Check Node version
node --version

# Check npm version
npm --version

# Install specific package version
npm install package@latest

# Update all dependencies
npm update

# Clear npm cache
npm cache clean --force

# Check for vulnerabilities
npm audit

# Fix vulnerabilities
npm audit fix
```

## 📈 Monitoring URLs

Once deployed:
- Main site: https://yourdomain.com
- Admin dashboard: https://yourdomain.com/admin (future)
- Analytics: Configure with your service

## 🔑 Key Libraries

- **@clerk/nextjs** - Authentication
- **mongoose** - Database ORM
- **mongodb** - Database driver
- **openai** - AI/LLM
- **lucide-react** - Icons
- **next** - Framework
- **react** - UI library
- **tailwindcss** - Styling

## ⚡ Performance Tips

1. Use `next/image` for images
2. Lazy load components with `dynamic()`
3. Add database indexes
4. Enable caching headers
5. Monitor API response times
6. Profile with Lighthouse

## 🎉 You're Ready!

You have everything needed to:
- ✅ Build a full-featured NFT platform
- ✅ Launch to production
- ✅ Scale to 1000+ users
- ✅ Add new features quickly
- ✅ Maintain quality code

**Happy coding!** 🚀

---

**Last Updated:** June 22, 2026  
**Version:** 1.0  
**Status:** Ready to Use
