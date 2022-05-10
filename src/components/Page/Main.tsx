
import HeaderPage from "./HeaderPage"
import Presentation from "./Presentation"
import Services from "./Services"
import './headerPage.css'
import About from "./About"
import Contact from "./Contact"
import FooterPage from "./FooterPage"
export default function () {


  return (
    <main className="main-container text-center flex flex-col  w-[23.438rem] h-[67.5rem]  ">
      <HeaderPage />
      <Presentation />
      <Services />
      <About />
      <Contact />
      <FooterPage />
    </main>
  )
}
