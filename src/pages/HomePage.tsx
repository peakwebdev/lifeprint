import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Grid2x2 as Grid, Brain, ArrowRight, CheckCircle, FlaskRound as Flask, Target, Users, Award, Quote, AlertTriangle, Brain as BrainIcon, Frown, LineChart, Heart, Puzzle, Check, X, Flame, MessageCircle, Sprout, Infinity, Palette, UserCog, HandHeart } from 'lucide-react';
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

export function HomePage() {
  const navigate = useNavigate();
  const { scrollYProgress } = useScroll();
  
  const scaleProgress = useSpring(useTransform(scrollYProgress, [0, 1], [0.8, 1]), {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  return (
    <div className="min-h-screen bg-slate-900">
      {/* Hero Section */}
      <div className="relative pt-12">
        <div className="absolute inset-0 bg-grid-slate-800 [mask-image:linear-gradient(0deg,transparent,black)]" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-16 text-center">
          <motion.h1 
            className="text-4xl sm:text-5xl lg:text-7xl font-bold text-white mb-6"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            Beyond Personality Types: A System for Personal and Professional Growth
          </motion.h1>
          <motion.p 
            className="text-xl sm:text-2xl text-blue-400 font-semibold mb-8 max-w-4xl mx-auto"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <span className="text-white">LIFEPRINT<sup className="text-sm">TM</sup></span>: Your personalized cognitive assessment system. Discover how you think, decide, adapt, and grow with <span className="text-white">LIFEPRINT<sup className="text-sm">TM</sup></span>—your personalized cognitive and behavioral blueprint
          </motion.p>
          <motion.p 
            className="max-w-3xl mx-auto text-lg sm:text-xl text-slate-300 mb-6"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            Experience a next-generation, expert-guided assessment that maps your mindset and performance. 
            Built for visionary coaches, leaders, and deep-thinkers ready to elevate to the next level.
          </motion.p>
          <motion.button 
            onClick={() => navigate('/book')}
            className="inline-flex items-center px-6 py-3 text-lg font-semibold text-slate-900 bg-blue-400 rounded-lg hover:bg-blue-300 transition-colors"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
          >
            I Want To Start Now!
            <ArrowRight className="ml-2 w-5 h-5" />
          </motion.button>
          <motion.p 
            className="mt-4 text-sm text-slate-400"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.8 }}
          >
            Limited spots available
          </motion.p>
        </div>
      </div>

      {/* Problems with Personality Tests Section */}
      <motion.section 
        className="py-15 pt-24 bg-slate-800 text-white"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true, margin: "-20%" }}
        transition={{ duration: 0.8 }}
        style={{ scale: scaleProgress }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.h2 
            className="text-4xl sm:text-5xl lg:text-6xl font-bold text-center mb-6"
            variants={fadeInUp}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
          >
            PERSONALITY TESTS SUCK!
          </motion.h2>
          
          <motion.p 
            className="text-xl text-center text-slate-300 mb-9"
            variants={fadeInUp}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
          >
            Most personality tests fall into <span className="text-blue-400 font-semibold">one of two traps:</span>
          </motion.p>

          <motion.div 
            className="grid md:grid-cols-2 gap-6 mb-12"
            variants={staggerChildren}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true, margin: "-20%" }}
          >
            <div className="bg-slate-900/50 p-6 rounded-lg border border-slate-700">
              <div className="flex items-start gap-4">
                <div className="bg-red-500/10 p-3 rounded-lg">
                  <AlertTriangle className="w-6 h-6 text-red-500" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-3">Trap #1: Oversimplified Categories</h3>
                  <p className="text-slate-300">They oversimplify people into rigid categories ("You're an ENFP" or "You're high in Conscientiousness"). These results feel limiting and fail to recognize the fluidity of human behavior.</p>
                </div>
              </div>
            </div>
            <div className="bg-slate-900/50 p-6 rounded-lg border border-slate-700">
              <div className="flex items-start gap-4">
                <div className="bg-red-500/10 p-3 rounded-lg">
                  <BrainIcon className="w-6 h-6 text-red-500" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-3">Trap #2: No Real-Life Applications</h3>
                  <p className="text-slate-300">What do you actually do with the knowledge that you're an INTJ or high in Openness? Most tests lack clear strategies for growth, leadership, decision-making, or adaptability.</p>
                </div>
              </div>
            </div>
          </motion.div>

          <h3 className="text-3xl font-bold text-center mb-9">THEN THEY CONTINUE TO SUCK BY...</h3>

          <div className="grid md:grid-cols-3 gap-6 mb-12">
            {[
              {
                icon: <Frown className="w-6 h-6 text-orange-400" />,
                title: "Being Descriptive, Not Explanatory",
                description: "They describe personality traits but fail to explain WHY people have these traits. They don't account for childhood experiences, trauma, or subconscious influences on personality."
              },
              {
                icon: <LineChart className="w-6 h-6 text-orange-400" />,
                title: "Weak in Predicting Behavior",
                description: "While they can correlate with general trends, they don't strongly predict individual behavior in specific situations. Two people with similar traits may behave very differently."
              },
              {
                icon: <Heart className="w-6 h-6 text-orange-400" />,
                title: "The Neuroticism Problem",
                description: "High Neuroticism is often framed negatively, ignoring that these individuals may be more empathetic, better at anticipating risks, and more creative."
              },
              {
                icon: <Target className="w-6 h-6 text-orange-400" />,
                title: "Lacking Context & Flexibility",
                description: "They assume trait consistency, but people behave differently in different situations. An 'introvert' may be outgoing with friends but reserved at work."
              },
              {
                icon: <Brain className="w-6 h-6 text-orange-400" />,
                title: "Ignoring Life Experiences",
                description: "They assume personality is mostly stable, ignoring changes from trauma, major life events, therapy, or personal development. They don't measure adaptability or resilience."
              },
              {
                icon: <Puzzle className="w-6 h-6 text-orange-400" />,
                title: "Missing Neurodivergence",
                description: "They don't effectively measure conditions like ADHD, Autism, or other neurological differences that significantly impact personality and behavior."
              }
            ].map((problem, index) => (
              <motion.div 
                key={index} 
                className="bg-slate-900/50 p-6 rounded-lg border border-slate-700"
                variants={fadeInUp}
                initial="initial"
                whileInView="animate"
                viewport={{ once: true }}
              >
                <div className="bg-orange-400/10 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
                  {problem.icon}
                </div>
                <h3 className="text-lg font-semibold mb-3">{problem.title}</h3>
                <p className="text-slate-300 text-sm">{problem.description}</p>
              </motion.div>
            ))}
          </div>

          <div className="mb-12">
            <h3 className="text-2xl font-bold text-white text-center mb-6">
              The Top Personality Tests Compared
            </h3>
            <p className="text-lg text-slate-300 text-center mb-9">
              See how LIFEPRINT<sup className="text-xs">TM</sup> stacks up against traditional personality assessments
            </p>
            <div className="overflow-x-auto">
              <table className="w-full border-collapse bg-slate-900 rounded-lg overflow-hidden">
                <thead>
                  <tr className="bg-slate-800">
                    <th className="px-6 py-4 text-left text-lg font-semibold border-b border-slate-700">Feature</th>
                    <th className="px-6 py-4 text-center text-lg font-semibold border-b border-slate-700">LIFEPRINT<sup className="text-xs">TM</sup></th>
                    <th className="px-6 py-4 text-center text-lg font-semibold border-b border-slate-700">MBTI</th>
                    <th className="px-6 py-4 text-center text-lg font-semibold border-b border-slate-700">Big Five</th>
                    <th className="px-6 py-4 text-center text-lg font-semibold border-b border-slate-700">Enneagram</th>
                    <th className="px-6 py-4 text-center text-lg font-semibold border-b border-slate-700">StrengthsFinder</th>
                    <th className="px-6 py-4 text-center text-lg font-semibold border-b border-slate-700">DiSC</th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    {
                      feature: "Goes beyond static personality types",
                      scores: [false, false, false, false, false]
                    },
                    {
                      feature: "Shows how you think, decide, and grow",
                      scores: [false, false, false, true, false]
                    },
                    {
                      feature: "Incorporates cognitive science & NLP",
                      scores: [false, true, false, false, false]
                    },
                    {
                      feature: "Helps with leadership, stress, and resilience",
                      scores: [false, false, false, true, true]
                    },
                    {
                      feature: "Offers real-world applications for personal growth",
                      scores: [false, true, false, true, true]
                    }
                  ].map((row, index) => (
                    <motion.tr 
                      key={index} 
                      className="border-b border-slate-700 last:border-0"
                      variants={fadeInUp}
                      initial="initial"
                      whileInView="animate"
                      viewport={{ once: true }}
                    >
                      <td className="px-6 py-4 text-left">{row.feature}</td>
                      <td className="px-6 py-4 text-center">
                        <Check className="w-6 h-6 text-green-400 mx-auto" />
                      </td>
                      {row.scores.map((score, scoreIndex) => (
                        <td key={scoreIndex} className="px-6 py-4 text-center">
                          {score ? (
                            <Check className="w-6 h-6 text-green-400 mx-auto" />
                          ) : (
                            <X className="w-6 h-6 text-red-400 mx-auto" />
                          )}
                        </td>
                      ))}
                    </motion.tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </motion.section>

      {/* What is LifePrint Section */}
      <motion.section 
        className="py-15 bg-slate-900"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true, margin: "-20%" }}
        transition={{ duration: 0.8 }}
        style={{ scale: scaleProgress }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-9 items-center">
            <motion.div
              variants={fadeInUp}
              initial="initial"
              whileInView="animate"
              viewport={{ once: true }}
            >
              <h2 className="text-3xl font-bold text-white mb-6">What is LIFEPRINT<sup className="text-sm">TM</sup>?</h2>
              <p className="text-lg text-slate-300 mb-4">
                LIFEPRINT<sup className="text-xs">TM</sup> is a pioneering personal and leadership assessment platform – think of it as the 
                <span className="font-semibold text-blue-400"> operating system for your human potential</span>. 
                It evaluates how you think and behave across a full spectrum of situations, providing a 
                comprehensive dive into your full range of performance.
              </p>
              <p className="text-lg text-slate-300">
                Unlike one-dimensional personality tests, LIFEPRINT<sup className="text-xs">TM</sup> combines advanced behavioral science 
                with real-world analytics to map out your mindsets, motivations, and patterns. The result 
                is a clear blueprint of "what makes you, you,\" which you can leverage to grow and excel.
              </p>
            </motion.div>
            <motion.div 
              className="relative"
              variants={fadeInUp}
              initial="initial"
              whileInView="animate"
              viewport={{ once: true }}
            >
              <div className="absolute inset-0 bg-grid-blue-900 opacity-50" />
              <div className="relative bg-slate-800/80 backdrop-blur-sm rounded-2xl p-8 border border-slate-700">
                <Brain className="w-16 h-16 text-blue-400 mb-6" />
                <h3 className="text-xl font-semibold text-white mb-4">
                  Evaluate. Enhance. Evolve.
                </h3>
                <p className="text-slate-300">
                  LIFEPRINT<sup className="text-xs">TM</sup> helps you evaluate mindset, enhance performance, and evolve talent – starting with yourself.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </motion.section>

      {/* Why LifePrint is Different */}
      <motion.section 
        className="py-15 bg-slate-800"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true, margin: "-20%" }}
        transition={{ duration: 0.8 }}
        style={{ scale: scaleProgress }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.h2 
            className="text-3xl font-bold text-white text-center mb-9"
            variants={fadeInUp}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
          >
            Why LIFEPRINT<sup className="text-sm">TM</sup>? – A New Approach vs. Traditional Assessments
          </motion.h2>
          <motion.div 
            className="grid md:grid-cols-2 gap-6 mb-12"
            variants={staggerChildren}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
          >
            {[
              {
                icon: <Grid className="w-8 h-8 text-blue-400" />,
                title: "Holistic, 360° View",
                description: "Get a full-spectrum profile covering mindset, behaviors, emotional drivers, and performance tendencies – a multi-dimensional view rather than a flat label."
              },
              {
                icon: <Flask className="w-8 h-8 text-blue-400" />,
                title: "Data-Driven & Science-Backed",
                description: "Built on cutting-edge behavioral science and predictive analytics, continuously refined with data. Not pop psychology – it's an evolving, evidence-based system."
              },
              {
                icon: <Target className="w-8 h-8 text-blue-400" />,
                title: "Dynamic & Actionable",
                description: "Identify which habits to leverage for growth, and which blind spots to address. LIFEPRINT™ doesn't just describe you – it helps you improve you."
              },
              {
                icon: <Users className="w-8 h-8 text-blue-400" />,
                title: "Expert-Guided Experience",
                description: "A trained coach walks you through results and ensures you truly understand and apply them, something a printout can't do."
              }
            ].map((feature, index) => (
              <motion.div 
                key={index} 
                className="bg-slate-900 rounded-lg p-6 shadow-sm border border-slate-700"
                variants={fadeInUp}
              >
                <div className="mb-4">{feature.icon}</div>
                <h3 className="text-xl font-semibold text-white mb-3">{feature.title}</h3>
                <p className="text-slate-300">{feature.description}</p>
              </motion.div>
            ))}
          </motion.div>

          <motion.div 
            className="mt-15"
            variants={fadeInUp}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
          >
            <h3 className="text-2xl font-bold text-white text-center mb-6">
              The LIFEPRINT<sup className="text-sm">TM</sup> Dimensions – What We Measure
            </h3>
            <div className="overflow-x-auto">
              <table className="w-full border-collapse bg-slate-900 rounded-lg overflow-hidden">
                <thead>
                  <tr className="bg-slate-800">
                    <th className="px-6 py-4 text-left text-lg font-semibold text-white border-b border-slate-700">Category</th>
                    <th className="px-6 py-4 text-left text-lg font-semibold text-white border-b border-slate-700">Sub-Dimensions Measured</th>
                    <th className="px-6 py-4 text-left text-lg font-semibold text-white border-b border-slate-700">Why It's Included</th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    {
                      icon: <Brain className="w-6 h-6 text-blue-400" />,
                      category: "Cognitive Processing & Decision-Making",
                      dimensions: "Big-picture vs. Detail, Logic vs. Emotion",
                      reason: "Foundational to how individuals interpret and respond to information"
                    },
                    {
                      icon: <Flame className="w-6 h-6 text-orange-400" />,
                      category: "Motivation & Behavioral Drivers",
                      dimensions: "Toward/Away, Intrinsic/Extrinsic, Challenge Orientation",
                      reason: "Core to understanding personal drive"
                    },
                    {
                      icon: <MessageCircle className="w-6 h-6 text-purple-400" />,
                      category: "Communication Styles",
                      dimensions: "Direct vs. Indirect, Expressive vs. Reserved",
                      reason: "Shapes how we connect and collaborate"
                    },
                    {
                      icon: <Sprout className="w-6 h-6 text-green-400" />,
                      category: "Emotional Intelligence & Resilience",
                      dimensions: "Regulation, Empathy, Recovery Speed",
                      reason: "Critical for emotional adaptability and growth"
                    },
                    {
                      icon: <Infinity className="w-6 h-6 text-cyan-400" />,
                      category: "Cognitive Flexibility",
                      dimensions: "Adaptability, Perspective-Shifting, Creativity",
                      reason: "Reflects ability to navigate change and complexity"
                    },
                    {
                      icon: <Palette className="w-6 h-6 text-pink-400" />,
                      category: "Creativity & Innovation",
                      dimensions: "Structure vs. Flow, Boldness, Idea Generation",
                      reason: "Key to problem-solving and innovation"
                    },
                    {
                      icon: <UserCog className="w-6 h-6 text-yellow-400" />,
                      category: "Stress Response & Recovery",
                      dimensions: "Reactivity, Recovery Speed, Emotional Containment",
                      reason: "Helps gauge response under pressure (Optional)"
                    },
                    {
                      icon: <HandHeart className="w-6 h-6 text-red-400" />,
                      category: "Social & Relational Dynamics",
                      dimensions: "Social Energy, Relational Depth, Adaptability",
                      reason: "Useful in team/relationship dynamics (Optional)"
                    }
                  ].map((row, index) => (
                    <motion.tr 
                      key={index} 
                      className="border-b border-slate-700 last:border-0 hover:bg-slate-800/50 transition-colors"
                      variants={fadeInUp}
                    >
                      <td className="px-6 py-4">
                        <div className="flex items-center gap-3">
                          {row.icon}
                          <span className="font-medium text-white">{row.category}</span>
                        </div>
                      </td>
                      <td className="px-6 py-4 text-slate-300">{row.dimensions}</td>
                      <td className="px-6 py-4 text-slate-300">{row.reason}</td>
                    </motion.tr>
                  ))}
                </tbody>
              </table>
            </div>
          </motion.div>
        </div>
      </motion.section>

      {/* Testimonials */}
      <motion.section 
        className="py-15 bg-slate-900"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true, margin: "-20%" }}
        transition={{ duration: 0.8 }}
        style={{ scale: scaleProgress }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.h2 
            className="text-3xl font-bold text-white text-center mb-9"
            variants={fadeInUp}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
          >
            What Early Users Are Saying
          </motion.h2>
          <motion.div 
            className="grid md:grid-cols-3 gap-6"
            variants={staggerChildren}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
          >
            {[
              {
                quote: "The LIFEPRINT™ Expert-Led assessment was a game-changer. I've done Myers-Briggs and StrengthsFinder, but this went deeper. The coach's guidance helped me see blind spots I never noticed before.",
                author: "Jamie L.",
                role: "Leadership Coach"
              },
              {
                quote: "As a startup CEO, I'm short on time. The Expert-Led LIFEPRINT™ session got straight to what I needed to improve. In one hour I understood my stress triggers and my strengths in a whole new way.",
                author: "Alex P.",
                role: "CEO & Deep-Thinker"
              },
              {
                quote: "I was skeptical of 'another personality test', but LIFEPRINT™ is different. The blueprint analogy is perfect – it felt like I finally got the blueprint of me.",
                author: "Morgan S.",
                role: "Team Leader"
              }
            ].map((testimonial, index) => (
              <motion.div 
                key={index} 
                className="relative bg-slate-800 rounded-lg p-6 border border-slate-700"
                variants={fadeInUp}
              >
                <Quote className="w-8 h-8 text-blue-400/20 absolute top-4 right-4" />
                <p className="text-slate-300 mb-4 italic">{testimonial.quote}</p>
                <div>
                  <p className="font-semibold text-white">{testimonial.author}</p>
                  <p className="text-sm text-slate-400">{testimonial.role}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </motion.section>

      {/* Final CTA */}
      <motion.section 
        className="py-15 bg-slate-950"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true, margin: "-20%" }}
        transition={{ duration: 0.8 }}
        style={{ scale: scaleProgress }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.h2 
            className="text-3xl font-bold text-white mb-6"
            variants={fadeInUp}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
          >
            Ready to Elevate Your Potential?
          </motion.h2>
          <motion.p 
            className="text-xl text-slate-300 mb-6 max-w-2xl mx-auto"
            variants={fadeInUp}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
          >
            Take the first step towards understanding and maximizing your unique cognitive blueprint.
          </motion.p>
          <motion.button 
            onClick={() => navigate('/book')}
            className="px-8 py-4 bg-blue-400 text-slate-900 rounded-lg font-semibold hover:bg-blue-300 transition-colors"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            variants={fadeInUp}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
          >
            Book an Expert Session
          </motion.button>
        </div>
      </motion.section>
    </div>
  );
}