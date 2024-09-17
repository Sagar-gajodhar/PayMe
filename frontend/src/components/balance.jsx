import axios from "axios";
import {useState , useEffect} from "react"

function Balance({Mpin})
{
    const [balance,setbalance ] = useState(0);
    const token = sessionStorage.getItem('token');

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get("http://localhost:4000/api/v1/account/balance" ,{
                    Mpin : Mpin
                }, {
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

    return <div className="fixed inset-0 bg-black bg-opacity-30 backdrop-blur-sm justify-center flex justify-center rounded-xl">
        <div className="flex flex-col p-4 w-1/3 justify-center items-center">
            <div className="text-white text-5xl">Your Balance Is -:</div>
            <div className="text-white text-4xl">{balance}</div>
        </div>
    </div>
}

export default Balance;