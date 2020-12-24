import React from "react";

function Extras({ name, items }) {
  let randomColor = Math.floor(Math.random() * 16777215).toString(16);

  return (
    <div className="card-column">
      {/* <div className="card"> */}
      {/* <div
        className="notebook-editable-extras"
        style={{ backgroundColor: "#" + `${randomColor}` }}
      > */}
      <div className="notebook-editable-extras">
        <h4 className="notebook-editable-p">{name}</h4>
        <ul>
          {items.map((item) => (
            <li key={Math.random() * 1000}>{item.text}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default Extras;
