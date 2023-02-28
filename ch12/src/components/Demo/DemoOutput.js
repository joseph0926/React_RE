import React from "react";

const DemoOutput = (props) => {
  return <p>{props.show ? "Messi" : ""}</p>;
};

export default React.memo(DemoOutput);
