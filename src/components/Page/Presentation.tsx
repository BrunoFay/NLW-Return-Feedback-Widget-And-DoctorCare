import Woman from "../../assets/woman.svg"
import WhatsAppIcon from "../../assets/whatsAppIcon.svg"
import HeaderPage from "./HeaderPage"
export default function
  () {
  return (
    <div className="begin text-center flex flex-col  w-[23.438rem] h-[67.5rem] ">
      <HeaderPage />
    <div className="mt-[4.5rem]">
        <h4 className="font-normal text-sm text-brandColor-500 mt-10 mx-[3.75rem]" >BOAS-VINDAS A DOCTORCARE 👋</h4>
        <h1 className="font-bold self-center text-4xl w-[20.438rem] mt-4 mx-6" >Assistência médica simplificada para todos</h1>
        <p className="font-normal text-lg mt-6 mx-6" >Os médicos da DoctorCare vão além dos sintomas para tratar a causa raiz de sua doença e proporcionar uma cura a longo prazo.</p>
        <button className="bg-brandColor-500 text-white gap-[1rem] flex self-center justify-center py-4 px-[2rem] rounded-[2.5rem] font-bold uppercase mt-[2rem] " >
          <img className="" src={WhatsAppIcon} alt="whatsAPP icon" />
          Agende sua consulta
        </button>
        <img className="mt-[3.75rem] block mx-auto woman-img" src={Woman} alt="black woman wearing green sweater" />
        <div className="w-[20.438rem] h-[29.375rem] bg-brandColor-100 mx-auto flex flex-col justify-center gap-[3.75rem] py-10 ring-1 ring-[#dce9e2] rounded-[0.375rem]">
          <div className="">
            <h3 className="text-5xl font-bold" >+3.500</h3>
            <p className="mt-1 text-brandColor-500 font-normal" >Pacientes atendidos</p>
          </div>
          <div className="">
            <h3 className="text-5xl font-bold" >+15</h3>
            <p className="mt-1  text-brandColor-500 font-normal" >Especialistas disponíveis</p>
          </div>
          <div className="">
            <h3 className="text-5xl font-bold" >+10</h3>
            <p className="mt-1  text-brandColor-500 font-normal" >Anos no mercado</p>
          </div>
        </div>
    </div>
    </div>
  )
}
