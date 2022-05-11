import Woman from "../../assets/woman.svg"
import WhatsAppIcon from "../../assets/whatsAppIcon.svg"
import { useParallax } from 'react-scroll-parallax';

const INITIAL_STATS = [
  {
    title: 'Pacientes atendidos',
    note: '+3.500'
  },
  {
    title: 'Especialistas disponíveis',
    note: '+15'
  },
  {
    title: 'Anos no mercado',
    note: '+10'
  },
]
export default function Presentation() {
  const { ref } = useParallax<HTMLImageElement>({ opacity: [0, 2, 'easeInOut'] });
  return (
    <>
      <section id="beggin" className=" lg:flex lg:flex-col ">
        <div className="lg:flex lg items-center">
          <div className="lg:flex lg:flex-col lg:text-left  lg:w-[35.813rem] lg:max-h-[20rem]  lg:pl-40 ">
            <h4 className="presenation-h4 font-normal lg:font-bold text-sm text-brandColor-500 lg:mb-4 lg:mx-2 " >BOAS-VINDAS A DOCTORCARE 👋</h4>
            <h1
              className="presentation-h1 font-bold  lg:font-bold lg:text-[3.25rem] lg:mb-6 lg:w-[37.5rem] " >
              Assistência médica simplificada para todos
            </h1>
            <p className="presentation-p font-normal text-lg lg:text-secondaryColor-500 lg:w-[37.5rem]" >
              Os médicos da DoctorCare vão além dos sintomas para tratar a causa raiz de sua doença e proporcionar uma cura a longo prazo.
            </p>
            <button 
            className="bg-brandColor-500 text-white gap-[1rem] lg:relative lg:right-[4.5rem] w-[16.438rem] flex justify-center py-4  rounded-[2.5rem] 
            font-bold uppercase mt-[2rem] mx-auto " >
              <img className="" src={WhatsAppIcon} alt="whatsAPP icon" />
              Agende sua consulta
            </button>
          </div>
          <img className="mt-[3.75rem] lg:h-[34.188rem] block mx-auto woman-img" src={Woman} alt="black woman wearing green sweater" />
        </div>
        <div ref={ref}
          className="presentation-cards lg:w-[80%] lg:h-[13.125rem] lg:items-center
           lg:justify-evenly bg-brandColor-100 mx-auto flex  justify-center 
           py-10 ring-1 ring-[#dce9e2] rounded-[0.375rem]">
          {INITIAL_STATS.map(({ title, note }) => (
            <div className="presentation-card flex lg:w-[20rem] lg:border-r-2 lg:border-r-brandColor-500 flex-col gap-1" >
              <h3 className="text-5xl font-bold" >{note}</h3>
              <p className="mt-1 text-brandColor-500 font-normal" >{title}</p>
            </div>
          )
          )}
        </div>
      </section>
    </>
  )
}
