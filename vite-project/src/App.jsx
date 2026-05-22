export default function Start(){

    let name ="john";
    let hobby = "coin_collecting";
    function setname(e){
         name = e.target.value;
    }
    function sethobby(e){
          hobby = e.target.value;
    }
    return (

      <div>
        <input  value ={name}  onChange ={setname} placeholder="type_name" type="text"/> 
        <input  value={hobby} onChange ={sethobby} placeholder="type_hobby" type="text"/> 
        <p>{name}</p>
        <p>{hobby}</p>
      </div>
      
    )
}