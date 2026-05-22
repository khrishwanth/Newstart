export let user_db = [
  { user: "krish", psw: "success" },
  { user: "mine", psw: "mizuhara" },
  { user: "victory", psw: "consistent" }
];

export function update_userdb(props){
  user_db.push(props);
}

