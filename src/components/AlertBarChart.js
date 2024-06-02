import React from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const AlertBarChart = ({ alerts }) => {
  const data = alerts.reduce((acc, alert) => {
    const category = alert.alert.category;
    if (!acc[category]) {
      acc[category] = { category, count: 0 };
    }
    acc[category].count += 1;
    return acc;
  }, {});

  const chartData = Object.values(data);

  return (
    <ResponsiveContainer width="100%" height={400}>
      <BarChart data={chartData}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="category" />
        <YAxis />
        <Tooltip />
        <Legend />
        <Bar dataKey="count" fill="#8884d8" />
      </BarChart>
    </ResponsiveContainer>
  );
};

export default AlertBarChart;
