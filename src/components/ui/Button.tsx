interface ButtonProps {
  text: string
  to: string
}

const Button = ({ text }: ButtonProps) => {
  return (
    <button className="flex jk-font rounded-xl items-center justify-center p-3 transition duration-500 border border-[#7f77dd] bg-[#F1F1F1] text-[#7f77dd] hover:bg-[#7f77dd] hover:text-[#F9F9F9]"></button>
  )
}

export default Button
