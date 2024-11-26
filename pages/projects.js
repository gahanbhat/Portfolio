import Layout from "@/components/Layout";
import Link from "next/link";

export default function Projects() {
  const projects = [
    {
      title: "Summarify",
      description:
        " A note-taking app that can summarize text and check grammar to help users create concise notes and save them.",
      techStack: [
        { name: "Remix JS", imageUrl: "/skills/remix-letter-light.svg" },
        { name: "Express", imageUrl: "/skills/express.svg" },
        { name: "MongoDB", imageUrl: "/skills/bxl-mongodb.svg" },
      ],
      imageUrl: "/Summarify.png",
      git: "https://github.com/gahanbhat/Summarify",
      liveLink: "https://summarify-jet.vercel.app",
    },
    {
      title: "Anime4u",
      description: "Just another anime information website",
      techStack: [
        { name: "React JS", imageUrl: "/skills/bxl-react.svg" },
        { name: "Tailwind", imageUrl: "/skills/bxl-tailwind-css.svg" },
      ],
      imageUrl: "/anime.png",
      git: "https://github.com/gahanbhat/Anime4U-WebApp",
      liveLink: "https://anime-4u.netlify.app",
    },
  ];

  return (
    <Layout>
      <div className="flex flex-col items-center justify-center my-11 pt-20 px-4 sm:px-6 md:px-10">
        <div className="w-full max-w-2xl space-y-10">
          {projects.map((project, index) => (
            <div
              key={index}
              className="flex flex-col items-center justify-center w-full border-2 border-neutral-900 p-6 rounded-lg"
            >
              {/* Project Image with Links Overlay */}
              <div className="relative w-full mb-4 flex items-center justify-center">
                <img
                  src={project.imageUrl}
                  alt={project.title}
                  className="w-full max-w-full h-auto rounded-md shadow-md font-mono object-cover"
                />

                <div className="absolute bottom-2 left-1/2 transform -translate-x-1/2 flex items-center gap-4 bg-black  rounded-lg px-3 py-1">
                  {project.git && (
                    <Link
                      href={project.git}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <img
                        src="/bxl-github.svg"
                        className=" hover:scale-110 duration-150 scale-125 w-6 h-auto"
                      />
                    </Link>
                  )}

                  {project.liveLink && (
                    <a
                      href={project.liveLink}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <img
                        src="/bx-link-external.svg"
                        alt="Live Project Link"
                        className="w-6 h-auto hover:scale-105 duration-150 "
                      />
                    </a>
                  )}
                </div>
              </div>

              {/* Project Info */}
              <div className="flex flex-col items-center mb-2">
                <h2 className="text-lg sm:text-xl font-mono text-center">
                  {project.title}
                </h2>
              </div>

              <p className=" font-mono text-center mb-4 text-sm sm:text-base">
                {project.description}
              </p>

              <div className="text-center">
                <span className="font-mono text-base text-green sm:text-lg ">
                  Tech Stack
                </span>
                <ul className=" flex  justify-center flex-wrap gap-4 p-2  rounded-md">
                  {project.techStack.map((tech, i) => (
                    <li key={i} className="flex items-center space-x-2">
                      <img
                        src={tech.imageUrl}
                        alt={tech.name}
                        className="w-6 h-auto"
                      />
                      <span className="text-sm">{tech.name}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </Layout>
  );
}
