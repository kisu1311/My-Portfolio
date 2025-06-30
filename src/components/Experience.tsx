import React from 'react';
import { Calendar, MapPin, Award, Building } from 'lucide-react';

const Experience: React.FC = () => {
  const experiences = [
    {
      title: 'UI/UX Designer',
      company: 'Mindarray Systems Pvt. Ltd.',
      location: 'Ahmedabad',
      duration: 'July 2022 - Present',
      type: 'Full-time',
      description: 'Product Designer with 2.10 years of experience creating and launching innovative products. Skilled in user research, rapid prototyping and product launch strategies.',
      achievements: [
        'Created and launched multiple innovative products',
        'Conducted comprehensive user research studies',
        'Developed rapid prototyping workflows',
        'Implemented successful product launch strategies',
        'Collaborated with cross-functional teams'
      ],
      current: true
    }
  ];

  const education = [
    {
      degree: 'MSC (CA & IT)',
      institution: 'K.S. School of Business Management',
      duration: '2017-2022',
      type: 'Master\'s Degree'
    },
    {
      degree: 'Higher Secondary',
      institution: 'Super Higher Secondary School, Gujarat Higher Secondary Education Board',
      duration: '2017',
      type: 'Higher Secondary'
    },
    {
      degree: 'Secondary Education',
      institution: 'Hosanna Mission High School, Gujarat Secondary Education Board',
      duration: '2015',
      type: 'Secondary'
    }
  ];

  const personalInfo = [
    { label: 'Location', value: 'Ahmedabad, Gujarat, India' },
    { label: 'Languages', value: 'Gujarati, Hindi, English' },
    { label: 'Hobbies', value: 'Playing Games, Traveling, Drawing' },
    { label: 'Relationship', value: 'Single' },
    { label: 'Nationality', value: 'Indian' }
  ];

  return (
    <section id="experience" className="py-20 bg-gray-50 dark:bg-gray-800 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
            Experience & Education
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-orange-500 to-yellow-500 mx-auto rounded-full mb-6"></div>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            My professional journey and educational background
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-12">
          {/* Experience Timeline */}
          <div className="lg:col-span-2">
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-8">Professional Experience</h3>
            <div className="relative">
              {/* Timeline line */}
              <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-orange-500 to-yellow-500"></div>
              
              <div className="space-y-12">
                {experiences.map((exp, index) => (
                  <div key={index} className="relative flex items-start">
                    {/* Timeline dot */}
                    <div className={`absolute left-6 w-4 h-4 rounded-full border-4 border-white dark:border-gray-800 ${
                      exp.current 
                        ? 'bg-gradient-to-r from-orange-500 to-yellow-500 animate-pulse' 
                        : 'bg-gray-300 dark:bg-gray-600'
                    }`}></div>
                    
                    <div className="ml-16 bg-white dark:bg-gray-900 rounded-2xl p-6 shadow-lg border border-gray-200 dark:border-gray-700 w-full">
                      {exp.current && (
                        <div className="inline-flex items-center gap-2 px-3 py-1 bg-gradient-to-r from-orange-500 to-yellow-500 text-white text-sm font-semibold rounded-full mb-4">
                          <div className="w-2 h-2 bg-white rounded-full animate-pulse"></div>
                          Current Role
                        </div>
                      )}
                      
                      <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
                        {exp.title}
                      </h3>
                      
                      <div className="flex flex-wrap gap-4 mb-4 text-gray-600 dark:text-gray-400">
                        <div className="flex items-center gap-2">
                          <Building className="w-4 h-4" />
                          <span className="font-semibold">{exp.company}</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <MapPin className="w-4 h-4" />
                          <span>{exp.location}</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <Calendar className="w-4 h-4" />
                          <span>{exp.duration}</span>
                        </div>
                      </div>
                      
                      <div className="inline-block px-3 py-1 bg-orange-100 dark:bg-orange-900/30 text-orange-700 dark:text-orange-300 rounded-full text-sm font-medium mb-4">
                        {exp.type}
                      </div>
                      
                      <p className="text-gray-700 dark:text-gray-300 mb-4 leading-relaxed">
                        {exp.description}
                      </p>
                      
                      <div className="space-y-2">
                        <h4 className="font-semibold text-gray-900 dark:text-white mb-3">
                          Key Achievements:
                        </h4>
                        <ul className="space-y-2">
                          {exp.achievements.map((achievement, achIndex) => (
                            <li key={achIndex} className="flex items-start gap-3">
                              <div className="w-2 h-2 bg-gradient-to-r from-orange-500 to-yellow-500 rounded-full mt-2 flex-shrink-0"></div>
                              <span className="text-gray-600 dark:text-gray-300">{achievement}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Education Section */}
            <div className="mt-16">
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-8">Education</h3>
              <div className="space-y-6">
                {education.map((edu, index) => (
                  <div key={index} className="bg-white dark:bg-gray-900 rounded-2xl p-6 shadow-lg border border-gray-200 dark:border-gray-700">
                    <div className="flex items-start justify-between mb-4">
                      <div>
                        <h4 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
                          {edu.degree}
                        </h4>
                        <p className="text-gray-600 dark:text-gray-300 mb-2">
                          {edu.institution}
                        </p>
                        <div className="inline-block px-3 py-1 bg-orange-100 dark:bg-orange-900/30 text-orange-700 dark:text-orange-300 rounded-full text-sm font-medium">
                          {edu.type}
                        </div>
                      </div>
                      <div className="text-right">
                        <div className="flex items-center gap-2 text-gray-500 dark:text-gray-400">
                          <Calendar className="w-4 h-4" />
                          <span className="text-sm">{edu.duration}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Personal Information & Portfolio Links */}
          <div className="space-y-8">
            <div className="bg-white dark:bg-gray-900 rounded-2xl p-6 shadow-lg border border-gray-200 dark:border-gray-700">
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6 flex items-center gap-3">
                <Award className="w-6 h-6 text-orange-500" />
                Personal Info
              </h3>
              <div className="space-y-4">
                {personalInfo.map((info, index) => (
                  <div key={index} className="flex justify-between items-start">
                    <span className="text-gray-600 dark:text-gray-400 font-medium">
                      {info.label}:
                    </span>
                    <span className="text-gray-900 dark:text-white text-right max-w-[60%]">
                      {info.value}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-white dark:bg-gray-900 rounded-2xl p-6 shadow-lg border border-gray-200 dark:border-gray-700">
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
                Portfolio Links
              </h3>
              <div className="space-y-4">
                {[
                  { name: 'Behance', url: 'www.behance.net' },
                  { name: 'Dribbble', url: 'dribbble.com' },
                  { name: 'Pinterest', url: 'in.pinterest.com' },
                  { name: 'LinkedIn', url: 'www.linkedin.com' }
                ].map((link, index) => (
                  <a
                    key={index}
                    href={`https://${link.url}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block p-4 bg-gradient-to-r from-orange-50 to-yellow-50 dark:from-orange-900/20 dark:to-yellow-900/20 rounded-lg border border-orange-100 dark:border-orange-800 hover:shadow-md transition-all duration-200"
                  >
                    <div className="flex items-center justify-between">
                      <span className="text-gray-700 dark:text-gray-300 font-medium">{link.name}</span>
                      <span className="text-orange-600 dark:text-orange-400 text-sm">{link.url}</span>
                    </div>
                  </a>
                ))}
              </div>
            </div>

            <div className="bg-gradient-to-br from-orange-500 to-yellow-500 rounded-2xl p-6 text-white">
              <h3 className="text-2xl font-bold mb-4">Ready to collaborate?</h3>
              <p className="mb-6 opacity-90">
                Let's discuss how we can create amazing user experiences together.
              </p>
              <button className="w-full py-3 bg-white text-orange-600 rounded-lg font-semibold hover:bg-gray-100 transition-colors duration-200">
                Get In Touch
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;