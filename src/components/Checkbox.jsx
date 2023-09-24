import tw from "twin.macro";

import { useDispatch, useSelector } from "react-redux";
import { addColor, addFlower, addFormat, addShade, removeColor, removeFlower, removeFormat, removeShade, } from "../redux-toolkit/reducers/filterSlice";
import data from "../constants/data";


const Checkbox = ({ name, displayName, amount = -1, theme = '', values = [], setValues = () => alert(''), min = 0, max = 10 }) => {
  // data.products.map(item => list.map(id => (item.id === id && !tempList.includes(item)) ? tempList.push(item) : ''));
  // data.products.map(item => list.)

  const dispatch = useDispatch();
  const { shades } = useSelector(state => state.filter);
  const { colors } = useSelector(state => state.filter);
  const { format } = useSelector(state => state.filter);
  const { flowers } = useSelector(state => state.filter);

  const isChecked =
    theme === 'shades' ? shades.includes(name) :
      theme === 'colors' ? colors.includes(name) :
        theme === 'format' ? format.includes(name) :
          theme === 'flowers' ? flowers.includes(name) :
            3 > 4;

  const onClick = (theme, isChecked) => {
    theme === 'shades' ? !isChecked ? dispatch(addShade(name)) : dispatch(removeShade(name)) :
      theme === 'colors' ? !isChecked ? dispatch(addColor(name)) : dispatch(removeColor(name)) :
        theme === 'format' ? !isChecked ? dispatch(addFormat(name)) : dispatch(removeFormat(name)) :
          theme === 'flowers' ? !isChecked ? dispatch(addFlower(name)) : dispatch(removeFlower(name)) :
            '';

  }

  return (
    <>
      <CheckDiv className={`${amount === 0 ? 'order-1' : ''}`}>
        <Check type="checkbox" disabled={amount === 0} value='' id={name} name={name} className="peer"
          checked={isChecked}
          onChange={() => onClick(theme, isChecked)}
        />
        <Label htmlFor={name} className={`${amount !== 0 ? 'text-white' : 'text-disabled'}`}>
          {displayName}
          {amount !== -1 ? ` (${amount})` : <></>}
        </Label>
      </CheckDiv>
    </>
  )
}

const CheckDiv = tw.div`flex items-center`;
const Check = tw.input`
  appearance-none
`;
const Label = tw.label`
  flex items-center gap-1.5
  font-oswald font-light
  text-xs leading-normal tracking-[0.04em]
  uppercase
  cursor-pointer
  peer-disabled:cursor-default
  before:content-[''] before:text-[10px]
  before:w-3 before:h-3 before:rounded-sm
  before:bg-none before:border before:border-white
  hover:before:border-teal
  peer-checked:before:bg-pink-800
  peer-checked:before:border-pink-800
  peer-checked:hover:before:border-teal
  peer-checked:before:content-['✓']
  before:flex before:justify-center before:items-center
  before:transition before:duration-300
  peer-disabled:before:border-disabled
`;

export default Checkbox;