import { render, screen, fireEvent, waitFor, cleanup } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { expect, jest, test } from "@jest/globals";
import LayoutConfigurationCard from "./LayoutConfigurationCard";
import { act } from "react-dom/test-utils";

describe("LayoutConfigurationCard testing", () => {
  test("Layout Configuration title", () => {
    render(<LayoutConfigurationCard />);
    const linkElement = screen.getByText("Layout Configuration");
    expect(linkElement).toBeInTheDocument();
  });

  test("renders 81 dropdown buttons", async () => {
    render(<LayoutConfigurationCard />);
    const items = await screen.findAllByRole("button");
    expect(items).toHaveLength(81);
  });

  test("if clicking a dropdown item gives dropdown menu", async () => {
    const { rerender } = render(<LayoutConfigurationCard />);

    act(() => {
      userEvent.click(screen.getByTestId("dd-button00"));
    });
    rerender(<LayoutConfigurationCard />);

    expect(screen.getByTestId("dd-menu00")).toBeInTheDocument();
  });

  test("if clicking a dropdown item gives dropdown menu", async () => {
    const { rerender } = render(<LayoutConfigurationCard />);

    act(() => {
      userEvent.click(screen.getByTestId("dd-button00"));
    });

    act(() => {
      rerender(<LayoutConfigurationCard />);
    });

    act(() => {
      userEvent.click(screen.getByTestId("wall"));
    });

    act(() => {
      rerender(<LayoutConfigurationCard />);
    });

    expect(screen.getByTestId("dd-button00").classList[0]).toEqual("wall");
  });
});
