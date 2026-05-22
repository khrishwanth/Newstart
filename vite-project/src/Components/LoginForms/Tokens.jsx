import { update_tokendb , token_db } from "../../Databases/TokenDb";

 export default function GenerateToken(props){
     const token = Math.random();
     const refreshTime = 1000*10;

    function takesuser(name,token){
    this.username=name;
    this.refreshToken = token;    }

     const newuser = new takesuser(props,token);
     localStorage.setItem("cur_user",JSON.stringify(props));
     localStorage.setItem("cur_token",token)
     update_tokendb(newuser);


function updateToken(){
  const name = localStorage.getItem("cur_user");
  const curuser = token_db.find(user => user.username === name );
  if(token_db.includes(curuser)){
    localStorage.setItem("cur_token",0);
  }
}
 setTimeout(updateToken , refreshTime);
 }

function validateToken(){
  const curToken = localStorage.getItem("cur_token");
  if(curToken === 0){
    return <p>Sorry token is expired , request again</p>
  }
}
