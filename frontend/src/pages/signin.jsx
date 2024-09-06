import { useState } from "react";
import {useNavigate} from "react-router-dom"
import axios from "axios"

import  Input  from "../components/input";
import Heading from "../components/heading";
import Button from "../components/button";
import Bottom from "../components/bottom";

function SignIn()
{
    const [username , setusername] = useState("");
    const [password , setPassword] = useState("");
    const navigate = useNavigate();

    async function clickhandler()
    {
        try{
            const response = await axios.post("http://localhost:4000/api/v1/user/signin",{
                username,
                password
            })
            sessionStorage.setItem("token",response.data.token);
            navigate("/dashboard")
        }
        catch(err){
            {console.log(err);}
        }
    } 

    return <div className="bg-slate-300 h-screen w-screen flex justify-center items-center">
        <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md space-y-6">
            <Heading title={"SignIn"} sub_title={"Sign In to get started"}/>
            <Input onchange={(e) => {setusername(e.target.value);}} title = {"Email"} ph = {"Enter your username"}/>
            <Input onchange={(e) => {setPassword(e.target.value)}} title = {"Password"} ph = {"Enter you password"}/>
            <Button onClick={clickhandler} title = {"SignIn"}/>
            <Bottom onclick={() => navigate("/signup")} title={"Don't have an account?"} btn={"Signup"}/>
        </div>
    </div>
}

export default SignIn;