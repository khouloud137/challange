import React from "react";

function BottonItem(props) {
  return (
    <div className="listBtn">
      <button className="btn">
        <img src={props.img} alt="" />
        <span> {props.Name} </span>
      </button>
    </div>
  );
}

export default BottonItem;
