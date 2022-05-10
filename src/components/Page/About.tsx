import { useParallax } from 'react-scroll-parallax';
import DoctorSmileWhiteFamily from '../../assets/doctorSmilingWithFamily.svg';
export default function About() {
  const { ref } = useParallax<HTMLImageElement>({ opacity: [0.2, 5, 'easeInOut'] });

  return (
    <section id='about' className='w-[23.438rem] h-[60.563rem]'>
      <div className='flex items-start justify-center flex-col mt-[6.25rem] pt-[1.25rem] text-left gap-4 px-6'>
        <h4 className='font-bold text-sm text-brandColor-500 '>SOBRE NÓS</h4>
        <h2  className='font-bold text-3xl '>Entenda quem somos e por que existimos</h2>
        <p ref={ref} className='text-secondaryColor-500'>Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim. Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim. Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim. Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim. Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint.
        </p>
        <img className='doctor-img  mt-[2.75rem] h-[17.625rem]' src={DoctorSmileWhiteFamily} alt="medico branco sorrindo com familia" />

      </div>
    </section>
  )
}
