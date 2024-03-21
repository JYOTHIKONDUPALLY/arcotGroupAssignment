import React from 'react';
import { PieChart, Pie, Cell, Tooltip, Legend } from 'recharts';

interface RatingData {
  rating: number;
  count: number;
}

interface PieChartProps {
  data: RatingData[];
}

const UserSatisfactionPieChart: React.FC<PieChartProps> = ({ data }) => {
  const chartData = Object.entries(data).map(([key, value]) => ({
    name: key,
    count: value,
  }));
  return (
    <PieChart width={400} height={400}>
      <Pie
        data={chartData}
        dataKey="count"
        cx="50%"
        cy="50%"
        outerRadius={80}
        fill="#8884d8"
        label
      >
        {chartData.map((entry, index) => (
          <Cell key={`cell-${index}`} fill={`#${Math.floor(Math.random() * 16777215).toString(16)}`} />
        ))}
      </Pie>
      <Tooltip />
    </PieChart>
  );
};

export default UserSatisfactionPieChart;
