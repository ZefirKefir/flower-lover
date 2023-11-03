import tw from "twin.macro";
import { Link } from "react-router-dom";
import { InView, useInView } from "react-intersection-observer";

import ButtonPrimary from "../ButtonPrimary";
import Sign from "../Sign";

import images from "../../constants/images";
import ScrollToTop from "../ScrollToTop";

const Header = ({ children }) => {
  const { ref: loverRef, inView: loverInView } = useInView({
    triggerOnce: false,
    threshold: .65,
  });
  const { ref: flowerRef, inView: flowerInView } = useInView({
    triggerOnce: false,
    threshold: .55,
  });
  const { ref: textRef, inView: textInView } = useInView({
    triggerOnce: true,
    threshold: 1,
    rootMargin: '-50px 0px 0px 0px',
  });
  const { ref: buttonRef, inView: buttonInView } = useInView({
    triggerOnce: true,
    threshold: .75,
    rootMargin: '-40px 0px',
  });
  const { ref: mobRef, inView: mobInView } = useInView({
    triggerOnce: false,
    threshold: .85,
  });

  return (
    <Section>
      <div className='z-10 absolute rounded-full blur-[125px] animate-leftsided w-[472px] h-[105px] lg:h-[211px] top-[10%] xl:top-[32.5%] right-[-20%] lg:right-[5%] bg-pink-800 rotate-[-43.21deg]' />
      <div className='z-10 absolute rounded-full blur-[125px] animate-bubble-left-slow w-[358px] h-[145px] lg:h-[293px] top-[10%] xl:top-[40%] left-[-40%] lg:left-[5%] bg-teal rotate-[41.21deg]' />
      {children}
      <Header1>
        <Lover ref={loverRef} className={loverInView ? '-translate-x-1/2 opacity-100' : 'translate-x-[-60%] opacity-0'}>lover</Lover>
      </Header1>
      <Header2>
        <img className="hidden lg:block object-cover object-center w-full h-[78.5%]" src={images.bgCover} />
      </Header2>
      <Header3>
        <Flower ref={flowerRef} className={flowerInView ? 'transalte-x-0 opacity-100' : 'translate-x-[10%] opacity-0'}>flower</Flower>
        <div ref={mobRef} className={`relative lg:hidden w-full h-[80vh]`}>
          <HeaderBg src={images.bg} />
          <MobileBgCover src={images.bgCover} />
          <Layer />
          <Sign className='absolute bottom-0 right-[7.5%] md:right-[5%]' />
          <MobileLogo className={`z-10 top-6 duration-500 ease0-in-out ${mobInView ? '-translate-x-1/2 opacity-100' : 'translate-x-0 opacity-0'}`}>Lover</MobileLogo>
          <MobileLogo className={`z-0 top-16 duration-500 ease0-in-out ${mobInView ? '-translate-x-1/2 opacity-100' : '-translate-x-[80%] opacity-0'}`}>Flower</MobileLogo>
        </div>
        <HeaderSubtitle ref={textRef} className={`duration-300 ease-out ${textInView ? 'translate-y-0 opacity-100' : '-translate-y-10 opacity-0'}`}>
          We create for those who appreciate the freshness and grace of flowers
        </HeaderSubtitle>
        <ButtonLinkPrimary className={`duration-300 ease-out ${buttonInView ? 'translate-y-0 opacity-100' : '-translate-y-10 opacity-0'}`} ref={buttonRef} to='/catalog'>
          View catalog
        </ButtonLinkPrimary>
        <Layer className="hidden lg:block" />
        <Sign className='hidden lg:block absolute bottom-0 right-[12.5%]' />
      </Header3>
    </Section>
  )
}

const Section = tw.header`
  lg:aspect-[1.157556270096463]
  relative
  overflow-hidden
`;
const HeaderLayer = tw.div`
  w-full h-full
`;
const Header1 = tw(HeaderLayer)`
  bg-black
  lg:bg-header bg-cover bg-bottom
`;
const Header2 = tw(HeaderLayer)`
  absolute h-full top-0 left-0
  z-10
`;
const Header3 = tw(HeaderLayer)`
  static
  lg:absolute top-0 left-0
  flex flex-col items-center
  z-10
`;
const HeaderBg = tw.img`
  lg:hidden
  w-full h-full
  object-cover
`;
const MobileBgCover = tw.img`
  lg:hidden
  absolute
  top-0
  left-1/2 -translate-x-1/2
  w-full h-[78.5%]
  object-cover
  z-10
`;
const MobileLogo = tw.a`
  absolute left-1/2
  font-cormorant font-light
  text-[3.125rem] leading-[0.9] tracking-[0.1em]
  uppercase text-center
  text-white
  lg:hidden
`;

const HeaderTitle = tw.h1`
  font-cormorant font-light
  text-[50px] md:text-[100px] lg:text-[150px] xl:text-[200px]
  leading-[1.201] tracking-[0.2em]
  uppercase text-center
  text-white
  select-none
  duration-[.8s] ease-in-out
`;
const Lover = tw(HeaderTitle)`
  hidden lg:block
  absolute left-1/2
  pt-80 md:pt-40 lg:pt-28 xl:pt-[86px]
  z-10
`;
const Flower = tw(HeaderTitle)`
  pt-60
  hidden lg:block
`;
const HeaderSubtitle = tw.p`
  mb-12 pt-16 px-2
  font-oswald font-normal
  text-sm lg:text-xl tracking-[0.02em]
  text-center
  text-white
  z-10
`;
const Layer = tw.div`
  w-full h-1/3
  absolute
  -bottom-px left-0
  bg-gradient-to-t
  from-black to-transparent
`;
const ButtonLinkPrimary = tw(Link)`
  py-4 px-[3.125rem]
  font-oswald font-bold
  text-xs leading-[1.5] tracking-[0.1em]
  uppercase whitespace-nowrap
  text-[#000] hover:text-white
  bg-teal hover:bg-pink-800
  focus:outline-pink-800
  active:shadow-inner
  duration-300
`;

export default Header;