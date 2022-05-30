import "./styles/styles.css";
import { AppContext } from "./context/AppContext";
import { useState } from "react";
import { Istate } from "./interfaces/interfaces";
import { initstate } from "./constants/constants";
import HomePage from "./pages/HomePage";

function App() {
  const [initialState, setInitialState] = useState<Istate>(initstate);
  return (
    <AppContext.Provider
      value={{
        state: initialState,
        setInitialState,
      }}
    >
      <HomePage />
    </AppContext.Provider>
  );
}

export default App;
