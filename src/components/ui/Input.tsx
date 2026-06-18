interface InputProps {
  label: string
  type: string
  placeholder?: string
}

const Input = ({ label, type, placeholder }: InputProps) => {
  return (
    <div>
      <label className="flex flex-col font-bold gap-1">
        {label}
        <input
          type={type}
          className="border border-[#AFA9EC] border-3 rounded-lg p-1"
          placeholder={placeholder}
        />
      </label>
    </div>
  )
}

export default Input
