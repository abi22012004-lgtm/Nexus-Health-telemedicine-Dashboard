import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import { vi } from 'vitest';
import DateRangeSelector from './DateRangeSelector';

describe('DateRangeSelector Component', () => {
  it('renders the three toggle buttons correctly', () => {
    render(<DateRangeSelector value="7d" />);
    
    expect(screen.getByRole('button', { name: /7 days/i })).toBeInTheDocument();
    expect(screen.getByRole('button', { name: /1 month/i })).toBeInTheDocument();
    expect(screen.getByRole('button', { name: /3 months/i })).toBeInTheDocument();
  });

  it('calls onChange with the correct new range when a different button is clicked', () => {
    const handleChange = vi.fn();
    render(<DateRangeSelector value="7d" onChange={handleChange} />);
    
    const monthButton = screen.getByRole('button', { name: /1 month/i });
    fireEvent.click(monthButton);
    
    expect(handleChange).toHaveBeenCalledWith('1m');
  });

  it('does not call onChange if the currently selected value is clicked again', () => {
    const handleChange = vi.fn();
    render(<DateRangeSelector value="7d" onChange={handleChange} />);
    
    const weekButton = screen.getByRole('button', { name: /7 days/i });
    fireEvent.click(weekButton);
    
    // Material-UI ToggleButtonGroup returns null when deselecting an exclusive option
    // We explicitly prevented null propagation in the component
    expect(handleChange).not.toHaveBeenCalled();
  });
});
