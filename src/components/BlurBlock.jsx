import { useInView } from "react-intersection-observer";
import tw from "twin.macro"

const BlurBlock = ({ children, className = '' }) => {
  const { ref, inView } = useInView({
    threshold: .5,
    triggerOnce: true,
  });

  return (
    <Block className={`${className}
      ${className.split(' ').find(item => item.startsWith('w-') || item.startsWith('max-w-')) ? '' : 'w-full'}
    `}>
      {children}
    </Block>
  )
}

const Block = tw.div`
  relative
  pt-5 pb-[1.875em] md:py-[1.875em]
  px-2.5 md:px-8
  rounded-[20px]
  bg-[#000]/20 backdrop-blur-[20px]
  duration-500 ease-in-out
`;

export default BlurBlock;