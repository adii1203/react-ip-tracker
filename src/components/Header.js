import Input from './Input'
import Result from './Result'
import Fail from './Fail'
import Loader from './Loader'

const Header = ({ip, setIp, handelSubmit, data, isLoading, fetchError}) => {
    
    return(
        <div className="h-56 bg-black md:bg-bg-desktop bg-bg-mobile bg-cover text-center bg-no-repeat relative">
            <h1 className="text-white font-Rubik font-500 text-2xl pt-6">IP Address Tracker</h1>
            <Input 
                ip={ip}
                setIp={setIp}
                handelSubmit={handelSubmit}
            />

            {
                isLoading ? <Loader /> : fetchError ? <></> : data.error === true ? <Fail data={data} /> : <Result data={data} />
            }
        </div>
    )
}

export default Header