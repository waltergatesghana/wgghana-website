"use client";
import React, { useState } from 'react';
import { Calendar, Clock, Tag, Share2, ArrowLeft, ArrowRight, Facebook, Twitter, Linkedin, Copy } from 'lucide-react';
import { blogPosts } from '../../../src/data/blogData';

const BlogDetailPage = () => {
  // In a real app, you'd get the ID from the URL params
  // For now, defaulting to first post
  const [currentPostId] = useState("1");
  const [showShareMenu, setShowShareMenu] = useState(false);
  
  const currentPost = blogPosts.find(post => post.id === currentPostId);
  
  // Get related posts based on category and tags
  const relatedPosts = currentPost 
    ? blogPosts.filter(post => 
        post.id !== currentPostId && 
        (post.category === currentPost.category || 
         post.tags.some(tag => currentPost.tags.includes(tag)))
      ).slice(0, 3)
    : [];

  if (!currentPost) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Post not found</h1>
          <a
            href="/blog"
            className="text-yellow-600 hover:text-yellow-700 font-semibold inline-flex items-center gap-2"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Blog
          </a>
        </div>
      </div>
    );
  }

  const handleShare = (platform: string) => {
    const url = window.location.href;
    const text = currentPost.title;
    
    const shareUrls = {
      facebook: `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(url)}`,
      twitter: `https://twitter.com/intent/tweet?url=${encodeURIComponent(url)}&text=${encodeURIComponent(text)}`,
      linkedin: `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(url)}`
    };

    if (platform === 'copy') {
      navigator.clipboard.writeText(url);
      alert('Link copied to clipboard!');
    } else {
      window.open(shareUrls[platform as keyof typeof shareUrls], '_blank');
    }
    setShowShareMenu(false);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Image */}
      <div className="relative h-96 bg-gray-900">
        <img
          src={currentPost.image}
          alt={currentPost.title}
          className="w-full h-full object-cover opacity-80"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
      </div>

      {/* Article Content */}
      <div className="max-w-4xl mx-auto px-4 -mt-32 relative z-10">
        {/* Back Button */}
        <div className="mb-6">
          <a
            href="/blog"
            className="inline-flex items-center gap-2 bg-white px-4 py-2 rounded-lg shadow-md text-gray-600 hover:text-yellow-600 hover:shadow-lg transition-all"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Blog
          </a>
        </div>
        <article className="bg-white rounded-lg shadow-xl p-8 md:p-12">
          {/* Category Badge */}
          <div className="mb-4">
            <span className="bg-blue-100 text-gray-900 px-4 py-2 rounded-full text-sm font-semibold">
              {currentPost.category}
            </span>
          </div>

          {/* Title */}
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            {currentPost.title}
          </h1>

          {/* Meta Info */}
          <div className="flex flex-wrap items-center gap-6 text-gray-600 mb-8 pb-8 border-b border-gray-200">
            <div className="flex items-center gap-2">
              <Calendar className="w-5 h-5" />
              <span>{new Date(currentPost.publishedAt).toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}</span>
            </div>
            <div className="flex items-center gap-2">
              <Clock className="w-5 h-5" />
              <span>{currentPost.readTime}</span>
            </div>
            <div className="relative ml-auto">
              <button
                onClick={() => setShowShareMenu(!showShareMenu)}
                className="flex items-center gap-2 text-gray-600 hover:text-yellow-600 transition-colors"
              >
                <Share2 className="w-5 h-5" />
                <span>Share</span>
              </button>
              
              {showShareMenu && (
                <div className="absolute right-0 mt-2 bg-white rounded-lg shadow-lg py-2 w-48 z-20">
                  <button
                    onClick={() => handleShare('facebook')}
                    className="w-full px-4 py-2 text-left hover:bg-gray-100 flex items-center gap-3"
                  >
                    <Facebook className="w-5 h-5 text-blue-600" />
                    Facebook
                  </button>
                  <button
                    onClick={() => handleShare('twitter')}
                    className="w-full px-4 py-2 text-left hover:bg-gray-100 flex items-center gap-3"
                  >
                    <Twitter className="w-5 h-5 text-blue-400" />
                    Twitter
                  </button>
                  <button
                    onClick={() => handleShare('linkedin')}
                    className="w-full px-4 py-2 text-left hover:bg-gray-100 flex items-center gap-3"
                  >
                    <Linkedin className="w-5 h-5 text-blue-700" />
                    LinkedIn
                  </button>
                  <button
                    onClick={() => handleShare('copy')}
                    className="w-full px-4 py-2 text-left hover:bg-gray-100 flex items-center gap-3"
                  >
                    <Copy className="w-5 h-5 text-gray-600" />
                    Copy Link
                  </button>
                </div>
              )}
            </div>
          </div>

          {/* Author Info */}
          <div className="flex items-center gap-4 mb-8">
            <img
              src={currentPost.author.avatar}
              alt={currentPost.author.name}
              className="w-16 h-16 rounded-full object-cover"
            />
            <div>
              <p className="font-bold text-gray-900">{currentPost.author.name}</p>
              <p className="text-gray-600">{currentPost.author.role}</p>
            </div>
          </div>

          {/* Content */}
          <div 
            className="prose prose-lg max-w-none mb-12"
            dangerouslySetInnerHTML={{ __html: currentPost.content }}
            style={{
              lineHeight: '1.8',
            }}
          />

          {/* Tags */}
          <div className="pt-8 border-t border-gray-200">
            <div className="flex items-center gap-2 flex-wrap">
              <Tag className="w-5 h-5 text-gray-400" />
              {currentPost.tags.map(tag => (
                <span
                  key={tag}
                  className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-sm hover:bg-yellow-100 hover:text-yellow-800 transition-colors cursor-pointer"
                >
                  #{tag}
                </span>
              ))}
            </div>
          </div>
        </article>

        {/* Related Posts */}
        {relatedPosts.length > 0 && (
          <div className="mt-16 mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-8">Related Articles</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {relatedPosts.map(post => (
                <div
                  key={post.id}
                  className="bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 cursor-pointer"
                  onClick={() => window.location.href = `/blog/${post.id}`}
                >
                  <div className="relative h-48 overflow-hidden">
                    <img
                      src={post.image}
                      alt={post.title}
                      className="w-full h-full object-cover transform hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                  </div>
                  <div className="p-6">
                    <span className="bg-blue-100 text-yellow-800 px-2 py-1 rounded text-xs font-semibold">
                      {post.category}
                    </span>
                    <h3 className="text-lg font-bold text-gray-900 mt-3 mb-2 line-clamp-2">
                      {post.title}
                    </h3>
                    <p className="text-gray-600 text-sm line-clamp-2 mb-3">
                      {post.excerpt}
                    </p>
                    <div className="flex items-center justify-between text-sm text-gray-500">
                      <span>{post.readTime}</span>
                      <ArrowRight className="w-4 h-4" />
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default BlogDetailPage;