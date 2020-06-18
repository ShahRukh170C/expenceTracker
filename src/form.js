import React, { useState ,useContext} from 'react';
import { GlobleContext } from "./stateAndReducer/GlobelState";

function Form() {
  // Declare a new state variable, which we'll call "count"
  let [itmName, setItmName] = useState('');
  let [itmAmount, setItmAmount] = useState('');

  const updateItmName = e => {
    setItmName(e.target.value)
    console.log(itmName)
  }

  const updateItmAmount = e => {
    setItmAmount(e.target.value)
    // Add the object the Hook and
    // use to perform some operation on the hooks data
  }


  const onSubmittForm = (e) => {
    var today = new Date();
    e.preventDefault();
    const cObject = {
      id : Math.floor(Math.random()*1000000),
      text:itmName,
      price : +itmAmount,
      time: today.getHours() + ":" + today.getMinutes()
    }
    itmName="";
    itmAmount="";
    // console.log(cObject)
    addTransaction(cObject)
  }
  const {addTransaction} =useContext(GlobleContext);
  return (
    <form onSubmit={onSubmittForm}>
      <label>Text</label>
      <input type="text" name="itmName"  value={itmName} onChange={updateItmName} placeholder="Enter Item">
      </input>
      <label>Amount</label>
      <input type="text" name="itmAmount"  value={itmAmount} onChange={updateItmAmount} placeholder="Enter Amount">
      </input>
      <button className="btn">Click ME</button>
    </form>
  );
}
export default Form;