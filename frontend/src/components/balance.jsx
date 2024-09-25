import axios from "axios";
import {useState , useEffect} from "react"
import {X} from 'lucide-react'

function BalanceFet({Mpin,setbalance})
{
    const token = sessionStorage.getItem('token');

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get("http://localhost:4000/api/v1/account/balance",{
                    params : {Mpin},
                    headers : {Authorization : `Bearer ${token}`,}
                })
                setbalance(response.data.balance);
            } catch (error) {
                console.error("Error In fetching balance:", error);
            }
        };
        if(token) {
            fetchData();
        }
    }, [token])

    return null;
}

export default BalanceFet;