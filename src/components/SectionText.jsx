import { useInView } from "react-intersection-observer";
import tw from "twin.macro"


const SectionText = ({ children, className, noInView = false }) => {
  const { ref, inView } = useInView({
    threshold: .65,
    triggerOnce: true,
    rootMargin: '-40px 0px',
  });

  return (
    <Text ref={ref} className={`${className} ${inView ? noInView ? '' : 'translate-x-0 opacity-100' : '-translate-x-8 opacity-0'}`}>
      {children}
    </Text>
  )
}

const Text = tw.p`
  font-oswald font-light
  text-sm md:text-xl leading-normal tracking-[0.04em]
  text-white
  duration-300 ease-in-out
`;

export default SectionText;