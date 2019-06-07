import { actionTypes } from "../actions";
import successReducer from "./successReducer";

test("should return default initial state fo `false` when no action is passed", () => {
  const newState = successReducer();
  expect(newState).toBe(false);
});

test("should return state of true upon receiving an action of type `CORRECT_GUESS`", () => {
  const newState = successReducer(undefined, {
    type: actionTypes.CORRECT_GUESS
  });
  expect(newState).toBe(true);
});
