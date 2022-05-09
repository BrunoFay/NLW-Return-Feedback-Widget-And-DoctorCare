import { createContext } from "react";

interface INavbarContext {
  isNavbarOpen: boolean;
  setIsNavbarOpen: () => void;
}
export const navbarContext = createContext<INavbarContext | {}>({})