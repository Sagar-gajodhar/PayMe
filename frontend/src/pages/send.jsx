import { useState } from "react";
import { useSearchParams, useNavigate } from "react-router-dom"
import axios from "axios"
function Send() {
  const [amount, setamount] = useState(0);
  const [searchParames] = useSearchParams();
  const to = searchParames.get("id");
  const receiversName = searchParames.get("name");
  const navigate = useNavigate();
  const token = sessionStorage.getItem("token");
  async function clickHandler() {
    const response = await axios.post("http://localhost:4000/api/v1/account/transfer",{
      to: to,
      amount: amount
    },{
      headers:{
        Authorization : `Bearer ${token}`
      }
    })
    const message = response.data.message;
    navigate(`/lastpage?message=${message}`)
  }

  return (
    <div className="h-screen w-screen bg-black flex justify-center items-center">
      <div className="text-white p-6 bg-gray-800 rounded-lg shadow-lg">
        <div className="mb-6 text-center text-2xl font-semibold">
          Enter Amount
        </div>
        <div className="flex flex-col items-center space-y-4">
          <label htmlFor="amount" className="sr-only">
            Amount
          </label>
          <input
            type="number"
            id="amount"
            placeholder="Enter amount"
            onChange={(e) => setamount(e.target.value)}
            className="w-full p-3 rounded bg-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-blue-500"/>
          <div className="mb-6 text-center text-xl font-semibold">
            {amount} Rs will be transferred to {receiversName}
          </div>
          <button
            onClick={clickHandler}
            className="w-full p-3 bg-blue-600 rounded text-white font-semibold hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500">
            Transfer
          </button>
        </div>
      </div>
    </div>
  );
}

export default Send;