import checkPropTypes from "check-prop-types";
import { createStore } from "redux";

import rootReducer from "../src/reducers";

/**
 * @param {object} initialState - Initial state for store.
 * @function storeFactory
 * @returns {Store} - Redux store
 */
export const storeFactory = initialState => {
  return createStore(rootReducer, initialState);
};

/**
 * @param {ShallowWrapper} wrapper - Enzyme shallow wrapper.
 * @param {string} val - Valueof data-test attribute for search.
 * @returns {ShallowWrapper}
 */
export const findByTestAttr = (wrapper, val) => {
  return wrapper.find(`[data-test="${val}"]`);
};

export const checkProps = (component, comformingProps) => {
  const propError = checkPropTypes(
    component.propTypes,
    comformingProps,
    "prop",
    component.name
  );
  expect(propError).toBeUndefined();
};
