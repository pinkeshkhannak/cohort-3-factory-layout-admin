import { render, screen } from '@testing-library/react';
import Legend from './Legend';

describe("Legend testing", () => {

    test('Legend is displayed on page', async () => {
          render(<Legend/>)
          const items = await screen.getByText('Legend:')
          expect(items).toBeInTheDocument();
        })

    test('Open is displayed', async () => {
          render(<Legend/>)
          const items = await screen.getByText('Open')
          expect(items).toBeInTheDocument();
        })

    test('Wall is displayed', async () => {
          render(<Legend/>)
          const items = await screen.getByText('Wall')
          expect(items).toBeInTheDocument();
        })

    test('Robot is displayed', async () => {
          render(<Legend/>)
          const items = await screen.getByText('Robot')
          expect(items).toBeInTheDocument();
        })

    test('End is displayed', async () => {
          render(<Legend/>)
          const items = await screen.getByText('End')
          expect(items).toBeInTheDocument();
        })
})