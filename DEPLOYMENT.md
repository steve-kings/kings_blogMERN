# 🚀 Kings Blog Deployment Guide

## Live URLs
- **Frontend (Vercel)**: https://kings-blog.vercel.app
- **Backend (Railway)**: https://kings-blog-backend.railway.app
- **Database**: MongoDB Atlas (Cloud)

## Deployment Architecture
```
┌─────────────────┐    ┌─────────────────┐    ┌─────────────────┐
│   Vercel        │    │   Railway       │    │ MongoDB Atlas   │
│   (Frontend)    │───▶│   (Backend)     │───▶│   (Database)    │
│   React + Vite  │    │   Node.js       │    │   Cloud DB      │
└─────────────────┘    └─────────────────┘    └─────────────────┘
```

## Environment Variables

### Railway (Backend)
```env
NODE_ENV=production
PORT=3000
MONGODB_URI=mongodb+srv://username:password@cluster.mongodb.net/kings-blog
JWT_SECRET=your-production-jwt-secret
JWT_EXPIRE=30d
```

### Vercel (Frontend)
```env
VITE_API_URL=https://your-railway-backend.railway.app/api
```

## Deployment Steps

### 1. Backend (Railway)
1. Push code to GitHub
2. Connect Railway to GitHub repo
3. Set root directory to `server`
4. Add environment variables
5. Deploy automatically

### 2. Frontend (Vercel)
1. Connect Vercel to GitHub repo
2. Set root directory to `client`
3. Set framework to Vite
4. Add environment variables
5. Deploy automatically

## Post-Deployment Checklist
- [ ] Backend API responding at Railway URL
- [ ] Frontend loading at Vercel URL
- [ ] Database connection working
- [ ] User registration/login working
- [ ] CORS configured correctly
- [ ] Environment variables set
- [ ] SSL certificates active (automatic)

## Monitoring
- **Railway**: Built-in logs and metrics
- **Vercel**: Analytics and performance monitoring
- **MongoDB Atlas**: Database monitoring and alerts

## Custom Domains (Optional)
- **Frontend**: Add custom domain in Vercel settings
- **Backend**: Add custom domain in Railway settings