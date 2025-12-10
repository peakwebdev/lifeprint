import React, { useState } from 'react';
import { Calendar, ArrowRight } from 'lucide-react';
import { blogPosts } from '../data/blogPosts';
import { motion, AnimatePresence, useScroll, useTransform, useSpring } from 'framer-motion';

function formatContent(content: string) {
  const sections = content.split('\n\n').map(section => section.trim());
  
  return sections.map(section => {
    // Handle headers
    if (section.match(/^\*\*(.*?)\*\*$/)) {
      const headerText = section.replace(/^\*\*(.*?)\*\*$/, '$1');
      return `<h2 class="text-2xl font-bold text-white mt-8 mb-4">${headerText}</h2>`;
    }
    
    // Handle research streams list
    if (section.match(/^(Cognitive|Behavioral|Adaptive|Performance|Emotional)/m)) {
      const items = section.split('\n').map(item => 
        `<li class="text-slate-300">${item}</li>`
      ).join('');
      return `<ul class="list-none space-y-2 mb-6 ml-4">${items}</ul>`;
    }
    
    // Handle numbered list (Key Differentiators)
    if (section.match(/^\d+\. [A-Z]/m)) {
      const items = section.split('\n').map(item => {
        const [, number, title, description] = item.match(/(\d+)\. ([^:]+):(.*)/);
        return `<div class="flex gap-4 mb-4">
          <span class="text-white font-semibold">${number}.</span>
          <div>
            <span class="text-white font-semibold">${title}:</span>
            <span class="text-slate-300">${description}</span>
          </div>
        </div>`;
      }).join('');
      return `<div class="space-y-2 mb-6 ml-4">${items}</div>`;
    }
    
    // Handle impact bullet points
    if (section.match(/^-/m)) {
      const items = section.split('\n').map(item => 
        `<li class="text-slate-300">${item.replace(/^- /, '')}</li>`
      ).join('');
      return `<ul class="list-disc pl-6 mb-6 space-y-2 ml-4">${items}</ul>`;
    }
    
    // Handle regular paragraphs
    const formattedText = section
      .replace(/\*\*LIFEPRINT™\*\*/g, '<span class="font-semibold text-white">LIFEPRINT™</span>')
      .replace(/\*\*(.*?)\*\*/g, '<span class="font-semibold text-white">$1</span>');
    return `<p class="text-slate-300 mb-6 leading-relaxed">${formattedText}</p>`;
  }).join('');
}

export function MediaPage() {
  const [selectedPost, setSelectedPost] = useState<string | null>(null);
  const featuredPost = blogPosts[0];
  const otherPosts = blogPosts.slice(1);
  
  const { scrollYProgress } = useScroll();
  
  const scaleProgress = useSpring(useTransform(scrollYProgress, [0, 1], [0.8, 1]), {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  const selectedPostData = selectedPost 
    ? blogPosts.find(post => post.id === selectedPost)
    : null;

  return (
    <div className="min-h-screen bg-slate-900 pt-24 pb-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          className="text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          style={{ scale: scaleProgress }}
        >
          <h1 className="text-4xl font-bold text-white mb-4 inline-flex items-center">
            LIFEPRINT<sup className="text-sm">TM</sup> Blog
          </h1>
          <p className="text-xl text-slate-300">Explore our latest articles, research, and thought leadership</p>
        </motion.div>

        <AnimatePresence mode="wait">
          {selectedPostData ? (
            <motion.div 
              className="mb-12"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.6 }}
              style={{ scale: scaleProgress }}
            >
              <motion.button 
                onClick={() => setSelectedPost(null)}
                className="inline-flex items-center text-blue-400 hover:text-blue-300 transition-colors mb-8 text-sm"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <ArrowRight className="w-4 h-4 mr-2 rotate-180" />
                Back to All Articles
              </motion.button>
              <motion.div 
                className="bg-slate-800 rounded-lg overflow-hidden"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.2 }}
              >
                <img
                  src={selectedPostData.image}
                  alt={selectedPostData.title}
                  className="w-full h-[400px] object-cover"
                />
                <div className="p-8">
                  <div className="flex items-center text-sm text-slate-400 mb-4">
                    <Calendar className="w-4 h-4 mr-2" />
                    {selectedPostData.date}
                  </div>
                  <h1 className="text-3xl font-bold text-white mb-8">
                    {selectedPostData.title}
                  </h1>
                  <div 
                    className="prose prose-lg prose-invert max-w-none"
                    dangerouslySetInnerHTML={{ 
                      __html: formatContent(selectedPostData.content) 
                    }}
                  />
                </div>
              </motion.div>
            </motion.div>
          ) : (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.6 }}
              style={{ scale: scaleProgress }}
            >
              <motion.div 
                className="bg-slate-800 rounded-lg overflow-hidden mb-12"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
              >
                <div className="aspect-w-16 aspect-h-9 relative">
                  <img
                    src={featuredPost.image}
                    alt="Featured Article"
                    className="object-cover w-full h-[400px]"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900 to-transparent" />
                </div>
                <div className="p-8">
                  <div className="flex items-center text-sm text-slate-400 mb-4">
                    <Calendar className="w-4 h-4 mr-2" />
                    {featuredPost.date}
                  </div>
                  <h2 className="text-2xl font-bold text-white mb-4">
                    {featuredPost.title}
                  </h2>
                  <p className="text-slate-300 mb-6">
                    {featuredPost.excerpt}
                  </p>
                  <motion.button 
                    onClick={() => setSelectedPost(featuredPost.id)}
                    className="inline-flex items-center text-blue-400 hover:text-blue-300 transition-colors text-sm"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    Read More <ArrowRight className="w-4 h-4 ml-2" />
                  </motion.button>
                </div>
              </motion.div>

              <motion.div 
                className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16"
                variants={{
                  show: {
                    transition: {
                      staggerChildren: 0.1
                    }
                  }
                }}
                initial="hidden"
                animate="show"
              >
                {otherPosts.map((post, index) => (
                  <motion.div
                    key={index}
                    className="bg-slate-800 rounded-lg overflow-hidden border border-slate-700"
                    variants={{
                      hidden: { opacity: 0, y: 20 },
                      show: { opacity: 1, y: 0 }
                    }}
                    transition={{ duration: 0.6 }}
                    whileHover={{ scale: 1.02 }}
                  >
                    <img
                      src={post.image}
                      alt={post.title}
                      className="w-full h-48 object-cover"
                    />
                    <div className="p-6">
                      <div className="flex items-center text-sm text-slate-400 mb-4">
                        <Calendar className="w-4 h-4 mr-2" />
                        {post.date}
                      </div>
                      <h3 className="text-xl font-semibold text-white mb-3">{post.title}</h3>
                      <p className="text-slate-300 mb-4">{post.excerpt}</p>
                      <motion.button 
                        onClick={() => setSelectedPost(post.id)}
                        className="inline-flex items-center text-blue-400 hover:text-blue-300 transition-colors text-sm"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                      >
                        Read More <ArrowRight className="w-4 h-4 ml-2" />
                      </motion.button>
                    </div>
                  </motion.div>
                ))}
              </motion.div>

              <motion.div 
                className="bg-slate-800 rounded-lg p-8 border border-slate-700"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
              >
                <div className="flex items-center justify-between">
                  <div className="flex-1">
                    <h2 className="text-2xl font-bold text-white mb-2">Stay Updated</h2>
                    <p className="text-slate-300">Get the latest insights and articles delivered to your inbox</p>
                  </div>
                  <div className="flex-1 max-w-md">
                    <div className="flex gap-4">
                      <input
                        type="email"
                        placeholder="Enter your email"
                        className="flex-1 px-4 py-2 bg-slate-900 border border-slate-700 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-blue-400"
                      />
                      <motion.button 
                        className="px-6 py-2 bg-blue-400 text-slate-900 rounded-lg font-semibold hover:bg-blue-300 transition-colors"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                      >
                        Subscribe
                      </motion.button>
                    </div>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}