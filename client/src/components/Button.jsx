

const Button = (props) =>{
    
    const {text, onClick,reserved} = props

    return (
        
            <button onClick={onClick}  className='font-semibold h-[50px] w-[92.28px] focus:text-white border-b border-r focus:bg-blue-500  hover:bg-gray-200 cursor-pointer  border-gray-400 text-lg p-3'>{reserved?'Reserved':text}</button>
    )
}

export default Button