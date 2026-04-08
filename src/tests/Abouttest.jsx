function Abouttest() {
  return (
    <div className="min-h-screen bg-slate-950 text-slate-100">
      {/* HEADER */}
      <header className="sticky top-0 z-50 border-b border-slate-800/70 bg-slate-950/90 backdrop-blur-md">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
          <a href="#" className="text-xl font-bold text-blue-500">
            MyPortfolio
          </a>

          <nav className="hidden gap-8 md:flex">
            <a href="#home" className="text-slate-300 transition hover:text-blue-500">
              Home
            </a>
            <a href="#about" className="text-slate-300 transition hover:text-blue-500">
              About
            </a>
            <a href="#projects" className="text-slate-300 transition hover:text-blue-500">
              Projects
            </a>
            <a href="#contact" className="text-slate-300 transition hover:text-blue-500">
              Contact
            </a>
          </nav>

          <a
            href="#contact"
            className="rounded-full bg-blue-500 px-5 py-2 text-sm font-medium text-white transition hover:bg-blue-600"
          >
            Hire me
          </a>
        </div>
      </header>

      {/* HOME */}
      <section id="home" className="px-6 py-24">
        <div className="mx-auto grid max-w-6xl items-center gap-12 md:grid-cols-2">
          <div>
            <p className="mb-4 text-sm uppercase tracking-[0.3em] text-orange-400">
              Frontend Developer
            </p>

            <h1 className="text-4xl font-bold leading-tight text-slate-100 md:text-6xl">
              Build modern websites with{" "}
              <span className="text-blue-500">clean design</span> and{" "}
              <span className="text-violet-500">smooth experience</span>.
            </h1>

            <p className="mt-6 max-w-xl text-lg text-slate-400">
              I create responsive and elegant portfolio websites with React and Tailwind CSS.
            </p>

            <div className="mt-8 flex flex-wrap gap-4">
              <a
                href="#projects"
                className="rounded-full bg-blue-500 px-6 py-3 font-medium text-white transition hover:bg-blue-600"
              >
                View Projects
              </a>
              <a
                href="#contact"
                className="rounded-full border border-orange-400 px-6 py-3 font-medium text-orange-400 transition hover:bg-orange-400 hover:text-slate-950"
              >
                Contact Me
              </a>
            </div>
          </div>

          <div className="rounded-3xl border border-slate-800 bg-slate-900 p-8 shadow-2xl shadow-black/30">
            <div className="mb-4 h-64 rounded-2xl bg-gradient-to-br from-blue-500/20 via-violet-500/20 to-orange-400/20"></div>
            <p className="text-slate-400">
              Replace this block with your image, avatar, or a project preview.
            </p>
          </div>
        </div>
      </section>

      {/* ABOUT */}
      <section id="about" className="bg-slate-900 px-6 py-24">
        <div className="mx-auto max-w-6xl">
          <h2 className="text-3xl font-bold text-slate-100">About Me</h2>
          <p className="mt-4 max-w-3xl text-slate-400">
            I am a passionate developer focused on building modern, responsive, and user-friendly
            interfaces.
          </p>

          <div className="mt-10 grid gap-6 md:grid-cols-3">
            <div className="rounded-2xl border border-slate-800 bg-slate-950 p-6">
              <h3 className="text-xl font-semibold text-blue-500">Design</h3>
              <p className="mt-3 text-slate-400">
                Clean layouts, balanced colors, and strong visual hierarchy.
              </p>
            </div>

            <div className="rounded-2xl border border-slate-800 bg-slate-950 p-6">
              <h3 className="text-xl font-semibold text-violet-500">Development</h3>
              <p className="mt-3 text-slate-400">
                React components, reusable structure, and responsive UI.
              </p>
            </div>

            <div className="rounded-2xl border border-slate-800 bg-slate-950 p-6">
              <h3 className="text-xl font-semibold text-orange-400">Performance</h3>
              <p className="mt-3 text-slate-400">
                Fast loading, smooth hover effects, and modern user experience.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* PROJECTS */}
      <section id="projects" className="px-6 py-24">
        <div className="mx-auto max-w-6xl">
          <h2 className="text-3xl font-bold text-slate-100">Projects</h2>
          <p className="mt-4 text-slate-400">
            Some of my recent work and personal projects.
          </p>

          <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            <div className="group rounded-2xl border border-slate-800 bg-slate-900 p-6 transition hover:border-blue-500/60 hover:-translate-y-1">
              <span className="rounded-full bg-blue-500/10 px-3 py-1 text-sm text-blue-400">
                React
              </span>
              <h3 className="mt-4 text-xl font-semibold text-slate-100">Project One</h3>
              <p className="mt-3 text-slate-400">
                A clean and responsive project card layout.
              </p>
            </div>

            <div className="group rounded-2xl border border-slate-800 bg-slate-900 p-6 transition hover:border-violet-500/60 hover:-translate-y-1">
              <span className="rounded-full bg-violet-500/10 px-3 py-1 text-sm text-violet-400">
                UI/UX
              </span>
              <h3 className="mt-4 text-xl font-semibold text-slate-100">Project Two</h3>
              <p className="mt-3 text-slate-400">
                A modern interface with elegant spacing and colors.
              </p>
            </div>

            <div className="group rounded-2xl border border-slate-800 bg-slate-900 p-6 transition hover:border-orange-400/60 hover:-translate-y-1">
              <span className="rounded-full bg-orange-400/10 px-3 py-1 text-sm text-orange-400">
                Tailwind
              </span>
              <h3 className="mt-4 text-xl font-semibold text-slate-100">Project Three</h3>
              <p className="mt-3 text-slate-400">
                A professional and attractive project showcase.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CONTACT */}
      <section id="contact" className="bg-slate-900 px-6 py-24">
        <div className="mx-auto max-w-3xl">
          <h2 className="text-3xl font-bold text-slate-100">Contact</h2>
          <p className="mt-4 text-slate-400">
            Send me a message and I will reply soon.
          </p>

          <form className="mt-10 space-y-4">
            <input
              type="text"
              placeholder="Your name"
              className="w-full rounded-xl border border-slate-700 bg-slate-950 px-4 py-3 text-slate-100 placeholder:text-slate-500 focus:border-blue-500 focus:outline-none"
            />
            <input
              type="email"
              placeholder="Your email"
              className="w-full rounded-xl border border-slate-700 bg-slate-950 px-4 py-3 text-slate-100 placeholder:text-slate-500 focus:border-blue-500 focus:outline-none"
            />
            <textarea
              rows="5"
              placeholder="Your message"
              className="w-full rounded-xl border border-slate-700 bg-slate-950 px-4 py-3 text-slate-100 placeholder:text-slate-500 focus:border-violet-500 focus:outline-none"
            ></textarea>

            <button
              type="submit"
              className="rounded-full bg-blue-500 px-6 py-3 font-medium text-white transition hover:bg-blue-600"
            >
              Send Message
            </button>
          </form>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="border-t border-slate-800 bg-slate-950 px-6 py-6 text-center text-slate-500">
        © 2026 MyPortfolio. All rights reserved.
      </footer>
    </div>
  
  );
}

export default Abouttest;