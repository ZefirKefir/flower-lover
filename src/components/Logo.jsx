import { Link } from "react-router-dom";
import tw from "twin.macro"

const Logo = ({ className = '', large = false }) => {
  return large ? (
    <IconX2 to='/'
      className={`group logo ${className} ${className.includes('block') ? '' : 'block'}`}
    >
      <L>L</L>
      <F>F</F>
    </IconX2>
  ) : (
    <Icon to='/'
      className={`group logo ${className} ${className.includes('block') ? '' : 'block'}`}
    >
      <L>L</L>
      <F>F</F>
    </Icon>
  )
}

const Icon0 = tw(Link)`
  w-[42px] h-[68px]
  relative
  duration-300
  shrink-0
`;
const Icon = tw(Icon0)`
  scale-100
  hover:scale-110
  active:scale-95
`;
const IconX2 = tw(Icon0)`
  scale-125
  hover:scale-[1.35]
  active:scale-[1.2]
`;
const Mutual = tw.span`
  font-cormorant font-light
  tracking-[0.02em]
  uppercase
  absolute
  duration-200
`;
const L = tw(Mutual)`
  left-1 -top-[7px]
  text-[60px] leading-[73px]
  text-gray-800
  group-hover:text-teal/50
`;
const F = tw(Mutual)`
  bottom-0 right-1
  text-[50px] leading-[61px]
  text-white
  group-hover:text-fuchsia-300
`;

export default Logo;