import React from 'react';
import { Box, IconButton, Typography } from '@mui/material';
import { Menu, LogOut } from 'lucide-react';
import Sidebar from './Sidebar';
import styles from './DashboardLayout.module.scss';
import { useAuth } from '../context/AuthContext';

const DashboardLayout = ({ children }) => {
  const { logout } = useAuth();

  return (
    <Box className={styles.layout}>
      <Sidebar />
      <Box className={styles.mainWrapper}>
        {/* Mobile Header (Hidden on Desktop) */}
        <Box className={styles.mobileHeader}>
          <IconButton sx={{ color: 'var(--color-primary-main)' }} aria-label="menu">
            <Menu size={24} strokeWidth={1.5} />
          </IconButton>
          <Typography variant="h6" color="primary.main" fontWeight={700}>
            Nexus Health
          </Typography>
          <IconButton sx={{ color: '#ef4444' }} onClick={logout} aria-label="logout">
            <LogOut size={24} strokeWidth={1.5} />
          </IconButton>
        </Box>
        {/* Main Content Area */}
        <Box className={styles.content}>
          {children}
        </Box>
      </Box>
    </Box>
  );
};

export default DashboardLayout;
