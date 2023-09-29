import { useInView } from "react-intersection-observer"
import tw from "twin.macro";

const SelectedItem = ({ children, onClick = () => console.log('fisg'), idx, datatype }) => {
  const { ref, inView } = useInView({
    threshold: 1,
    triggerOnce: false,
  });

  return (
    <Selected ref={ref} datatype={datatype} className={`${inView ? 'translate-x-0 opacity-100' : 'translate-x-8 opacity-0'}`} onClick={onClick}>
      {children}
    </Selected>
  )
}

const Selected = tw.button`
  flex items-center gap-1
  font-oswald font-bold
  text-sm leading-normal tracking-[0.04em]
  uppercase
  text-teal
  duration-300 ease-in-out
`;

export default SelectedItem;