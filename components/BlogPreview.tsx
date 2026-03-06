'use client'

import { motion } from 'framer-motion'
import { ArrowRight, Calendar } from 'lucide-react'

const blogs = [
  {
    title: 'How to Study in Germany for Free',
    excerpt: 'Germany offers tuition-free or low-cost education for international students. Learn the requirements and process.',
    date: 'Mar 15, 2024',
    category: 'Guides',
    image: '📚',
  },
  {
    title: 'Cheapest Universities in Canada',
    excerpt: 'Discover affordable Canadian universities without compromising on quality education and campus facilities.',
    date: 'Mar 12, 2024',
    category: 'Rankings',
    image: '🏫',
  },
  {
    title: 'UK Student Visa Requirements 2024',
    excerpt: 'Complete guide to UK student visa requirements including documents, fees, and processing timeline.',
    date: 'Mar 10, 2024',
    category: 'Visa Guides',
    image: '📋',
  },
  {
    title: 'IELTS Preparation Tips & Strategies',
    excerpt: 'Master the IELTS exam with proven strategies and tips from successful test takers and experts.',
    date: 'Mar 08, 2024',
    category: 'Preparation',
    image: '🎯',
  },
]

export default function BlogPreview() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 },
    },
  }

  return (
    <section id="blog" className="py-20 sm:py-32 px-4 sm:px-6 lg:px-8 bg-muted/30">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <motion.div 
          className="text-center mb-16 sm:mb-20"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 text-foreground">
            Resources & <span className="text-primary">Blog</span>
          </h2>
          <p className="text-foreground/60 text-lg max-w-2xl mx-auto">
            Expert insights and guides for your study abroad journey
          </p>
        </motion.div>

        {/* Blog Grid */}
        <motion.div 
          className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {blogs.map((blog) => (
            <motion.article
              key={blog.title}
              className="bg-card border border-border rounded-lg overflow-hidden hover:shadow-lg transition group cursor-pointer"
              variants={itemVariants}
              whileHover={{ y: -4 }}
            >
              {/* Image */}
              <div className="bg-accent/10 h-40 flex items-center justify-center text-5xl group-hover:scale-110 transition">
                {blog.image}
              </div>

              {/* Content */}
              <div className="p-6">
                <div className="flex items-center justify-between mb-3">
                  <span className="text-xs font-semibold text-primary bg-primary/10 px-2 py-1 rounded">
                    {blog.category}
                  </span>
                  <div className="flex items-center gap-1 text-xs text-foreground/60">
                    <Calendar className="w-3 h-3" />
                    {blog.date}
                  </div>
                </div>

                <h3 className="font-bold text-foreground mb-2 line-clamp-2 group-hover:text-primary transition">
                  {blog.title}
                </h3>
                <p className="text-sm text-foreground/60 mb-4 line-clamp-2">
                  {blog.excerpt}
                </p>

                <button className="flex items-center gap-2 text-primary font-semibold group-hover:gap-3 transition">
                  Read More
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </motion.article>
          ))}
        </motion.div>

        {/* View All Button */}
        <motion.div
          className="text-center mt-12"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          viewport={{ once: true }}
        >
          <button className="px-8 py-3 bg-primary text-primary-foreground rounded-lg font-semibold hover:opacity-90 transition inline-flex items-center gap-2">
            View All Articles
            <ArrowRight className="w-4 h-4" />
          </button>
        </motion.div>
      </div>
    </section>
  )
}
