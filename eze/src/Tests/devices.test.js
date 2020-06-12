import React from "react";
import ReactDOM from "react-dom";
import Devices from "../Components/Devices";

import renderer from "react-test-renderer";

it("renders without crashing", () => {
  const div = document.createElement("div");
  ReactDOM.render(<Devices></Devices>, div);
});

it("matches snapshot", () => {
  const tree = renderer.create(<Devices></Devices>).toJSON();
  expect(tree).toMatchSnapshot();
});
