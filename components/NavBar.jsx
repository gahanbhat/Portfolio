import Link from "next/link";

import "@fontsource/ibm-plex-mono";

export default function NavBar() {
  return (
    <header className="py-4 bg-transparent">
      <nav className="max-w-4xl mx-auto px-4 py-4 flex items-center justify-between border-b border-neutral-800 ">
        {/* Logo */}
        <a className="text-sm font-mono " href="/">
          (_, /\ |-| /\ |\|
        </a>

        {/* Navigation Links */}
        <div className="flex items-center gap-8">
          <a
            className="font-medium font-mono text-green hover:text-gray-500"
            href="/"
          >
            About Me
          </a>
          <a
            className="font-medium font-mono text-green hover:text-gray-500"
            href="/projects"
          >
            Projects
          </a>
          <Link
            href="/blogpage"
            className="font-medium font-mono text-green hover:text-gray-500"
          >
            Blog
          </Link>
        </div>
      </nav>
    </header>
  );
}
