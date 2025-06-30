import React from 'react';
import { ExternalLink, ArrowRight } from 'lucide-react';

const Portfolio: React.FC = () => {
  const projects = [
    {
      title: 'E-commerce Mobile App',
      category: 'Mobile UI/UX Design',
      description: 'Complete mobile app design for an e-commerce platform focusing on user-friendly shopping experience with intuitive navigation and seamless checkout process.',
      image: 'https://images.pexels.com/photos/3184287/pexels-photo-3184287.jpeg?auto=compress&cs=tinysrgb&w=800',
      tags: ['Mobile Design', 'E-commerce', 'User Research', 'Prototyping'],
      featured: true
    },
    {
      title: 'SaaS Dashboard Design',
      category: 'Web Application',
      description: 'Modern dashboard interface for a SaaS platform with focus on data visualization and user workflow optimization.',
      image: 'https://images.pexels.com/photos/3184339/pexels-photo-3184339.jpeg?auto=compress&cs=tinysrgb&w=800',
      tags: ['Dashboard Design', 'Data Visualization', 'SaaS', 'Web UI']
    },
    {
      title: 'Banking App Interface',
      category: 'FinTech Design',
      description: 'Secure and intuitive banking application interface with emphasis on accessibility and user trust.',
      image: 'https://images.pexels.com/photos/3184292/pexels-photo-3184292.jpeg?auto=compress&cs=tinysrgb&w=800',
      tags: ['FinTech', 'Mobile Banking', 'Security', 'Accessibility']
    },
    {
      title: 'Food Delivery App',
      category: 'Mobile Application',
      description: 'Complete UX/UI design for a food delivery platform with focus on quick ordering and real-time tracking.',
      image: 'https://images.pexels.com/photos/3184360/pexels-photo-3184360.jpeg?auto=compress&cs=tinysrgb&w=800',
      tags: ['Food Tech', 'Mobile App', 'Real-time', 'User Journey']
    },
    {
      title: 'Healthcare Platform',
      category: 'Healthcare Design',
      description: 'Patient-centered healthcare platform design focusing on appointment booking and medical record management.',
      image: 'https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=800',
      tags: ['Healthcare', 'Patient Experience', 'Medical UI', 'Accessibility']
    },
    {
      title: 'Learning Management System',
      category: 'EdTech Platform',
      description: 'Educational platform interface design with focus on student engagement and course management.',
      image: 'https://images.pexels.com/photos/3184325/pexels-photo-3184325.jpeg?auto=compress&cs=tinysrgb&w=800',
      tags: ['EdTech', 'Learning Platform', 'Student UX', 'Course Design']
    }
  ];

  return (
    <section id="portfolio" className="py-20 bg-white dark:bg-gray-900 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
            Portfolio
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-orange-500 to-yellow-500 mx-auto rounded-full mb-6"></div>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            A selection of projects that showcase my approach to solving complex design challenges
          </p>
        </div>

        <div className="grid gap-8">
          {/* Featured Project */}
          {projects.filter(p => p.featured).map((project, index) => (
            <div
              key={index}
              className="bg-gradient-to-r from-orange-50 to-yellow-50 dark:from-orange-900/20 dark:to-yellow-900/20 rounded-3xl p-8 shadow-2xl border border-orange-100 dark:border-orange-800"
            >
              <div className="grid lg:grid-cols-2 gap-8 items-center">
                <div className="order-2 lg:order-1">
                  <div className="flex items-center gap-2 mb-4">
                    <span className="px-3 py-1 bg-gradient-to-r from-orange-500 to-yellow-500 text-white text-sm font-semibold rounded-full">
                      Featured Project
                    </span>
                    <span className="text-gray-600 dark:text-gray-400 text-sm">
                      {project.category}
                    </span>
                  </div>
                  <h3 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
                    {project.title}
                  </h3>
                  <p className="text-lg text-gray-600 dark:text-gray-300 mb-6 leading-relaxed">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.tags.map((tag, tagIndex) => (
                      <span
                        key={tagIndex}
                        className="px-3 py-1 bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300 rounded-full text-sm border border-gray-200 dark:border-gray-700"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                  <button className="flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-orange-500 to-yellow-500 text-white rounded-full font-semibold hover:from-orange-600 hover:to-yellow-600 transition-all duration-200 transform hover:scale-105 shadow-lg">
                    View Case Study
                    <ArrowRight className="w-5 h-5" />
                  </button>
                </div>
                <div className="order-1 lg:order-2">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="rounded-2xl shadow-2xl object-cover w-full h-80"
                  />
                </div>
              </div>
            </div>
          ))}

          {/* Regular Projects Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mt-8">
            {projects.filter(p => !p.featured).map((project, index) => (
              <div
                key={index}
                className="bg-white dark:bg-gray-800 rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:scale-105 border border-gray-200 dark:border-gray-700 group"
              >
                <div className="relative overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <button className="p-2 bg-white dark:bg-gray-800 rounded-full shadow-lg hover:shadow-xl">
                      <ExternalLink className="w-5 h-5 text-gray-700 dark:text-gray-300" />
                    </button>
                  </div>
                </div>
                <div className="p-6">
                  <div className="text-sm text-orange-600 dark:text-orange-400 font-semibold mb-2">
                    {project.category}
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">
                    {project.title}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300 mb-4 line-clamp-3">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {project.tags.slice(0, 2).map((tag, tagIndex) => (
                      <span
                        key={tagIndex}
                        className="px-2 py-1 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded text-xs"
                      >
                        {tag}
                      </span>
                    ))}
                    {project.tags.length > 2 && (
                      <span className="px-2 py-1 text-gray-500 dark:text-gray-400 text-xs">
                        +{project.tags.length - 2} more
                      </span>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;