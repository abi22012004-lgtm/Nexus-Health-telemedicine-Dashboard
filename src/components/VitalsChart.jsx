import React, { useState, useMemo } from 'react';
import { Card, CardContent, Box, Typography } from '@mui/material';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import DateRangeSelector from './DateRangeSelector';
import styles from './VitalsChart.module.scss';

// Realistic mock data generator for Blood Pressure
const generateData = (days) => {
  const data = [];
  const now = new Date();
  for (let i = days; i >= 0; i--) {
    const d = new Date(now);
    d.setDate(d.getDate() - i);
    // Base Systolic ~120, Diastolic ~80, with some random clinical variation
    const sys = 110 + Math.floor(Math.random() * 25);
    const dia = 70 + Math.floor(Math.random() * 15);
    data.push({
      date: d.toLocaleDateString('en-US', { month: 'short', day: 'numeric' }),
      systolic: sys,
      diastolic: dia,
    });
  }
  return data;
};

// Memoize at module level so it doesn't regenerate on every render
const mockDataSets = {
  '7d': generateData(7),
  '1m': generateData(30),
  '3m': generateData(90),
};

const CustomTooltip = ({ active, payload, label }) => {
  if (active && payload && payload.length) {
    return (
      <Box className={styles.customTooltip}>
        <Typography component="p" className={styles.tooltipLabel}>{label}</Typography>
        <Typography component="p" className={styles.tooltipSys}>
          Systolic: <Typography component="span">{payload[0].value} mmHg</Typography>
        </Typography>
        <Typography component="p" className={styles.tooltipDia}>
          Diastolic: <Typography component="span">{payload[1].value} mmHg</Typography>
        </Typography>
      </Box>
    );
  }
  return null;
};

const VitalsChart = () => {
  const [timeRange, setTimeRange] = useState('7d');
  
  const data = useMemo(() => mockDataSets[timeRange], [timeRange]);

  return (
    <Card className={styles.chartCard} elevation={0}>
      <Box className={styles.header}>
        <Typography variant="h5" className={styles.title}>Blood Pressure Trend</Typography>
        <DateRangeSelector value={timeRange} onChange={setTimeRange} />
      </Box>
      <CardContent sx={{ pb: '16px !important' }}>
        <Box sx={{ width: '100%', height: 300, mt: 2 }}>
          <ResponsiveContainer>
            <LineChart data={data} margin={{ top: 5, right: 20, left: -20, bottom: 5 }}>
              <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="rgba(0,0,0,0.06)" />
              <XAxis 
                dataKey="date" 
                axisLine={false} 
                tickLine={false} 
                tick={{ fill: 'var(--color-text-secondary)', fontSize: 12 }} 
                dy={10}
                minTickGap={30}
              />
              <YAxis 
                axisLine={false} 
                tickLine={false} 
                tick={{ fill: 'var(--color-text-secondary)', fontSize: 12 }}
                domain={['dataMin - 10', 'dataMax + 10']}
              />
              <Tooltip content={<CustomTooltip />} cursor={{ stroke: 'rgba(0,0,0,0.05)', strokeWidth: 2 }} />
              <Legend iconType="circle" wrapperStyle={{ fontSize: '12px', paddingTop: '10px' }} />
              <Line 
                type="monotone" 
                name="Systolic"
                dataKey="systolic" 
                stroke="var(--color-secondary-main)" 
                strokeWidth={3} 
                dot={{ r: 4, strokeWidth: 2, fill: '#fff' }}
                activeDot={{ r: 6, stroke: 'var(--color-secondary-main)', strokeWidth: 2, fill: '#fff' }}
              />
              <Line 
                type="monotone" 
                name="Diastolic"
                dataKey="diastolic" 
                stroke="var(--color-accent-main)" 
                strokeWidth={3} 
                dot={{ r: 4, strokeWidth: 2, fill: '#fff' }}
                activeDot={{ r: 6, stroke: 'var(--color-accent-main)', strokeWidth: 2, fill: '#fff' }}
              />
            </LineChart>
          </ResponsiveContainer>
        </Box>
      </CardContent>
    </Card>
  );
};

export default VitalsChart;
