import React from 'react';
import { Calendar, Clock, Users, CheckCircle, Brain, Target, Lightbulb, Heart, FileText, Sparkles, MessageSquare, ArrowRight, GraduationCap, Users2, Presentation, Check } from 'lucide-react';
import { motion, useScroll, useTransform, useSpring } from 'framer-motion';

const fadeInUp = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6 }
};

const staggerChildren = {
  animate: {
    transition: {
      staggerChildren: 0.1
    }
  }
};

export function BookingPage() {
  const { scrollYProgress } = useScroll();
  
  const scaleProgress = useSpring(useTransform(scrollYProgress, [0, 1], [0.8, 1]), {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  const benefits = [
    {
      title: "Personalized Insights",
      description: "Get detailed, actionable insights about your cognitive patterns and behavioral tendencies"
    },
    {
      title: "Expert Guidance",
      description: (
        <>
          Work directly with a certified <span className="text-white">LIFEPRINT</span>
          <sup className="text-white">TM</sup> professional who will help interpret your results
        </>
      )
    },
    {
      title: "Action Plan",
      description: "Leave with a clear roadmap for leveraging your strengths and addressing growth areas"
    }
  ];

  return (
    <div className="min-h-screen bg-slate-900 pt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Who It's For Section */}
        <motion.div 
          className="text-center mb-12"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, margin: "-20%" }}
          transition={{ duration: 0.8 }}
          style={{ scale: scaleProgress }}
        >
          <motion.h2 
            className="text-3xl font-bold text-white mb-6"
            variants={fadeInUp}
            initial="initial"
            animate="animate"
          >
            Who It's For
          </motion.h2>
          <motion.p 
            className="text-xl mb-12"
            variants={fadeInUp}
            initial="initial"
            animate="animate"
            transition={{ delay: 0.2 }}
          >
            <span className="font-bold text-white">LIFEPRINT</span>
            <sup className="text-sm text-white">TM</sup> 
            <span className="text-blue-400">was created for people who think <span className="italic">DIFFERENTLY</span>.</span>
          </motion.p>
          
          <motion.div 
            className="grid md:grid-cols-2 lg:grid-cols-4 gap-8"
            variants={staggerChildren}
            initial="initial"
            animate="animate"
          >
            {[
              {
                icon: <Brain className="w-8 h-8 text-blue-400 mb-4" />,
                title: "Coaches & Therapists",
                description: "Who want deeper insight into clients"
              },
              {
                icon: <Target className="w-8 h-8 text-blue-400 mb-4" />,
                title: "Entrepreneurs & Leaders",
                description: "Navigating complexity and change"
              },
              {
                icon: <Lightbulb className="w-8 h-8 text-blue-400 mb-4" />,
                title: "Creatives & Visionaries",
                description: "Deep thinkers and innovators"
              },
              {
                icon: <Heart className="w-8 h-8 text-blue-400 mb-4" />,
                title: "Self-Discovery Seekers",
                description: "Ready to understand how they're wired and unlock their next level"
              }
            ].map((item, index) => (
              <motion.div 
                key={index}
                className="bg-slate-800/50 p-6 rounded-lg border border-slate-700"
                variants={fadeInUp}
                transition={{ delay: index * 0.1 }}
                whileHover={{ scale: 1.02 }}
              >
                {item.icon}
                <h3 className="text-lg font-semibold text-white mb-2">{item.title}</h3>
                <p className="text-slate-300">{item.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>

        {/* What You'll Get Section */}
        <motion.div 
          className="text-center mb-12"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, margin: "-20%" }}
          transition={{ duration: 0.8 }}
          style={{ scale: scaleProgress }}
        >
          <motion.h2 
            className="text-3xl font-bold text-white mb-6"
            variants={fadeInUp}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
          >
            What You'll Get
          </motion.h2>
          <motion.div 
            className="grid md:grid-cols-3 gap-8"
            variants={staggerChildren}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
          >
            {[
              {
                icon: <FileText className="w-8 h-8 text-blue-400 mb-4" />,
                title: "Visual Profile",
                description: "A personalized visual profile of your LIFEPRINT"
              },
              {
                icon: <Sparkles className="w-8 h-8 text-blue-400 mb-4" />,
                title: "Clear Insights",
                description: "Understanding of how you lead, learn, think, and adapt"
              },
              {
                icon: <MessageSquare className="w-8 h-8 text-blue-400 mb-4" />,
                title: "Personal Language",
                description: "Language for how you 'work' in personal and professional life"
              }
            ].map((item, index) => (
              <motion.div 
                key={index}
                className="bg-slate-800/50 p-6 rounded-lg border border-slate-700"
                variants={fadeInUp}
                transition={{ delay: index * 0.1 }}
                whileHover={{ scale: 1.02 }}
              >
                {item.icon}
                <h3 className="text-lg font-semibold text-white mb-2">{item.title}</h3>
                <p className="text-slate-300">{item.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>

        {/* Two Ways to Discover Section */}
        <motion.div 
          className="mb-12"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, margin: "-20%" }}
          transition={{ duration: 0.8 }}
          style={{ scale: scaleProgress }}
        >
          <motion.h2 
            className="text-3xl font-bold text-white text-center mb-8"
            variants={fadeInUp}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
          >
            TWO WAYS TO DISCOVER YOUR <span className="font-bold text-white">LIFEPRINT</span>
            <sup className="text-sm text-white">TM</sup>
          </motion.h2>
          
          <motion.div 
            className="grid lg:grid-cols-2 gap-8"
            variants={staggerChildren}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
          >
            {/* Self-Guided Option */}
            <motion.div 
              className="bg-slate-800 rounded-lg p-8 border border-slate-700"
              variants={fadeInUp}
              whileHover={{ scale: 1.02 }}
            >
              <h3 className="text-2xl font-bold text-white mb-6">Self-Guided Assessment</h3>
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div>
                    <h4 className="text-lg font-semibold text-white mb-2">What You Get</h4>
                    <p className="text-slate-300">6–8 category insights</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div>
                    <h4 className="text-lg font-semibold text-white mb-2">Time</h4>
                    <p className="text-slate-300">20–30 minutes (Online + Scored)</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div>
                    <h4 className="text-lg font-semibold text-white mb-2">Results</h4>
                    <p className="text-slate-300">Visual profile + Printable personalized takeaways</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div>
                    <h4 className="text-lg font-semibold text-white mb-2">Best For</h4>
                    <p className="text-slate-300">Individuals starting their journey</p>
                  </div>
                </div>
                <motion.button 
                  className="w-full px-6 py-3 bg-slate-700 text-white rounded-lg font-semibold hover:bg-slate-600 transition-colors flex items-center justify-center"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  Join The Beta Waitlist
                  <ArrowRight className="ml-2 w-5 h-5" />
                </motion.button>
              </div>
            </motion.div>

            {/* Expert-Led Option */}
            <motion.div 
              className="bg-slate-800 rounded-lg p-8 border border-slate-700"
              variants={fadeInUp}
              whileHover={{ scale: 1.02 }}
            >
              <h3 className="text-2xl font-bold text-white mb-6">Expert-Led Lifeprint Session</h3>
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div>
                    <h4 className="text-lg font-semibold text-white mb-2">What You Get</h4>
                    <p className="text-slate-300">Full 13-category cognitive blueprint</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div>
                    <h4 className="text-lg font-semibold text-white mb-2">Time</h4>
                    <p className="text-slate-300">60–90 minutes (live or virtual)</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div>
                    <h4 className="text-lg font-semibold text-white mb-2">Results</h4>
                    <p className="text-slate-300">Deep analysis + strategic growth map</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div>
                    <h4 className="text-lg font-semibold text-white mb-2">Best For</h4>
                    <p className="text-slate-300">Coaches, leaders, or people in transition</p>
                  </div>
                </div>
                <motion.button 
                  className="w-full px-6 py-3 bg-blue-400 text-slate-900 rounded-lg font-semibold hover:bg-blue-300 transition-colors flex items-center justify-center"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  Book Expert Session
                  <ArrowRight className="ml-2 w-5 h-5" />
                </motion.button>
              </div>
            </motion.div>
          </motion.div>
        </motion.div>

        {/* Benefits Section */}
        <motion.div 
          className="grid md:grid-cols-3 gap-8 mb-12"
          variants={staggerChildren}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true, margin: "-20%" }}
          style={{ scale: scaleProgress }}
        >
          {benefits.map((benefit, index) => (
            <motion.div 
              key={index}
              className="bg-slate-800/50 p-6 rounded-lg border border-slate-700"
              variants={fadeInUp}
              transition={{ delay: index * 0.1 }}
              whileHover={{ scale: 1.02 }}
            >
              <CheckCircle className="w-8 h-8 text-blue-400 mb-4" />
              <h3 className="text-lg font-semibold text-white mb-2">{benefit.title}</h3>
              <p className="text-slate-300">{benefit.description}</p>
            </motion.div>
          ))}
        </motion.div>

        {/* Educational Services Section */}
        <motion.section 
          className="py-12 bg-slate-800 rounded-lg"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, margin: "-20%" }}
          transition={{ duration: 0.8 }}
          style={{ scale: scaleProgress }}
        >
          <div className="px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-8">
              <h2 className="text-4xl font-bold text-white mb-4">Educational Services</h2>
              <p className="text-xl text-slate-300 max-w-3xl mx-auto">
                Transform your understanding of personal and leadership development through our comprehensive educational offerings, powered by <span className="text-white">LIFEPRINT<sup className="text-sm">TM</sup></span> methodology
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8 mb-8">
              <div className="bg-slate-900/50 p-8 rounded-lg border border-slate-700">
                <GraduationCap className="w-12 h-12 text-blue-400 mb-6" />
                <h3 className="text-2xl font-bold text-white mb-4">Seminars</h3>
                <p className="text-slate-300 mb-6">
                  Interactive sessions diving deep into cognitive patterns, leadership styles, and personal growth strategies
                </p>
                <ul className="space-y-3 mb-8">
                  {['Small group settings', 'Expert-led discussions', 'Practical exercises', 'Real-world applications'].map((feature, index) => (
                    <li key={index} className="flex items-center text-slate-300">
                      <Check className="w-5 h-5 text-blue-400 mr-2" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="bg-slate-900/50 p-8 rounded-lg border border-slate-700">
                <Users2 className="w-12 h-12 text-blue-400 mb-6" />
                <h3 className="text-2xl font-bold text-white mb-4">Classes</h3>
                <p className="text-slate-300 mb-6">
                  Structured learning experiences focused on developing specific aspects of personal and professional growth
                </p>
                <ul className="space-y-3 mb-8">
                  {['Comprehensive curriculum', 'Hands-on learning', 'Progress tracking', 'Personalized feedback'].map((feature, index) => (
                    <li key={index} className="flex items-center text-slate-300">
                      <Check className="w-5 h-5 text-blue-400 mr-2" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="bg-slate-900/50 p-8 rounded-lg border border-slate-700">
                <Presentation className="w-12 h-12 text-blue-400 mb-6" />
                <h3 className="text-2xl font-bold text-white mb-4">Workshops</h3>
                <p className="text-slate-300 mb-6">
                  Intensive, focused sessions designed to develop specific skills and insights through practical application
                </p>
                <ul className="space-y-3 mb-8">
                  {['Immersive experience', 'Skill development', 'Group dynamics', 'Action planning'].map((feature, index) => (
                    <li key={index} className="flex items-center text-slate-300">
                      <Check className="w-5 h-5 text-blue-400 mr-2" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="text-center">
              <p className="text-2xl text-white font-semibold mb-4">
                Want us to partner with you to create success in your organization?
              </p>
              <motion.a 
                href="https://lifeprint.getformly.app/wV84aP"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center px-8 py-4 text-lg font-semibold text-slate-900 bg-blue-400 rounded-lg hover:bg-blue-300 transition-colors"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                Book Your Educational Experience
                <ArrowRight className="ml-2 w-5 h-5" />
              </motion.a>
            </div>
          </div>
        </motion.section>
      </div>
    </div>
  );
}