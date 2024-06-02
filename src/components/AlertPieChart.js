import React from 'react';
import { PieChart, Pie, Tooltip, ResponsiveContainer, Cell, Legend } from 'recharts';

const COLORS = {
  'Low': '#82ca9d', // Light green
  'Medium': '#cedb7e', // Yellow
  'High': '#ff6b6b', // Red
};

const renderCustomLabel = ({ severity, count }) => `${count} `;

const AlertPieChart = ({ alerts }) => {
  const data = alerts.reduce((acc, alert) => {
    const severity = alert.alert.severity;
    const severityLabel = severity === 0 || severity === 1 ? 'Low' : severity === 2 || severity === 3 ? 'Medium' : 'High';

    if (!acc[severityLabel]) {
      acc[severityLabel] = { name: severityLabel, count: 0 };
    }
    acc[severityLabel].count += 1;
    return acc;
  }, {});

  const chartData = Object.values(data);

  return (
    <ResponsiveContainer width="100%" height={400}>
      <PieChart>
        <Pie
          data={chartData}
          dataKey="count"
          nameKey="name"
          cx="50%"
          cy="50%"
          outerRadius={100}
          label={renderCustomLabel}
        >
          {chartData.map((entry, index) => (
            <Cell
              key={`cell-${index}`}
              fill={COLORS[entry.name]}
              stroke={COLORS[entry.name]}
            />
          ))}
        </Pie>
        <Tooltip />
        <Legend />
      </PieChart>
    </ResponsiveContainer>
  );
};

export default AlertPieChart;