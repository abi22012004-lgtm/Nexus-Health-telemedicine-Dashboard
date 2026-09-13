import React from 'react';
import { Box, Typography, Button, Stack } from '@mui/material';
import { LayoutDashboard, Users, Calendar, Settings, LogOut, Activity } from 'lucide-react';
import { useAuth } from '../context/AuthContext';
import styles from './Sidebar.module.scss';

const Sidebar = () => {
  const { user, logout } = useAuth();
  
  return (
    <Box className={styles.sidebar}>
      <Box className={styles.logo}>
        <Activity color="var(--color-primary-main)" size={24} strokeWidth={1.5} />
        <Typography variant="h6" color="primary.main" fontWeight={700}>
          Nexus Health
        </Typography>
      </Box>
      <Stack spacing={1} className={styles.nav}>
        <Button className={styles.navItem} startIcon={<LayoutDashboard size={20} strokeWidth={1.5} />} data-active="true">
          Dashboard
        </Button>
        {user?.role === 'doctor' && (
          <Button className={styles.navItem} startIcon={<Users size={20} strokeWidth={1.5} />}>
            Patients
          </Button>
        )}
        <Button className={styles.navItem} startIcon={<Calendar size={20} strokeWidth={1.5} />}>
          Appointments
        </Button>
        <Button className={styles.navItem} startIcon={<Settings size={20} strokeWidth={1.5} />}>
          Settings
        </Button>
      </Stack>
      <Box className={styles.footer}>
        <Button 
          className={styles.logoutBtn} 
          startIcon={<LogOut size={20} strokeWidth={1.5} />} 
          onClick={logout}
          fullWidth
        >
          Sign Out
        </Button>
      </Box>
    </Box>
  );
};

export default Sidebar;
