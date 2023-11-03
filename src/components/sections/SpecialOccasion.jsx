import tw from "twin.macro"

import Container from "../Container"
import SectionTitle from "../SectionTitle"

import images from "../../constants/images"
import ButtonPrimary from "../ButtonPrimary"
import { useInView } from "react-intersection-observer"

const SpecialOccasion = () => {
  const { ref: imgRef, inView: imgInView } = useInView({
    threshold: 1,
    triggerOnce: true,
  });
  const { ref, inView } = useInView({
    threshold: .65,
    triggerOnce: true,
  });
  return (
    <Section>
      <div className='hidden md:block absolute rounded-full blur-[125px] animate-bubble-right-slow w-[340px] h-[350px] top-[30%] -right-[5%] bg-pink-800 rotate-[32.83deg]' />
      <Container>
        <TitleFlex>
          <SectionTitle>
            special
            <TitleSpan>occasion?</TitleSpan>
          </SectionTitle>
          <TitleImg className={imgInView ? 'translate-x-0 opacity-100' : 'translate-x-14 opacity-0'} ref={imgRef} src={images.special1} />
        </TitleFlex>
        <Content ref={ref}>
          <Text>
            <h6 className={`duration-300 ease-in-out ${inView ? 'translate-x-0 opacity-100' : '-translate-x-10 opacity-0'}`}>
              We are ready to help and put together a unique bouquet for every taste, budget and for any event according to your individual order.
            </h6>
            <List>
              <Item className={inView ? 'delay-100 translate-x-0 opacity-100' : '-translate-x-10 opacity-0'}>we will take into account even the most sophisticated wishes</Item>
              <Item className={inView ? 'delay-200 translate-x-0 opacity-100' : '-translate-x-10 opacity-0'}>we will select the freshest flowers and make a unique bouquet or composition</Item>
              <Item className={inView ? 'delay-300 translate-x-0 opacity-100' : '-translate-x-10 opacity-0'}>You can pay upon receipt or online on the website</Item>
            </List>
            <ButtonPrimary pX="17px" className={`
              ml-[50%] sm:ml-0 group duration-500
              ${inView ? 'delay-500 -translate-x-1/2 sm:translate-x-0 opacity-100' : '-translate-x-1/3 opacity-0'}
            `}>collect an individual bouquet
              <ArrowCurled className="hidden md:block -left-8" src={images.icons.arrowCurled} />
              <ArrowCurled className="hidden xs:block -right-8 -scale-x-100 md:hidden" src={images.icons.arrowCurled} />
            </ButtonPrimary>
          </Text>
          <ImgFlex>
            <ContentImg className={`w-40 lg:w-48 aspect-[252/292] ${inView ? 'translate-x-0 opacity-100' : 'translate-x-10 opacity-0'}`} src={images.special2} />
            <ContentImg className={`delay-150 w-40 lg:w-48 aspect-[151/292] ${inView ? 'translate-x-0 opacity-100' : 'translate-x-10 opacity-0'}`} src={images.special3} />
            <ContentImg className={`delay-300 w-40 lg:w-48 aspect-[252/292] ${inView ? 'translate-x-0 opacity-100' : 'translate-x-10 opacity-0'}`} src={images.special4} />
          </ImgFlex>
          {/* 22.97
          14.41 */}
        </Content>
      </Container>
    </Section>
  )
}

const Section = tw.div`
  relative
  pt-5 pb-20 md:pb-40
`;
const TitleFlex = tw.div`
  flex justify-between items-center
  gap-12
  mb-[30px]
`;
const TitleSpan = tw.span`
  relative
  block pl-16 md:pl-28 lg:pl-[1.5em]
  before:content-['']
  before:absolute before:top-1/2 before:left-[5.5%]
  before:h-px before:w-[12.5%]
  before:bg-pink-300
`;
const TitleImg = tw.img`
  rounded-[20px]
  hidden xl:block
  duration-500 ease-in-out
`;
const Content = tw.div`
  w-full
  flex justify-between
  items-start
`;
const Text = tw.div`
  relative
  w-full
  md:w-[23%]
  // max-w-[23%]
  font-oswald font-normal
  text-sm leading-normal tracking-[0.04em]
  md:uppercase
  text-white
`;
const List = tw.ul`
  my-10 ml-4 md:ml-0
  mb-14 md:mb-10
  flex flex-col gap-[1em]
`;
const Item = tw.li`
  relative
  before:content-['']
  before:w-1 before:h-1
  before:rounded-full before:bg-white
  before:absolute before:top-2.5 before:-left-4
  duration-300 ease-in-out
`;
const ArrowCurled = tw.img`
  absolute bottom-8
  group-hover:opacity-0
  duration-[.4s]
`;
const ImgFlex = tw.div`
  flex justify-end gap-4 lg:gap-6
`;
const ContentImg = tw.img`
  object-cover object-center
  rounded-[20px]
  hidden md:block
  duration-500 ease-in-out
`;

export default SpecialOccasion;