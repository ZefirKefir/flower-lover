import { useInView } from "react-intersection-observer";
import tw from "twin.macro";

const Sign = ({ className = '', rotate = '-10.25deg', pink = false, blue = false, customText = '', color = 'text-[#1F3A3A]' }) => {
  const { ref, inView } = useInView({
    threshold: .7,
    triggerOnce: true,
    rootMargin: '-60px 0px',
  })
  return (
    <Signature ref={ref} className={
      `${className} ${className.search('rotate') === -1 ? 'rotate-[-10.25deg] ' : ''}
      ${className.search('text-') === -1 ? 'text-[#1F3A3A] ' : ''}
      ${inView ? 'translate-x-0 opacity-100' : 'translate-x-10 opacity-0'}`
    }>
      {customText === '' ? (
        <>
          Lover
          <br />
          <span className="ml-[.75em]">Flower</span>
        </>
      ) : customText}
    </Signature>
  )
}

const Signature = tw.p`
  font-normal font-fancy
  text-5xl md:text-7xl leading-[0.8]
  capitalize
  duration-500 ease-in-out
`;

export default Sign;