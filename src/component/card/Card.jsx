// import { useEffect, useState } from "react";
// import styles from "./Card.module.css";
// import mockData from "../../assets/data.json";


// const Card = ({ cardData, title }) => {
// const [val,setVal]=useState({})
//   useEffect(()=>{
//     setVal(cardData.executionDetails);
//     console.log( "cardDat:",cardData);
//   })

//   useEffect(() =>{
//     console.log("val : ", val)
//   })
//   if (typeof cardData.e === "object" && cardData !== null) {
//     console.log('card is object');
//   }
//   // console.log('cardData', val);
//   if (!cardData) return null;
//   return (
//     // <div className={styles.container}>
//     //   <div className={styles.title}>{title}</div>

//     //   {cardData.results.map((dataItem, index) => (
//     //     <div key={index} className={styles.cell}>
//     //       {dataItem.executionDetails && (
//     //         <div>
//     //           <div className={styles.value}>Buy/Sell: {dataItem.executionDetails.buySellIndicator}</div>
//     //           <div className={styles.value}>Order Status: {dataItem.executionDetails.orderStatus}</div>
//     //           <div className={styles.value}>Order Type: {dataItem.executionDetails.orderType}</div>
//     //           {/* Add more properties from executionDetails as needed */}
//     //         </div>
//     //       )}

//     //   {/* {Object.entries(cardData.results.executionDetails).map([k,v])=>
//     //   {
//     //     <div className={styles.cell}>
//     //       <div className={styles.value}>{k}</div>
//     //       <div className={styles.value}>{v}</div>
//     //     </div>
//     //   }} */}
//     // </div>
//     <div className={styles.container}>
//   <div className={styles.title}>{title}</div>

//   {cardData && (
//     <div className={styles.cell}>
//           <div className={styles.value}>Buy/Sell Indicator: {val?.buySellIndicator}</div>
//       </div>
  
//   )}

// </div>



//   );
// };

// export default Card;
import styles from "./Card.module.css";
import { useEffect, useState } from "react";



const Card = ({ cardData, title }) => {
  const [val,setVal]=useState({})
  useEffect(()=>{
    if(cardData.executionDetails){
    setVal(cardData.executionDetails);
  }else{
    setVal(cardData);
  }

    console.log( "cardDat:",cardData);
  })

  useEffect(() =>{
    console.log("val : ", val)
  })
  if (!cardData) return null;
  return (
    <div className={styles.container}>
      <div className={styles.title}>{title}</div>
      {val && Object.entries(val).map(([k, v,i]) => (
        <div className={styles.cell} key={i}>
          <div className={styles.value}>{k}</div>
          <div className={styles.value}>{v}</div>
        </div>
      ))}
    </div>
  );
};

export default Card;