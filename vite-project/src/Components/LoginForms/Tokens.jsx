import Tokendatabase from "../../Databases/TokenDb";
 export default function GenerateToken(props){
     const token = Math.random();
     const newuser = new takesuser(props,token);
     localStorage.setItem("cur_user",JSON.stringify(props));
     localStorage.setItem("cur_token",token)
     token_db.push(newuser);
}

function takesuser(name,token){
    this.username=name;
    this.refreshToken = token;
}

function updateToken(){
  const name = localStorage.getItem("cur_user");
  const curuser = token_db.find(user => user === name );
  if(token_db.includes(curuser)){
    localStorage.setItem("cur_token",0);
  }
}

function validateToken(){
  const curToken = localStorage.getItem("cur_token");
  if(curToken === 0){
    return <p>Sorry token is expired , request again</p>
  }
}
