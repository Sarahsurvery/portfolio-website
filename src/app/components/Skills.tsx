
import React from "react";

export default function Skills() {
    const skills = [
      { name: 'JavaScript', icon: '⚡' },
      { name: 'React', icon: '⚛️' },
      { name: 'Next.js', icon: '🟢' },
      { name: 'Tailwind CSS', icon: '🌿' },
      { name: 'Node.js', icon: '🌐' },
      { name: 'Git', icon: '🐙' },
      
    ];
  
    return (
      <section className="py-16 bg-black-50" id="skills">
        <div className="container mx-auto px-12 text-center">
          <h2 className="text-7xl font-extrabold text-blue-800 mb-8">
            My Skills
          </h2>
  
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
            {skills.map((skill, index) => (
              <div
                key={index}
                className="bg-white p-6 rounded-lg shadow-md transition-all transform hover:scale-105 hover:shadow-xl"
              >
                <div className="text-4xl mb-4">{skill.icon}</div>
                <h3 className="text-xl font-semibold text-gray-800">{skill.name}</h3>
              </div>
            ))}
          </div>
          <div className="button">
                
                <button className=" bg-transparent border-2 border-blue-500 text-blue-500 font-medium py-2 px-6 rounded-full shadow-md hover:bg-blue-500 hover:text-white hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-blue-500">
                <a href="#about">Back</a>
                  
                </button>
                </div>  
        </div>
        
      </section>
    );
  }