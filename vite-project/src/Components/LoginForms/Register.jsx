import { update_userdb } from "../../Databases/UserDb";
import { useState } from "react";

export default function RegisterNewUser(){
    const[user,setUser] = useState("");
    const[pswd ,setPswd] = useState("");
    const[result,setresult] = usestate('');

    function handleuser(e){
        setUser(e.target.value);
    }
    function handlepswd(e){
        setPswd(e.target.value);
    }
    function updateDb(e){
        e.preventDefault();
        const newUser = {user , pswd};
        update_userdb(newUser);
    }

        return (
      <>
        <form onSubmit={updateDb}>
         <input type="text" value={user} id="user">Enter the username</input>
         <input type="password" value={pswd} id="pswd">Enter the password</input>
         <button type="submit">Submit</button>
        </form>
      </>
    )
}