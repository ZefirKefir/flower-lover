import ReactSlider from "react-slider";
import tw from "twin.macro";

const DoubleSlider = ({ title = 'title', currency = '', values, setValues, min = 0, max = 100000 }) => {
  return (
    <>
      <Slider value={values} min={min} max={max}
        onChange={setValues}
        onAfterChange={localStorage.setItem('priceSegment', values.join(','))}
      />
      {currency ? (
        <P>{title}: {values[0]} {currency} - {values[1]} {currency}</P>
      ) : (
        <P>{title}: {values[0]} - {values[1]}</P>
      )}
    </>
  )
}

const Slider = tw(ReactSlider)`
  bg-white
  h-px w-full
  mb-2.5
  [&>.thumb]:w-[5px]
  [&>.thumb]:h-[5px]
  [&>.thumb]:-translate-y-[1.75px]
  [&>.thumb]:rounded-full
  [&>.thumb]:bg-teal
  [&>.thumb]:cursor-pointer
  [&>.thumb]:focus:bg-pink-800
  [&>.thumb]:focus:outline
  [&>.thumb]:focus:outline-white
`;
const P = tw.p`
  font-oswald font-light
  text-xs leading-normal tracking-[0.04em]
  uppercase
  text-white
`;

export default DoubleSlider;