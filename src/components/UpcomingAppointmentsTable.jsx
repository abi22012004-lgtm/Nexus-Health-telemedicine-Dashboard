import React, { useState } from 'react';
import { 
  Table, 
  TableBody, 
  TableCell, 
  TableContainer, 
  TableHead, 
  TableRow, 
  Paper, 
  TableSortLabel,
  Typography,
  Chip,
  Card,
  Button
} from '@mui/material';
import { FileText } from 'lucide-react';

const mockAppointments = [
  { id: 'APT-001', patientName: 'Eleanor Vance', type: 'Cardiac Follow-up', date: '2026-09-14T09:00:00', status: 'Confirmed' },
  { id: 'APT-002', patientName: 'Marcus Thorne', type: 'Routine Check', date: '2026-09-15T10:30:00', status: 'Pending' },
  { id: 'APT-003', patientName: 'Sylvia Plath', type: 'Lab Results Review', date: '2026-09-14T13:15:00', status: 'Confirmed' },
  { id: 'APT-004', patientName: 'Arthur Dent', type: 'Pre-op Assessment', date: '2026-09-16T14:00:00', status: 'Rescheduled' },
  { id: 'APT-005', patientName: 'Lydia Bennet', type: 'Cardiac Follow-up', date: '2026-09-18T11:00:00', status: 'Confirmed' },
];

const UpcomingAppointmentsTable = () => {
  const [order, setOrder] = useState('asc');

  const handleSortRequest = () => {
    const isAsc = order === 'asc';
    setOrder(isAsc ? 'desc' : 'asc');
  };

  const sortedAppointments = [...mockAppointments].sort((a, b) => {
    const dateA = new Date(a.date).getTime();
    const dateB = new Date(b.date).getTime();
    return order === 'asc' ? dateA - dateB : dateB - dateA;
  });

  const getStatusColor = (status) => {
    switch (status) {
      case 'Confirmed': return 'success';
      case 'Pending': return 'warning';
      case 'Rescheduled': return 'info';
      default: return 'default';
    }
  };

  const formatDate = (isoString) => {
    const d = new Date(isoString);
    return new Intl.DateTimeFormat('en-US', { 
      month: 'short', 
      day: 'numeric',
      hour: 'numeric',
      minute: '2-digit',
      hour12: true
    }).format(d);
  };

  return (
    <Card elevation={0} sx={{ border: '1px solid rgba(0,0,0,0.04)', borderRadius: '12px' }}>
      <TableContainer component={Paper} elevation={0} sx={{ background: 'transparent' }}>
        <Table sx={{ minWidth: 700 }} aria-label="upcoming appointments table">
          <TableHead>
            <TableRow sx={{ backgroundColor: 'var(--color-bg-alt, #F1F5F9)' }}>
              <TableCell>
                <Typography variant="subtitle2" color="text.secondary" fontWeight={600}>Patient</Typography>
              </TableCell>
              <TableCell>
                <Typography variant="subtitle2" color="text.secondary" fontWeight={600}>Appointment Type</Typography>
              </TableCell>
              <TableCell sortDirection={order}>
                <TableSortLabel
                  active={true}
                  direction={order}
                  onClick={handleSortRequest}
                  sx={{ '& .MuiTableSortLabel-icon': { color: 'var(--color-primary-main) !important' } }}
                >
                  <Typography variant="subtitle2" color="text.secondary" fontWeight={600}>Date & Time</Typography>
                </TableSortLabel>
              </TableCell>
              <TableCell>
                <Typography variant="subtitle2" color="text.secondary" fontWeight={600}>Status</Typography>
              </TableCell>
              <TableCell align="right">
                <Typography variant="subtitle2" color="text.secondary" fontWeight={600}>Action</Typography>
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {sortedAppointments.map((row) => (
              <TableRow
                key={row.id}
                sx={{ 
                  '&:last-child td, &:last-child th': { border: 0 }, 
                  transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
                  cursor: 'pointer',
                  position: 'relative',
                  '&:hover': { 
                    backgroundColor: 'var(--color-bg-alt, #F1F5F9)',
                    transform: 'translateY(-4px)',
                    boxShadow: '0 4px 12px rgba(0, 0, 0, 0.05)',
                    zIndex: 1
                  }, 
                }}
              >
                <TableCell component="th" scope="row">
                  <Typography variant="body2" fontWeight={600} color="text.primary">
                    {row.patientName}
                  </Typography>
                  <Typography variant="caption" color="text.disabled">
                    {row.id}
                  </Typography>
                </TableCell>
                <TableCell>
                  <Typography variant="body2" color="text.secondary" fontWeight={500}>
                    {row.type}
                  </Typography>
                </TableCell>
                <TableCell>
                  <Typography variant="body2" color="text.primary" fontWeight={500}>
                    {formatDate(row.date)}
                  </Typography>
                </TableCell>
                <TableCell>
                  <Chip 
                    label={row.status} 
                    color={getStatusColor(row.status)} 
                    size="small" 
                    variant="outlined"
                    sx={{ fontWeight: 600, borderRadius: '6px' }}
                  />
                </TableCell>
                <TableCell align="right">
                  <Button 
                    variant="outlined" 
                    size="small" 
                    color="primary"
                    startIcon={<FileText size={20} strokeWidth={1.5} />}
                  >
                    View Record
                  </Button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Card>
  );
};

export default UpcomingAppointmentsTable;
