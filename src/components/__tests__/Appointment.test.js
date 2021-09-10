import React from "react";
import {render} from "@testing-library/react";
import Application from "components/Application";
import { describe } from "yargs";

// initial test to see that it runs
describe("Appointment", () => {
it("renders without crashing", () => {
  render(<Application />)
})
});