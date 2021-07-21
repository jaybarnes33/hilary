import React from "react";

const Educational = ({ data }) => {
  return (
    <div className="educational">
      {data.href.map((item) => (
        <div>
          <a href={item}>
            <div className="icon-right">{data.icon}</div>
            <h3>{data.title}</h3>
          </a>
        </div>
      ))}
    </div>
  );
};

export default Educational;
