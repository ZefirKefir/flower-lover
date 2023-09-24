import { useInView } from "react-intersection-observer";
import tw from "twin.macro"

const ButtonPrimary = ({ children, pX = '50px', className, noInView = false }) => {
  const { ref, inView } = useInView({
    threshold: 1,
    triggerOnce: true,
    rootMargin: '-20px 0px',
  });
  return (
    <Button ref={ref} style={{ paddingLeft: pX, paddingRight: pX }}
      className={`${className} ${inView ? noInView ? '' : 'translate-x-0 opacity-100' : noInView ? '' : 'translate-x-8 opacity-0'}`}>
      {children}
    </Button>
  )
}

const Button = tw.button`
  py-4
  font-oswald font-bold
  text-xs leading-[1.5] tracking-[0.1em]
  uppercase whitespace-nowrap
  text-[#000] hover:text-white
  bg-teal hover:bg-pink-800
  focus:outline-pink-800
  active:shadow-inner
  duration-300 ease-in-out
`;

export default ButtonPrimary;