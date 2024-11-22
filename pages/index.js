// pages/index.js
import "@fontsource/ibm-plex-mono";
import Layout from "../components/Layout";
import TypingAnimation from "@/components/ui/typing-animation";
import Experience from "@/components/Experience";
import Link from "next/link";
import Skills from "@/components/Skills";

export default function Home() {
  const texts = [
    "a tech enthusiast",
    "a software dev",
    "a music producer",
    "a video editor",
  ];
  return (
    <Layout>
      <div className="flex items-center justify-center  my-11 pt-20">
        <div className="flex flex-col md:flex-row items-center justify-center w-full max-w-4xl my-11 pt-10 ">
          <div className="md:w-1/2 mb-4 md:mb-0 md:mr-4 flex flex-col items-start">
            <h2 className="text-lg text-gray-700   mb-2 font-mono">Hello,</h2>
            <p className="text-gray-700 font-mono">
              I’m <span className=" font-mono text-lg">Gahan Bhat,</span>
            </p>
            <span className="text-gray-700  items-center">
              {" "}
              {/* Added flex */}
              <TypingAnimation
                texts={texts}
                duration={100} // Typing speed
                className="dark:text-white my-2"
              />
            </span>
            <br />
            <div className=" ">
              <span className=" flex font-mono text-l text-gray-700 ">
                Find me on:
              </span>
              <div className="inline-flex gap-4 dark:bg-gray-700 px-1 pt-1">
                <Link
                  href="https://github.com/gahanbhat"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img
                    src="/bxl-github.svg"
                    className="text-gray-800 dark:text-white hover:scale-110 duration-500"
                  />
                </Link>
                <Link
                  href="https://www.linkedin.com/in/gahanbhat/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img
                    src="/bxl-linkedin.svg"
                    className="text-gray-800 dark:text-white hover:scale-110 duration-500"
                  />
                </Link>
                <Link
                  href="https://www.linkedin.com/in/gahanbhat/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img
                    src="/X-Logo.png"
                    className="w-5 hover:scale-110 duration-500 pt-0.5"
                  />
                </Link>
                <Link
                  href="https://discordlookup.com/user/528927281406672897"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img
                    src="/discord.svg"
                    className="w-7 hover:scale-110 duration-500  "
                  />
                </Link>
              </div>
            </div>
            <div className="justify-center items-center">
              <span className=" flex font-mono text-l text-gray-700 ">
                Resume:
              </span>
              <div className=" justify-center p-1 items-center w-fit dark:bg-gray-700 ">
                <Link
                  href="https://www.linkedin.com/in/gahanbhat/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img
                    src="/bx-download.svg"
                    className="text-gray-800 dark:text-white hover:scale-110 duration-500"
                  />
                </Link>
              </div>
            </div>
          </div>

          <div className="md:w-1/2 flex justify-center">
            <img
              src="/port.gif"
              alt="A description of the GIF"
              width="480"
              height="480"
              className="rounded-xl shadow-2xl"
            />
          </div>
        </div>
      </div>

      <div className="flex text-center justify-center mt-24 p-4"></div>

      <Experience />
      <Skills />
    </Layout>
  );
}
