import { render, screen } from '@testing-library/react';
import Home from './Home';

describe('Home', () => {
    it('renders without crashing', () => {
      render(<Home />);
      expect(screen.getByText('Shelters in British Columbia')).toBeInTheDocument();
    });
  });