import { Link } from 'react-router-dom'

interface LinkButtonProps {
  text: string
  to: string
}

const LinkButton = ({ text, to }: LinkButtonProps) => {
  return (
    <Link
      to={to}
      className="flex jk-font rounded-xl items-center justify-center p-3 transition duration-500 border border-[#7f77dd] bg-[#F1F1F1] text-[#7f77dd] hover:bg-[#7f77dd] hover:text-[#F9F9F9]"
    >
      {text}
    </Link>
  )
}

export default LinkButton
