import { useInView } from "react-intersection-observer"
import tw from "twin.macro"

import Footer from "../components/sections/Footer"
import Navbar from "../components/sections/Navbar"
import Container from "../components/Container"
import Path from "../components/Path"
import SectionTitle from "../components/SectionTitle"
import BlurBlock from "../components/BlurBlock"
import SectionText from "../components/SectionText"
import ListItem from "../components/ListItem"
import ScrollToTop from "../components/ScrollToTop"

import images from "../constants/images"

const AboutUs = () => {
  const { ref: sub1Ref, inView: sub1InView } = useInView({
    threshold: .8,
    triggerOnce: true,
  });
  const { ref: sub2Ref, inView: sub2InView } = useInView({
    threshold: .8,
    triggerOnce: true,
  });
  const { ref: sub3Ref, inView: sub3InView } = useInView({
    threshold: .4,
    triggerOnce: true,
  });
  const { ref: sub4Ref, inView: sub4InView } = useInView({
    threshold: .4,
    triggerOnce: true,
  });
  const { ref: back1Ref, inView: back1InView } = useInView({
    threshold: .2,
    triggerOnce: true,
  });
  const { ref: back3Ref, inView: back3InView } = useInView({
    threshold: .25,
    triggerOnce: true,
  });


  return (
    <>
      <ScrollToTop />
      <Navbar />
      <Main>
        <div className='absolute rounded-full blur-[125px] animate-leftsided w-[360px] h-[500px] top-[-20.5em] md:top-[-20em] left-[-25em] md:left-[-20em] bg-[#C8A156] rotate-[-43.21deg]' />
        <div className='absolute rounded-full blur-[100px] md:blur-[80px] animate-bubble-right-slow w-[294px] h-[235px] top-[22.5em] md:top-[20em] right-[2.5em] md:right-[20em] bg-[#C8A156] rotate-[-43.21deg]' />
        <div className='absolute rounded-full blur-[90px] animate-bubble-right-slow w-[294px] h-[235px] top-[62.5em] md:top-[35em] left-[1.5em] md:left-[22.5em] bg-[#C8A156] rotate-[-43.21deg]' />
        <div className='absolute rounded-full blur-[90px] animate-bubble-right-slow w-[206px] h-[436px] bottom-[-21.5em] md:bottom-[-15em] left-[-12.5em] md:left-[-2.5em] bg-[#C8A156] rotate-[-43.21deg]' />
        <div className='absolute hidden md:block z-10 rounded-full blur-[90px] animate-bubble-right-slow w-[354px] h-[364px] bottom-[-20.5em] md:bottom-[-17.5em] right-[-20.5em] md:right-[-2.5em] bg-[#C8A156] rotate-[-43.21deg]' />

        <AboutBack1 ref={back1Ref} src={images.aboutUsBack} className={back1InView ? 'translate-x-0 opacity-100' : '-translate-x-6 opacity-0'} />
        <AboutBack3 ref={back3Ref} className={back3InView ? 'translate-x-0 opacity-100' : 'translate-x-6 opacity-0'} src={images.aboutUsBack} />
        <Container>
          <Path path='/aboutus' pathName="about us" />
          <SectionTitleCustom className="mt-5 md:mt-[0.45em] mb-[5.5rem] md:mb-[0.9em] ml-[1.25em] md:ml-[0.9em]">
            <>
              about us
            </>
          </SectionTitleCustom>
          <div className="md:ml-[11.625em] flex items-end gap-2.5 md:gap-5">
            <Subtitle ref={sub1Ref} className={`text-teal
              ${sub1InView ? 'trasnlate-x-0 opacity-100' : 'translate-x-12 opacity-0'}
            `}>Lover<br />
              flower</Subtitle>
            <Line className={sub1InView ? 'delay-150 trasnlate-x-0 opacity-100' : 'translate-x-12 opacity-0'} />
          </div>
        </Container>
        <Block rounded={false}>
          <AboutBack2 className={back1InView ? 'translate-x-0 opacity-100' : 'translate-x-12 opacity-0'} src={images.aboutUsBack} />
          <SectionText className='mb-5 uppercase'>a young team of different people with the same values.</SectionText>
          <SectionText className='md:w-[75%]'>
            We believe that the pleasure of quality lasts longer than the pleasure of a low price. And that’s why we invested everything we have into the creation of our bouqueteria: soul, heart, time and dreams! We are ready to promise you only what we can deliver. And we make only the highest quality, the most interesting and always unique. We are always honest with our clients in everything - in our catalog only those bouquets that you can actually buy.
          </SectionText>
        </Block>
        <Container>
          <Subtitle ref={sub2Ref} className={`mt-[3.75rem] md:mt-[1.6667em] mb-2.5 md:mb-5 text-teal
            ${sub2InView ? 'trasnlate-x-0 opacity-100' : 'translate-x-12 opacity-0'}
          `}>guarantees</Subtitle>
          <SectionText className='uppercase balance'>
            Each flower is unique and so that you can be sure of the quality, we will send you a photo of your bouquet before sending it to the recipient. All information you provide is confidential and will be known only to us and the courier for delivery.
          </SectionText>
          <Subtitle ref={sub3Ref} className={`mt-[3.75rem] md:mt-[1.6667em] md:mb-5 text-teal
            ${sub3InView ? 'trasnlate-x-0 opacity-100' : 'translate-x-12 opacity-0'}
          `}>ordering bouquets on website
            Lower&nbsp;Flower&nbsp;is:</Subtitle>
          <List>
            <Item>choice of shades and varieties of flowers at any time of the year;</Item>
            <Item>sending a photo of the finished composition before sending;</Item>
            <Item>the possibility to order flowers with delivery within an hour;</Item>
            <Item>favorable prices - on the website only those options that you can buy;</Item>
            <Item>complete confidentiality upon all request;</Item>
            <Item>we select a postcard, balloons, a gift according to your wishes;</Item>
            <Item>in our cozy flower shop there are flowers that are pleasant to give.</Item>
          </List>
          <Subtitle ref={sub4Ref} className={`mt-16 md:mt-[2.7em] mb-6 md:mb-[0.6667em] w-4/5 md:w-3/4 text-white
            ${sub4InView ? 'trasnlate-x-0 opacity-100' : 'translate-x-12 opacity-0'}
          `}>
            NATURAL HARMONY OF COLOR, UNIQUENESS OF BUDS AND YOUR FEELINGS IN DELICATE PETALS WILL NOT LEAVE ANYONE INDIFFERENT.
          </Subtitle>
          <SectionText className='uppercase w-[60.6667%] md:w-[40.5%] md:ml-[11.875rem]'>
            You choose and order a flower surprise, and we put our soul into it!
          </SectionText>
        </Container>
      </Main>
      <Footer />
    </>
  )
}

const Main = tw.main`
  mt-20 relative
  pt-9 md:pt-9
  pb-28 md:pb-[12.5em]
  overflow-hidden
`;
const SectionTitleCustom = tw(SectionTitle)`
  md:text-[6.25rem]
`;
const Back = tw.img`absolute duration-500 ease-in-out`;
const AboutBack1 = tw(Back)`
  w-[16.25em] sm:w-2/3
  top-14 md:top-0
  left-[-7.5em] sm:left-[-25%] md:left-[-36%]
  rotate-[16.72deg]
  z-10 sm:z-0
`;
const AboutBack2 = tw(Back)`
// fixed
  w-[20em] sm:w-full
  top-[0%]
  -translate-y-full
  right-[-37.5%] md:right-[-8%]
  origin-bottom scale-[1.2] sm:scale-100
`;
const AboutBack3 = tw(Back)`
// fixed
  w-[25em] sm:w-[80%] md:w-[85%]
  bottom-[8%] md:bottom-[4.5%]
  right-[-12.5em] sm:right-[-47.5%] md:right-[-33.75%]
  rotate-[-30.16deg] md:rotate-[-32.64deg]
  md:-scale-x-100
  scale-125 md:scale-100
`;
const Subtitle = tw.h2`
  font-cormorant font-normal
  text-xl md:text-[3.75rem]
  leading-[1.0667] tracking-[0.02em]
  uppercase
  duration-500 ease-in-out
`;
const Line = tw.span`
  block
  mb-2.5 md:mb-8
  w-5 md:w-[3.75rem] h-px
  bg-teal
  duration-500 ease-in-out
`;
const Block = tw(BlurBlock)`
  relative
  w-[81.25%] md:w-[65%]
  md:mt-[1.125em] ml-auto
  px-2.5 md:px-5
  py-2.5 md:py-10
  rounded-none
`;
const List = tw.ul`
  // bg-white/20
  md:w-3/4
  ml-auto
`;
const Item = tw(ListItem)`
  normal-case tracking-[0.04em]
  before:w-3 md:before:w-7 before:h-6 md:before:h-8 pl-4 md:pl-8
`;

export default AboutUs;