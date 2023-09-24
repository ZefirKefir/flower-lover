import { useState } from "react"

import Container from "../components/Container"
import Navbar from "../components/sections/Navbar"
import Footer from "../components/sections/Footer"
import Path from "../components/Path"
import tw from "twin.macro"
import SectionTitle from "../components/SectionTitle"
import ScrollToTop from "../components/ScrollToTop"

import data from "../constants/data"
import images from "../constants/images"
import { useInView } from "react-intersection-observer"

const FAQ = () => {
  const temp = [];
  for (let item of data.faq) {
    temp.push(false);
  }
  const [active, setActive] = useState(temp)

  // useInView
  const { ref, inView } = useInView({
    threshold: .4,
    triggerOnce: true,
  });
  const { ref: backRef, inView: backInView } = useInView({
    threshold: .4,
    triggerOnce: true,
  });
  return (
    <>
      <ScrollToTop />
      <Cont>
        <Navbar />
        <FaqBack1 className={backInView ? 'translate-x-0 opacity-100' : '-translate-x-6 opacity-0'} src={images.faqBack} />
        <Main>
          <div className='absolute rounded-full blur-[125px] animate-leftsided w-[465px] h-[220px] top-[-10em] md:top-[-5em] left-[-10.5em] md:left-[-17.5em] bg-[#3D5279] rotate-[-43.21deg]' />
          <div className='absolute hidden md:block rounded-full blur-[125px] animate-bubble-right-slow w-[274px] h-[342px] top-[-20.5em] md:top-[-10em] right-[-25em] md:right-[2.5em] bg-[#3D5279] rotate-[-43.21deg]' />
          <div className='absolute hidden md:block rounded-full blur-[90px] animate-bubble-right-slow w-[206px] h-[436px] bottom-[-21.5em] md:bottom-[-15em] left-[-12.5em] md:left-[-2.5em] bg-[#3D5279] rotate-[-43.21deg]' />
          <div className='absolute rounded-full blur-[90px] animate-bubble-right-slow w-[354px] h-[364px] bottom-[-17.5em] md:bottom-[-17.5em] right-[-5em] md:right-[-5em] bg-[#3D5279] rotate-[-43.21deg]' />

          <FaqBack2 ref={backRef} className={backInView ? 'translate-x-0 opacity-100' : 'translate-x-8 opacity-0'} src={images.faqBack} />
          <Container>
            <Path path='/faq' pathName='FAQ' />
            <div className="flex items-end gap-[1.875em] mt-5 md:mt-12 mb-[3.75em] md:mb-10">
              <span className="hidden md:block mb-16 w-[65px] h-px bg-teal" />
              <SectionTitleCustom>
                <>
                  FAQ
                </>
              </SectionTitleCustom>
            </div>
            {/* questions */}
            <Questions ref={ref}>
              {data.faq.map((item, index) => (
                <Question key={'question' + index + 1} style={{ transitionDelay: inView ? `${index * 100}ms` : '0s' }}
                  className={inView ? 'translate-x-0 opacity-100' : 'translate-x-10 opacity-0'}>
                  <Flex>
                    <Title>{item.title}</Title>
                    <Indicator className={active[index] ? 'mb-3' : ''}
                      onClick={() => {
                        active[index] ? setActive(active.map((item, i) => index === i ? item = false : item)) :
                          setActive(active.map((item, i) => index === i ? item = true : item))
                      }}
                    >
                      {active[index] ? '-' : '+'}
                    </Indicator>
                  </Flex>
                  <Text className={active[index] ? 'pb-5 max-h-[350px]' : 'max-h-0'}>
                    {item.descr}
                  </Text>
                </Question>
              ))}
            </Questions>
          </Container>
        </Main>
        <Footer />
      </Cont>
    </>
  )
}

const Main = tw.main`
  mt-20 relative
  pt-9 pb-[6.25em] md:pb-[12.5em]
  overflow-hidden
`;
const Cont = tw.div`relative overflow-hidden`;
const Back = tw.img`absolute duration-500 ease-in-out`;
const FaqBack1 = tw(Back)`
  w-[5.5em] md:w-1/5
  top-16 md:-top-10
  -left-16 md:left-[-13.5%]
  z-20
`;
const FaqBack2 = tw(Back)`
  w-[12.5em] md:w-[43.3333%]
  top-0 md:-top-12
  -right-[4.75em] md:right-[-13.75%]
  rounded-full
  -z-0
`;
const SectionTitleCustom = tw(SectionTitle)`md:text-[6.25rem]`
const Questions = tw.div`md:w-3/4`;
const Question = tw.div`
  border border-teal duration-300 ease-in-out
  overflow-hidden
  mb-2.5
`;
const Flex = tw.div`
  flex items-start justify-between
`;
const Title = tw.h3`
  p-2.5 md:p-5
  font-oswald font-normal
  text-sm md:text-xl leading-normal
  uppercase
  text-teal
  self-center
`;
const Indicator = tw.button`
  font-oswald font-extralight
  text-[2.5rem] leading-[1]
  text-teal
  mr-4 md:mr-8
  md:mt-3

`;
const Text = tw.p`
  px-2.5 md:px-5
  font-oswald font-light
  text-sm md:text-xl leading-normal
  text-white
  duration-300 ease-in-out
`

export default FAQ;