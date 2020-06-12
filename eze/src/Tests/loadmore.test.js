import React from "react";
import ReactDOM from "react-dom";
import "@testing-library/jest-dom/extend-expect";
import * as rtl from "@testing-library/react";
import LoadMore from "../Components/LoadMore";

let tools;

beforeEach(() => {
  rtl.cleanup();
  tools = rtl.render(<LoadMore />);
});

describe("Load More Component", () => {
  it("renders loadmore button correctly", () => {});

  it("clicks correctly", () => {
    const loadButton = tools.queryByTestId("load more");

    rtl.fireEvent.click(loadButton);
    expect(tools.queryByText(/0/)).not.toBeInTheDocument();
  });
});
