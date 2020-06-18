import React from "react";
import "./App.css";
import Balance from "./balance-expence";
import ItemToTrack from "./itemsToTrack";
import Form from "./form";
import {GlobleProvider} from './stateAndReducer/GlobelState';


let getDateMonth = () => {
  var d = new Date();
  var dateMonth = d.getDate();
  var month = new Array();
  month[0] = "Jan";
  month[1] = "Feb";
  month[2] = "Mar";
  month[3] = "Apr";
  month[4] = "May";
  month[5] = "Jun";
  month[6] = "July";
  month[7] = "Aug";
  month[8] = "Sep";
  month[9] = "Oct";
  month[10] = "Nov";
  month[11] = "Dec";
  var month_name = month[d.getMonth()];

  return dateMonth={
    date: dateMonth,
    month_name:month_name
  }
}

// Globle state Export

function App() {
  let dateMonth=getDateMonth();
  return (
    <GlobleProvider>  
      <div className="contain">
        <section className="mainContainor">

          <section className="top">
            <div className="date">
              <span className="mdate">{dateMonth.date}</span>
              <span className="month">{dateMonth.month_name}</span>
            </div>
            <div className="logo">Expence Tracker</div>

          </section>

          {/* import */}
          <Balance></Balance>

          {/* import */}

          <ItemToTrack></ItemToTrack>

          <h2> Add New Transaction</h2>

          {/* import */}
          <Form></Form>
        </section>
      </div>
      </GlobleProvider>
  );
}

export default App;
