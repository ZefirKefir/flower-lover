import { useInView } from "react-intersection-observer";
import tw from "twin.macro"

const Input = ({ type = 'text', id, label, className = '', placeholder = '', numeric = false, uppercase = false, noLabel = false }) => {
  const { ref, inView } = useInView({
    threshold: .9,
    triggerOnce: true,
  });

  return (
    <Relative ref={ref} className={`${className} ${inView ? 'translate-x-0 opacity-100' : 'translate-x-10 opacity-0'}`}>
      {!noLabel ? <Label htmlFor={id}>{label}</Label> : ''}
      {type === 'textarea' ? (
        <TextArea className={`custom-scrollbar ${uppercase ? 'placeholder:uppercase' : ''}`} placeholder={placeholder} id={id} rows={5}></TextArea>
      ) : (
        <Innput type={type} id={id} placeholder={placeholder} className={uppercase ? 'placeholder:uppercase' : ''}
        />
      )}
    </Relative>
  )
}

const Relative = tw.div`
  w-full relative
  duration-500 ease-in-out
`;
const Label = tw.label`
  font-oswald font-normal
  text-sm leading-normal tracking-[0.06em]
  text-white
`;
const Innput = tw.input`
  mt-1 block
  w-full p-5 bg-transparent
  ring-1 ring-[#555]
  focus:outline-none focus:ring-teal
  font-oswald font-normal
  text-sm leading-normal tracking-[0.04em]
  text-white
  placeholder:text-[#555]
  transition-all duration-300
`;
const TextArea = tw.textarea`
  mt-1 block
  w-full p-5 bg-transparent
  ring-1 ring-[#555]
  focus:outline-none focus:ring-teal
  font-oswald font-normal
  text-sm leading-normal tracking-[0.04em]
  text-white
  resize-none
  placeholder:text-[#555]
`;

export default Input;