import Conpétences from "../components/Conpétences";



function Home() {
  return (
    <>
    <section class="text-slate-100  px-[4vw] py-[5vw] md:py-40 flex flex-wrap gap-[5vw] max-md:gap-0  items-center justify-center bg-gradient-to-r from-slate-950 via-slate-900 to-slate-950">
      <div ><img className="rounded-full mt-8 w-70 animate-bounce shadow-lg" src="/assets/photoprofile.png" alt="PROFIL"/></div>
      
      <div className="text-center">
        <h1 class="text-[5rem] font-bold">Yassine HIMA</h1>
        <p class="text-xl mt-4 text-slate-400">DEVELOPPEUR FULL STACK AVEC COMPETENCES EN IA </p>
        <div className="flex gap-8 justify-center pb-8">
          <button class="mt-6 px-6 py-3 border border-blue-500 hover:text-blue-500 hover:bg-transparent
          rounded-full bg-blue-500 text-slate-100 transition-colors duration-300 font-bold">
            <a href="https://github.com/yassinehima2004-coder" target="_blank" rel="noopener noreferrer">
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
    </>
  );
}

export default Home;