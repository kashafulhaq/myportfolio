import React, { useState, useEffect } from 'react';

const About: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    const element = document.getElementById('about');
    if (element) {
      observer.observe(element);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <div className="py-20 bg-gray-50 dark:bg-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className={`text-center mb-16 transform transition-all duration-1000 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
          <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            About Me
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Get to know more about my journey, experience, and what drives me as a developer.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-5 items-center">
          {/* Image Section */}
          <div className={`transform transition-all duration-1000 ${isVisible ? 'translate-x-0 opacity-100' : '-translate-x-10 opacity-0'}`}>
            <div className="relative">
              <div className="w-full max-w-md mx-auto">
                <img
                  src="/projects/php.png"
                  alt="Muhammad Kashaf Ul haq pic"
                  className="w-full h-150 object-cover rounded-2xl shadow-2xl"
                />
              </div>
            </div>
          </div>

          {/* Content Section */}
          <div className={`transform transition-all duration-1000 ${isVisible ? 'translate-x-0 opacity-100' : 'translate-x-10 opacity-0'}`} style={{ transitionDelay: '200ms' }}>
            <div className="space-y-6">
              <h3 className="text-3xl font-bold text-gray-900 dark:text-white">
                Hello! I'm Muhammad Kashaf Ul Haq
              </h3>
              
              <p className="text-lg text-gray-600 dark:text-gray-400 leading-relaxed">
                I'm a passionate frontend web developer with over 2 years of experience creating 
                digital experiences that are not only visually appealing but also highly functional 
                and user-friendly. My journey in web development started during my computer science 
                studies, and I've been hooked ever since.
              </p>
              
              <p className="text-lg text-gray-600 dark:text-gray-400 leading-relaxed">
                My core strengths lie in collaborative development, writing scalable code, and taking ownership of projects from planning 
                through deployment. I’m also deeply interested in DevOps practices and version control using Git and GitHub.

              </p>

              <div className="grid grid-cols-2 gap-6 mt-8">
                <div className="text-center p-4 bg-white dark:bg-gray-900 rounded-lg shadow-md">
                  <div className="text-3xl font-bold text-blue-600 dark:text-blue-400 mb-2">15+</div>
                  <div className="text-gray-600 dark:text-gray-400">Projects Completed</div>
                </div>
                <div className="text-center p-4 bg-white dark:bg-gray-900 rounded-lg shadow-md">
                  <div className="text-3xl font-bold text-blue-600 dark:text-blue-400 mb-2">2+</div>
                  <div className="text-gray-600 dark:text-gray-400">Years Experience</div>
                </div>
              </div>

              <div className="mt-8">
                <h4 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
                  What I'm passionate about:
                </h4>
                <ul className="space-y-2">
                  {[
                    "Creating responsive and accessible web applications",
                    "Learning new technologies and staying up-to-date with industry trends",
                    "Collaborating with teams to solve complex problems",
                    "Contributing to open-source projects",
                    "Scalable Apps"
                  ].map((item, index) => (
                    <li
                      key={index}
                      className={`flex items-center text-gray-600 dark:text-gray-400 transform transition-all duration-500 ${
                        isVisible ? 'translate-x-0 opacity-100' : 'translate-x-4 opacity-0'
                      }`}
                      style={{ transitionDelay: `${400 + (index * 100)}ms` }}
                    >
                      <svg className="w-5 h-5 text-blue-500 mr-3 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
