import React from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip } from 'recharts';

interface LineChartData {
  date?: string;
  week?: number;
  average_time: number;
}

interface LineChartProps {
  data: LineChartData[];
  width: number;
  height: number;
}

const LineChartComponent: React.FC<LineChartProps> = ({ data, width, height }) => {
  // Determine the dataKey for XAxis based on the data
  const dataKey = data && data[0] && data[0].date ? "date" : "week";

  // Function to format the date or week based on dataKey
  function formatDateOrWeek(value: string | number) {
    if (dataKey === "date") {
      return value as string;
    } else {
      return `Week ${value}`;
    }
  }

  return (
    <LineChart width={width} height={height} data={data}>
      <XAxis dataKey={dataKey} tickFormatter={formatDateOrWeek} />
      <YAxis />
      <Tooltip />
      <Line type="monotone" dataKey="average_time" stroke="#8884d8" strokeWidth={4} />
    </LineChart>
  );
};

export default LineChartComponent;
