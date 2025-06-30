import React from 'react';
import { Palette, Code, Users, Figma } from 'lucide-react';

const Skills: React.FC = () => {
  const skillCategories = [
    {
      icon: Figma,
      title: 'Design Tools',
      skills: ['Figma', 'Adobe Photoshop', 'Adobe Illustrator', 'Adobe XD', 'After Effects'],
      proficiency: [95, 90, 85, 88, 80]
    },
    {
      icon: Palette,
      title: 'Design Skills',
      skills: ['UI/UX Design', 'Wireframing', 'Prototyping', 'User Research', 'Design Systems'],
      proficiency: [95, 90, 92, 85, 88]
    },
    {
      icon: Users,
      title: 'User Experience',
      skills: ['User Research', 'Usability Testing', 'User Journey Mapping', 'Information Architecture'],
      proficiency: [85, 80, 88, 82]
    }
  ];

  return (
    <section id="skills" className="py-20 bg-gray-900 dark:bg-gray-900 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Skills & Expertise
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-orange-500 to-yellow-500 mx-auto rounded-full mb-6"></div>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Core competencies in UI/UX design and user experience research
          </p>
        </div>

        {/* Main Skills Grid */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {skillCategories.map((category, index) => (
            <div
              key={index}
              className="bg-gray-800 rounded-3xl p-8 shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:scale-105 border border-gray-700"
            >
              <div className="w-16 h-16 bg-gradient-to-r from-orange-500 to-yellow-500 rounded-2xl flex items-center justify-center mb-8 mx-auto">
                <category.icon className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-8 text-center">
                {category.title}
              </h3>
              <div className="space-y-6">
                {category.skills.map((skill, skillIndex) => (
                  <div key={skillIndex} className="space-y-3">
                    <div className="flex items-center justify-between">
                      <span className="text-gray-300 font-medium text-lg">
                        {skill}
                      </span>
                      <span className="text-orange-400 font-bold text-lg">
                        {category.proficiency?.[skillIndex] || 85}%
                      </span>
                    </div>
                    <div className="w-full bg-gray-700 rounded-full h-2">
                      <div 
                        className="bg-gradient-to-r from-orange-500 to-yellow-500 h-2 rounded-full transition-all duration-1000 shadow-sm"
                        style={{ width: `${category.proficiency?.[skillIndex] || 85}%` }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Certifications Section */}
        <div className="bg-gray-800 rounded-3xl p-8 border border-gray-700 mb-16">
          <div className="text-center mb-8">
            <h3 className="text-3xl font-bold text-white mb-4">
              Certifications & Learning
            </h3>
            <p className="text-gray-300">
              Continuous learning and professional development
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              'LottieFiles Animations',
              'UX Fundamentals: Practical Usability for Product Design',
              'UX & Design Thinking Quick Start',
              'Figma UI UX Design Essentials',
              'UX Design & User Experience Design Course - Theory Only'
            ].map((cert, index) => (
              <div
                key={index}
                className="p-6 bg-gray-700 rounded-2xl shadow-lg border border-gray-600 hover:shadow-xl transition-all duration-300 transform hover:scale-105 hover:bg-gray-650"
              >
                <div className="flex items-center gap-3">
                  <div className="w-3 h-3 bg-gradient-to-r from-orange-500 to-yellow-500 rounded-full flex-shrink-0"></div>
                  <p className="text-gray-200 font-medium leading-relaxed">
                    {cert}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Skills Summary */}
        <div className="text-center">
          <div className="grid md:grid-cols-3 gap-8">
            <div className="p-6 bg-gray-800 rounded-2xl border border-gray-700">
              <div className="text-4xl font-bold text-orange-400 mb-2">2.10+</div>
              <div className="text-gray-300 font-medium">Years Experience</div>
            </div>
            <div className="p-6 bg-gray-800 rounded-2xl border border-gray-700">
              <div className="text-4xl font-bold text-orange-400 mb-2">50+</div>
              <div className="text-gray-300 font-medium">Projects Completed</div>
            </div>
            <div className="p-6 bg-gray-800 rounded-2xl border border-gray-700">
              <div className="text-4xl font-bold text-orange-400 mb-2">5+</div>
              <div className="text-gray-300 font-medium">Certifications</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;