import {useState} from "react";
import './App.css';
import About from "./Component/About";
import Home from "./Page/Home";

function App() {
  const [page,setPage]=useState(0);
  
  return (
      <div className="App">
    <button className="App-link" onClick={()=>page===0?setPage(1):setPage(0)}>Click me</button>

      {page===0?<About/>:<Home/>}
      
     </div>
   );
}

export default App;
