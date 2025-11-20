import { useParams, Link, useNavigate } from 'react-router-dom';
import { useQuery, useMutation, useQueryClient } from 'react-query';
import { postService } from '../services/api';
import { useAuth } from '../contexts/AuthContext';
import { toast } from 'react-hot-toast';
import { Calendar, User, Edit, Trash2, ArrowLeft } from 'lucide-react';

const PostDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { user, isAuthenticated } = useAuth();
  const queryClient = useQueryClient();

  const { data: postData, isLoading, error } = useQuery(
    ['post', id],
    () => postService.getPost(id),
    {
      retry: 1,
    }
  );

  const deletePostMutation = useMutation(postService.deletePost, {
    onSuccess: () => {
      toast.success('Post deleted successfully');
      queryClient.invalidateQueries('posts');
      navigate('/posts');
    },
    onError: (error) => {
      toast.error(error.response?.data?.error || 'Failed to delete post');
    },
  });

  const handleDelete = () => {
    if (window.confirm('Are you sure you want to delete this post?')) {
      deletePostMutation.mutate(id);
    }
  };

  const formatDate = (dateString) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
    });
  };

  if (isLoading) {
    return (
      <div className="max-w-4xl mx-auto">
        <div className="animate-pulse">
          <div className="h-8 bg-gray-200 rounded mb-4"></div>
          <div className="h-4 bg-gray-200 rounded mb-6 w-1/3"></div>
          <div className="space-y-3">
            <div className="h-4 bg-gray-200 rounded"></div>
            <div className="h-4 bg-gray-200 rounded"></div>
            <div className="h-4 bg-gray-200 rounded w-2/3"></div>
          </div>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="max-w-4xl mx-auto text-center">
        <h1 className="text-2xl font-bold text-gray-800 mb-4">Post Not Found</h1>
        <p className="text-gray-600 mb-6">The post you're looking for doesn't exist.</p>
        <Link
          to="/posts"
          className="inline-flex items-center space-x-2 bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition-colors"
        >
          <ArrowLeft size={20} />
          <span>Back to Posts</span>
        </Link>
      </div>
    );
  }

  const post = postData?.data;
  const canEdit = isAuthenticated && (user?.id === post?.author?._id || user?.role === 'admin');

  return (
    <div className="max-w-4xl mx-auto">
      {/* Back Button */}
      <Link
        to="/posts"
        className="inline-flex items-center space-x-2 text-blue-600 hover:text-blue-700 mb-6 transition-colors"
      >
        <ArrowLeft size={20} />
        <span>Back to Posts</span>
      </Link>

      <article className="bg-white rounded-lg shadow-md overflow-hidden">
        {/* Header */}
        <div className="p-8 border-b">
          <div className="flex items-center justify-between mb-4">
            <span
              className="px-3 py-1 text-sm font-semibold rounded-full text-white"
              style={{ backgroundColor: post?.category?.color || '#3B82F6' }}
            >
              {post?.category?.name || 'Uncategorized'}
            </span>
            
            {canEdit && (
              <div className="flex items-center space-x-2">
                <Link
                  to={`/edit-post/${post._id}`}
                  className="flex items-center space-x-1 text-blue-600 hover:text-blue-700 transition-colors"
                >
                  <Edit size={16} />
                  <span>Edit</span>
                </Link>
                <button
                  onClick={handleDelete}
                  disabled={deletePostMutation.isLoading}
                  className="flex items-center space-x-1 text-red-600 hover:text-red-700 transition-colors disabled:opacity-50"
                >
                  <Trash2 size={16} />
                  <span>Delete</span>
                </button>
              </div>
            )}
          </div>

          <h1 className="text-4xl font-bold text-gray-800 mb-4">{post?.title}</h1>
          
          <div className="flex items-center space-x-6 text-gray-600">
            <div className="flex items-center space-x-2">
              <User size={20} />
              <span>{post?.author?.name || 'Anonymous'}</span>
            </div>
            <div className="flex items-center space-x-2">
              <Calendar size={20} />
              <span>{formatDate(post?.createdAt)}</span>
            </div>
            {post?.viewCount > 0 && (
              <span className="text-sm">{post.viewCount} views</span>
            )}
          </div>
        </div>

        {/* Content */}
        <div className="p-8">
          <div className="prose max-w-none">
            {post?.content?.split('\n').map((paragraph, index) => (
              <p key={index} className="mb-4 text-gray-700 leading-relaxed">
                {paragraph}
              </p>
            ))}
          </div>

          {/* Tags */}
          {post?.tags && post.tags.length > 0 && (
            <div className="mt-8 pt-6 border-t">
              <h3 className="text-lg font-semibold text-gray-800 mb-3">Tags</h3>
              <div className="flex flex-wrap gap-2">
                {post.tags.map((tag, index) => (
                  <span
                    key={index}
                    className="px-3 py-1 bg-gray-100 text-gray-700 text-sm rounded-full"
                  >
                    #{tag}
                  </span>
                ))}
              </div>
            </div>
          )}
        </div>

        {/* Author Info */}
        {post?.author && (
          <div className="p-8 bg-gray-50 border-t">
            <h3 className="text-lg font-semibold text-gray-800 mb-3">About the Author</h3>
            <div className="flex items-start space-x-4">
              <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center text-white font-semibold">
                {post.author.name?.charAt(0).toUpperCase()}
              </div>
              <div>
                <h4 className="font-semibold text-gray-800">{post.author.name}</h4>
                {post.author.bio && (
                  <p className="text-gray-600 mt-1">{post.author.bio}</p>
                )}
              </div>
            </div>
          </div>
        )}
      </article>
    </div>
  );
};

export default PostDetail;