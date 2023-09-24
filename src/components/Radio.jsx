import { useInView } from "react-intersection-observer";
import tw from "twin.macro"

const Radio = ({ name, sortBy, setSortBy, className = '' }) => {

  return (
    <>
      <RadioDiv className={`${className}`}>
        <Rad className="peer" type="radio" id={name} name='mob_sort' checked={sortBy === name}
          onChange={() => {
            setSortBy(name);
            localStorage.setItem('sortBy', name)
          }} />
        <Label htmlFor={name}>{name}</Label>
      </RadioDiv>
    </>
  )
}
const RadioDiv = tw.div`
  flex items-center
  duration-300 ease-in-out
`;
const Rad = tw.input`
  appearance-none
`;
const Label = tw.label`
  flex items-center gap-1.5
  font-oswald font-light
  text-xs leading-normal tracking-[0.04em]
  uppercase
  text-white
  cursor-pointer
  before:content-[''] before:text-[10px]
  before:w-3 before:h-3 before:rounded-md
  before:bg-none before:border before:border-white
  hover:before:border-teal
  peer-checked:before:bg-teal
  peer-checked:before:border-teal
  peer-checked:hover:before:border-teal
  before:transition before:duration-300
`;

export default Radio;