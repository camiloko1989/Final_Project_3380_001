import { render, screen } from '@testing-library/react';
import Shelters from './Shelters';
import Home from './Shelters';

describe('Shelters', () => {
    it('renders without crashing', () => {
      render(<Shelters />);
      //expect(screen.getByText('Phone')).toBeInTheDocument();
    });
  });