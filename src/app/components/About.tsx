import { personalDetails } from "@/data/portfolio";

export default function About() {
  return (
    <section id="about" className="py-20 px-6 bg-base-200/40">
      <div className="container mx-auto max-w-6xl space-y-12">
        {/* Section Header */}
        <div className="text-center space-y-2">
          <p className="text-xs uppercase tracking-widest font-semibold text-sky-500">
            Get To Know Me
          </p>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight">
            About Me
          </h2>
          <div className="w-16 h-1 bg-gradient-to-r from-sky-500 to-indigo-600 rounded-full mx-auto mt-2" />
        </div>

        {/* Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left Column: Bio & Core Philosophy */}
          <div className="lg:col-span-7 space-y-6">
            <h3 className="text-2xl font-bold">
              Engineering web experiences with precision and passion.
            </h3>
            <p className="text-base sm:text-lg text-base-content/80 leading-relaxed">
              {personalDetails.bio}
            </p>
            <p className="text-base-content/75 leading-relaxed">
              As a Computer Science & Engineering student, I combine theoretical foundations with hands-on modern software development. I enjoy taking complex user requirements and transforming them into accessible, sleek, and high-performance applications.
            </p>

            {/* Quick Feature Badges */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-4">
              <div className="p-4 rounded-2xl bg-base-100 border border-base-content/10 shadow-sm text-center">
                <div className="text-sky-500 font-bold text-xl mb-1">Modern UI</div>
                <p className="text-xs text-base-content/70">Responsive & accessible designs</p>
              </div>
              <div className="p-4 rounded-2xl bg-base-100 border border-base-content/10 shadow-sm text-center">
                <div className="text-indigo-500 font-bold text-xl mb-1">Clean Code</div>
                <p className="text-xs text-base-content/70">Modular & maintainable patterns</p>
              </div>
              <div className="p-4 rounded-2xl bg-base-100 border border-base-content/10 shadow-sm text-center">
                <div className="text-purple-500 font-bold text-xl mb-1">Fast Learner</div>
                <p className="text-xs text-base-content/70">Always staying ahead of tech</p>
              </div>
            </div>
          </div>

          {/* Right Column: Education & Learning Cards */}
          <div className="lg:col-span-5 space-y-6">
            {/* Education Card */}
            <div className="p-6 rounded-2xl bg-base-100 border border-base-content/10 shadow-md hover:shadow-lg transition-shadow">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-xl bg-sky-500/10 text-sky-500 flex items-center justify-center font-bold">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path d="M12 14l9-5-9-5-9 5 9 5z" />
                    <path d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 14v7" />
                  </svg>
                </div>
                <div>
                  <h4 className="font-bold text-lg">Education</h4>
                  <span className="text-xs text-base-content/60">{personalDetails.graduationYear}</span>
                </div>
              </div>

              <div className="space-y-1">
                <p className="font-semibold text-base-content">{personalDetails.degree}</p>
                <p className="text-sm text-base-content/75">{personalDetails.college}</p>
              </div>
            </div>

            {/* Currently Learning Card */}
            <div className="p-6 rounded-2xl bg-base-100 border border-base-content/10 shadow-md hover:shadow-lg transition-shadow">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-xl bg-indigo-500/10 text-indigo-500 flex items-center justify-center font-bold">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <div>
                  <h4 className="font-bold text-lg">Currently Focusing On</h4>
                  <span className="text-xs text-base-content/60">Active Tech Evolution</span>
                </div>
              </div>

              <ul className="space-y-2.5">
                {personalDetails.currentlyLearning.map((item, index) => (
                  <li key={index} className="flex items-start gap-2.5 text-sm text-base-content/80">
                    <span className="w-1.5 h-1.5 rounded-full bg-indigo-500 mt-2 shrink-0" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
