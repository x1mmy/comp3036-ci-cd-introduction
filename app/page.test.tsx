import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import Home from "./page";

describe("Home page", () => {
  it("displays blog title", () => {
    render(<Home />);
    expect(screen.getByText("My Awesome Blog")).toBeInTheDocument();
  });
});
