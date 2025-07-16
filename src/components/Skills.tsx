import React, { useState, useEffect } from 'react';

interface Skill {
  name: string;
  level: number;
  icon: string;
}

interface SkillCategory {
  title: string;
  skills: Skill[];
}

const Skills: React.FC = () => {
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

    const element = document.getElementById('skills');
    if (element) {
      observer.observe(element);
    }

    return () => observer.disconnect();
  }, []);

  const skillCategories: SkillCategory[] = [
    {
      title: "Languages",
      skills: [
        { name: "TypeScript", level: 85, icon: "🔷" },
        { name: "HTML5", level: 95, icon: "🌐" },
        { name: "CSS3", level: 90, icon: "🎨" },
        { name: "JavaScript", level: 75, icon: "🟨" },
        { name: "PHP", level: 90, icon: "🐘" },
        { name: "SQL", level: 85, icon: "🗃️" }
      ]
    },
    {
  title: "Frameworks & Libraries",
  skills: [
    { name: "React", level: 90, icon: "⚛️" },
    { name: "React Native", level: 70, icon: "📱" },
    { name: "Tailwind CSS", level: 90, icon: "💨" },
    { name: "Bootstrap", level: 80, icon: "🟣" },
    { name: "Laravel", level: 95, icon: "🐘" },
    { name: "ShadCN UI", level: 75, icon: "🧩" },
  ]
},
    {
      title: "Tools & Technologies",
      skills: [
        { name: "Git", level: 85, icon: "📝" },
        { name: "Docker", level: 70, icon: "🐳" },
        { name: "AWS", level: 75, icon: "☁️" },
        { name: "MongoDB", level: 80, icon: "🍃" },
        { name: "PostgreSQL", level: 75, icon: "🐘" },
        { name: "Figma", level: 70, icon: "🎨" }
      ]
    }
  ];

  return (
    <div className="py-20 bg-white dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className={`text-center mb-16 transform transition-all duration-1000 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
          <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            Skills & Technologies
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Here are the technologies and tools I work with to bring ideas to life.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, categoryIndex) => (
            <div
              key={category.title}
              className={`bg-gray-50 dark:bg-gray-800 rounded-xl p-6 transform transition-all duration-1000 ${
                isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
              }`}
              style={{ transitionDelay: `${categoryIndex * 200}ms` }}
            >
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6 text-center">
                {category.title}
              </h3>
              
              <div className="space-y-4">
                {category.skills.map((skill, skillIndex) => (
                  <div
                    key={skill.name}
                    className={`transform transition-all duration-1000 ${
                      isVisible ? 'translate-x-0 opacity-100' : 'translate-x-10 opacity-0'
                    }`}
                    style={{ transitionDelay: `${(categoryIndex * 200) + (skillIndex * 100)}ms` }}
                  >
                    <div className="flex items-center justify-between mb-2">
                      <div className="flex items-center">
                        <span className="text-2xl mr-3">{skill.icon}</span>
                        <span className="font-medium text-gray-900 dark:text-white">
                          {skill.name}
                        </span>
                      </div>
                      <span className="text-sm text-gray-600 dark:text-gray-400">
                        {skill.level}%
                      </span>
                    </div>
                    
                    <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
                      <div
                        className="bg-gradient-to-r from-blue-500 to-purple-600 h-2 rounded-full transition-all duration-1000 ease-out"
                        style={{
                          width: isVisible ? `${skill.level}%` : '0%',
                          transitionDelay: `${(categoryIndex * 200) + (skillIndex * 100) + 300}ms`
                        }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Additional Skills Icons */}
        <div className={`mt-16 text-center transform transition-all duration-1000 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`} style={{ transitionDelay: '800ms' }}>
          <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-8">
            Also familiar with
          </h3>
          <div className="flex flex-wrap justify-center gap-4">
            {[
              { name: "GraphQL", icon: "🔗" },
              { name: "Redux", icon: "🔄" },
              { name: "Jest", icon: "🧪" },
              { name: "Webpack", icon: "📦" },
              { name: "Sass", icon: "💄" },
              { name: "Firebase", icon: "🔥" },
              { name: "Stripe", icon: "💳" },
              { name: "Socket.io", icon: "🔌" }
            ].map((tech, index) => (
              <div
                key={tech.name}
                className={`flex items-center bg-white dark:bg-gray-800 px-4 py-2 rounded-full shadow-md hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1 ${
                  isVisible ? 'scale-100 opacity-100' : 'scale-0 opacity-0'
                }`}
                style={{ transitionDelay: `${800 + (index * 50)}ms` }}
              >
                <span className="text-xl mr-2">{tech.icon}</span>
                <span className="text-sm font-medium text-gray-700 dark:text-gray-300">
                  {tech.name}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
