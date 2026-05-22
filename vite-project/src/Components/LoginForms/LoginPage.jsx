import {useState} from "react"
import useNavigate from "react-router-dom"
import database from "../../Databases/UserDb"
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
    function checkdetails(){
      const usercheck = database.find(u => u.user === user);
      if(!db.includes(usercheck)){
           navigate("./Register");
      }
      else{
        gen
      }
    }
    
}