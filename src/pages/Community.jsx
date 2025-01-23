import React, { useState } from 'react';
import { FaUser, FaCalendar, FaComment, FaHeart, FaShare } from 'react-icons/fa';

const samplePosts = [
  {
    id: 1,
    author: "John Smith",
    title: "Tips for Organic Farming",
    content: "Here are some effective organic farming practices I've been using...",
    date: "2024-01-22",
    likes: 24,
    comments: 8,
    tags: ["organic", "farming-tips"]
  },
  {
    id: 2,
    author: "Maria Garcia",
    title: "Dealing with Pest Control Naturally",
    content: "I've discovered some natural methods for pest control that work great...",
    date: "2024-01-21",
    likes: 32,
    comments: 12,
    tags: ["pest-control", "natural-methods"]
  },
  {
    id: 3,
    author: "David Kumar",
    title: "Water Conservation Techniques",
    content: "Let me share some effective water conservation methods I use in my farm...",
    date: "2024-01-20",
    likes: 45,
    comments: 15,
    tags: ["water-conservation", "sustainability"]
  }
];

export default function Community() {
  const [activeTab, setActiveTab] = useState('posts');
  const [newPost, setNewPost] = useState({ title: '', content: '', tags: '' });

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle post submission here
    console.log('New post:', newPost);
    setNewPost({ title: '', content: '', tags: '' });
  };

  return (
    <div className="min-h-screen bg-gray-50 pt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Farming Community</h1>
          <p className="text-xl text-gray-600">Connect with fellow farmers, share experiences, and learn together</p>
        </div>

        {/* Navigation Tabs */}
        <div className="border-b border-gray-200 mb-8">
          <nav className="-mb-px flex space-x-8">
            <button
              onClick={() => setActiveTab('posts')}
              className={`pb-4 px-1 ${
                activeTab === 'posts'
                  ? 'border-b-2 border-green-500 text-green-600'
                  : 'text-gray-500 hover:text-gray-700 hover:border-gray-300'
              } font-medium`}
            >
              Latest Posts
            </button>
            <button
              onClick={() => setActiveTab('create')}
              className={`pb-4 px-1 ${
                activeTab === 'create'
                  ? 'border-b-2 border-green-500 text-green-600'
                  : 'text-gray-500 hover:text-gray-700 hover:border-gray-300'
              } font-medium`}
            >
              Create Post
            </button>
          </nav>
        </div>

        {/* Content Area */}
        <div className="max-w-4xl mx-auto">
          {activeTab === 'posts' ? (
            // Posts List
            <div className="space-y-8">
              {samplePosts.map((post) => (
                <div key={post.id} className="bg-white rounded-lg shadow-md p-6">
                  <div className="flex items-center mb-4">
                    <div className="h-10 w-10 rounded-full bg-gray-200 flex items-center justify-center">
                      <FaUser className="text-gray-500" />
                    </div>
                    <div className="ml-4">
                      <h3 className="text-lg font-semibold">{post.author}</h3>
                      <div className="flex items-center text-gray-500 text-sm">
                        <FaCalendar className="mr-2" />
                        <span>{post.date}</span>
                      </div>
                    </div>
                  </div>
                  <h2 className="text-xl font-bold mb-4">{post.title}</h2>
                  <p className="text-gray-600 mb-4">{post.content}</p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {post.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-3 py-1 bg-green-100 text-green-800 rounded-full text-sm"
                      >
                        #{tag}
                      </span>
                    ))}
                  </div>
                  <div className="flex items-center space-x-6 text-gray-500">
                    <button className="flex items-center space-x-2 hover:text-green-600">
                      <FaHeart />
                      <span>{post.likes}</span>
                    </button>
                    <button className="flex items-center space-x-2 hover:text-green-600">
                      <FaComment />
                      <span>{post.comments}</span>
                    </button>
                    <button className="flex items-center space-x-2 hover:text-green-600">
                      <FaShare />
                      <span>Share</span>
                    </button>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            // Create Post Form
            <div className="bg-white rounded-lg shadow-md p-6">
              <h2 className="text-2xl font-bold mb-6">Create a New Post</h2>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="title" className="block text-sm font-medium text-gray-700">
                    Title
                  </label>
                  <input
                    type="text"
                    id="title"
                    value={newPost.title}
                    onChange={(e) => setNewPost({ ...newPost, title: e.target.value })}
                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-green-500 focus:ring-green-500"
                    required
                  />
                </div>
                <div>
                  <label htmlFor="content" className="block text-sm font-medium text-gray-700">
                    Content
                  </label>
                  <textarea
                    id="content"
                    rows="6"
                    value={newPost.content}
                    onChange={(e) => setNewPost({ ...newPost, content: e.target.value })}
                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-green-500 focus:ring-green-500"
                    required
                  ></textarea>
                </div>
                <div>
                  <label htmlFor="tags" className="block text-sm font-medium text-gray-700">
                    Tags (comma-separated)
                  </label>
                  <input
                    type="text"
                    id="tags"
                    value={newPost.tags}
                    onChange={(e) => setNewPost({ ...newPost, tags: e.target.value })}
                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-green-500 focus:ring-green-500"
                    placeholder="e.g., organic, farming-tips, sustainability"
                  />
                </div>
                <button
                  type="submit"
                  className="w-full bg-green-600 text-white px-6 py-3 rounded-md hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2"
                >
                  Create Post
                </button>
              </form>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
