import {useState} from "react";
import {useNavigate} from "react-router-dom";
import { user_db } from "../../Databases/UserDb";
import {GenerateToken} from "../TokensPage/Tokens";

export default function Login(){
    const[user,setUser] = useState("");
    const[pswd ,setPswd] = useState("");
    const[result,setresult] = useState("");
    const navigate = useNavigate();

    function handleuser(e){
        setUser(e.target.value);
    }
    function handlepswd(e){
        setPswd(e.target.value);
    }

    function handlesubmit(e){
      e.preventDefault();
    }

    function redirectToRegister(){
      console.log("yes");
      const userdetails = user_db.find(u => u.user === user);
      if(!user_db.includes(userdetails)){
           navigate("./Register");
           console.log("if");
      }
      else{
        console.log("else");
        GenerateToken(userdetails.user);
      }
    }
    
    return (
      <div>
        <form onSubmit={handlesubmit}>
         <input type="text" value={user} id="user" onChange={handleuser} placeholder="username" />
         <input type="password" value={pswd} id="pswd" onChange={handlepswd} placeholder="password" />
         <button type="submit" onClick={redirectToRegister}>Submit</button>
        </form>
      
      </div>
      
    )
    
}