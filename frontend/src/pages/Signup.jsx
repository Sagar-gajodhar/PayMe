import { useState } from "react";
import {useNavigate} from "react-router-dom"
import axios from "axios"

import  Input  from "../components/input";
import Heading from "../components/heading";
import Button from "../components/button";
import Bottom from "../components/bottom";


function SignUp()
{
    const [firstName , setFirstName] = useState("");
    const [lastName , setLastName] = useState("");
    const [username , setusername] = useState("");
    const [password , setPassword] = useState("");
    const [Mpin , setMpin] = useState(0);
    const navigate = useNavigate();

    async function clickhandler()
    {
        const response = await axios.post("http://localhost:4000/api/v1/user/signup",{
            firstName : firstName,
            lastName : lastName,
            username : username,
            password : password,
            Mpin : Mpin
        })
        sessionStorage.setItem("token",response.data.token);
        navigate("/dashboard")
    } 

    return <div className="bg-slate-300 h-screen w-screen flex justify-center items-center">
        <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md space-y-4">
            <Heading title={"SignUp"} sub_title={"Sign up to get started"}/>
            <Input onchange={(e) => {setFirstName(e.target.value);}}  title = {"First Name"} ph = {"Enter your First Name"}/>
            <Input onchange={(e) => {setLastName(e.target.value);}}  title = {"Last Name"} ph = {"Enter your Last Name"}/>
            <Input onchange={(e) => {setusername(e.target.value);}} title = {"username"} ph = {"Enter your username"}/>
            <Input onchange={(e) => {setPassword(e.target.value)}} title = {"Password"} ph = {"Enter your password"}/>
            <Input onchange={(e) => {setMpin(e.target.value)}} title = {"MPIN"} ph = {"Enter your Mpin"} />
            <Button onClick={clickhandler} title = {"SignUp"}/>
            <Bottom onclick={function(){ navigate("/signin")}} title={"Already have an account?"} btn={"Login"}/>
        </div>
    </div>
}

export default SignUp;