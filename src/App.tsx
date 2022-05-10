import Widget from "./components/Widget/WidgetButton";
import Main from "./components/Page/Main";
import { useContext } from "react";
import  navbarContext, { INavbarContext }  from "./context/navbarContext";

export function App() {
  const { isNavbarOpen } = useContext(navbarContext) as INavbarContext;

  return (
    <>
      <div className={isNavbarOpen ?
        "container-page flex justify-center navbar-open" :
        "container-page flex justify-center"}>
        <Main />
      </div>
      <Widget />
    </>
  )
}
