import { useParallax } from 'react-scroll-parallax';
import DoctorSmileWhiteFamily from '../../assets/doctorSmilling.png';
export default function About() {
  const { ref } = useParallax<HTMLImageElement>({ opacity: [0.2, 5, 'easeInOut'] }); 

  return (
    <section
      id='about'
      className='w-[23.438rem] h-[60.563rem] md:items-center md:justify-center md:h-[40.188rem] md:w-[100%] md:bg-[#f7f7f9]'>
      <div className='flex items-start md:items-center justify-center flex-col mt-[6.25rem] pt-[1.25rem] text-left gap-4 px-6'>
        <section  ref={ref}  className='md:flex md:flex-row-reverse justify-evenly md:w-[100%] md:h-[25.875rem] md:items-center '>
          <div className='about-infos md:w-[min(40vw,35.813rem)] md:h-20.438rem]' >
            <h4 className='font-bold text-sm text-brandColor-500 md:pb-3 '>SOBRE NÓS</h4>
            <h2 className='font-bold text-3xl md:pb-6 md:w-[19.938rem] '>Entenda quem somos e por que existimos</h2>
            <p className='text-secondaryColor-500 md:px-0 px-2'>Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim. Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim. Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim. Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim. Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint.
            </p>
          </div>
          <img className='doctor-img md:w-[min(40vw,30rem)] bg-auto md:mt-1 md:h-auto mt-[2.75rem] h-[17.625rem]' src={DoctorSmileWhiteFamily} loading='lazy' alt="medico branco sorrindo com 
          familia" />
        </section>
      </div>
    </section>
  )
}
