# Kings Blog ( stephen kingori- power learn student )

A modern, full-stack blog application built with the MERN stack featuring a sleek dark AMOLED theme and comprehensive blogging functionality.

**Developed by Stephen Kingori - PLP Student (2025)**

![Kings Blog](https://images.unsplash.com/photo-1499750310107-5fef28a66643?ixlib=rb-4.0.3&w=1200&h=400&fit=crop)

## ✨ Features

### 🔐 Authentication & Security
- Secure user registration and login
- JWT-based authentication
- Password hashing with bcrypt
- Protected routes for authenticated users
- Role-based access control

### 📝 Blog Management
- Create, read, update, and delete blog posts
- Rich text content support
- Auto-generated SEO-friendly slugs
- Post view count tracking
- Draft and publish functionality

### 🏷️ Organization & Discovery
- Color-coded category system
- Tag support for posts
- Advanced search functionality
- Filter posts by category
- Pagination for large collections

### 🎨 Design & User Experience
- **Dark AMOLED Theme** - Pure black backgrounds for OLED displays
- **Orange Accent Colors** - Consistent brand identity
- **Responsive Design** - Perfect on desktop, tablet, and mobile
- **Modern UI/UX** - Clean, professional interface
- **Unsplash Integration** - Beautiful hero images
- **Loading States** - Smooth user experience

## 🛠️ Tech Stack

### Backend
- **Node.js** - JavaScript runtime environment
- **Express.js** - Fast, unopinionated web framework
- **MongoDB Atlas** - Cloud-hosted NoSQL database
- **Mongoose** - Elegant MongoDB object modeling
- **JWT** - Secure authentication tokens
- **bcryptjs** - Password hashing and salting
- **express-validator** - Server-side input validation
- **cors** - Cross-origin resource sharing
- **multer** - Multipart form data handling

### Frontend
- **React.js** - Component-based UI library
- **Vite** - Lightning-fast build tool
- **React Router** - Declarative client-side routing
- **React Query** - Powerful data fetching and caching
- **Tailwind CSS** - Utility-first CSS framework
- **Axios** - Promise-based HTTP client
- **React Hot Toast** - Beautiful toast notifications
- **Lucide React** - Beautiful & consistent icons

### Development Tools
- **Nodemon** - Auto-restart development server
- **ESLint** - Code linting and formatting
- **PostCSS** - CSS processing and optimization

## 📁 Project Structure

```
kings-blog/
├── client/                 # React frontend
│   ├── src/
│   │   ├── components/     # Reusable UI components
│   │   │   └── layout/     # Navigation, Footer
│   │   ├── contexts/       # React contexts (Auth)
│   │   ├── pages/          # Page components
│   │   └── services/       # API communication
│   ├── package.json
│   └── vite.config.js
├── server/                 # Express backend
│   ├── models/             # Mongoose schemas
│   │   ├── User.js         # User model
│   │   ├── Post.js         # Blog post model
│   │   └── Category.js     # Category model
│   ├── routes/             # API endpoints
│   │   ├── auth.js         # Authentication routes
│   │   ├── posts.js        # Blog post routes
│   │   └── categories.js   # Category routes
│   ├── middleware/         # Custom middleware
│   │   ├── auth.js         # JWT authentication
│   │   └── validation.js   # Input validation
│   ├── server.js           # Entry point
│   └── package.json
├── README.md               # Project documentation
└── start.md               # Quick start guide
```

## 🚀 Quick Start

### Prerequisites
- **Node.js** (v18 or higher) - [Download here](https://nodejs.org/)
- **MongoDB Atlas** account - [Sign up free](https://www.mongodb.com/atlas)
- **Git** - [Download here](https://git-scm.com/)

### Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd kings-blog
   ```

2. **Install dependencies**
   ```bash
   # Install server dependencies
   cd server
   npm install

   # Install client dependencies
   cd ../client
   npm install
   ```

3. **Environment Setup**
   
   Create `server/.env` file:
   ```env
   NODE_ENV=development
   PORT=5000
   MONGODB_URI=mongodb+srv://username:password@cluster.mongodb.net/kings-blog?retryWrites=true&w=majority
   JWT_SECRET=your-super-secret-jwt-key-make-it-long-and-random
   JWT_EXPIRE=30d
   ```

   Create `client/.env` file:
   ```env
   VITE_API_URL=http://localhost:5000/api
   ```

4. **Start the application**
   
   **Terminal 1 - Backend:**
   ```bash
   cd server
   npm run dev
   ```
   
   **Terminal 2 - Frontend:**
   ```bash
   cd client
   npm run dev
   ```

5. **Access Kings Blog**
   - 🌐 **Frontend**: http://localhost:3000
   - 🔧 **Backend API**: http://localhost:5000

### First Steps
1. 📝 **Register** a new account at http://localhost:3000/register
2. 🔐 **Login** with your credentials
3. ✍️ **Create** your first blog post
4. 🎉 **Explore** all the features!

## 📚 API Documentation

### 🔐 Authentication Endpoints
| Method | Endpoint | Description | Access |
|--------|----------|-------------|---------|
| `POST` | `/api/auth/register` | Register new user | Public |
| `POST` | `/api/auth/login` | User login | Public |
| `GET` | `/api/auth/me` | Get current user | Private |
| `PUT` | `/api/auth/profile` | Update user profile | Private |

### 📝 Posts Endpoints
| Method | Endpoint | Description | Access |
|--------|----------|-------------|---------|
| `GET` | `/api/posts` | Get all posts (pagination, search, filter) | Public |
| `GET` | `/api/posts/:id` | Get single post by ID or slug | Public |
| `POST` | `/api/posts` | Create new post | Private |
| `PUT` | `/api/posts/:id` | Update existing post | Private (Owner/Admin) |
| `DELETE` | `/api/posts/:id` | Delete post | Private (Owner/Admin) |
| `POST` | `/api/posts/:id/comments` | Add comment to post | Private |

### 🏷️ Categories Endpoints
| Method | Endpoint | Description | Access |
|--------|----------|-------------|---------|
| `GET` | `/api/categories` | Get all categories | Public |
| `POST` | `/api/categories` | Create new category | Admin Only |
| `PUT` | `/api/categories/:id` | Update category | Admin Only |
| `DELETE` | `/api/categories/:id` | Delete category | Admin Only |

### 📊 Query Parameters
- **Posts**: `?page=1&limit=10&category=categoryId&q=searchTerm`
- **Search**: Case-insensitive search across title, content, and excerpt

## 🎯 Usage Guide

### 👥 For Readers
- **🏠 Browse**: Explore posts on the homepage and posts page
- **🔍 Search**: Use the search bar to find specific content
- **🏷️ Filter**: Browse posts by category
- **📖 Read**: Click any post to read the full content
- **📱 Mobile**: Enjoy the responsive design on any device

### ✍️ For Authors
- **📝 Write**: Click "Write" to create new blog posts
- **✏️ Edit**: Modify your existing posts anytime
- **🗑️ Delete**: Remove posts you no longer want
- **👤 Profile**: Update your personal information
- **📊 Track**: See view counts on your posts

### 👑 For Admins
- **🏷️ Categories**: Create and manage post categories
- **🛡️ Moderation**: Edit or delete any content
- **👥 Users**: Manage user accounts and permissions

### 🎨 Default Categories
The application comes with 5 pre-configured categories:
- **🔵 Technology** - Tech, programming, software development
- **🟢 Lifestyle** - Health, personal development, lifestyle
- **🟡 Travel** - Travel experiences and destinations  
- **🔴 Food** - Cooking, recipes, food experiences
- **🟣 Business** - Entrepreneurship, finance, business insights

## 🔧 Development

### Available Scripts

**Server (Backend)**
```bash
npm run dev    # Start development server with nodemon
npm start      # Start production server
```

**Client (Frontend)**
```bash
npm run dev    # Start Vite development server
npm run build  # Build for production
npm run preview # Preview production build
npm run lint   # Run ESLint
```

### Building for Production
```bash
# Build the frontend
cd client
npm run build

# The build files will be in client/dist/
# Serve these files with your preferred web server
```

### Environment Variables
Ensure you have the following environment variables set:

**Server (.env)**
```env
NODE_ENV=production
PORT=5000
MONGODB_URI=your_mongodb_atlas_connection_string
JWT_SECRET=your_jwt_secret_key
JWT_EXPIRE=30d
```

**Client (.env)**
```env
VITE_API_URL=https://your-api-domain.com/api
```

## 🚀 Deployment

### Vercel (Recommended for Frontend)
1. Push your code to GitHub
2. Connect your repository to Vercel
3. Set environment variables in Vercel dashboard
4. Deploy automatically on every push

### Heroku (Backend)
1. Create a Heroku app
2. Set environment variables in Heroku dashboard
3. Deploy using Git or GitHub integration

### MongoDB Atlas
- Already cloud-hosted and production-ready
- No additional setup required

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

1. Fork the project
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - feel free to use it for your own projects!

## 👨‍💻 Developer

**Stephen Kingori**  
PLP Student - 2025  
*Passionate about full-stack development and modern web technologies*

## 🙏 Acknowledgments

- **PLP Academy** - For the excellent MERN stack curriculum
- **Unsplash** - For the beautiful hero images
- **MongoDB Atlas** - For reliable cloud database hosting
- **Vercel** - For seamless frontend deployment
- **React Community** - For the amazing ecosystem

---

**⭐ If you found this project helpful, please give it a star!**