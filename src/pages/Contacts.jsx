import tw from "twin.macro"

import Container from "../components/Container"
import Footer from "../components/sections/Footer"
import Navbar from "../components/sections/Navbar"
import Path from "../components/Path"
import SectionTitle from "../components/SectionTitle"
import GridX4 from "../components/GridX4"
import SectionSubtitle from "../components/SectionSubtitle"
import SectionText from "../components/SectionText"
import LandingInput from "../components/LandingInput"
import ButtonPrimary from "../components/ButtonPrimary"
import ScrollToTop from "../components/ScrollToTop"

import images from "../constants/images"
import { useInView } from "react-intersection-observer"

const Contacts = () => {
  const { ref: back1Ref, inView: back1InView } = useInView({
    threshold: .3,
    triggerOnce: true,
  });
  const { ref: back2Ref, inView: back2InView } = useInView({
    threshold: .2,
    triggerOnce: true,
  });
  const { ref: fancyRef, inView: fancyInView } = useInView({
    threshold: .85,
    triggerOnce: true,
  });
  const { ref, inView } = useInView({
    threshold: .4,
    triggerOnce: true,
  });
  const { ref: mapRef, inView: mapInView } = useInView({
    threshold: .4,
    triggerOnce: true,
  });

  return (
    <>
      <ScrollToTop />
      <Navbar />
      <Main>
        <div className='absolute rounded-full blur-[125px] animate-leftsided w-[465px] h-[220px] top-[-10em] md:top-[-5em] left-[-12.5em] md:left-[-17.5em] bg-[#922D2D] rotate-[-43.21deg]' />
        <div className='absolute hidden md:block rounded-full blur-[125px] animate-bubble-right-slow w-[274px] h-[342px] top-[-20.5em] md:top-[-10em] right-[-25em] md:right-[2.5em] bg-[#922D2D] rotate-[-43.21deg]' />
        <div className='absolute rounded-full blur-[100px] md:blur-[125px] animate-bubble-left-slow w-[220px] md:w-[700px] h-[274px] md:h-[125px] top-[20em] md:top-[25em] left-[-12.5%] md:left-1/4 md:-translate-x-1/2 bg-[#922D2D] rotate-[-63.21deg]' />
        <div className='absolute rounded-full blur-[90px] animate-bubble-right-slow w-[206px] h-[436px] bottom-[-21.5em] md:bottom-[-15em] left-[-12.5em] md:left-[-2.5em] bg-[#922D2D] rotate-[-43.21deg]' />
        <div className='absolute hidden md:block rounded-full blur-[90px] animate-bubble-right-slow w-[354px] h-[364px] bottom-[-20.5em] md:bottom-[-17.5em] right-[-20.5em] md:right-[-5em] bg-[#922D2D] rotate-[-43.21deg]' />

        <ContactsBack1 ref={back1Ref} className={back1InView ? 'translate-x-0 opacity-100' : 'translate-x-12 opacity-0'} src={images.contactsBack} />
        <Container>
          <Path path='/contacts' pathName="contacts" />
          <SectionTitleCustom className="mt-5 md:mt-[2.875rem] md:ml-[0.95em] mb-5 md:mb-10">
            <>
              contacts
            </>
          </SectionTitleCustom>
          <GridMobile className='md:hidden'>
            <CardTitle>work hours</CardTitle>
            <CardText className='mb-5'>from 10:00 to 21:00<br />everyday</CardText>
            <CardTitle>address</CardTitle>
            <CardText className='mb-5'>Minsk, Timiryazeva St. 67, room 112</CardText>
            <CardTitle>phone</CardTitle>
            <CardText className='mb-5'>+375 (29) 113-69-69</CardText>
            <CardTitle>E-mail</CardTitle>
            <CardText>zakaz@loverflower.by</CardText>
          </GridMobile>
          <GridX4 className="hidden md:flex" square>
            <>
              <CardTitle>work hours</CardTitle>
              <CardText className='text-center mt-[1.875rem]'>from 10:00 to 21:00<br />everyday</CardText>
            </>
            <>
              <CardTitle>address</CardTitle>
              <CardText className='text-center mt-[1.875rem]'>Minsk, Timiryazeva St. 67, room 112</CardText>
            </>
            <>
              <CardTitle>phone</CardTitle>
              <CardText className='text-center mt-[1.875rem]'>+375 (29) 113-69-69</CardText>
            </>
            <>
              <CardTitle>E-mail</CardTitle>
              <CardText className='text-center mt-[1.875rem]'>zakaz@loverflower.by</CardText>
            </>
          </GridX4>
          <Flex>
            <ContactsBack2 ref={back2Ref} className={back2InView ? 'translate-x-0 opacity-100' : '-translate-x-12 opacity-0'} src={images.contactsBack} />
            <FancyText ref={fancyRef}>
              <span className={`${fancyInView ? 'translate-x-0 opacity-100' : '-translate-x-10 opacity-0'} duration-300 ease-in-out block`}>have any</span>
              <span className={`${fancyInView ? 'translate-x-0 opacity-100 delay-100' : '-translate-x-10 opacity-0'} duration-300 ease-in-out block -ml-4`}>questions?</span>
            </FancyText>
            <SectionTitleCustom>
              write
              <span className="block md:ml-[2.75em]">us</span>
            </SectionTitleCustom>
            <Content ref={ref}>
              <Line className={inView ? 'scale-x-100' : 'scale-x-[.1]'} />
              <FormText className={inView ? 'delay-100 translate-x-0 opacity-100' : 'translate-x-12 opacity-0'}>
                Submit your question, order, suggestion or complaint via the feedback form and our specialist will contact you within 15 minutes.
              </FormText>
              <Form action="#">
                <LandingInput parentClassName={inView ? 'delay-200 translate-x-0 opacity-100' : 'translate-x-10 opacity-0'} colors='bg-black peer-placeholder-shown:bg-black peer-focus:bg-black' type='text' id='name' name='name' label='Your name' />
                <LandingInput parentClassName={inView ? 'delay-300 translate-x-0 opacity-100' : 'translate-x-10 opacity-0'} colors='bg-black peer-placeholder-shown:bg-black peer-focus:bg-black' type='tel' id='phone' name='phone' label='Your number' numeric />
                <LandingInput parentClassName={inView ? 'delay-[.4s] translate-x-0 opacity-100' : 'translate-x-10 opacity-0'} className="bg-black" colors='bg-black peer-placeholder-shown:bg-black peer-focus:bg-black' type='textarea' id='commentary' name='commentary' label='Your commentary' />
                <ButtonPrimary noInView className={`self-start mt-2.5 ${inView ? 'delay-500 translate-x-0 opacity-100' : 'translate-x-10 opacity-0'}`} pX='92px'>Submit</ButtonPrimary>
                <FormDescr className={inView ? 'delay-[.8s] translate-x-0 opacity-100' : 'translate-x-8 opacity-0'}>
                  By submitting the form, I consent to the processing of personal data in accordance with the
                  {' '}<a href="#" className="font-normal text-pink-300 underline">Privacy&nbsp;Policy</a>.
                </FormDescr>
              </Form>
            </Content>
          </Flex>
          <CardTitle className='mt-[3.75rem] md:mt-[6.25rem] mb-2.5 md:mb-5'>us on the map</CardTitle>
          <div ref={mapRef} className={`w-full aspect-square md:aspect-[111/42] bg-white/10 duration-500 ease-in-out
            ${mapInView ? 'translate-x-0 opacity-100' : 'translate-x-10 opacity-0'}
          `}>
            {/* <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2442.8061364533705!2d27.507421457900975!3d53.92472291292107!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x46dbc56c6b46c34f%3A0xb4592a0d073badb1!2svulica%20Cimirazieva%2067%2C%20Minsk%20220035%2C%20Belarus!5e0!3m2!1sen!2spl!4v1693162211926!5m2!1sen!2spl" width='100%' height='100%' style={{ border: 0 }} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe> */}
            <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d3689.284609488444!2d27.5074215!3d53.9247229!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x46dbc56c6b46c34f%3A0xb4592a0d073badb1!2svulica%20Cimirazieva%2067%2C%20Minsk%20220035%2C%20Belarus!5e1!3m2!1sen!2spl!4v1693162656409!5m2!1sen!2spl" width="100%" height="100%" style={{ border: 0 }} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
          </div>
        </Container>
      </Main>
      <Footer />
    </>
  )
}

const Main = tw.main`
  mt-20 relative
  pt-9 pb-[9.375em] md:pb-[12.5em]
  overflow-hidden
  // bg-white/10
`;
const Back = tw.img`absolute duration-500 ease-in-out`;
const ContactsBack1 = tw(Back)`
  w-[35em] sm:w-[40em] md:w-[77.5%]
  -top-8 sm:-top-16 md:top-[-3.75%] lg:top-[-5%] xl:top-[-7.5%]
  right-[-45%] sm:right-[-42.5%] md:right-[-29.25%]
  rotate-[92.75deg] md:rotate-[79.6deg]
`;
const ContactsBack2 = tw(Back)`
  hidden md:block
  w-full
  top-[-10%] lg:top-[-20%] xl:top-[-32.5%]
  left-[-22.5em] lg:left-[-55.5%]
  rotate-[129.15deg]
  -z-10
`;
const SectionTitleCustom = tw(SectionTitle)`md:text-[6.25rem]`;
const GridMobile = tw.div``;
const CardTitle = tw(SectionSubtitle)`text-sm md:text-xl text-teal`;
const CardText = tw(SectionText)`text-sm md:text-xl tracking-[0.02em]`
const Flex = tw.div`
  relative mt-[3.75em] md:mt-[8.75em]
  flex justify-between items-start
  flex-col lg:flex-row
  gap-2
`;
const FancyText = tw.p`
  absolute
  top-[12.5%] xs:top-[7.5%] md:top-[26.125%] lg:top-[37.5%]
  left-2/3 lg:left-[42.5%] xl:left-[37.5%]
  -translate-x-1/2
  font-fancy
  text-[30px] xs:text-[45px] sm:text-[60px] md:text-[75px] lg:text-[100px]
  leading-[0.75] tracking-[0.04em]
  text-[#7D2525]
  -rotate-[18deg]
`;
const Content = tw.div`
  lg:max-w-[340px] ll:max-w-[400px] xl:max-w-[45%]
  md:mt-36 lg:mt-0
  flex flex-col items-start lg:items-end
`;
const Line = tw.span`
  w-1/3 md:w-3/4 xl:w-3/5 h-px
  mt-10 md:mt-[3.75em] mb-5 lg:mb-[3.25em]
  bg-teal
  duration-500 ease-in-out origin-right
`;
const FormText = tw.p`
  sm:w-[55%] lg:w-[70%] xl:w-[55%] mb-[1.875rem] md:mb-16
  font-oswald font-medium
  text-sm tracking-[0.04em]
  uppercase
  text-white
  duration-300 ease-in-out
`;
const Form = tw.form`
  w-full
  flex flex-col gap-[10px]
  mb-2.5
`;
const FormDescr = tw.p`
  max-w-[75%]
  font-roboto font-light
  text-[10px] leading-[1.2] tracking-[0.02em]
  text-white
`;

export default Contacts;