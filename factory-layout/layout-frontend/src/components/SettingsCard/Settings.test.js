import { render, screen } from "@testing-library/react";
import App from "./Settings";

test("renders settings component", async () => {
  render(<App />);
  const SettingsElement = await screen.findByText("Settings");
  expect(SettingsElement).toBeInTheDocument();
});
