import {X} from 'lucide-react'
import { useState } from 'react'
import Balance from './balance';

export function Popup({onClose}){

    const [Mpin ,setMpin] = useState("");

    function fet_bal(){
        <Balance Mpin={Mpin}/>
    }

    return <div className='fixed inset-0 bg-black bg-opacity-30 backdrop-blur-sm justify-center flex justify-center rounded-xl'>
        <div className='flex flex-col p-4 w-1/3 '>
            <button className='place-self-end text-white' onClick={onClose}> <X size={30}/> </button>
            <div className='bg-gray-500 rounded-xl p-4'>
                <div className='flex justify-center text-5xl text-white'> Enter MPIN </div> 
                <form className='flex flex-col p-3'>
                    <input onChange={(e) =>{setMpin(e.target.value)}} type='text' className='bg-gray-800 p-2  text-3xl text-white rounded-xl'/>
                    <button onClick={fet_bal} className='bg-black p-4 rounded-xl text-white text-lg mt-2'> Check Balance</button>
                </form>
            </div>
        </div>
    </div>
}