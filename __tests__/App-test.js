import * as React from "react";
import { configure, shallow } from "enzyme";
import Adapter from "enzyme-adapter-react-16";

configure({ adapter: new Adapter() });

describe("Unit Test", () => {
  it("", () => {
    expect(1).toBe(1);
  });
});
