import React from "react";

export default function Skills() {
  const skillCategories = {
    Languages: [
      { name: "JavaScript", logo: "/skills/bxl-javascript.svg" },
      { name: "Python", logo: "/skills/bxl-python.svg" },
      // Add other languages here
    ],
    Frameworks: [
      { name: "ReactJS", logo: "/skills/bxl-react.svg" },
      { name: "NextJS", logo: "/skills/bxl-javascript.svg" },
      { name: "Flask", logo: "/skills/bxl-flask.svg" },
      // Add other frameworks here
    ],
    Databases: [
      { name: "MongoDB", logo: "/skills/bxl-mongodb.svg" },
      { name: "PostgreSQL", logo: "/skills/bxl-postgresql.svg" },
      // Add other databases here
    ],
    Tools: [
      { name: "Docker", logo: "/skills/bxl-docker.svg" },
      { name: "Git", logo: "/skills/bxl-git.svg" },
      // Add other tools here
    ],
    // Add more categories as needed
  };

  return (
    <section className="my-40 mx-auto max-w-4xl px-8">
      <h2 className="text-2xl text-center mb-10 font-bold  font-mono">
        My Skills
      </h2>
      {Object.keys(skillCategories).map((category) => (
        <div key={category} className="mb-10">
          <h3 className="text-lg text-center text-green font-mono mb-2">
            {category}
          </h3>
          <div className="flex justify-center mb-2">
            <div className="w-8 border-b-2 border-neutral-900 "></div>
          </div>
          <div className="w-fit bg-neutral-900 x-4 pt-4  mx-auto">
            <div className="flex gap-8">
              {skillCategories[category].map((skill, index) => (
                <div
                  key={index}
                  className="flex flex-col items-center pb-2 w-24"
                >
                  <img
                    src={skill.logo}
                    alt={`${skill.name} logo`}
                    className="w-12 h-12 hover:scale-110 duration-500"
                  />
                  <p className="font-mono text-sm">{skill.name}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      ))}
    </section>
  );
}
