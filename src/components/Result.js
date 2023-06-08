const Result = ({data}) => {
    return(
        <div className=" bg-white absolute left-1/2 top-1/2 translate-x-[-50%] w-[90%] mt-14 rounded-2xl py-3 font-Rubik flex flex-col gap-4 sm:flex-row sm:justify-around sm:px-4 sm:py-6 z-[500] sm:flex-wrap break-words shadow-2xl ">
            <div className=" ">
                <p className="uppercase text-sm text-[#969696]">ip address</p>
                <p className="text-[#2b2b2b] font-500 text-xl capitalize break-words">{data.ip}</p>
            </div>
            <div>
                <p className="uppercase text-sm text-[#969696]">location</p>
                <p className="text-[#2b2b2b] font-500 text-xl capitalize ">{data.city} {data.country_code}<br/>{data.postal}</p>
            </div>
            <div>
                <p className="uppercase text-sm text-[#969696]">timezone</p>
                <p className="text-[#2b2b2b] font-500 text-xl capitalize">{data.timezone}</p>
            </div>
            <div>
                <p className="uppercase text-sm text-[#969696]">isp</p>
                <p className="text-[#2b2b2b] font-500 text-xl capitalize">{data.org}</p>
            </div>
        </div>
    )
}

export default Result