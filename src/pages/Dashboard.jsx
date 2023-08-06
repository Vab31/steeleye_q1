import { useState } from "react";

// Data
import mockData from "../assets/data.json";
import timestamps from "../assets/timeStamps.json";

// Components
import Dropdown from "../component/dropdown/Dropdown";
import HeaderTitle from "../component/header-title/HeaderTitle";
import Search from "../component/search/Search";
import List from "../component/list/List";
// import { connect } from 'react-redux';
import styles from "./Dashboard.module.css";
import Card from "../component/card/Card";
import { useEffect } from "react";
import { useSelector } from "react-redux";

const Dashboard = ( {jsonData}) => {
  const [currency, setCurrency] = useState("EUR");
  const [searchText, setSearchText] = useState("");
  const [selectedOrderDetails, setSelectedOrderDetails] = useState({});
  const [selectedOrderTimeStamps, setSelectedOrderTimeStamps] = useState({});
  const [count,setCount]=useState(0);
  console.log(jsonData);
  const selectedRow_selector = useSelector(state => {
    const {selectedRow_reducer} = state;
    return selectedRow_reducer;
    // return state;
  })
  const selectedTime_selector = useSelector(state => {
    const {selectedTime_reducer} = state;
    return selectedTime_reducer;
    // return state;
  })
 
  
  useEffect(()=>{ 
 
  
    console.log("selectedRow_selector : ", selectedRow_selector)
    console.log("selectedTime_selector : ", selectedTime_selector)
    console.log(timestamps.results[0].timestamps.orderSubmitted);
    
    setCount(mockData.results.length);
  })
  useEffect(()=>{
    setSelectedOrderDetails(selectedRow_selector)
    setSelectedOrderTimeStamps(selectedTime_selector)
  },[selectedRow_selector,selectedTime_selector])

  // const [data, setData] = useState("");

  
  return (
    <div>
      <div className={styles.header}>
        <HeaderTitle primaryTitle="Orders" secondaryTitle={count} />
        <div className={styles.actionBox}>
          <Search
            
          />
          <Dropdown
            options={["GBP", "USD", "JPY", "EUR"]}
            onChange={(e) => setCurrency(e.target.value)}
            selectedItem={currency}
          />
        </div>
      </div>
      <div className={styles.content}>
        <div className={styles.section}>
          <Card
            cardData={selectedOrderDetails}
            title="Selected Order Details"
          />
          <Card
            cardData={selectedOrderTimeStamps}
            title="Selected Order Timestamps"
          />
        </div>
        <List rows={mockData.results} timestamps={timestamps.results} curVal={currency} />

      </div>
    </div>
  );
};


export default Dashboard;
