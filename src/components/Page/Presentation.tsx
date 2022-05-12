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
      <section id="beggin" className=" md:flex md:flex-col ">
        <div className="md:flex lg items-center">
          <div className="md:flex md:flex-col md:text-left  md:w-[35.813rem] md:max-h-[20rem]  md:pl-40 ">
            <h4 className="presenation-h4  font-normal md:font-bold text-sm text-brandColor-500 md:mb-4 md:mx-2 " >BOAS-VINDAS A DOCTORCARE 👋</h4>
            <h1
              className="presentation-h1 font-bold  md:font-bold md:text-[3.25vw] md:mb-6 md:w-[min(37.5rem,40.5vw)] " >
              Assistência médica simplificada para todos
            </h1>
            <p className="presentation-p font-normal text-lg md:text-secondaryColor-500 md:w-[min(37.5rem,40.5vw)]" >
              Os médicos da DoctorCare vão além dos sintomas para tratar a causa raiz de sua doença e proporcionar uma cura a longo prazo.
            </p>
            <button 
            className="bg-brandColor-500 text-white gap-[1rem] md:relative md:right-[4.5rem] w-[16.438rem] flex justify-center py-4  rounded-[2.5rem] 
            font-bold uppercase mt-[2rem] mx-auto " >
              <img className="" src={WhatsAppIcon} alt="whatsAPP icon" />
              Agende sua consulta
            </button>
          </div>
          <img className="mt-[3.75rem] md:h-[max(20rem,34.188rem)] block mx-auto woman-img" src={Woman} alt="black woman wearing green sweater" />
        </div>
        <div  ref={ref} 
          className="presentation-cards md:w-[80%] md:h-[13.125rem] md:items-center
           md:justify-evenly bg-brandColor-100 mx-auto flex  justify-center 
           py-10 ring-1 ring-[#dce9e2] rounded-[0.375rem] md:shadow-xl md:shadow-brandColor-500">
          {INITIAL_STATS.map(({ title, note }) => (
            <div key={title} className="presentation-card flex md:w-[20rem] md:border-r-2 md:border-r-brandColor-500 flex-col gap-1" >
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
