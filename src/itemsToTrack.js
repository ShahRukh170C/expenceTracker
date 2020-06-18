import React,{useContext} from "react";
import { GlobleContext } from "./stateAndReducer/GlobelState";

let Item = (props) => {
  const {deleteTransaction} =useContext(GlobleContext)
  const sign = props.price < 0 ? "-" : "+";
  const color = props.price < 0 ? "red" : "green";
  return (
    <div className="typeTransaction">
      <div className={`neg_postive ${color}`}></div>
      <div onClick= {()=>{deleteTransaction(props.id)}}  className="item">
        <span className="item-amount">
          
          {sign} $ {Math.abs(props.price)}
        </span>
        <span className="item-text">{props.name}</span>
      </div>
      <div className="time">{props.time}</div>
    </div>
  );
};

let ItemTracker = () => {
  const value = React.useContext(GlobleContext);
  return (
    <div className="overFlow">
      {value.transaction.map((item, index) => (
        <Item
          context={value}
          key={index}
          price={item.price}
          name={item.text}
          time={item.time}
          id={item.id}
        ></Item>
        // console.log(item)
      ))}
      {/* <Item price="$ 45" name="The Book Of Love" time="12:45" ></Item>
            <Item price="$ 45" name="The Book Of Love" time="12:45" ></Item>
            <Item price="$ 45" name="The Book Of Love" time="12:45" ></Item>
            <Item price="$ 45" name="The Book Of Love" time="12:45" ></Item>
            <Item price="$ 45" name="The Book Of Love" time="12:45" ></Item> */}
    </div>
  );
};

export default ItemTracker;
