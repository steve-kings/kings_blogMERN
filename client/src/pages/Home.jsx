import { Link } from 'react-router-dom';
import { useQuery } from 'react-query';
import { postService } from '../services/api';
import { ArrowRight, Calendar, User } from 'lucide-react';

const Home = () => {
  const { data: postsData, isLoading } = useQuery(
    'recent-posts',
    () => postService.getAllPosts(1, 6),
    {
      staleTime: 5 * 60 * 1000, // 5 minutes
    }
  );

  const formatDate = (dateString) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
    });
  };

  return (
    <div className="space-y-12">
      {/* Hero Section */}
      <section className="relative py-24 rounded-2xl overflow-hidden">
        {/* Unsplash Background Image */}
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: 'url(https://images.unsplash.com/photo-1499750310107-5fef28a66643?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80)'
          }}
        ></div>
        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-slate-900/90 via-slate-800/80 to-slate-900/70"></div>
        
        <div className="relative max-w-6xl mx-auto px-6">
          <div className="max-w-4xl">
            <h1 className="text-6xl md:text-8xl font-bold mb-6 leading-tight text-white">
              Kings Blog
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-gray-200 leading-relaxed max-w-2xl">
              A space for discovery with resources and insights from the Kings community and team, to encourage you on the journey.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                to="/posts"
                className="bg-orange-500 text-white px-8 py-4 rounded-lg font-semibold hover:bg-orange-600 transition-all duration-300 text-center shadow-lg"
              >
                Explore Stories
              </Link>
              <Link
                to="/register"
                className="border-2 border-orange-500 text-orange-500 bg-white/10 backdrop-blur-sm px-8 py-4 rounded-lg font-semibold hover:bg-orange-500 hover:text-white transition-all duration-300 text-center"
              >
                Join Community
              </Link>
            </div>
          </div>
        </div>
        
        {/* Decorative elements */}
        <div className="absolute top-10 right-10 w-32 h-32 bg-orange-500/20 rounded-full blur-xl"></div>
        <div className="absolute bottom-10 right-20 w-20 h-20 bg-emerald-500/20 rounded-full blur-lg"></div>
      </section>

      {/* Recent Posts Section */}
      <section>
        <div className="flex justify-between items-center mb-12">
          <div>
            <h2 className="text-4xl font-bold text-white mb-2">Latest Stories</h2>
            <p className="text-gray-300">Fresh perspectives and inspiring narratives</p>
          </div>
          <Link
            to="/posts"
            className="flex items-center space-x-2 bg-orange-500 text-white px-6 py-3 rounded-lg hover:bg-orange-600 transition-colors"
          >
            <span>View All Stories</span>
            <ArrowRight size={20} />
          </Link>
        </div>

        {isLoading ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[...Array(6)].map((_, index) => (
              <div key={index} className="bg-gray-900 border border-gray-800 rounded-lg shadow-md p-6 animate-pulse">
                <div className="h-4 bg-gray-700 rounded mb-4"></div>
                <div className="h-3 bg-gray-700 rounded mb-2"></div>
                <div className="h-3 bg-gray-700 rounded mb-4"></div>
                <div className="flex justify-between">
                  <div className="h-3 bg-gray-700 rounded w-20"></div>
                  <div className="h-3 bg-gray-700 rounded w-16"></div>
                </div>
              </div>
            ))}
          </div>
        ) : postsData?.data?.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {postsData.data.map((post) => (
              <article
                key={post._id}
                className="bg-gray-900 border border-gray-800 rounded-lg shadow-md hover:shadow-lg hover:border-gray-700 transition-all overflow-hidden"
              >
                <div className="p-6">
                  <div className="flex items-center space-x-2 mb-3">
                    <span
                      className="px-3 py-1 text-xs font-semibold rounded-full text-white"
                      style={{ backgroundColor: post.category?.color || '#F97316' }}
                    >
                      {post.category?.name || 'Uncategorized'}
                    </span>
                  </div>
                  
                  <h3 className="text-xl font-bold text-white mb-3 line-clamp-2">
                    <Link
                      to={`/posts/${post._id}`}
                      className="hover:text-orange-500 transition-colors"
                    >
                      {post.title}
                    </Link>
                  </h3>
                  
                  <p className="text-gray-300 mb-4 line-clamp-3">
                    {post.excerpt || post.content.substring(0, 150) + '...'}
                  </p>
                  
                  <div className="flex items-center justify-between text-sm text-gray-400">
                    <div className="flex items-center space-x-1">
                      <User size={16} />
                      <span>{post.author?.name || 'Anonymous'}</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <Calendar size={16} />
                      <span>{formatDate(post.createdAt)}</span>
                    </div>
                  </div>
                </div>
              </article>
            ))}
          </div>
        ) : (
          <div className="text-center py-12">
            <p className="text-gray-600 text-lg">No posts available yet.</p>
            <Link
              to="/create-post"
              className="inline-block mt-4 bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition-colors"
            >
              Write the First Post
            </Link>
          </div>
        )}
      </section>

      {/* Features Section */}
      <section className="py-20 bg-gradient-to-b from-gray-900 to-black">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">
              The Kings Blog Experience
            </h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              A curated space for meaningful conversations and inspiring stories
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="group text-center p-8 rounded-2xl hover:bg-gray-900 hover:shadow-xl transition-all duration-300 border border-gray-800">
              <div className="bg-gradient-to-br from-orange-500 to-orange-600 text-white w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                <User size={24} />
              </div>
              <h3 className="text-xl font-bold mb-4 text-white">Thoughtful Content</h3>
              <p className="text-gray-300 leading-relaxed">
                Carefully curated stories and insights that inspire meaningful conversations and personal growth.
              </p>
            </div>
            
            <div className="group text-center p-8 rounded-2xl hover:bg-gray-900 hover:shadow-xl transition-all duration-300 border border-gray-800">
              <div className="bg-gradient-to-br from-slate-700 to-slate-600 text-white w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                <Calendar size={24} />
              </div>
              <h3 className="text-xl font-bold mb-4 text-white">Community Driven</h3>
              <p className="text-gray-300 leading-relaxed">
                Join a community of thinkers, creators, and storytellers sharing their unique perspectives.
              </p>
            </div>
            
            <div className="group text-center p-8 rounded-2xl hover:bg-gray-900 hover:shadow-xl transition-all duration-300 border border-gray-800">
              <div className="bg-gradient-to-br from-emerald-600 to-emerald-700 text-white w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                <ArrowRight size={24} />
              </div>
              <h3 className="text-xl font-bold mb-4 text-white">Discover & Grow</h3>
              <p className="text-gray-300 leading-relaxed">
                Explore diverse topics and perspectives that challenge your thinking and expand your worldview.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;