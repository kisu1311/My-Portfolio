import React from 'react';
import { Heart, Users, Lightbulb, Target } from 'lucide-react';

const About: React.FC = () => {
  const values = [
    {
      icon: Heart,
      title: 'User-Centered',
      description: 'Every design decision is rooted in user research and empathy.'
    },
    {
      icon: Users,
      title: 'Collaborative',
      description: 'Great design happens when diverse minds come together.'
    },
    {
      icon: Lightbulb,
      title: 'Innovative',
      description: 'Pushing boundaries while maintaining usability and accessibility.'
    },
    {
      icon: Target,
      title: 'Results-Driven',
      description: 'Measuring success through user satisfaction and business impact.'
    }
  ];

  return (
    <section id="about" className="py-20 bg-white dark:bg-gray-900 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
            About Me
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-orange-500 to-yellow-500 mx-auto rounded-full"></div>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
          <div>
            <img
              src="https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=800"
              alt="Kishan working on design"
              className="rounded-2xl shadow-2xl object-cover w-full h-96"
            />
          </div>
          <div>
            <h3 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">
              Designing with Purpose
            </h3>
            <div className="space-y-4 text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
              <p>
                I am an experienced UI/UX Designer with a passion for creating seamless user experiences. My expertise includes intuitive and engaging interface design, balancing aesthetics and functionality.
              </p>
              <p>
                I am proficient in various design tools, such as Figma, Adobe Photoshop, Illustrator, XD, After Effects and I can effectively communicate design concepts to stakeholders and development teams using high-fidelity wireframes, prototypes, and mockups.
              </p>
              <p>
                Currently working as a Product Designer at Mindarray Systems Pvt. Ltd. with 2.10 years of experience creating and launching innovative products. I'm skilled in user research, rapid prototyping and product launch strategies.
              </p>
            </div>
          </div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {values.map((value, index) => (
            <div
              key={index}
              className="text-center p-6 rounded-2xl bg-gray-50 dark:bg-gray-800 hover:bg-gradient-to-br hover:from-orange-50 hover:to-yellow-50 dark:hover:from-orange-900/20 dark:hover:to-yellow-900/20 transition-all duration-300 transform hover:scale-105"
            >
              <div className="w-16 h-16 bg-gradient-to-r from-orange-500 to-yellow-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <value.icon className="w-8 h-8 text-white" />
              </div>
              <h4 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">
                {value.title}
              </h4>
              <p className="text-gray-600 dark:text-gray-300">
                {value.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;