import { useParallax } from "react-scroll-parallax";

const IMAGE = (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <circle cx="12" cy="12" r="12" fill="#DCE9E2" />
    <path d="M17.091 8.18182L10.091 15.1818L6.90918 12" stroke="#00856F" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
  </svg>
)
const DESCRIPTION = `Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim.`
const CARDS = [
  {
    title: 'Problemas digestivos',
    description: DESCRIPTION,
    image: IMAGE,
  }, {
    title: 'Saúde Hormonal',
    description: DESCRIPTION,
    image: IMAGE,
  }, {
    title: 'Bem-estar mental',
    description: DESCRIPTION,
    image: IMAGE,
  }, {
    title: 'Cuidados Pediátricos',
    description: DESCRIPTION,
    image: IMAGE,
  }, {
    title: 'Autoimune e Inflamação',
    description: DESCRIPTION,
    image: IMAGE,
  }, {
    title: 'Saúde do Coração',
    description: DESCRIPTION,
    image: IMAGE,
  }
]
export default function Services() {
  const { ref } = useParallax<HTMLImageElement>({
    opacity: [0.1, 4],
  });

  return (
    <section
      id='services'
      className="w-[23.438rem] lg:w-[80%]  lg:self-center lg:h-[57.625rem]
     h-[127.125rem] text-center flex flex-col" >
      <section className="mt-[7.875rem] h-[9.625rem] lg:items-center w-[19.625rem] mx-auto gap-4 flex flex-col">
        <h4 className="text-brandColor-500 font-bold text-base">SERVIÇOS</h4>
        <h2 className="font-bold text-3xl w-[19.625rem] lg:w-[23rem] h-[7.313rem] text-[#212529] ">Como podemos ajudá-lo a se sentir melhor?
        </h2>
      </section>
      <section
        ref={ref}
        className="cards-service   lg:items-center lg:justify-center lg:h-[28.375rem] lg:w-[100%] w-[20.438rem] h-[86.5rem] lg:flex-row lg:flex-wrap flex flex-col gap-8 lg:gap-10 mx-auto mt-14 transition-opacity">
        {CARDS.map(({ title, image, description }) => (
          <div className={`w-[20.438rem]  h-[12.938rem] flex flex-col gap-4 rounded-[6px] ring-1 ring-[#dce9e2] p-6 text-left `}>
            {image}
            <h3 className="text-2xl font-bold text-center">{title}</h3>
            <p className="text-secondaryColor-500"> {description}</p>
          </div>
        ))}
      </section>
    </section>
  )
}
