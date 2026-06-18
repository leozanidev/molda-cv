import { useState } from 'react'

import { NotebookPen } from 'lucide-react'
import Input from '../../components/ui/Input'
import Button from '../../components/ui/Button'
import Divider from '../../components/ui/Divider'

const Auth = () => {
  const [isLogin, setIsLogin] = useState(true)

  function onSwitch() {
    setIsLogin((prev) => !prev)
    console.log(isLogin)
  }

  return (
    <div className="flex relative h-screen w-full overflow-hidden">
      <div
        id="div"
        className={`${'flex flex-col absolute z-1000 transition-all duration-800 left items-center justify-center bg-[#7F77DD] h-full w-1/2'} ${isLogin ? 'left-0' : 'left-[50%]'}`}
      >
        <div className="flex items-center justify-center p-2 bg-[#AFA9EC] rounded-lg">
          <NotebookPen color="white" />
        </div>
        <h1 className="text-white font-bold text-2xl">Bem-vindo de volta</h1>
        <p className="text-white text-xs opacity-80">
          Entre na sua conta e continue moldando seu currículo com IA
        </p>
      </div>
      <div className="flex flex-col items-center justify-center gap-2 h-full w-1/2">
        <div className="mb-10">
          <span className="text-[#7f77dd] jk-font font-bold text-4xl">
            Molda
          </span>
          <span className="text-[#010101] jk-font font-bold text-4xl">CV</span>
        </div>
        <form className="flex flex-col gap-2">
          <Input label="E-mail" type="text" placeholder="Digite seu email" />
          <Input label="Senha" type="password" placeholder="Insira sua senha" />
          <Button text="Entrar" type="submit" />
        </form>
        <Divider text="ou" />
        <Button text="Registre-se" type="button" onSwitch={onSwitch} />
        <button className="flex justify-center items-center mt-2 gap-2 p-2 border rounded-lg cursor-pointer transition duration-500 hover:bg-[#F1F1F1]">
          <img
            src="src\assets\google.svg"
            alt="Logo da Google"
            className="h-6 w-6"
          />
          <p>Entre com Google</p>
        </button>
      </div>
      <div className="flex flex-col items-center justify-center gap-2 h-full w-1/2">
        <div className="mb-10">
          <span className="text-[#7f77dd] jk-font font-bold text-4xl">
            Molda
          </span>
          <span className="text-[#010101] jk-font font-bold text-4xl">CV</span>
        </div>
        <form className="flex flex-col gap-2">
          <Input label="E-mail" type="text" placeholder="Digite seu email" />
          <Input label="Senha" type="password" placeholder="Insira sua senha" />
          <Button text="Entrar" type="submit" />
        </form>
        <Divider text="ou" />
        <Button text="Registre-se" type="button" onSwitch={onSwitch} />
        <button className="flex justify-center items-center mt-2 gap-2 p-2 border rounded-lg cursor-pointer transition duration-500 hover:bg-[#F1F1F1]">
          <img
            src="src\assets\google.svg"
            alt="Logo da Google"
            className="h-6 w-6"
          />
          <p>Entre com Google</p>
        </button>
      </div>
    </div>
  )
}

export default Auth
