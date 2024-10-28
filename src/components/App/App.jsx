import { useReducer } from "react";
import AppContext from "../../context/context";
import Board from "../Board/Board";
import css from "./App.module.css";
import { initGameState } from "../../helpers/appConstant";
import { reducer } from "../../reducer/reducer";

const App = () => {
  const [appState, dispatch] = useReducer(reducer, initGameState);
  const providerState = {
    appState,
    dispatch,
  };

  return (
    <div className={css.boxApp}>
      <AppContext.Provider value={providerState}>
        <Board />
      </AppContext.Provider>
    </div>
  );
};

export default App;
