import React from "react";
import "./menu-item.styles.scss";
import {withRouter} from 'react-router-dom'

const MenuItem = ({ title, imageUrl, size , linkUrl, history, match }) => (
  <div className={`menu-item ${size}`}
        onClick={()=> history.push(`${match.url}${linkUrl}`)}
  >
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

export default withRouter(MenuItem);
