import React from "react";

import ChartBar from "./ChartBar";

import "./Chart.css";

const Chart = (props) => {
  const dataPointValue = props.dataPoints.map((dataPoint) => {
    return dataPoint.value;
  });
  const totalMaxValue = Math.max(...dataPointValue);

  return (
    <div className="chart">
      {props.dataPoints.map((dataPoint) => {
        return <ChartBar key={dataPoint.id} value={dataPoint.value} maxValue={totalMaxValue} label={dataPoint.label}></ChartBar>;
      })}
    </div>
  );
};

export default Chart;
