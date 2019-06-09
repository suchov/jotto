import React from "react";
import { shallow } from "enzyme";

import { findByTestAttr } from "../test/testUtils";
import Input from "./Input";

describe("render", () => {
  describe("word has not been guessed", () => {
    test("should render component without error", () => {});
    test("should render input box", () => {});
    test("should render the submit button", () => {});
  });
  describe("word has been guessed", () => {
    test("should not render component without error", () => {});
    test("should not render input box", () => {});
    test("should not render the submit button", () => {});
  });
});

describe("update state", () => {});
