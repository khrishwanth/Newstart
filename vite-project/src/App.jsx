import Login from "./Components/LoginForms/LoginPage";
import Showdata from "./Components/Products/Test";
import { BrowserRouter , Routes , Route} from 'react-router-dom';
export default function Start(){
    return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Login />} />
       <Route  path="/"  element={<Showdata />}/>
    </Routes>
    </BrowserRouter>   
    ) 
}


// {/* <BrowserRouter>
//       <Routes>
//         <Route path="/" element={<Home />} />
//         <Route path="/about" element={<About />} />
//       </Routes>
// </BrowserRouter> */}