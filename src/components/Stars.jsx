import tw from "twin.macro"

import { MdStarOutline } from 'react-icons/md'
const Stars = ({ className = '', amount = 0, setAmount = () => console.log(), logic = false }) => {
  return (logic) ? (
    <Staas className={`group ${className}`}>
      {/* text-[#fcff50] */}
      <MdStarOutline size={24}
        onClick={() => setAmount(1)}
        className={`text-${amount >= 1 ? '[#fcff50]' : 'white'} transition-all duration-300 group-hover:text-[#fcff50] group-hover:scale-110 active:rotate-[71.25deg] active:duration-100 cursor-pointer peer`} />
      <MdStarOutline size={24}
        onClick={() => setAmount(2)}
        className={`text-${amount >= 2 ? '[#fcff50]' : 'white'} transition-all duration-300 group-hover:text-[#fcff50] group-hover:scale-110 active:rotate-[71.25deg] active:duration-100 cursor-pointer peer-hover:scale-95 peer-hover:text-white peer`} />
      <MdStarOutline size={24}
        onClick={() => setAmount(3)}
        className={`text-${amount >= 3 ? '[#fcff50]' : 'white'} transition-all duration-300 group-hover:text-[#fcff50] group-hover:scale-110 active:rotate-[71.25deg] active:duration-100 cursor-pointer peer-hover:scale-95 peer-hover:text-white peer`} />
      <MdStarOutline size={24}
        onClick={() => setAmount(4)}
        className={`text-${amount >= 4 ? '[#fcff50]' : 'white'} transition-all duration-300 group-hover:text-[#fcff50] group-hover:scale-110 active:rotate-[71.25deg] active:duration-100 cursor-pointer peer-hover:scale-95 peer-hover:text-white peer`} />
      <MdStarOutline size={24}
        onClick={() => setAmount(5)}
        className={`text-${amount === 5 ? '[#fcff50]' : 'white'} transition-all duration-300 group-hover:text-[#fcff50] group-hover:scale-110 active:rotate-[71.25deg] active:duration-100 cursor-pointer peer-hover:scale-95 peer-hover:text-white`} />
    </Staas>
  ) : (
    <Staas>
      <MdStarOutline size={24} className={amount >= 1 ? 'text-[#FCFF50]' : 'text-white'} />
      <MdStarOutline size={24} className={amount >= 2 ? 'text-[#FCFF50]' : 'text-white'} />
      <MdStarOutline size={24} className={amount >= 3 ? 'text-[#FCFF50]' : 'text-white'} />
      <MdStarOutline size={24} className={amount >= 4 ? 'text-[#FCFF50]' : 'text-white'} />
      <MdStarOutline size={24} className={amount === 5 ? 'text-[#FCFF50]' : 'text-white'} />
    </Staas>
  )
}

const Staas = tw.div`flex gap-1`;

export default Stars;