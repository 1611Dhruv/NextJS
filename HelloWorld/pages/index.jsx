import { useState } from "react";

function Header({title}){
    return <h1>{title ? title: "Default Title"}</h1>;
}

export default function HomePage(){

  const names = ['John', 'Jane', 'Mary'];
  const [likes,setlikes] = useState(0);

  function handleClick(){
    setlikes(likes + 1);
  }

  return(
    <div>
      <Header title="Develop. Preview. Ship. 🚀"/>
      <Header/>
      <ul>
        {names.map((name)=>(
          <li key={name}>{name}</li>
        ))}
      </ul>

      <button onClick={handleClick}> Like ({likes})</button>
    </div>
  )
}

