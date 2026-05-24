import { validateToken } from "../TokensPage/Tokens";

export default function Showdata(){
     return (
        <>
        <p>{validateToken ? "Sucess" : "no"}</p>
        </>
     )
}