import { render, screen } from "@testing-library/react";
import ColoredLine from "./ColoredLine";

describe("ColoredLine testing", () => {
  test("renders 1 line", async () => {
    render(<ColoredLine />);
    const items = await screen.getByTestId("line");
    expect(items).toBeInTheDocument();
  });

  test("renders 1 line that is black", async () => {
    render(<ColoredLine color={"black"} />);
    const items = await screen.getByTestId("line");
    expect(items.style._values.color).toEqual("black");
  });
});
