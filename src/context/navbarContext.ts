import { createContext } from "react";

export interface INavbarContext {
  isNavbarOpen: boolean,
  setIsNavbarOpen: (s:boolean) => void,
  toggleNavbar: () => void,
}
 const navbarContext = createContext<INavbarContext | {}>({})
 export default navbarContext;