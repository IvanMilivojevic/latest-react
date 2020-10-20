import React from "react";

const withClass = (ComponentDep, styleClass) => {
  return (props) => {
    return (
      <div className={styleClass}>
        <ComponentDep {...props} />
      </div>
    );
  };
};

export default withClass;
