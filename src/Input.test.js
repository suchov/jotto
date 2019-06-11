import React from "react";
import Enzyme, { shallow } from "enzyme";
import Adapter from "enzyme-adapter-react-16";

import { findByTestAttr, storeFactory } from "../test/testUtils";
import Input from "./Input";

Enzyme.configure({ adapter: new Adapter() });

/**
 * Factory function to create a ShallowWrapper for the GuessedWords component.
 * @function setup
 * @param {object} initialState - Initial state for this setup
 * @returns {ShallowWrapper}
 */

const setup = (initialState = {}) => {
  const store = storeFactory(initialState);
  const wrapper = shallow(<Input store={store} />).dive();
};

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
