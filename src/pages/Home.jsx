

function Home() {
  return (
    <>
    <div class="text-white h-[70vh] flex flex-col items-center justify-center bg-[url(/assets/bgHero.jpg)] bg-no-repeat bg-cover bg-center">
      <h1 class="text-9xl font-bold">Home</h1>
      <p class="text-xl mt-4">Welcome to my PortFolio</p>
      <button class="mt-6 px-6 py-3 bg-yellow-600 text-white rounded-full hover:bg-yellow-700 transition-colors duration-300 font-bold">Get Started</button>
    </div>
    <div className="text-center">
      <h1 className="text-5xl font-bold p-4">My Services</h1>
      <div className="bg-gradient-to-r from-green-400 to-emerald-600">
        <div className="h-[500px]">

        </div>
      </div>
      
    </div>
    </>
  );
}

export default Home;