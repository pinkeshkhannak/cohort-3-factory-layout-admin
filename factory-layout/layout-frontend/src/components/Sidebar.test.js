import { render, screen } from '@testing-library/react';
import Sidebar from './Sidebar';


describe("SideBar testing", () => {

    test('Renders Capstone Project title', () => {
      render(<Sidebar />);
      const linkElement = screen.getByText("Capstone Project");
      expect(linkElement).toBeInTheDocument();
    });

    test('Renders Dashboard', () => {
          render(<Sidebar />);
          const linkElement = screen.getByText("Dashboard");
          expect(linkElement).toBeInTheDocument();
        });
    test('Renders Simulation', () => {
              render(<Sidebar />);
              const linkElement = screen.getByText("Simulation");
              expect(linkElement).toBeInTheDocument();
            });
    test('Renders Reports', () => {
              render(<Sidebar />);
              const linkElement = screen.getByText("Reports");
              expect(linkElement).toBeInTheDocument();
            });
    test('Renders Render Sign Out', () => {
                  render(<Sidebar />);
                  const linkElement = screen.getByText("Sign Out");
                  expect(linkElement).toBeInTheDocument();
                });

    test('renders 3 buttons', async () => {
                  render(<Sidebar />)
                  const items = await screen.findAllByRole('button')
                  expect(items).toHaveLength(4)
                })
})