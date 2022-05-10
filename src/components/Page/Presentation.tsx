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
      <section id="beggin" className="pt-[4.5rem] ">
        <h4 className="font-normal text-sm text-brandColor-500 mt-10 mx-[3.75rem]" >BOAS-VINDAS A DOCTORCARE 👋</h4>
        <h1 className="font-bold self-center text-4xl w-[20.438rem] mt-4 mx-6" >Assistência médica simplificada para todos</h1>
        <p className="font-normal text-lg mt-6 mx-6" >Os médicos da DoctorCare vão além dos sintomas para tratar a causa raiz de sua doença e proporcionar uma cura a longo prazo.</p>
        <button className="bg-brandColor-500 text-white gap-[1rem] w-[16.438rem] flex justify-center py-4  rounded-[2.5rem] font-bold uppercase mt-[2rem] mx-auto " >
          <img className="" src={WhatsAppIcon} alt="whatsAPP icon" />
          Agende sua consulta
        </button>
        <img  className="mt-[3.75rem] block mx-auto woman-img" src={Woman} alt="black woman wearing green sweater" />
        <div ref={ref} className="w-[20.438rem] h-[29.375rem] bg-brandColor-100 mx-auto flex flex-col justify-center gap-[3.75rem] py-10 ring-1 ring-[#dce9e2] rounded-[0.375rem]">
          {INITIAL_STATS.map(({ title, note }) => (
            <div className="flex flex-col gap-1" >
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
