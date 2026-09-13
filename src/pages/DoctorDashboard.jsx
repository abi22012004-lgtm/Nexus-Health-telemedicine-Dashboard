import React from 'react';
import { Box, Typography } from '@mui/material';
import { Users, Activity, HeartPulse, Clock } from 'lucide-react';
import DashboardLayout from '../components/DashboardLayout';
import VitalStatCard from '../components/VitalStatCard';
import VitalsChart from '../components/VitalsChart';
import UpcomingAppointmentsTable from '../components/UpcomingAppointmentsTable';
import PatientInfoBadge from '../components/PatientInfoBadge';
import styles from './DoctorDashboard.module.scss';

const DoctorDashboard = () => {
  return (
    <DashboardLayout>
      <Box className={styles.container}>
        <Box mb={1}>
          <Typography variant="h4" fontWeight={700} sx={{ color: '#FFFFFF' }}>
            Doctor Dashboard
          </Typography>
          <Typography variant="body1" sx={{ color: 'rgba(255,255,255,0.7)' }}>
            Good morning, Dr. Jenkins. You have 14 appointments today.
          </Typography>
        </Box>

        <Box className={`${styles.statsGrid} animate-fade-in delay-1`}>
          <VitalStatCard title="Total Patients" value="1,284" icon={Users} statusColor="#1E3A8A" />
          <VitalStatCard title="Avg. Heart Rate" value="72" unit="bpm" icon={HeartPulse} statusColor="#10B981" pulse={true} />
          <VitalStatCard title="Appointments Today" value="14" icon={Clock} statusColor="#0EA5E9" />
          <VitalStatCard title="Active Alerts" value="3" icon={Activity} statusColor="#F43F5E" pulse={true} />
        </Box>

        <Box className={`${styles.middleGrid} animate-fade-in delay-2`}>
          <Box className={styles.chartWrapper}>
            <VitalsChart />
          </Box>
          <Box className={styles.currentPatient}>
            <Typography variant="h5" mb={3} fontWeight={700} color="text.primary">Current Patient</Typography>
            <PatientInfoBadge 
              name="Eleanor Vance" 
              id="APT-001" 
              age="42" 
              avatar="https://i.pravatar.cc/150?u=a042581f4e29026704d" 
            />
            <Box mt={3} p={2} sx={{ bgcolor: 'var(--color-bg-alt)', borderRadius: '8px' }}>
              <Typography variant="body2" color="text.secondary" mb={1}>
                <strong>Reason:</strong> Cardiac Follow-up
              </Typography>
              <Typography variant="body2" color="text.secondary">
                <strong>Notes:</strong> Patient reported mild shortness of breath during exercise. Requires EKG comparison.
              </Typography>
            </Box>
          </Box>
        </Box>

        <Box className="animate-fade-in delay-3">
          <Typography variant="h5" mb={3} fontWeight={700} sx={{ color: '#FFFFFF' }}>Upcoming Appointments</Typography>
          <UpcomingAppointmentsTable />
        </Box>
      </Box>
    </DashboardLayout>
  );
};

export default DoctorDashboard;
