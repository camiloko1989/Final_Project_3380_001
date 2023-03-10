import { render, screen } from '@testing-library/react';
import Shelters from './Shelters';
import Details from './Details';
import Home from './Shelters';

describe('Details', () => {
    it('renders without crashing', () => {
      render(<Details />);
      //expect(screen.getByText('Phone')).toBeInTheDocument();
    });
  });