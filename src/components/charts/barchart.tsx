import React from 'react';
import { BarChart, Bar, XAxis, YAxis, Tooltip, Legend } from 'recharts';

interface Data {
  [key: string]: number;
}

interface BarChartData {
  name: string;
  count: number;
}

interface BarChartProps {
  data: Data;
}

const BarChartComponent: React.FC<BarChartProps> = ({ data }) => {
  const chartData: BarChartData[] = Object.entries(data).map(([key, value]) => ({
    name: key,
    count: value,
  }));

  return (
    <BarChart width={300} height={200} data={chartData}>
      <XAxis dataKey="name" />
      <YAxis />
      <Tooltip />
      <Bar dataKey="count" fill="#8884d8" />
    </BarChart>
  );
};

export default BarChartComponent;
