1) In the title of the header, it displays 5 orders but there are 6 orders in the table. We want to display the total number of orders in the header title.
  const [count,setCount]=useState(0);
====>  count the length
  useEffect(()=>{ 
   setCount(mockData.results.length);
  })
pass count
<HeaderTitle primaryTitle="Orders" secondaryTitle={count} />

2)In the table order submitted date is missing, we have timestamp data included in the src\assets\timeStamps.json with the corresponding ids, please combine that with the order data and make sure the order submitted date is being displayed in the table.
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

      used timestamps[index] to fetch corresponding value.
3)Order Volume cell is displaying USD values, can you please make it display the currency value selected on the dropdown located in the header of the dashboard

used state to  store the value of selected currency type
  <Dropdown
            options={["GBP", "USD", "JPY", "EUR"]}
            onChange={(e) => setCurrency(e.target.value)}
            selectedItem={currency}
          />


passed value in list
<List rows={mockData.results} timestamps={timestamps.results} curVal={currency} />
Then fetched data using curVal;
<ListRowCell onClick={ ()=>storeAndcall(row , index)}>{row.bestExecutionData.orderVolume[curVal]}</ListRowCell>

4) Can you please add search feature on the order IDs with the search bar given in the header
  ====> stores input
    const [inputText, setInputText] = useState("");
  let setChange = (e) => {
    
    var lowerCase = e.target.value;
    console.log(lowerCase)
    setInputText(lowerCase);
  };

====>  input value passed to DiList
<Dislist input={inputText}/>

displayList.js
This code is a React functional component called Dislist. It takes a prop named input, which seems to be a string value. It fetches and displays specific data from a JSON file based on the input prop.

5)Please clear the console errors and warnings.
Provide a key prop to each of the rendered <li> elements inside the .map() function. The key should be a unique identifier associated with the data being rendered. In your case, you can use the &id property from the filteredData items as the key prop for the <li> elements.

6)When user selects an order, can you populate the Card on top of the listing component as shown in the image
used redux for this
=>created reducer store and action . transfered date from list.jsx to dashboard.jsx onclick and then passed object in card.

store.js
export const store = configureStore({
  reducer: {
    selectedRow_reducer, //for the first table
    selectedTime_reducer  //for the second table
  },
});


reducer.js

import {createReducer} from '@reduxjs/toolkit';

const initialState = "";

export const selectedRow_reducer = createReducer(initialState, (builder) => {     //for the first table
  builder
    .addCase("getData_action", (state,action) => {
        console.log("running this reducer")
        console.log("action.payload : ", action.payload)
      return state  = action.payload
    })
    
    .addDefaultCase((state) => state);
});


const initialState1 = "";

export const selectedTime_reducer = createReducer(initialState1, (builder) => {     //for second table
  builder
    .addCase("getData_action1", (state,action) => {
        console.log("running this second reducer")
        console.log("action.payload : ", action.payload)
      return state  = action.payload
    })
    
    .addDefaultCase((state) => state);
});


action.js

export const Data = 'Data';

export const sendJsonData = (jsonData) => ({
  type: Data,
  payload: jsonData,
});

List.jsx
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


temp_func:

This function logs the value of externaldata to the console.
It dispatches a Redux action with type "getData_action" and the value of externaldata as the payload.

temp_func1:

Similar to temp_func, this function logs the value of externaltime.
It dispatches a Redux action with type "getData_action1" and the value of externaltime as the payload.

Dashboard.jsx
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


selectedRow_selector:

This code uses the useSelector hook to access a specific piece of state called selectedRow_reducer from the Redux store.
The extracted data is stored in the selectedRow_selector variable.
The selectedRow_reducer likely contains information about a selected row in your application's state.
selectedTime_selector:

Similar to selectedRow_selector, this code uses useSelector to access the selectedTime_reducer piece of state from the Redux store.
The extracted data is stored in the selectedTime_selector variable.
The selectedTime_reducer probably holds information related to a selected time or time-related data in your application.
