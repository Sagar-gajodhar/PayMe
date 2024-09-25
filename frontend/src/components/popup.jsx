import { X } from "lucide-react"
import { useState , useEffect } from "react"
import BalanceFet from "./balance";
export function Popup({fun})
{
    const [balance,setbalance ] = useState(0);
    const [getbalance , setgetBalance] = useState(false);
    const [mpin , setmpin] = useState(0);
    function fet()
    {
        setgetBalance(true)
    }

    return <div className="fixed flex flex-col items-center inset-0 bg-black text-white bg-opacity-30 backdrop-blur-sm">
        {getbalance?         
            <div className="bg-black flex flex-col rounded-lg text-white p-4 space-y- w-1/3">
                <button onClick={fun} className="place-self-end"><X size={30}/></button>
                <BalanceFet Mpin={mpin} setbalance={setbalance}/>
                <div className="text-white font-bold text-5xl p-2"> Your Balance Is -:</div>
                <div className="text-white font-bold text-4xl p-2"> {balance}  </div>
            </div> 
            : 
            <div className="bg-black flex flex-col rounded-lg text-white p-4 space-y- w-1/3">
                <div className="space-y-2 flex flex-col">
                    <button onClick={fun} className="self-end"><X size={30}/></button>
                    <div className="text-5xl text-white">Enter MPIN</div>
                    <form className="flex flex-col space-y-2">
                        <input onChange={(e)=>{setmpin(e.target.value)}} placeholder="MPIN" className="p-2 rounded-lg text-black font-bold"/>
                        <button onClick={fet} className="bg-blue-500 p-2 rounded-lg">Check Balance</button>
                    </form>
                </div>
            </div>}
    </div>
}