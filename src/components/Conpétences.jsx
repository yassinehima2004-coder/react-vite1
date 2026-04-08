
function Conpétences() {
    const conpétences = [
        { title: "HTML", description: ""},
        { title: "CSS", description: ""},
        { title: "Bootstrap", description: ""},
        { title: "Tailwind", description: ""},
        { title: "JavaScript", description: ""},
        { title: "React.js", description: ""},
        { title: "Node.js", description: ""},
    ];

  return (
    <>
    <div className="text-center mb-80 flex flex-col  gap-4 items-center justify-center">
      <h1 className="text-5xl font-bold p-6 text-slate-950">Mes Conpétences</h1>
      <div className="flex gap-6 justify-center flex-wrap max-w-7xl">
        {conpétences.map((item) => (
            <div className="w-50  p-4 bg-slate-950 shodow-xl hover:scale-110 transition-all duration-300
            flex flex-col  gap-4 items-center justify-center rounded-2xl">
                <h1 className="text-slate-100 text-[2rem] font-bold ">{item.title}</h1>
                <p className="text-slate-400 text-lg">{item.description}</p>
            </div>
        ))}

      </div>
      
    </div>
    </>
  );
}

export default Conpétences;

