import React from 'react';
import { Box, Typography } from '@mui/material';
import { HeartPulse, Droplets, Thermometer, Calendar } from 'lucide-react';
import DashboardLayout from '../components/DashboardLayout';
import VitalStatCard from '../components/VitalStatCard';
import VitalsChart from '../components/VitalsChart';
import PatientInfoBadge from '../components/PatientInfoBadge';
import { useAuth } from '../context/AuthContext';
import styles from './PatientDashboard.module.scss';

const PatientDashboard = () => {
  const { user } = useAuth();

  return (
    <DashboardLayout>
      <Box className={styles.container}>
        <Box display="flex" justifyContent="space-between" alignItems="center" flexWrap="wrap" gap={2}>
          <Box>
            <Typography variant="h4" fontWeight={700} sx={{ color: '#FFFFFF' }}>
              My Health Portal
            </Typography>
            <Typography variant="body1" sx={{ color: 'rgba(255,255,255,0.7)' }}>
              Welcome back, {user?.name.split(' ')[0]}.
            </Typography>
          </Box>
          <PatientInfoBadge 
            name={user?.name || "Michael Chen"} 
            id={user?.id || "pat_456"} 
            age="34" 
          />
        </Box>

        <Box className={`${styles.statsGrid} animate-fade-in delay-1`}>
          <VitalStatCard title="Heart Rate" value="68" unit="bpm" icon={HeartPulse} statusColor="#10B981" pulse={true} />
          <VitalStatCard title="Blood Oxygen" value="99" unit="%" icon={Droplets} statusColor="#0EA5E9" />
          <VitalStatCard title="Temperature" value="98.6" unit="°F" icon={Thermometer} statusColor="#F59E0B" />
        </Box>

        <Box className={`${styles.layoutGrid} animate-fade-in delay-2`}>
          <Box className={styles.chartSection}>
            <VitalsChart />
          </Box>
          
          <Box className={styles.nextAppointment}>
            <Typography variant="h5" mb={3} fontWeight={700} color="text.primary">Upcoming Appointment</Typography>
            <Box className={styles.appointmentCard}>
               <Box className={styles.iconWrapper}>
                 <Calendar size={24} strokeWidth={1.5} />
               </Box>
               <Box>
                 <Typography variant="subtitle1" fontWeight={600} color="text.primary">
                   Dr. Sarah Jenkins
                 </Typography>
                 <Typography variant="body2" color="text.secondary" fontWeight={500}>
                   Cardiac Follow-up
                 </Typography>
                 <Typography variant="caption" color="text.disabled" display="block" mt={0.5}>
                   September 18, 2026 - 11:00 AM
                 </Typography>
               </Box>
            </Box>
            <Box mt={3} p={2} sx={{ bgcolor: 'var(--color-bg-alt)', borderRadius: '8px' }}>
              <Typography variant="body2" color="text.secondary">
                <strong>Pre-visit Instructions:</strong> Please fast for 12 hours prior to your appointment for accurate lab results.
              </Typography>
            </Box>
          </Box>
        </Box>
      </Box>
    </DashboardLayout>
  );
};

export default PatientDashboard;
