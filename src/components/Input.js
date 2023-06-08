import icon_arrow from '../assets/images/icon-arrow.svg'

const Input = ({ip, setIp, handelSubmit}) => {
    return(
        <div className='flex items-center justify-center mt-10 mx-2'>
                <div className='bg-white w-[21rem] py-2 text-left pl-4 rounded-l-lg'>
                    <lable htmlFor="input" className="hidden">input</lable>
                    <input 
                        className= 'outline-none text-sm font-Rubik w-full'
                        type='text'
                        placeholder="Search for any IP address"
                        id="input"
                        value={ip}
                        onChange={(e) => setIp(e.target.value)}
                    />
                </div>
                <div className=" bg-black rounded-r-lg w-10 h-10 hover:bg-[#2b2b2b]">
                    <button onClick={() => handelSubmit()} className='w-full h-full grid place-content-center'>
                        <img src={icon_arrow} alt=''/>
                    </button>
                </div>
        </div>
    )
}

export default Input