
export const PrimaryButton = ({children,...rest}) => {
  return (
    <button
    className="flex px-5 py-1 bg-[#CC3C39] hover:opacity-90 active:opacity-80 
    ease-in-out transition-all duration-75
    text-sm lg:text-xl text-white rounded-full"
    {...rest}
    >
        {children}
    </button>
  )
}

