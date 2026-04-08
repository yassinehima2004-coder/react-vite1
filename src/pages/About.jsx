function About() {
  return (
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
  );
}

export default About;