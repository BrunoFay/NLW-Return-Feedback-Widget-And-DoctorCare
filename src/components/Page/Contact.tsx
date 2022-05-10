import { useParallax } from 'react-scroll-parallax';
import BlackManSmillingWithSmartphone from '../../assets/blackManSmillingWithSmartphone.svg'
import WhatsAppIcon from "../../assets/whatsAppIcon.svg"


export default function Contact() {
  const { ref } = useParallax<HTMLImageElement>({ opacity: [0, 2, 'easeInOut'] });

  return (
    <section id='contact' className='w-[23.438rem] h-[45.938rem] flex flex-col items-center'>
      <div ref={ref}>
        <div className='flex self-start flex-col items-start text-left px-6 mt-[6.25rem] pt-[1.25rem] gap-8'>
          <h2 className='font-bold text-3xl w-[18.563rem]'>Entre em contato com a gente!</h2>
          <ul className='flex flex-col gap-4'>
            <li className='flex gap-2 text-secondaryColor-500'>
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M21 10C21 17 12 23 12 23C12 23 3 17 3 10C3 7.61305 3.94821 5.32387 5.63604 3.63604C7.32387 1.94821 9.61305 1 12 1C14.3869 1 16.6761 1.94821 18.364 3.63604C20.0518 5.32387 21 7.61305 21 10Z" stroke="#00856F" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                <path d="M12 13C13.6569 13 15 11.6569 15 10C15 8.34315 13.6569 7 12 7C10.3431 7 9 8.34315 9 10C9 11.6569 10.3431 13 12 13Z" stroke="#00856F" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
              </svg>

              R. Amauri Souza, 346
            </li>
            <li className='flex gap-2 text-secondaryColor-500'>
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M4 4H20C21.1 4 22 4.9 22 6V18C22 19.1 21.1 20 20 20H4C2.9 20 2 19.1 2 18V6C2 4.9 2.9 4 4 4Z" stroke="#00856F" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                <path d="M22 6L12 13L2 6" stroke="#00856F" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
              </svg>

              contato@doctorcare.com
            </li>
          </ul>
        </div>
        <button className="bg-brandColor-500 text-white gap-[1rem] w-[16.438rem] flex justify-center py-4  rounded-[2.5rem] font-bold uppercase mt-[2rem] mx-auto" >
          <img className="" src={WhatsAppIcon} alt="whatsAPP icon" />
          Agende sua consulta
        </button>
      </div>
      <img
        className='blackMan-img mt-[3.75rem] pb-[6.25rem] '
        src={BlackManSmillingWithSmartphone}
        alt="black man smiling looking at a smartphone" />
    </section>
  )
}
