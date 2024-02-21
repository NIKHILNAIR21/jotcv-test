import React from "react";

const Scrollable = ({ items }) => (
  <div className="scrollable-list p-4  border-2 bg-white w-[450px] h-[500px] overflow-auto rounded-md m-4">
    <ul>
      {items.map((item, index) => (
        <li key={index} className="py-2 border-b last:border-b-0">
          {item}
        </li>
      ))}
    </ul>
  </div>
);

export default Scrollable;
