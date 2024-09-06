import { useNavigate } from "react-router-dom"

function Landing()
{
    const navigate = useNavigate();
    return (
        <div className="h-screen w-screen flex flex-col justify-center items-center bg-slate-300">
            <div className="text-4xl font-bold text-gray-800 mb-6">
                Welcome To Pay
            </div>
            <div className="space-x-4">
                <button
                    onClick={() => navigate("/signup")}
                    className="px-6 py-3 bg-blue-600 text-white font-semibold rounded-lg shadow-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-75">
                    Get Started
                </button>
                <button
                    onClick={() => navigate("/signin")}
                    className="px-6 py-3 bg-gray-600 text-white font-semibold rounded-lg shadow-md hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-opacity-75">
                    Login
                </button>
            </div>
        </div>
    );
}
export default Landing;