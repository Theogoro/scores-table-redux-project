import React from "react";
import { Provider } from "react-redux";
import generateStore from "../redux/store";
import AddScrore from "./AddScore";
import Scores from "./Scores";

function App() {
  const store = generateStore();
  // TODO: add README
  // TODO: add metadata

  return (
    <Provider store={store}>
      <div className="App">
        <h1 className="text-center my-2">Score Table</h1>
        <AddScrore />
        <Scores />
      </div>
    </Provider>
  );
}

export default App;
