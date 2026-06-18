interface ButtonProps {
  text: string
  type: 'submit' | 'reset' | 'button'
  onSwitch?: () => void
}

const Button = ({ text, type, onSwitch }: ButtonProps) => {
  return (
    <button
      type={type}
      className="flex jk-font rounded-xl items-center justify-center p-3 transition duration-500 border border-[#7f77dd] bg-[#F1F1F1] text-[#7f77dd] cursor-pointer hover:bg-[#7f77dd] hover:text-[#F9F9F9]"
      onClick={onSwitch}
    >
      {text}
    </button>
  )
}

export default Button
