import React from 'react';
import { Card, CardContent, Typography, Box } from '@mui/material';
import styles from './VitalStatCard.module.scss';

const VitalStatCard = ({ title, value, unit, icon: Icon, statusColor = '#1E3A8A', pulse = false }) => {
  return (
    <Card className={styles.vitalCard} elevation={0}>
      <CardContent className={styles.cardContent}>
        <Box className={styles.header}>
          <Typography className={styles.title} color="text.secondary">
            {title}
          </Typography>
          {Icon && (
            <Box className={`${styles.iconWrapper} ${pulse ? styles.pulseAnim : ''}`} sx={{ color: statusColor, bgcolor: `${statusColor}1A` }}>
              <Icon size={24} strokeWidth={1.5} />
            </Box>
          )}
        </Box>
        <Box className={styles.body}>
          <Typography className={styles.value} color="text.primary">
            {value}
          </Typography>
          {unit && (
            <Typography className={styles.unit} color="text.secondary">
              {unit}
            </Typography>
          )}
        </Box>
      </CardContent>
    </Card>
  );
};

export default VitalStatCard;
