import { useInView } from "react-intersection-observer";
import tw from "twin.macro"

const SectionHeading = ({ children, className = '' }) => {
  const { ref, inView } = useInView({
    threshold: .9,
    triggerOnce: true,
    rootMargin: '-40px 0px',
  });
  return (
    <Text ref={ref} className={`${className} ${inView ? 'translate-x-0 opacity-100' : 'translate-x-10 opacity-0'}`}>
      {children}
    </Text>
  )
}

const Text = tw.h2`
  font-oswald font-bold
  text-3xl leading-normal tracking-[0.04em]
  uppercase
  text-teal
  duration-500 ease-in-out
`;

export default SectionHeading;