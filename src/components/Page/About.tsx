import { useParallax } from 'react-scroll-parallax';
import DoctorSmileWhiteFamily from '../../assets/doctorSmilingWithFamily.svg';
export default function About() {
  const { ref } = useParallax<HTMLImageElement>({ opacity: [0.2, 5, 'easeInOut'] });

  return (
    <section
      id='about'
      className='w-[23.438rem] h-[60.563rem] lg:items-center lg:justify-center lg:h-[40.188rem] lg:w-[100%] bg-[#f7f7f9]'>
      <div className='flex items-start lg:items-center justify-center flex-col mt-[6.25rem] pt-[1.25rem] text-left gap-4 px-6'>
        <section ref={ref} className='lg:flex lg:flex-row-reverse justify-evenly lg:w-[100%] lg:h-[25.875rem] lg:items-center '>
          <div className='lg:max-w-[35.813rem] lg:h-[max(20.438rem)]' >
            <h4 className='font-bold text-sm text-brandColor-500 lg:pb-3 '>SOBRE NÓS</h4>
            <h2 className='font-bold text-3xl lg:pb-6 lg:w-[19.938rem] '>Entenda quem somos e por que existimos</h2>
            <p className='text-secondaryColor-500 lg:px-0 px-2'>Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim. Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim. Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim. Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim. Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint.
            </p>
          </div>
          <img className='doctor-img lg:w-auto bg-auto lg:mt-1 lg:h-auto mt-[2.75rem] h-[17.625rem]' src={DoctorSmileWhiteFamily} alt="medico branco sorrindo com familia" />
        </section>
      </div>
    </section>
  )
}
