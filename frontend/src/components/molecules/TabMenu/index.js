import React from "react";
import { Wrapper } from "./styles";

const TabMenu = ({ tabNames, onTabClick, activeTab }) => {
  return (
    <Wrapper>
      <div className="tabs">
        {[...Array(tabNames.length).keys()].map((i) => (
          <button
            key={i}
            onClick={() => onTabClick(i)}
            className={activeTab === i ? "active" : ""}
          >
            {tabNames[i]}
          </button>
        ))}
      </div>
    </Wrapper>
  );
};

export default TabMenu;
