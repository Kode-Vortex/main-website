import "./BoxSection.css"
const BoxSection = ({element}) => {
  return (
    <div className='w-[90%] h-[6vh] rounded-full text-black text-sm flex justify-center items-center tracking-wide bg-box-col '>
      {element}
        
    </div>
  )
}

export default BoxSection