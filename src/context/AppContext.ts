import { createContext } from "react";
import { initstate } from "../constants/constants";
import { IContext } from "../interfaces/interfaces";

export const AppContext = createContext<IContext>({
    state: initstate,
    setInitialState: () => { }
});