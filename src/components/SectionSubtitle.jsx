import { useInView } from "react-intersection-observer";
import tw from "twin.macro"

const SectionSubtitle = ({ children, className }) => {
  const { ref, inView } = useInView({
    threshold: .85,
    triggerOnce: true,
    rootMargin: '-20px 0px',
  });
  return (
    <Text className={`${inView ? 'translate-x-0 opacity-100' : 'translate-x-10 opacity-0'} ${className}`} ref={ref}>{children}</Text>
  )
}

const Text = tw.h3`
  font-oswald font-bold
  text-xl leading-normal tracking-[0.04em]
  uppercase
  text-pink-300
  duration-500 ease-in-out
`;

export default SectionSubtitle;