import Link from "next/link";

import { sections, site } from "@/lib/site";

export default function Footer() {
  return (
    <footer className="border-t border-white/10">
      <div className="container mx-auto flex flex-col gap-6 py-10 text-sm text-white/50 md:flex-row md:items-center md:justify-between">
        <p>
          © {new Date().getFullYear()} {site.name}. Built with Next.js.
        </p>
        <nav className="flex flex-wrap gap-x-6 gap-y-2">
          {sections.map((section) => (
            <Link
              key={section.id}
              href={`/#${section.id}`}
              className="transition-colors hover:text-white"
            >
              {section.label}
            </Link>
          ))}
          <a
            href={site.links.instagram}
            target="_blank"
            rel="noopener noreferrer"
            className="transition-colors hover:text-white"
          >
            Instagram
          </a>
        </nav>
      </div>
    </footer>
  );
}
