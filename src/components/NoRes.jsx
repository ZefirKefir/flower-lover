import { useInView } from "react-intersection-observer"

const NoRes = () => {
  const { ref, inView } = useInView({
    threshold: .6,
    triggerOnce: false,
  })
  return (
    <div ref={ref} className={`${inView ? 'translate-x-0 opacity-100' : 'translate-x-5 opacity-0'} duration-500 ease-in-out bg-[#000]/30 py-4 pb-6 px-6 rounded-md backdrop-blur-[10px] w-4/5 mx-auto mt-8 text-xl font-normal text-center leading-normal tracking-[0.04em] text-white font-oswald`}>
      <span className={`uppercase ${inView ? 'delay-200 translate-x-0 opacity-100' : 'translate-x-4 opacity-0'} duration-300 ease-in-out`}>Не найдено товаров по выбранным вами фильтрам :(</span>
      <span className={`block mt-2 text-sm font-light ${inView ? 'delay-[.25s] translate-x-0 opacity-100' : 'translate-x-4 opacity-0'} duration-300 ease-in-out`}>Попробуйте поискать что-то другое и будьте терпеливы.</span>
      <span className={`block text-sm font-light ${inView ? 'delay-300 translate-x-0 opacity-100' : 'translate-x-4 opacity-0'} duration-300 ease-in-out`}>Мы регулярно вносим изменения в наш ассортимент) (нет)</span>
    </div>
  )
}

export default NoRes;