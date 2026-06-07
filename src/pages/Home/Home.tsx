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
      <div className="flex flex-col text-center my-10">
        <h3 className="font-bold mb-5">COMO FUNCIONA?</h3>
        <div className="flex">
          <div className="flex flex-col items-center justify-center gap-2 max-w-50">
            <div className="flex items-center justify-center h-10 w-10 border text-center bg-[#7f77dd]/30 text-[#7f77dd] font-bold p-3 rounded-full">
              1
            </div>
            <h4 className="text-sm font-bold">Preencha</h4>
            <p className="text-sm">
              Informe seus dados ou importe um currículo existente
            </p>
          </div>
          <div className="flex items-center p-3">
            <span>→</span>
          </div>
          <div className="flex flex-col items-center justify-center gap-2 max-w-50">
            <div className="flex items-center justify-center h-10 w-10 border text-center bg-[#7f77dd]/30 text-[#7f77dd] font-bold p-3 rounded-full">
              2
            </div>
            <h4 className="text-sm font-bold">IA Analisa</h4>
            <p className="text-sm">
              Receba sugestões de melhorias personalizadas
            </p>
          </div>
          <div className="flex items-center p-3">
            <span>→</span>
          </div>
          <div className="flex flex-col items-center justify-center gap-2 max-w-50">
            <div className="flex items-center justify-center h-10 w-10 border text-center bg-[#7f77dd]/30 text-[#7f77dd] font-bold p-3 rounded-full">
              3
            </div>
            <h4 className="text-sm font-bold">Baixe o PDF</h4>
            <p className="text-sm">
              Exporte um currículo profissional pronto pra enviar
            </p>
          </div>
        </div>
      </div>
    </main>
  )
}

export default Home
