import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Popup } from "./popup";

function App_bar() {

    const [showModel , setshowMode] = useState(false);

    const [firstName ,setFirstName] = useState("");
    const token = sessionStorage.getItem('token')
    const navigate = useNavigate();

    function clickHandler()
    {
      setshowMode(true)
    }


    useEffect(function (){
      async function fun()
      {
        try{
          const response = await axios.get("http://localhost:4000/api/v1/user/info",{
            headers:{
              Authorization : `Bearer ${token}`
            }
          })
          setFirstName(response.data.firstName)
        }catch(err)
        {
          console.log("Errror",token)
        }
      }
      if(token)
      {
        fun();
      }
    },[token])

    return (
      <div className="flex justify-between items-center bg-black p-4 shadow-md">
        {showModel && <Popup onClose={()=>{setshowMode(false)}}/>}
        <div className="flex items-center space-x-4">
          <div className="text-white text-2xl font-bold">
            PayMe
          </div>
          <button onClick={clickHandler}
           className="text-white bg-blue-500 hover:bg-blue-600 rounded-lg px-4 py-2 font-semibold focus:outline-none focus:ring-2 focus:ring-blue-400 transition duration-300">
            Check Balance
          </button> 
        </div>

        <div className="flex items-center space-x-4">
          <div className="w-10 h-10 flex items-center justify-center text-black bg-white rounded-full font-semibold">
            {firstName[0]}
          </div>
          <button onClick={()=>{navigate("/")}}
           className="text-white bg-blue-500 hover:bg-blue-600 rounded-lg px-4 py-2 font-semibold focus:outline-none focus:ring-2 focus:ring-blue-400 transition duration-300">
            Logout
          </button>
        </div>
      </div>
    );
  }
  
  export default App_bar;
  