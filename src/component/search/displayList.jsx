import React, { useEffect, useState } from 'react';
import data from "../../assets/data.json";

function Dislist(props) {
    const [str,setStr]=useState('')
    useEffect(()=>{
         setStr(props.input);
         console.log(str);
    },[props])
    // console.log('props', props);

    // Filter the data array based on the condition
    const filteredData = data.results.filter((item) => item["&id"] === props.input);

    console.log(filteredData);

    return (
        <ul>
            {filteredData.length!=0?filteredData.map((item) => (
                <li key={item["&id"]}>{item.executionDetails.orderStatus}</li>
            )):<p></p>
            }
            {
                (filteredData.length==0 & str.length !=0)? <p>Not Found</p>:
                <p></p>
                
            }
            
        </ul>
    );
}

export default Dislist;
