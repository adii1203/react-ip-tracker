import Header from "./components/Header";
import Map from "./components/Map";
import { useState } from "react";
function App() {
  const [ip, setIp] = useState('')
  const [data, setData] = useState({})
  const [isLoading, setIsLoading] = useState(false)
  const [fetchError, setFetchError] = useState(null)
  
  const handelSubmit = async () => {
      try {
          if(ip){
              setIsLoading(true)
              setIp('')
              const req = await fetch(`https://ipapi.co/${ip}/json/`)
              if(!req.ok) throw Error(req.status)
              const res = await req.json()
              setData(res)
              setIsLoading(false)
              setFetchError(null)
              console.log(res);
          }
      } catch (err) {
        setFetchError(err.message)
        setIsLoading(false)
      }
  }
  return (
    <div className="App">
      <Header
        ip={ip}
        setIp={setIp}
        handelSubmit={handelSubmit}
        data={data}
        isLoading={isLoading}
        fetchError={fetchError}
      />
      {
        fetchError && <h1 className="text-center text-2xl text-red-400 font-500 mt-10 underline">{fetchError} NOT FOUND</h1>
      }
      {
        data.latitude && <Map data={data} />
      }
    </div>
  );
}

export default App;
