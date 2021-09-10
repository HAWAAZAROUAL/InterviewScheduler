import React from "react";
import {render, cleanup} from "@testing-library/react";
import Appointment from "components/Application";

afterEach(cleanup);

// initial test to see that it runs
describe("Appointment", () => {
it("renders without crashing", () => {
  render(<Appointment />)
})
});