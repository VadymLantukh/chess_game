import actionTypes from "../actionsTypes";

export const makeNewMove = ({ newPosition }) => {
  return {
    type: actionTypes.NEW_MOVE,
    payload: { newPosition },
  };
};
