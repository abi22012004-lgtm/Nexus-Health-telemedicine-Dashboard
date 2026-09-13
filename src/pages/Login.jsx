import React from 'react';
import { useNavigate } from 'react-router-dom';
import { 
  Box, 
  Card, 
  CardContent, 
  Typography, 
  Button, 
  Stack,
  useTheme
} from '@mui/material';
import { Stethoscope, User } from 'lucide-react';
import { useAuth } from '../context/AuthContext';

const Login = () => {
  const { login } = useAuth();
  const navigate = useNavigate();
  const theme = useTheme();

  const handleLogin = (role) => {
    login(role);
    navigate(role === 'doctor' ? '/doctor-dashboard' : '/patient-dashboard');
  };

  return (
    <Box 
      sx={{ 
        minHeight: '100vh', 
        display: 'flex', 
        alignItems: 'center', 
        justifyContent: 'center',
        background: 'linear-gradient(135deg, #072214 0%, #114228 35%, #044b7d 70%, #022c4f 100%)',
        backgroundSize: '200% 200%',
        animation: 'gradientBG 10s ease infinite',
        padding: 2
      }}
    >
      <Card sx={{ maxWidth: 480, width: '100%', p: 2 }}>
        <CardContent>
          <Box textAlign="center" mb={4}>
            <Typography variant="h4" component="h1" color="primary" gutterBottom>
              Nexus Health
            </Typography>
            <Typography variant="body1" color="text.secondary">
              Secure Telemedicine Platform
            </Typography>
          </Box>
          
          <Typography variant="h6" mb={3} align="center" color="text.primary">
            Sign in to your account
          </Typography>

          <Stack spacing={2}>
            <Button
              variant="contained"
              size="large"
              color="primary"
              startIcon={<Stethoscope size={24} strokeWidth={1.5} />}
              onClick={() => handleLogin('doctor')}
              fullWidth
              sx={{ py: 1.5 }}
            >
              Sign in as Doctor
            </Button>
            
            <Button
              variant="outlined"
              size="large"
              color="primary"
              startIcon={<User size={24} strokeWidth={1.5} />}
              onClick={() => handleLogin('patient')}
              fullWidth
              sx={{ py: 1.5 }}
            >
              Sign in as Patient
            </Button>
          </Stack>
          
          <Box mt={4} textAlign="center">
            <Typography variant="caption" color="text.disabled">
              HIPAA Compliant &bull; End-to-End Encrypted
            </Typography>
          </Box>
        </CardContent>
      </Card>
    </Box>
  );
};

export default Login;
