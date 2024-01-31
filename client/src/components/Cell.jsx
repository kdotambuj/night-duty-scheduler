
const Cell= (props) =>{
    
    const {text} = props
    return (
        <div className='flex h-[50px] w-[92.28px] border-b border-r  border-gray-400  items-center justify-center '>
            <p className='font-semibold text-lg p-3 '>{text}</p>
        </div>
    )
}

export default Cell