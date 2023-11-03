import { useInView } from "react-intersection-observer";
import tw from "twin.macro"

import Container from "../Container"
import SectionTitle from "../SectionTitle";
import SectionText from "../SectionText";
import ListItem from "../ListItem";
import { Link } from "react-router-dom";

const LandingCatalog = () => {
  const { ref: card1Ref, inView: card1InView } = useInView({
    threshold: .6,
    triggerOnce: true,
  });
  const { ref: card2Ref, inView: card2InView } = useInView({
    threshold: .6,
    triggerOnce: true,
  });
  const { ref: card3Ref, inView: card3InView } = useInView({
    threshold: .6,
    triggerOnce: true,
  });
  return (
    <Section>
      <Layer />
      <div className='absolute -z-0 rounded-full blur-[125px] animate-bubble-right-slow w-[880px] h-[211px] top-[40%] md:top-[50%] right-[-10%] bg-teal rotate-[32.83deg]' />
      <div className='absolute -z-0 rounded-full blur-[125px] animate-bubble-left-slow w-[707px] h-[236px] top-[70%] md:top-[50%] left-[-10%] bg-pink-800 rotate-[32.83deg]' />
      <Container>
        <SectionTitle className={`mb-5 lg:mb-0`}>
          <>
            catalog
          </>
        </SectionTitle>
        <Flex>
          <div className="basis-[48.5%] shrink-0 grow-0 hidden md:block ml-8 xl:ml-20 mt-2.5 mb-20">
            <SectionText>
              We have the largest selection of flowers, bouquets, cards and gifts.
              We will always help you choose a bouquet for your event, our manager will advise you and help you make your choice
            </SectionText>
            <SectionText className="mt-7">Check out our catalog sections</SectionText>
          </div>
          <CatalogCard ref={card1Ref} className={`w-full md:basis-[40%] lg:min-w-[40%] ${card1InView ? 'translate-x-0 opacity-100' : 'translate-x-12 opacity-0'}`}>
            <CardLayer className={`${card1InView ? '-top-24 -left-12' : '-top-24 left-[2.75em]'}`}>bouquets</CardLayer>
            <CardBg />
            <CardTitle>bouquets of dried flowers</CardTitle>
            <CardList>
              <ListItem className='mb-1.5 md:mb-1 last:mb-0'>bouquets</ListItem>
              <ListItem className='mb-1.5 md:mb-1 last:mb-0'>for interior</ListItem>
              <ListItem className='mb-1.5 md:mb-1 last:mb-0'>compositions</ListItem>
            </CardList>
            <CardButton to='/catalog'>view catalog</CardButton>
          </CatalogCard>
        </Flex>
        <Flex className="mt-10">
          <CatalogCard ref={card2Ref} className={`w-full md:basis-[48.5%] lg:min-w-[48.5%] md:-translate-y-20 ${card2InView ? 'translate-x-0 opacity-100' : '-translate-x-12 opacity-0'}`}>
            <CardBg />
            <CardTitle>flowers</CardTitle>
            <CardList>
              <CardLayer className={card2InView ? '-top-[5.5rem] right-12' : '-top-[5.5rem] right-[2.5em]'}>flowers</CardLayer>
              <ListItem className='mb-1.5 md:mb-1 last:mb-0'>made bouquets</ListItem>
              <ListItem className='mb-1.5 md:mb-1 last:mb-0'>mono bouquets</ListItem>
              <ListItem className='mb-1.5 md:mb-1 last:mb-0'>flower compositions</ListItem>
              <ListItem className='mb-1.5 md:mb-1 last:mb-0'>roses</ListItem>
              <ListItem className='mb-1.5 md:mb-1 last:mb-0'>wedding</ListItem>
            </CardList>
            <CardButton to='/catalog'>view catalog</CardButton>
          </CatalogCard>
          <CatalogCard ref={card3Ref} className={`w-full md:basis-[48.5%] lg:min-w-[48.5%] ${card3InView ? 'translate-x-0 opacity-100' : 'translate-x-12 opacity-0'}`}>
            <CardLayer className={card3InView ? 'top-12 -left-16' : 'top-12 left-[3.5em]'}>additional</CardLayer>
            <CardBg />
            <CardTitle>additional</CardTitle>
            <CardList>
              <ListItem className='mb-1.5 md:mb-1 last:mb-0'>balloons</ListItem>
              <ListItem className='mb-1.5 md:mb-1 last:mb-0'>toys</ListItem>
              <ListItem className='mb-1.5 md:mb-1 last:mb-0'>postcards</ListItem>
              <ListItem className='mb-1.5 md:mb-1 last:mb-0'>package</ListItem>
            </CardList>
            <CardButton to='/catalog'>view catalog</CardButton>
          </CatalogCard>
        </Flex>
      </Container>
    </Section>
  )
}

const Section = tw.div`
  py-[6.25em]
  lg:pt-28 lg:pb-52
  relative
`;
const Layer = tw.div`
  absolute top-0
  w-full h-full
  bg-black/90
`;
const Flex = tw.div`
  flex flex-col md:flex-row
  items-center md:items-start
  justify-between
  gap-10 md:gap-7
`;
const CatalogCard = tw.div`
  relative
  max-w-[25em]
  shrink-0 grow-0
  lg:grow
  p-[1.875rem]
  bg-black/10
  flex flex-col items-center md:items-start
  duration-300 ease-in-out
`;
const CardBg = tw.div`
  absolute top-0 left-0
  w-full h-full
  rounded-[20px]
  bg-[#000]/20
  backdrop-blur-[10px]
`;
const CardLayer = tw.p`
  absolute 
  font-oswald font-bold
  text-[200px] leading-[1.5] tracking-[0.04em]
  uppercase
  text-white/[.075]
  // -z-10
  hidden md:block
  duration-[1s] ease-out
`;
const CardTitle = tw.h4`
  md:ml-5
  font-oswald font-bold
  text-xl md:text-3xl leading-normal tracking-[0.04em]
  uppercase
  text-teal
  max-w-[85%] sm:max-w-[60%] text-center md:max-w-full md:text-left
  z-10
`;
const CardList = tw.ul`
  mt-5 md:mt-2.5
`;

const CardButton = tw(Link)`
  md:ml-auto mt-[1.875rem] md:mt-6
  font-oswald font-bold
  text-xs leading-[1.5] tracking-[0.1em]
  text-pink-300
  uppercase underline
  z-10
`;

export default LandingCatalog;