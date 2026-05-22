import {useState} from "react"
import useNavigate from "react-router-dom"
import { user_db } from "../../Databases/UserDb";
import GenerateToken from "./Tokens"
export default function Login(){
    const[user,setUser] = useState[""];
    const[pswd ,setPswd] = useState[""];
    const[result,setresult] = usestate[''];
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

    function checkdetails(){
      const userdetails = user_db.find(u => u.user === user);
      if(!user_db.includes(userdetails)){
           navigate("./Register");
      }
      else{
        GenerateToken(userdetails.user);
      }
    }
    return (
      <>
        <form onSubmit={handlesubmit}>
         <input type="text" value={user} id="user">Enter the username</input>
         <input type="password" value={pswd} id="pswd">Enter the password</input>
         <button type="submit">Submit</button>
        </form>
      </>
    )
    
}