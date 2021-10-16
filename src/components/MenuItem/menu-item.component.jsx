import React from "react";
import "./menu-item.styles.scss";

const MenuItem = ({ title, imageUrl, size }) => (
  <div className={`menu-item ${size}`}>
    <div
      style={{ backgroundImage: `url(${imageUrl})` }}
      className={`background-image ${size}`}
     />
      <div className="content">
        <div className="title">{title}</div>
        <span className="subtitle">SHOP NOW</span>
      </div>
  </div>
);

export default MenuItem;
