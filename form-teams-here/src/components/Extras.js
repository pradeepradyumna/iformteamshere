import React from "react";

function Extras({ name, items }) {
  return (
    <div className="card-column">
      {/* <div className="card"> */}
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
