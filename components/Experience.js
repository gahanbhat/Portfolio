import "@fontsource/ibm-plex-mono";
import { useEffect, useRef, useState } from "react";

export default function Experience() {
  const experiences = [
    {
      title: "Senior Video Editor",
      company: "Team Car Delight",
      date: "Feb 2024 - Oct 2024",
      logo: "/tcd.jpg",
    },
    {
      title: "Full Stack Trainee",
      company: "Varcons Technologies",
      date: "Dec 2023 - Feb 2024",
      logo: "/varcons.png",
    },
    {
      title: "Android Intern",
      company: "TackleD",
      date: "Oct 2022 - May 2022",
      logo: "/tackled.png",
    },
  ];

  const [visible, setVisible] = useState(Array(experiences.length).fill(false));
  const sectionRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      if (!sectionRef.current) return;

      const sectionTop = sectionRef.current.getBoundingClientRect().top;
      const windowHeight = window.innerHeight;

      if (sectionTop < windowHeight * 0.75) {
        setVisible((prev) =>
          prev.map((_, index) => (index < experiences.length ? true : false))
        );
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <section
      id="experience"
      ref={sectionRef}
      className="my-20 mx-auto max-w-4xl px-8"
    >
      <h2 className="text-2xl text-center mb-10 p-2 font-bold font-mono">
        My Experiences
      </h2>
      <div className="relative mt-2">
        {/* Timeline Line */}
        <div className="absolute left-1/2 transform -translate-x-1/2 top-0 mt-6 h-full border-l-2  border-neutral-900"></div>

        {/* Timeline Items */}
        <div className="space-y-24 mt-6  relative">
          {experiences.map((exp, index) => (
            <div
              key={index}
              className={`relative flex items-center transition-transform duration-700 ${
                visible[index]
                  ? "translate-y-0 opacity-100"
                  : "translate-y-10 opacity-0"
              }`}
              style={{
                transition: "transform 0.5s ease, opacity 0.5s ease",
                transitionDelay: `${index * 100}ms`,
              }}
            >
              {/* Circle */}
              <div
                className="absolute z-10 w-6 h-6  bg-neutral-800 rounded-full border-4 mt-6  border-neutral-900 hidden md:block"
                style={{ left: "50%", transform: "translate(-50%, -50%)" }}
              ></div>

              {/* Callout (Content) */}
              <div
                className={`relative mt-6 p-4 bg-neutral-900  border border-neutral-900 shadow-md w-64 font-mono ${
                  index % 2 === 0 ? "ml-12 text-left" : "mr-12 text-right"
                }`}
                style={{
                  marginLeft: index % 2 === 0 ? "4rem" : "auto",
                  marginRight: index % 2 === 1 ? "4rem" : "auto",
                }}
              >
                <h3 className="text-lg  font-mono ">{exp.title}</h3>
                <div className="flex items-center  font-mono mt-2">
                  <img
                    src={exp.logo}
                    alt={`${exp.company} logo`}
                    className="w-6 h-6 mr-2 rounded-xl shadow-md"
                  />
                  <p className=" text-md text-green  font-mono">
                    {exp.company}
                  </p>
                </div>
                <div className="pt-2">
                  <span className="text-md   font-mono">{exp.date}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
