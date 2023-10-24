import { render, screen } from '@testing-library/react';
import LayoutConfigurationCard from './LayoutConfigurationCard';

describe("Legend testing", () => {
    test('Legend appears in dropdown', async () => {
      render(<ColoredLine />)
      const items = await screen.getByTestId('')
      expect().toBeInTheDocument();
    })
    test('Legend ', async () => {
          render(<ColoredLine color={''}/>)
          const items = await screen.getByTestId('')
          expect().toEqual('');
        })
})