import { createPosition } from "./createPosition";

export const initGameState = {
  position: [createPosition()],
  turn: "w",
};
