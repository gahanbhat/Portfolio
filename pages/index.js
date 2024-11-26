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
      <div className="flex items-center justify-center my-11 pt-20 px-4">
        <div className="flex flex-col md:flex-row items-center justify-center w-full max-w-4xl mx-auto my-11 pt-10">
          {/* Left Section */}
          <div className="md:w-1/2 mb-6 md:mb-0 md:mr-4 px-4 flex flex-col items-center md:items-start">
            <h2 className="text-base md:text-2xl   mb-2 font-bold font-mono">
              Hello,
            </h2>
            <p className="font-mono text-center md:text-left">
              I’m <span className="font-mono text-lg">Gahan Bhat</span>
            </p>
            <span className="">
              <TypingAnimation texts={texts} duration={100} className="my-2" />
            </span>
            <div className="mt-4 justify-center">
              <span className="flex font-mono text-md mb-2">Find me on:</span>
              <div className="inline-flex gap-4 pt-1 flex-wrap ">
                <Link
                  href="https://github.com/gahanbhat"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img
                    src="/bxl-github.svg"
                    alt="GitHub"
                    className="w-6 scale-125 hover:scale-110 duration-150"
                  />
                </Link>
                <Link
                  href="https://www.linkedin.com/in/gahanbhat/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img
                    src="/bxl-linkedin.svg"
                    alt="LinkedIn"
                    className="w-6 scale-125 hover:scale-110 duration-150"
                  />
                </Link>
                {/* <Link
                  href="https://twitter.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img
                    src="/X-Logo.svg"
                    alt="Twitter"
                    className="w-6 hover:scale-110 duration-500"
                  />
                </Link> */}
                <Link
                  href="https://discordlookup.com/user/528927281406672897"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img
                    src="/discord.svg"
                    alt="Discord"
                    className="w-6 scale-125 hover:scale-110 duration-150"
                  />
                </Link>
              </div>
            </div>
            <div className="mt-4 justify-center items-center">
              <span className="font-mono text-md mb-2">Resume:</span>

              <Link
                href="https://drive.google.com/file/d/11NXo2qO7sP6BkvqeVz_EozSgZY5QxrI8/view?usp=sharing"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  src="/bx-download.svg"
                  alt="Download Resume"
                  className="inline-flex flex-wrap mx-4 w-6 scale-150 hover:scale-125 duration-150"
                />
              </Link>
            </div>
          </div>

          {/* Right Section */}
          <div className="md:w-1/2 flex pr-4 justify-center">
            <img
              src="/port.gif"
              alt="Portfolio GIF"
              className="w-full max-w-xs md:max-w-md rounded-xl shadow-2xl"
            />
          </div>
        </div>
      </div>

      <div className="flex text-center justify-center mt-24 p-4"></div>

      {/* Additional Sections */}
      <Experience />
      <Skills />
    </Layout>
  );
}
