import tw from "twin.macro"

import Container from "../Container"
import SectionTitle from "../SectionTitle"
import SectionText from "../SectionText"

import ProductCard from "../ProductCard"
import images from "../../constants/images"
import { useRef, useState } from "react"
import data from "../../constants/data"
import Slider from "../Slider"
import { Link } from "react-router-dom"
import { useInView } from "react-intersection-observer"

const Popular = () => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    rootMargin: '-40px 0px'
  })
  return (
    <Section>
      <Bg className="hidden md:block" src={images.bgPopular} />
      <TopLayer className="hidden md:block" />
      <BottomLayer />
      <div className='absolute hidden md:block rounded-full blur-[125px] animate-bubble-left-slow w-[810px] h-[250px] top-[60%] -left-[10%] bg-teal rotate-[32.83deg]' />
      <div className='absolute rounded-full  blur-[150px] md:blur-[125px] animate-bubble-right-slow w-[390px] md:w-[570px] h-[165px] md:h-[320px] bottom-[5%] md:bottom-[-7.5%] right-[-50%] md:top-[60%] md:left-[25%] bg-pink-600 rotate-[32.83deg]' />
      <Container>
        <SectionTitle className="text-center md:text-left" nextClassName=',-mt-3 s:inline ml-3.5 md:block md:ml-[3.75em]'>
          <>Популярные</>
          <>букеты</>
        </SectionTitle>
        <SectionText className='mt-2.5 mb-6 md:mb-20 text-center'>Самые любимые композиции наших клиентов</SectionText>
      </Container>
      <Slider mobile>
        {data.products.filter(item => item.categories?.includes('popular')).map((item, i) => (i < 5) ? (
          <SliderItem>
            <ProductCard style={{ transitionDelay: `${(i % 3) * 100}ms` }} id={item.id} />
          </SliderItem>
        ) : '')}
      </Slider>
      <CatalogLink ref={ref} to='/catalog' className={inView ? 'translate-x-0 opacity-100' : '-translate-x-10 opacity-0'}>смотреть весь каталог
        <RightShortArrow></RightShortArrow>
      </CatalogLink>
    </Section>
  )
}

const Section = tw.div`
  pb-[6.25em] md:py-[6.25em]
  relative
`;
const Layer = tw.div`
  w-full h-20
  bg-gradient-to-b
  absolute left-0
  -z-10
`;
const TopLayer = tw(Layer)`
  top-0
  from-black to-transparent
`;
const BottomLayer = tw(Layer)`
  bottom-0
  from-transparent to-black
`;
const Bg = tw.img`
  absolute top-0 right-0
  w-full h-full
  object-cover
  opacity-50
  -z-10
`;
const PopularSlider = tw.div`
`;
const Arrow = tw.button`
  relative
  mt-[18.5%]
  h-px
  py-4
  before:content-['']
  before:absolute
  before:w-0 before:h-0
  after:content-['']
  after:h-px
  after:bg-teal
  after:absolute
  after:top-1/2 after:-translate-y-1/2
  after:left-0
`;
const LeftLongArrow = tw(Arrow)`
  w-[80px] after:w-full
  ml-1.5 mr-5
  before:border-t-[3px] before:border-t-transparent
  before:border-r-[6px] before:border-r-teal
  before:border-b-[3px] before:border-b-transparent
  before:left-0 before:top-1/2
  before:-translate-y-1/2
`;
const RightLongArrow = tw(Arrow)`
  w-[80px] after:w-full
  mr-1.5 ml-2.5
  before:border-t-[3px] before:border-t-transparent
  before:border-l-[6px] before:border-l-teal
  before:border-b-[3px] before:border-b-transparent
  before:right-0 before:top-1/2
  before:-translate-y-1/2
`;
const SliderContainer = tw.div`
  pt-[15px] px-2.5
  md:pt-[10px] md:pr-[10px]
  relative
  w-full
  flex gap-[30px]
  flex-col md:flex-row
  snap-x snap-mandatory
  scroll-smooth
  overflow-scroll
`;
const SliderItem = tw.div`
  basis-[calc(50% - 5px)] lg:basis-[calc(33.3333% - 17.5px)] grow-0 shrink-0
  snap-start
`;
const CatalogLink = tw(Link)`
  mt-[3.75rem] ml-2.5 md:ml-40
  flex items-center
  font-oswald font-bold
  text-sm leading-[1.5] tracking-[0.1em]
  underline uppercase
  text-pink-300
  duration-300 ease-in-out
`;
const RightShortArrow = tw(Arrow)`
  mt-0
  w-[40px] after:w-full
  after:bg-pink-300
  ml-1.5
  before:border-t-[3px] before:border-t-transparent
  before:border-l-[6px] before:border-l-pink-300
  before:border-b-[3px] before:border-b-transparent
  before:right-0 before:top-1/2
  before:-translate-y-1/2
`;

export default Popular;