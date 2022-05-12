
import HeaderPage from "./HeaderPage"
import Presentation from "./Presentation"
import Services from "./Services"
import './page.css'
import About from "./About"
import Contact from "./Contact"
import FooterPage from "./FooterPage"
export default function () {


  return (
    <main className="main-container text-center flex flex-col  ">
      <HeaderPage />
      <Presentation />
      <Services />
      <About />
      <Contact />
      <FooterPage />
    </main>
  )
}
