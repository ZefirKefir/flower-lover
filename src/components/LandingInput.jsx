import tw from "twin.macro"

const LandingInput = ({ type = 'text', id, name = ' ', label, numeric = false, className = '', parentClassName = '', colors = 'peer-focus:bg-[#0F2222] peer-placeholder-shown:bg-transparent bg-[#0F2222]' }) => {
  if (type === 'textarea') return (
    <Relative className={parentClassName}>
      <TextArea className={`peer no-scrollbar ${className} ${className.split(' ').find(item => item.startsWith('border-')) ? '' : 'border-teal'}`}
        id={id} name={name} placeholder={name}></TextArea>
      <Layer className={className ? className.split(' ').find(item => item.startsWith('bg-')) : 'bg-[#0F2222]'} />
      <Label htmlFor={id} className={colors}>{label}</Label>
    </Relative>
  )
  return (
    <Relative className={parentClassName}>
      <Innput className={`peer ${className} ${className.split(' ').find(item => item.startsWith('border-')) ? '' : 'border-teal'}`} placeholder={name} type={type} id={id} name={name}
        inputMode={numeric ? 'numeric' : 'text'}
        pattern={numeric ? '[0-9]+' : ''} />
      <Label htmlFor={id} className={colors}>{label}</Label>
    </Relative>
  )
}

const Relative = tw.div`
  relative
  duration-300 ease-in-out
`;
const TextArea = tw.textarea`
  w-full p-5
  overflow-y-scroll
  resize-none
  h-[calc(7.5rem - 1px)]
  bg-transparent
  text-white
  border
  placeholder-transparent
  focus:outline-none
  duration-300 ease-in-out
`;
const Layer = tw.span`
  absolute top-px left-px
  w-[calc(100% - 2px)]
  h-2
`;
const Innput = tw.input`
  w-full p-5
  h-[3.75rem]
  bg-transparent
  text-white
  border
  placeholder-transparent
  focus:outline-none
  duration-300 ease-in-out
`;
const Label = tw.label`
  absolute px-2
  -top-2 left-3
  font-oswald font-normal
  text-xs tracking-[0.04em]
  uppercase
  text-[#4b7b73]
  // bg-[#0F2222]
  peer-placeholder-shown:top-5
  peer-placeholder-shown:left-5
  peer-placeholder-shown:px-0
  peer-placeholder-shown:text-sm
  peer-placeholder-shown:text-[#395959]
  // peer-placeholder-shown:bg-transparent
  peer-focus:-top-2
  peer-focus:left-3
  peer-focus:text-xs
  peer-focus:px-2
  peer-focus:text-[#4b7b73]
  // peer-focus:bg-[#0F2222]
  transition-all
  duration-200
  cursor-auto
`;

export default LandingInput;