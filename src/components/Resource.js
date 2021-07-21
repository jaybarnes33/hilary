import React from "react";

const Educational = ({ data }) => {
  return (
    <div className="educational">
      <a href={data.href}>
        <div className="icon-right">{data.icon}</div>
        <h3>{data.title}</h3>
      </a>
    </div>
  );
};

export default Educational;
