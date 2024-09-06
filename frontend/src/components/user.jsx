import {useState , useEffect} from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

function User()
{
    const [filter,setFilter] = useState("");
    const [users,setusers] = useState([])
    const navigate = useNavigate()
    const token = sessionStorage.getItem('token');
    useEffect(function (){
        async function fun()
        {
            try{
                const response = await axios.get("http://localhost:4000/api/v1/user/bulk?filter="+filter);
                setusers(response.data.user);
            }
            catch(err)
            {
                console.log("Error in Fetching Users : ", err);
            }
        }
        if(token)
        {
            fun();
        }

    }, [token,filter] )


    return <div className="p-4 bg-white shadow-md rounded-lg w-full max-w-md mx-auto">
        <div className="text-2xl font-bold text-gray-800 mb-4">
            User
        </div>
        <input onChange={(e)=>{
            setFilter(e.target.value)
        }}
         type="text" placeholder="Search User..." className= "w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-300">
        </input>
        <div>
            {users.map(user => <User_bar user={user}/>)}
        </div>
    </div>
}

function User_bar({user})
{
    const navigate = useNavigate();
    return (
        <div className="flex items-center justify-between p-4 bg-white shadow-md rounded-lg max-w-lg mx-auto">
          <div className="flex items-center space-x-4">
            <div className="w-12 h-12 flex items-center justify-center text-xl font-semibold text-white bg-black rounded-full">
              {user.firstName[0]}
            </div>
            <div className="text-lg font-medium text-gray-800">
              {user.firstName}
            </div>
          </div>
          <button onClick={()=>{console.log("ID is :",user._id)
            navigate(`/send?id=${user._id}&&name=${user.firstName}`)}} className="px-4 py-2 bg-blue-500 text-white font-semibold rounded-lg shadow-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-400 transition duration-300">
            Send
          </button>
        </div>
      );
}

export default User;