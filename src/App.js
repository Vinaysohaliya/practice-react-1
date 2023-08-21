import { useState } from "react";
import "./App.css";
import Card from "./card";

function App() {
  const [q, setq] = useState(["name", "email"]);

function change() {
  setq(["number","fname","email","password"])
}


  return (
    <div>
      <div>
      {q.map((ele)=>{
        return <Card p={ele}/>
      })}
    </div>
    <button onClick={change}>sign in</button>
    </div>

  );
}

export default App;
