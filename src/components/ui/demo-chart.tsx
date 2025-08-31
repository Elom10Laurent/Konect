import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

// Données simulées sur 30 jours
const data = [
  { day: 'Day 1', usage: 5 },
  { day: 'Day 2', usage: 10 },
  { day: 'Day 3', usage: 7 },
  { day: 'Day 4', usage: 15 },
  { day: 'Day 5', usage: 12 },
  { day: 'Day 6', usage: 20 },
  { day: 'Day 7', usage: 17 },
  { day: 'Day 8', usage: 25 },
  { day: 'Day 9', usage: 22 },
  { day: 'Day 10', usage: 30 },
  { day: 'Day 11', usage: 28 },
  { day: 'Day 12', usage: 35 },
  { day: 'Day 13', usage: 33 },
  { day: 'Day 14', usage: 40 },
  { day: 'Day 15', usage: 38 },
  { day: 'Day 16', usage: 42 },
  { day: 'Day 17', usage: 45 },
  { day: 'Day 18', usage: 48 },
  { day: 'Day 19', usage: 50 },
  { day: 'Day 20', usage: 53 },
  { day: 'Day 21', usage: 55 },
  { day: 'Day 22', usage: 58 },
  { day: 'Day 23', usage: 60 },
  { day: 'Day 24', usage: 63 },
  { day: 'Day 25', usage: 65 },
  { day: 'Day 26', usage: 68 },
  { day: 'Day 27', usage: 70 },
  { day: 'Day 28', usage: 73 },
  { day: 'Day 29', usage: 75 },
  { day: 'Day 30', usage: 78 },
];

export function UsageChart() {
  return (
    <ResponsiveContainer width="100%" height={250}>
      <LineChart data={data} margin={{ top: 10, right: 30, left: 0, bottom: 0 }}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="day" tick={{ fontSize: 10 }} />
        <YAxis />
        <Tooltip />
        <Line type="monotone" dataKey="usage" stroke="#e0c43c" strokeWidth={2} />
      </LineChart>
    </ResponsiveContainer>
  );
}
