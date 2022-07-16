import { fireEvent, render, waitFor } from "../../config/test-utils";
import Layout from "./index";

const handleDrawerToggle = jest.fn();

describe("Layout component", () => {
  it("01. Layout matches snapshot correctly", () => {
    const component = render(<Layout />);
    expect(component.asFragment()).toMatchSnapshot();
  });
  it("02. handleDrawerToggle", () => {
    Object.defineProperty(window, "innerWidth", {
      writable: true,
      configurable: true,
      value: 200,
    });
    const { getByTestId } = render(<Layout />);
    const button = getByTestId("open-drawer");
    fireEvent.click(button);
    waitFor(() => {
      expect(handleDrawerToggle).toHaveBeenCalled();
    });
  });
});
