import { useInView } from "react-intersection-observer"
import tw from "twin.macro";

const InfoTitle = ({ className = 0, children }) => {
  const { ref, inView } = useInView({
    threshold: .8,
    triggerOnce: true,
    rootMargin: '-20px 0px',
  });
  return (
    <Title ref={ref} className={`${className} ${inView ? 'translate-x-0 opacity-100' : 'translate-x-10 opacity-0'}`}>{children}</Title>
  )
}

const Title = tw.h5`
  font-oswald font-bold
  text-sm md:text-xl leading-normal tracking-[0.04em]
  uppercase
  text-pink-300
  duration-500 ease-in-out
`;

export default InfoTitle;