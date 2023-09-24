import { useInView } from "react-intersection-observer";
import tw from "twin.macro"

const SectionTitleSm = ({ children, className, lowercase = false }) => {
  const { ref, inView } = useInView({
    threshold: .9,
    triggerOnce: true,
    rootMargin: '-20px 0px',
  });
  return (
    <H6 ref={ref} className={`${className}
      ${lowercase ? 'capitalize' : 'uppercase'}
      ${inView ? 'translate-x-0 opacity-100' : 'translate-x-10 opacity-0'}
    `}>
      {children}
    </H6>
  )
}

const H6 = tw.h6`
  font-oswald font-bold
  text-sm leading-normal tracking-[0.04em]
  text-teal
  duration-300 ease-in-out
`;

export default SectionTitleSm;