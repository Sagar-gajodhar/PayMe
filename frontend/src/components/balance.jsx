import axios from "axios";
import {useState , useEffect} from "react"

function Balance()
{
    const [balance,setbalance ] = useState(0);
    const [firstName,setFirstName] = useState("");
    const token = sessionStorage.getItem('token');

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get("http://localhost:4000/api/v1/account/balance" , {
                    headers : {
                        Authorization : `Bearer ${token}`,
                    },
                });
                setbalance(response.data.balance);
            } catch (error) {
                console.error("Error In fetching balance:", error);
            }
        };
        if(token) {
            fetchData();
        }
    }, [token])

    useEffect(()=>{
        async function fun()
        {
            try
            {
                const response = await axios.get("http://localhost:3000/api/v1/user/info",{
                    headers:{
                        Authorization : `Bearer ${token}`
                    }
                })
                setFirstName(response.data.firstName)
            }catch(err){
                console.log("Error in Fetching name",err);
            }
        }
        if(token)
        {
            fun();
        }
    },[token]
    )

    return <div>
        <div className="font-bold text-black text-lg">
            Hi {firstName} Your Balance is : 
        </div>
        <div className=" font-semibold mt-5 text-black  text-4xl">
            {balance}
        </div>
    </div>
}

export default Balance;