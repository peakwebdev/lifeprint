import React from 'react';
import { Link } from 'react-router-dom';
import { Brain } from 'lucide-react';
import { motion, useScroll, useTransform, useSpring } from 'framer-motion';

export function Navigation() {
  const { scrollYProgress } = useScroll();
  
  const scaleProgress = useSpring(useTransform(scrollYProgress, [0, 1], [0.8, 1]), {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  return (
    <nav className="fixed top-0 w-full bg-slate-900/80 backdrop-blur-sm z-50 border-b border-slate-800">
      <motion.div 
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"
        style={{ scale: scaleProgress }}
      >
        <div className="flex justify-between h-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <Link to="/" className="flex items-center space-x-2">
              <motion.div
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
              >
                <Brain className="w-8 h-8 text-blue-400" />
              </motion.div>
              <span className="text-xl font-black tracking-wider text-white">LIFEPRINT<sup className="text-xs tracking-normal">TM</sup></span>
            </Link>
          </motion.div>
          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="flex items-center space-x-6"
          >
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Link to="/media" className="text-slate-300 hover:text-blue-400 transition-colors">
                Blog
              </Link>
            </motion.div>
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Link to="/book" className="text-slate-300 hover:text-blue-400 transition-colors">
                Let's Do This!
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </motion.div>
    </nav>
  );
}