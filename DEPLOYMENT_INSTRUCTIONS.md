# 🚀 Kings Blog Deployment Instructions

## 📁 Repository Structure

You now have two deployment-ready folders:

```
├── backend-deploy/     # Railway deployment
│   ├── models/         # Database models
│   ├── routes/         # API routes
│   ├── middleware/     # Auth & validation
│   ├── server.js       # Main server file
│   ├── package.json    # Dependencies
│   └── README.md       # Backend docs
│
└── frontend-deploy/    # Vercel deployment
    ├── src/            # React components
    ├── package.json    # Dependencies
    ├── vite.config.js  # Build config
    └── README.md       # Frontend docs
```

## 🔧 Step-by-Step Deployment

### Phase 1: Deploy Backend to Railway

#### 1. Create Backend Repository
```bash
# Navigate to backend folder
cd backend-deploy

# Initialize git repository
git init
git add .
git commit -m "Initial commit: Kings Blog Backend API"

# Create GitHub repository and push
# Go to GitHub.com → New Repository → "kings-blog-backend"
git remote add origin https://github.com/yourusername/kings-blog-backend.git
git branch -M main
git push -u origin main
```

#### 2. Deploy to Railway
1. **Go to**: https://railway.app/
2. **Sign up/Login** with GitHub
3. **New Project** → **Deploy from GitHub repo**
4. **Select**: `kings-blog-backend` repository
5. **Railway auto-detects**: Node.js project ✅

#### 3. Configure Railway Environment Variables
In Railway dashboard → **Variables** tab:

```env
NODE_ENV=production
PORT=3000
MONGODB_URI=mongodb+srv://kingsdb:kings635@cluster0.2jrpckv.mongodb.net/mern-blog?retryWrites=true&w=majority
JWT_SECRET=kings-blog-super-secret-jwt-key-2025-production-secure
JWT_EXPIRE=30d
FRONTEND_URL=https://kings-blog.vercel.app
```

#### 4. Get Your Railway URL
- After deployment, Railway provides a URL like: `https://kings-blog-backend-production.railway.app`
- **Save this URL** - you'll need it for frontend!

### Phase 2: Deploy Frontend to Vercel

#### 1. Copy Client Files to Frontend Deploy
```bash
# Copy all client files to frontend-deploy folder
# (This step is already done for you)

# Navigate to frontend folder
cd frontend-deploy

# Initialize git repository
git init
git add .
git commit -m "Initial commit: Kings Blog Frontend"

# Create GitHub repository and push
# Go to GitHub.com → New Repository → "kings-blog-frontend"
git remote add origin https://github.com/yourusername/kings-blog-frontend.git
git branch -M main
git push -u origin main
```

#### 2. Update Frontend Environment
Create `frontend-deploy/.env.production`:
```env
VITE_API_URL=https://your-railway-backend-url.railway.app/api
```

#### 3. Deploy to Vercel
1. **Go to**: https://vercel.com/
2. **Sign up/Login** with GitHub
3. **New Project** → **Import** your frontend repository
4. **Configure**:
   - Framework Preset: **Vite**
   - Root Directory: **/** (leave empty)
   - Build Command: `npm run build`
   - Output Directory: `dist`

#### 4. Add Vercel Environment Variables
In Vercel dashboard → **Settings** → **Environment Variables**:
```env
VITE_API_URL=https://your-railway-backend-url.railway.app/api
```

### Phase 3: Update CORS Settings

#### Update Railway Backend CORS
In your Railway backend, the CORS is already configured to accept your Vercel domain.

If you need to update it:
1. Go to Railway dashboard
2. Update the `FRONTEND_URL` environment variable
3. Redeploy

## ✅ Post-Deployment Checklist

### Backend (Railway)
- [ ] Backend API responding at Railway URL
- [ ] Environment variables configured
- [ ] MongoDB Atlas connection working
- [ ] CORS configured for frontend domain

### Frontend (Vercel)
- [ ] Frontend loading at Vercel URL
- [ ] API calls working to Railway backend
- [ ] Environment variables set
- [ ] All pages loading correctly

### Testing
- [ ] User registration works
- [ ] User login works
- [ ] Create post works
- [ ] View posts works
- [ ] Search and filter works

## 🌐 Final URLs

After successful deployment:
- **Frontend**: `https://your-app-name.vercel.app`
- **Backend**: `https://your-app-name.railway.app`

## 💰 Cost Summary
- **Railway**: Free ($5 monthly credit)
- **Vercel**: Free (hobby plan)
- **MongoDB Atlas**: Free (512MB)
- **Total**: $0/month 🎉

## 🔄 Automatic Deployments

Both platforms support automatic deployments:
- **Railway**: Deploys on every push to main branch
- **Vercel**: Deploys on every push to main branch

## 🆘 Troubleshooting

### Common Issues:
1. **CORS Error**: Update FRONTEND_URL in Railway
2. **API Not Found**: Check VITE_API_URL in Vercel
3. **Build Failed**: Check package.json dependencies
4. **Database Connection**: Verify MongoDB Atlas credentials

### Getting Help:
- Railway Docs: https://docs.railway.app/
- Vercel Docs: https://vercel.com/docs
- MongoDB Atlas Docs: https://docs.atlas.mongodb.com/

---

**🎉 Your Kings Blog will be live and accessible worldwide!**