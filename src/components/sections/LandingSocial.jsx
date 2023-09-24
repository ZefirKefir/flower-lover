import tw from "twin.macro";

import Container from "../Container"
import images from "../../constants/images";

import { BsInstagram } from 'react-icons/bs';
import { useInView } from "react-intersection-observer";

const LandingSocial = () => {
  const { ref, inView } = useInView({
    threshold: .65,
    triggerOnce: true,
  });
  const { ref: imgRef, inView: imgInView } = useInView({
    threshold: .5,
    triggerOnce: true,
  });

  return (
    <Section>
      <div className='absolute rounded-full blur-[125px] animate-bubble-left-slow w-[100px] h-[200px] -bottom-[10em] -left-[0%] bg-teal rotate-[21.1deg]' />
      <div className='absolute rounded-full blur-[125px] animate-bubble-right-slow w-[800px] h-[200px] -bottom-[22.5em] left-[42.5%] bg-teal rotate-[21.1deg]' />
      <div className='absolute rounded-full blur-[125px] animate-bubble-right-slow w-[360px] h-[350px] -bottom-[15em] -right-[5%] bg-pink-800 rotate-[32.83deg]' />
      <BgText className={imgInView ? 'duration-[1s] translate-x-0 opacity-100' : 'duration-500 -translate-x-1/2 opacity-0'}>instagram</BgText>
      <Container>
        <Flex>
          <ImgFlex ref={imgRef}>
            <ImgDiv className={`group ${imgInView ? 'translate-x-0 opacity-100 cursor-pointer' : 'cursor-default -translate-x-12 opacity-0'}`}>
              <Img src={images.social1} />
              <Layer />
              <BsInstagram className="absolute text-gray-300 duration-300 -translate-x-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100 top-1/2 left-1/2" size={28} />
            </ImgDiv>
            <ImgDiv className={`group ${imgInView ? 'delay-100 translate-x-0 opacity-100 cursor-pointer' : 'cursor-default -translate-x-12 opacity-0'}`}>
              <Img src={images.social2} />
              <Layer />
              <BsInstagram className="absolute text-gray-300 duration-300 -translate-x-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100 top-1/2 left-1/2" size={28} />
            </ImgDiv>
            <ImgDiv className={`group ${imgInView ? 'delay-200 translate-x-0 opacity-100 cursor-pointer' : 'cursor-default -translate-x-12 opacity-0'}`}>
              <Img src={images.social3} />
              <Layer />
              <BsInstagram className="absolute text-gray-300 duration-300 -translate-x-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100 top-1/2 left-1/2" size={28} />
            </ImgDiv>
            <ImgDiv className={`group ${imgInView ? 'delay-300 translate-x-0 opacity-100 cursor-pointer' : 'cursor-default -translate-x-12 opacity-0'}`}>
              <Img src={images.social4} />
              <Layer />
              <BsInstagram className="absolute text-gray-300 duration-300 -translate-x-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100 top-1/2 left-1/2" size={28} />
            </ImgDiv>
          </ImgFlex>
          <Last ref={ref}>
            <Text>
              <span className={`block duration-300 ease-in-out ${inView ? 'translate-x-0 opacity-100' : 'translate-x-10 opacity-0'}`}>our{'\u00a0'}social</span>
              <Line className={inView ? 'scale-x-100' : 'scale-x-[.1]'} />
              <span className={`md:-ml-2 block duration-300 ease-in-out ${inView ? 'delay-150 translate-x-0 opacity-100' : 'translate-x-10 opacity-0'}`}>networks</span>
            </Text>
            <Social>
              <a className={`block w-5 xs:w-8 md:w-10 aspect-square duration-300 ease-in-out
                ${inView ? 'delay-[.3s] translate-x-0 opacity-100' : 'translate-x-10 opacity-0'}
              `} href="#">
                <img src={images.icons.insta} width={40} />
              </a>
              <a className={`block w-5 xs:w-8 md:w-10 aspect-square duration-300 ease-in-out
                ${inView ? 'delay-[.4s] translate-x-0 opacity-100' : 'translate-x-10 opacity-0'}
              `} href="#">
                <img src={images.icons.whatsapp} width={40} />
              </a>
              <a className={`block w-5 xs:w-8 md:w-10 aspect-square duration-300 ease-in-out
                ${inView ? 'delay-[.5s] translate-x-0 opacity-100' : 'translate-x-10 opacity-0'}
              `} href="#">
                <img src={images.icons.viber} width={40} />
              </a>
            </Social>
          </Last>
        </Flex>
      </Container>
    </Section>
  )
}

const Section = tw.div`
  py-[12.5em]
  pt-10 md:pt-[12.5em]
  relative
`;
const BgText = tw.p`
  absolute top-1/2 -left-5
  -translate-y-1/4
  font-oswald font-bold
  text-[200px] leading-normal tracking-[0.04em]
  uppercase
  text-[#5eead4]/10
  hidden md:block
  ease-in-out
`;
const Flex = tw.div`
  flex justify-center
  flex-col md:flex-row
  items-center lg:items-end
  gap-8
`;
const ImgFlex = tw.div`
  grid grid-cols-2 grid-rows-2
  place-items-start
  w-full gap-1.5 md:gap-4
  lg:flex lg:gap-2 xl:gap-[30px]
  order-2 md:order-1
  [&>:nth-child(1)]:place-self-end
  [&>:nth-child(3)]:place-self-end
  md:max-w-[50%]
  lg:max-w-full
`;
const ImgDiv = tw.div`
  relative
  md:w-48 lg:w-40 aspect-square
  overflow-hidden
  duration-500 ease-in-out
`;
const Img = tw.img`
  w-full h-full
  object-cover group-hover:scale-105
  duration-300
`;
const Layer = tw.div`
  w-full h-full
  bg-[#000]/40
  absolute top-0 left-0
  opacity-0
  group-hover:opacity-100
  duration-300
`;
const Last = tw.div`
  w-full md:w-[40%]
  order-1 md:order-2
  flex justify-between
  flex-row md:flex-col
  items-center md:items-end
`;
const Text = tw.div`
  font-fancy
  text-[1.875rem] xs:text-[50px] md:text-[100px]
  leading-[1] md:leading-[0.75] tracking-[0.04em]
  text-white
  md:self-start
  // md:-translate-x-[20%]
`;
const Line = tw.span`
  block
  w-[125%] h-px
  bg-teal
  mt-4 md:mt-0
  duration-500 ease-in-out origin-left md:origin-right
`;
const Social = tw.div`
  md:mt-16
  flex justify-end gap-5 md:gap-[1.875em]
  duration-500 ease-in-out
`;

export default LandingSocial;