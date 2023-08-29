import React from "react";
import "./work-card.css";

function WorkCard({ item }) {
  return (
    <div className="work-card">
      <img src={item.companyLogo} alt="Company Logo" className="work-logo" />
      <div className="work-info">
        <label className="designation-name">{item.designation}</label>
        <div className="work-dates">
          <label className="company-name">{item.company}</label> | <label>{item.dateJoin}</label> - <label>{item.dateEnd}</label>
        </div>
        <div className="work-desc">
          <p>
            {item.works.map((work) => {
              return <p>● {work}</p>;
            })}
          </p>
          ;
        </div>
      </div>
    </div>
  );
}

export default WorkCard;
