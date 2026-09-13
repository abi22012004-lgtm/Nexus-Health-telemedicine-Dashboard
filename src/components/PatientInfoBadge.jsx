import React from 'react';
import { Card, Avatar, Typography, Box } from '@mui/material';
import styles from './PatientInfoBadge.module.scss';

const PatientInfoBadge = ({ avatar, name, id, age }) => {
  return (
    <Card className={styles.badgeContainer} elevation={0}>
      <Box className={styles.gridContainer}>
        <Avatar 
          src={avatar} 
          alt={name} 
          className={styles.avatar}
        >
          {/* Fallback to initials if no avatar provided */}
          {!avatar && name ? name.split(' ').map(n => n[0]).join('') : null}
        </Avatar>
        
        <Box className={styles.details}>
          <Typography className={styles.name} color="text.primary">
            {name}
          </Typography>
          <Box className={styles.metaData}>
            <Typography className={styles.id} color="text.secondary">
              ID: {id}
            </Typography>
            <Typography component="span" className={styles.separator}>&bull;</Typography>
            <Typography className={styles.age} color="text.secondary">
              Age: {age}
            </Typography>
          </Box>
        </Box>
      </Box>
    </Card>
  );
};

export default PatientInfoBadge;
