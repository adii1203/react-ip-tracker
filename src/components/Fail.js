const Fail = ({data}) => {
    return(
        <div className="bg-white sm:w-1/2 w-[90%] mx-auto mt-6 rounded-lg py-4 font-Rubik z-[500] relative shadow-2xl">
            <p className="text-[#2b2b2b] capitalize text-2xl font-500">{data.reason}</p>
            <p className="text-[#2b2b2b] capitalize text-lg">please provide correct ip: '{data.ip}'</p>
        </div>
    )
}

export default Fail