import Conpétences from "../components/Conpétences";



function Home() {
  return (
    <>
    <section class="text-slate-100  px-[4vw] py-[5vw] md:py-40 flex flex-wrap gap-[5vw] max-md:gap-0  items-center justify-center bg-gradient-to-r from-slate-950 via-slate-900 to-slate-950">
      <div ><img className="rounded-full mt-8 w-70 animate-bounce  shadow-lg" src="/assets/photoprofile.png" alt="PROFIL"/></div>
      
      <div className="text-center">
        <h1 class="text-[5rem] font-bold">Yassine HIMA</h1>
        <p class="text-xl mt-4 text-slate-400">DEVELOPPEUR FULL STACK AVEC COMPETENCES EN IA </p>
        <div className="flex gap-8 justify-center pb-8">
          <button class="mt-6 px-6 py-3 border border-blue-500 hover:text-blue-500 hover:bg-transparent
          rounded-full bg-blue-500 text-slate-100 transition-colors duration-300 font-bold">
            <a href="#projects">
              MES PROJETS
            </a>
          </button>
          <button class="mt-6 px-6 py-3 border border-blue-500 text-blue-500 rounded-full hover:bg-blue-500 hover:text-slate-100
          transition-colors duration-300 font-bold">
            <a href="https://github.com/yassinehima2004-coder" target="_blank" rel="noopener noreferrer">
              GITHUB
            </a>
            
          </button>
        </div>
      </div>
    </section>
    <Conpétences/>
    <section id="projects" className="px-6 pt-8 pb-24 border-t border-slate-800 bg-gradient-to-r from-slate-950 via-slate-900 to-slate-950">
        <div className="mx-auto max-w-7xl flex flex-col items-center justify-center">
          <h2 className="text-3xl font-bold text-slate-100">Mes Projets</h2>
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
          <a href="https://github.com/yassinehima2004-coder/Project-5-responsive" target="_blank" rel="noopener noreferrer">
            <div className="group rounded-2xl border border-slate-800 bg-slate-900 p-6 transition hover:border-violet-500/60 hover:-translate-y-1">
              <span className="rounded-full bg-violet-500/10 px-3 py-1 text-sm text-violet-400">
                UI/UX
              </span>
              <h3 className="mt-4 text-xl font-semibold text-slate-100">Project Two</h3>
              <p className="mt-3 text-slate-400">
                A modern interface with elegant spacing and colors.
              </p>
            </div>
          </a>
          <a href="https://github.com/yassinehima2004-coder/Project9-tailwind" target="_blank" rel="noopener noreferrer">
            <div className="group h-full rounded-2xl border border-slate-800 bg-slate-900 p-6 transition hover:border-orange-400/60 hover:-translate-y-1">
              <span className="rounded-full bg-orange-400/10 px-3 py-1 text-sm text-orange-400">
                Tailwind
              </span>
              <h3 className="mt-4 text-xl font-semibold text-slate-100">Project Three</h3>
              <p className="mt-3 text-slate-400">
                A professional and attractive project showcase.
              </p>
            </div>
          </a>
          </div>
        </div>
      </section>
    </>
  );
}

export default Home;