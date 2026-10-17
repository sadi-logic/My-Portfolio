import Image from "next/image";
import { projects } from "@/data/portfolio";

export default function Projects() {
  return (
    <section id="projects" className="py-20 px-6 bg-base-200/40">
      <div className="container mx-auto max-w-6xl space-y-12">
        {/* Section Header */}
        <div className="text-center space-y-2">
          <p className="text-xs uppercase tracking-widest font-semibold text-sky-500">
            Showcase
          </p>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight">
            Featured Projects
          </h2>
          <div className="w-16 h-1 bg-gradient-to-r from-sky-500 to-indigo-600 rounded-full mx-auto mt-2" />
          <p className="text-sm text-base-content/70 max-w-md mx-auto pt-2">
            A selection of web applications and projects I have engineered.
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <div
              key={project.id}
              className="group flex flex-col rounded-2xl bg-base-100 border border-base-content/10 overflow-hidden shadow-md hover:shadow-2xl hover:border-sky-500/40 transition-all duration-300"
            >
              {/* Card Banner Header */}
              <div className="h-52 w-full relative overflow-hidden bg-slate-900">
                {project.image ? (
                  <>
                    {/* Project Image from assets */}
                    <Image
                      src={project.image}
                      alt={project.title}
                      fill
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                      className="object-cover object-top group-hover:scale-105 transition-transform duration-500"
                    />

                    {/* Gradient Overlay for contrast & readability */}
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/40 to-slate-950/20 z-10" />
                  </>
                ) : (
                  <>
                    {/* Fallback decorative background if no image */}
                    <div className="absolute inset-0 bg-gradient-to-br from-slate-800 via-slate-900 to-indigo-950" />
                    <div className="absolute -right-8 -bottom-8 w-32 h-32 rounded-full bg-sky-500/10 blur-xl group-hover:scale-150 transition-transform duration-500" />
                  </>
                )}

                {/* Banner Content (Badge + Title) */}
                <div className="relative z-20 h-full p-5 flex flex-col justify-between">
                  <div className="flex items-center justify-between">
                    <span className="w-9 h-9 rounded-xl bg-black/40 backdrop-blur-md border border-white/10 flex items-center justify-center text-sky-400 font-mono font-bold text-xs shadow">
                      {`0${project.id}`}
                    </span>
                    {project.featured && (
                      <span className="px-2.5 py-1 rounded-full text-[11px] font-semibold bg-sky-500/25 text-sky-300 border border-sky-400/30 backdrop-blur-md">
                        Featured
                      </span>
                    )}
                  </div>

                  <div>
                    <h3 className="text-xl font-bold text-white drop-shadow-md group-hover:text-sky-300 transition-colors">
                      {project.title}
                    </h3>
                  </div>
                </div>
              </div>

              {/* Card Body */}
              <div className="p-6 flex-1 flex flex-col justify-between space-y-6">
                <p className="text-sm text-base-content/75 leading-relaxed">
                  {project.description}
                </p>

                {/* Tech Tags */}
                <div className="space-y-4">
                  <div className="flex flex-wrap gap-1.5">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-2.5 py-1 rounded-lg text-xs font-medium bg-base-200/80 text-base-content/80 border border-base-content/5"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  {/* Action Links: GitHub & Demo */}
                  <div className="flex items-center gap-3 pt-2 border-t border-base-content/10">
                    {project.githubUrl && (
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex-1 py-2 px-3 rounded-xl border border-base-content/15 hover:bg-base-200/80 text-xs font-semibold text-center flex items-center justify-center gap-1.5 transition-colors"
                      >
                        <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                          <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
                        </svg>
                        GitHub
                      </a>
                    )}

                    {project.demoUrl && project.demoUrl !== "#" && (
                      <a
                        href={project.demoUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex-1 py-2 px-3 rounded-xl bg-gradient-to-r from-sky-500 to-indigo-600 hover:from-sky-600 hover:to-indigo-700 text-white text-xs font-semibold text-center flex items-center justify-center gap-1.5 shadow transition-all"
                      >
                        <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                        </svg>
                        Live Demo
                      </a>
                    )}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
