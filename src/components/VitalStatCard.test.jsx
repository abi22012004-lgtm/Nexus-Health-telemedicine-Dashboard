import React from 'react';
import { render, screen } from '@testing-library/react';
import VitalStatCard from './VitalStatCard';

describe('VitalStatCard Component', () => {
  it('renders the title and value correctly', () => {
    render(<VitalStatCard title="Heart Rate" value="72" unit="bpm" />);
    
    expect(screen.getByText('Heart Rate')).toBeInTheDocument();
    expect(screen.getByText('72')).toBeInTheDocument();
    expect(screen.getByText('bpm')).toBeInTheDocument();
  });

  it('renders without a unit when none is provided', () => {
    render(<VitalStatCard title="Total Patients" value="1,284" />);
    
    expect(screen.getByText('Total Patients')).toBeInTheDocument();
    expect(screen.getByText('1,284')).toBeInTheDocument();
    expect(screen.queryByText('bpm')).not.toBeInTheDocument();
  });
});
