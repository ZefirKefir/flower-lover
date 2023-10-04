import { useEffect, useState } from "react";
import tw from "twin.macro"

const SCROLL = 700;
const ScrollToTopButton = () => {

  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY >= SCROLL) {
        setVisible(true);
      } else {
        setVisible(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    }
  }, []);

  return (
    <Button className={visible ? 'translate-y-0 opacity-100' : 'translate-y-6 opacity-0'}
      onClick={() => {
        window.scrollTo({
          top: 0,
          left: 0,
          behavior: 'smooth',
        })
      }}
    >
      <Arrow />
    </Button>
  )
}

const Button = tw.button`
  fixed z-20
  w-24 xl:w-[6.25em]
  aspect-square
  bottom-4 md:bottom-10 lg:bottom-14 xl:bottom-[4.6875rem]
  right-[2.5%] md:right-[5%] lg:right-[7.5%] xl:right-[10%]
  rounded-full
  bg-[#000]/50 hover:bg-[#000]/70
  active:scale-95
  flex items-center justify-center
  duration-300 ease-in-out
`;
const Arrow = tw.span`
  w-px h-10 block
  bg-teal
  relative
  before:content-['']
  before:block
  before:absolute
  before:-top-px before:left-1/2 before:-translate-x-[calc(50%-.4px)]
  before:w-0 before:h-0
  before:border-r-[3px] before:border-r-transparent
  before:border-b-[6px] before:border-b-teal
  before:border-l-[3px] before:border-l-transparent
`;

export default ScrollToTopButton;