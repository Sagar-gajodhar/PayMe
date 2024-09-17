import App_bar from "../components/app_bar";
import Balance from "../components/balance";
import { Popup } from "../components/popup";
import User from "../components/user";

function Dashboard()
{
    return <div className="space-y-4">
        <App_bar/>
        <User/>
    </div>
}
export default Dashboard;