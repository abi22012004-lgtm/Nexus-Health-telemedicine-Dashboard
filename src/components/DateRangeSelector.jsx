import React from 'react';
import { ToggleButton, ToggleButtonGroup, Box } from '@mui/material';
import { Calendar } from 'lucide-react';
import styles from './DateRangeSelector.module.scss';

const DateRangeSelector = ({ value = '7d', onChange }) => {
  const handleChange = (event, newRange) => {
    // Enforce selection (newRange will be null if they click the already selected button)
    if (newRange !== null && onChange) {
      onChange(newRange);
    }
  };

  return (
    <Box className={styles.selectorContainer}>
      <Box className={styles.iconContainer}>
        <Calendar size={20} strokeWidth={1.5} />
      </Box>
      <ToggleButtonGroup
        value={value}
        exclusive
        onChange={handleChange}
        aria-label="date range selector"
        className={styles.buttonGroup}
      >
        <ToggleButton value="7d" aria-label="7 days" className={styles.toggleButton}>
          7-Day
        </ToggleButton>
        <ToggleButton value="1m" aria-label="1 month" className={styles.toggleButton}>
          1-Month
        </ToggleButton>
        <ToggleButton value="3m" aria-label="3 months" className={styles.toggleButton}>
          3-Month
        </ToggleButton>
      </ToggleButtonGroup>
    </Box>
  );
};

export default DateRangeSelector;
