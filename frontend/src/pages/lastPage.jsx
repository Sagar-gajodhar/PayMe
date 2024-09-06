import { useNavigate , useSearchParams } from "react-router-dom";
function LastPage()
{
    const [searchParames] = useSearchParams();
    const message = searchParames.get("message")
    const navigate = useNavigate();
    return (
        <div className="h-screen w-screen bg-gray-100 flex flex-col justify-center items-center">
          <div className="mb-4 p-6 bg-white rounded-lg shadow-md text-center">
            <p className="text-2xl font-semibold text-gray-800">{message}</p>
          </div>
          <button onClick={()=>{navigate("/dashboard")}}
           className="mt-4 px-6 py-3 bg-blue-600 text-white rounded-lg font-semibold hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500">
            Dashboard
          </button>
        </div>
      );
}

export default LastPage