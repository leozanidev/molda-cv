import { Link } from 'react-router-dom'
import LinkButton from '../ui/LinkButton'

const PublicNavBar = () => {
  return (
    <nav className="flex mb-5 justify-between p-5 items-center bg-[#F1F1F1] border-b-2 border-[#e5e7eb] shadow-md">
      <div className="hover:cursor-pointer">
        <Link to="/">
          <span className="text-[#7f77dd] jk-font font-bold text-2xl">
            Molda
          </span>
          <span className="text-[#010101] jk-font font-bold text-2xl">CV</span>
        </Link>
      </div>
      <div className="flex jk-font gap-30">
        <Link to="/" className="hover:text-[#555]">
          Sobre
        </Link>
        <Link to="/" className="hover:text-[#555]">
          Como funciona?
        </Link>
        <Link to="/" className="hover:text-[#555]">
          Contato
        </Link>
      </div>
      <div className="flex gap-2">
        <LinkButton text="Entrar" to="/auth" />
        <LinkButton text="Comece grátis" to="/auth" />
      </div>
    </nav>
  )
}

export default PublicNavBar
