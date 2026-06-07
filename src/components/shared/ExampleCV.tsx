const ExampleCV = () => {
  return (
    <div className="jk-font bg-[#F1F1F1] p-5 rounded-lg my-5 shadow-xl">
      <div className="flex gap-5 border-b-2 pb-5">
        <div className="rounded-full p-3 bg-[#7f77dd]/50 text-center">
          <span className="text-[#7f77dd]">LZ</span>
        </div>
        <div>
          <p className="font-bold">Leonardo Zani de Souza</p>
          <p className="font-bold text-sm opacity-70">
            Desenvolvedor Frontend - Vila Velha, ES
          </p>
        </div>
      </div>
      <div>
        <p className="text-[#7f77dd] font-bold opacity-80 mt-3">EXPERIÊNCIAS</p>
        <div className="flex gap-5 text-sm font-bold ml-2">
          <p>Programador Front-End</p>
          <p>Out, 2025 - Atualmente</p>
        </div>
      </div>
      <div>
        <p className="text-[#7f77dd] font-bold opacity-80 mt-3 mb-3">
          HABILIDADES
        </p>
        <div className="flex gap-5 text-sm text-[#7f77dd] font-bold ml-2">
          <span className="rounded-xl bg-[#7f77dd]/40 p-2">React</span>
          <span className="rounded-xl bg-[#7f77dd]/40 p-2">TypeScript</span>
          <span className="rounded-xl bg-[#7f77dd]/40 p-2">Vite</span>
          <span className="rounded-xl bg-[#7f77dd]/40 p-2">Supabase</span>
        </div>
      </div>
    </div>
  )
}

export default ExampleCV
