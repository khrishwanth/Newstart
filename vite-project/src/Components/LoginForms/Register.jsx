import { update_userdb } from "../../Databases/UserDb";
import { useState } from "react";

export default function RegisterNewUser(){
    const[user,setUser] = useState("");
    const[pswd ,setPswd] = useState("");
    const[result,setresult] = useState('');

    function handleuser(e){
        setUser(e.target.value);
    }
    function handlepswd(e){
        setPswd(e.target.value);
    }
    function handlesumbit(e){
        e.preventDefault();
    }

    function updateUserdb(){
        const newUser = {user , pswd};
        update_userdb(newUser);
    }

        return (
      <>
        <form onSubmit={handlesumbit}>
         <input type="text" value={user} id="user" onChange={handleuser} placeholder="username" />
         <input type="password" value={pswd} id="pswd" onChange={handlepswd} placeholder="password" />
         <button type="submit" onClick={updateUserdb}>Submit</button>
        </form>
      </>
    )
}