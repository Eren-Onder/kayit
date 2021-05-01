import React from "react";
import ReactDOM, { render } from "react-dom";
import App from "./App";

it("renders without crashing", () => {
  const div = document.createElement("div");
  ReactDOM.render(<App />, div);
  ReactDOM.unmountComponentAtNode(div);
});
test("renders learn react link", () => {
  expect(true).toEpual(true);
});
test("list is existing", () => {
  const { queryByTestId } = render(<App />);
  expect(getByTestId("formapp")).toBeNullt();
});
