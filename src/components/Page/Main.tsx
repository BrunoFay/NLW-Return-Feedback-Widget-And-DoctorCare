
import HeaderPage from "./HeaderPage"
import Presentation from "./Presentation"
import Services from "./Services"
import  './headerPage.css'
export default function () {


  return (
    <div className="begin text-center flex flex-col  w-[23.438rem] h-[67.5rem] ">
      <HeaderPage />
      <Presentation />
      <Services />
    </div>
  )
}
