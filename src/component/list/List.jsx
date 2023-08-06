import ListRow from "./ListRow";
import ListRowCell from "./ListRowCell";

import ListHeader from "./ListHeader";
import ListHeaderCell from "./ListHeaderCell";

import styles from "./List.module.css";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
// import { sendJsonData } from '../redux/action';

// import { connect } from 'react-redux';
// import { sendJsonData } from './actions';

const List = ({ rows,timestamps,curVal}) => {

  const dispatch = useDispatch();
  // console.log(timestamps.timeStamps[0].orderStatus)
  // console.log(timestamps[0].timestamps.orderSubmitted)
  const [externaldata,setexternaldata]=useState({})
  const [externaltime,setexternaltime]=useState({})
  console.log("external data : ", externaldata)
  console.log("external time : ", externaltime)
  
   function storeAndcall(params,ind) {
      setexternaldata(params);
      // sendJsonData(externaldata);
       let timeval = timestamps[ind ].timestamps;
       console.log('timeval', timeval);
      setexternaltime(timeval);
    }

    useEffect(() => {
      temp_func();
      temp_func1();
    })
    
    const temp_func = () => {
      console.log("external_data inside temp_function: ", externaldata)
      dispatch({
        type : "getData_action",
        payload : externaldata
      })
    }
    const temp_func1 = () => {
      console.log("external_data inside temp_function: ", externaltime)
      dispatch({
        type : "getData_action1",
        payload : externaltime
      })
    }

  return (
    <table className={styles.container}>
      <thead>
        <ListHeader>
          <ListHeaderCell>Order ID</ListHeaderCell>
          <ListHeaderCell>Buy/Sell</ListHeaderCell>
          <ListHeaderCell>Country</ListHeaderCell>
          <ListHeaderCell>Order Submitted</ListHeaderCell>
          <ListHeaderCell>Order Volume / {curVal}</ListHeaderCell>
        </ListHeader>
      </thead>
      <tbody>
        {rows.map((row,index) => (
          
          <ListRow>

            <ListRowCell onClick={ ()=>storeAndcall(row,index)} >{row["&id"]}</ListRowCell>
            <ListRowCell onClick={ ()=>storeAndcall(row , index)}>{row.executionDetails.buySellIndicator}</ListRowCell>
            <ListRowCell onClick={ ()=>storeAndcall(row , index)}>{row.executionDetails.orderStatus}</ListRowCell>
            <ListRowCell onClick={ ()=>storeAndcall(row , index)}>{timestamps[index].timestamps.orderSubmitted}</ListRowCell>
            <ListRowCell onClick={ ()=>storeAndcall(row , index)}>{row.bestExecutionData.orderVolume[curVal]}</ListRowCell>
          </ListRow>
        ))}
      </tbody>
    </table>
  );
};


// export default List;
export default List;
