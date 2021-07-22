import React from "react";

const Educational = ({ data }) => {
  return (
    <div className="educational">
      <h3>{data.title}</h3>
      {data.href.map((item, index) => (
        <div>
          <a href={item.url ? item.url : item} target="_blank" rel="noreferrer">
            {item.title ? item.title : data.title}
          </a>
        </div>
      ))}
    </div>
  );
};

export default Educational;
