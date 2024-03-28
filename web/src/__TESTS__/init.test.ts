import { expect } from "vitest";
// import { render, screen } from "@testing-library/react";
// import App from "../App";

describe("Initial test", () => {
  it("checks that vitest is running", () => {
    expect(3).toBe(3);
  });

  // // NOTE: the ui test are not working. Check out this video to try and understand why: https://www.youtube.com/watch?v=G-4zgIPsjkU&t=713s
  // it("checks that the vite link exists", () => {
  //   render(App());
  //   const heading = screen.queryByText("Vite + React");
  //   expect(heading).toBeVisible();
  // });
});
