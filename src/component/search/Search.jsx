import { useState } from "react";
import Dislist from "./displayList";


const Search = ({  }) => {

  const [inputText, setInputText] = useState("");
  let setChange = (e) => {
    
    var lowerCase = e.target.value;
    console.log(lowerCase)
    setInputText(lowerCase);
  };


  return (
    <div>
  <input type="text" value={inputText} onChange={setChange}  placeholder="Search"/>
  <Dislist input={inputText}/>
  </div>
)
}

export default Search
