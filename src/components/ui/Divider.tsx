import React from 'react'

interface DividerProps {
  text: string
}

const Divider = ({ text }: DividerProps) => {
  return (
    <div className="flex items-center justify-center gap-1 w-1/1 p-2 my-2">
      <div className="border-b-2 border-[#7f77dd] w-1/2"></div>
      <p className="font-bold text-sm text-[#7f77dd] uppercase">{text}</p>
      <div className="border-b-2 border-[#7f77dd] w-1/2"></div>
    </div>
  )
}

export default Divider
