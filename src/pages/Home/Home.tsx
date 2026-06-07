import ExampleCV from '../../components/shared/ExampleCV'
import LinkButton from '../../components/ui/LinkButton'

const Home = () => {
  return (
    <main className="flex flex-col justify-center items-center jk-font">
      <div className="flex items-center justify-center gap-2 bg-[#7f77dd]/50 p-2 rounded-3xl border border-[#7f77dd] border-2 w-70">
        <div className="w-2 h-2 rounded-full bg-[#7f77dd]"></div>
        <p className="text-[#7f77dd] font-bold">
          IA Integrada no seu currículo
        </p>
      </div>
      <div className="mt-5 text-center">
        <span className="font-extrabold text-7xl">Seu currículo,</span>
        <br />
        <span className="font-extrabold text-7xl text-[#7f77dd]">
          {' '}
          moldado pela IA
        </span>
      </div>
      <div className="mt-5 max-w-118 text-center">
        <p className="text-lg font-bold">
          Crie ou revise seu currículo com inteligência artificial. Receba
          sugestões reais e exporte em PDF profissional.
        </p>
      </div>
      <div className="mt-5">
        <LinkButton text="Comece grátis" to="/register" />
      </div>
      <ExampleCV />
    </main>
  )
}

export default Home
