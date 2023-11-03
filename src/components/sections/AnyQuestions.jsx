import tw from "twin.macro"

import Container from "../Container"
import SectionTitle from "../SectionTitle"
import ButtonPrimary from "../ButtonPrimary"

import images from "../../constants/images";
import LandingInput from "../LandingInput"
import { useInView } from "react-intersection-observer";

const AnyQuestions = () => {
  const { ref: imgRef, inView: imgInView } = useInView({
    threshold: .3,
    triggerOnce: true,
  });
  const { ref: mobRef, inView: mobInView } = useInView({
    threshold: .4,
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

  return (
    <Section>
      <div className='absolute rounded-full blur-[50px] md:blur-[125px] animate-bubble-right-slow w-[100px] md:w-[240px] h-[140px] md:h-[280px] top-[15%] lg:top-[30%] left-[55%] lg:left-[20%] xs:left-[45%] bg-teal rotate-[32.83deg]' />
      <div className='absolute rounded-full blur-[50px] md:blur-[125px] animate-bubble-left-slow w-[210px] md:w-[420px] h-[200px] md:h-[400px] top-[10%] lg:top-[30%] left-[-5%] lg:left-[-2.5%] xs:left-[15%] bg-pink-800 rotate-[32.83deg]' />
      <FancyText ref={fancyRef}>
        <span className={`${fancyInView ? 'translate-x-0 opacity-100' : '-translate-x-10 opacity-0'} duration-300 ease-in-out block`}>have any</span>
        <span className={`${fancyInView ? 'translate-x-0 opacity-100 delay-100' : '-translate-x-10 opacity-0'} duration-300 ease-in-out block -ml-4`}>questions?</span>
      </FancyText>
      <LeavesShadow className={imgInView ? 'translate-x-0 opacity-100' : '-translate-x-12 opacity-0'} src={images.leavesShadow} />
      <Leaves className={imgInView ? 'translate-x-0 opacity-100' : '-translate-x-12 opacity-0'} ref={imgRef} src={images.leaves} />
      <MobLeavesShadow className={mobInView ? 'translate-x-0 opacity-100' : '-translate-x-12 opacity-0'} src={images.leavesShadow} />
      <MobLeaves className={mobInView ? 'translate-x-0 opacity-100' : '-translate-x-12 opacity-0'} ref={mobRef} src={images.leaves} />
      <Container>
        <Flex>
          <SectionTitle>
            remained
            <span className="block md:ml-12">questions?</span>
          </SectionTitle>
          <Content ref={ref}>
            <Line className={inView ? 'scale-x-100' : 'scale-x-[.1]'} />
            <FormText className={inView ? 'delay-100 translate-x-0 opacity-100' : 'translate-x-12 opacity-0'}>
              Submit your question, order, suggestion or complaint via the feedback form and our specialist will contact you within 15 minutes.
            </FormText>
            <Form action="#">
              <LandingInput parentClassName={inView ? 'delay-[.25s] translate-x-0 opacity-100' : 'translate-x-10 opacity-0'} type='text' id='name' name='name' label='Your name' />
              <LandingInput parentClassName={inView ? 'delay-[.4s] translate-x-0 opacity-100' : 'translate-x-10 opacity-0'} type='tel' id='phone' name='phone' label='Your number' numeric />
              <LandingInput parentClassName={inView ? 'delay-[.55s] translate-x-0 opacity-100' : 'translate-x-10 opacity-0'} type='textarea' id='commentary' name='commentary' label='Your commentary' />
              <ButtonPrimary noInView className={`self-start mt-2.5 ${inView ? 'delay-[.7s] translate-x-0 opacity-100' : 'translate-x-6 opacity-0'}`} pX='100px'>submit</ButtonPrimary>
              <FormDescr className={inView ? 'delay-[.8s] translate-x-0 opacity-100' : 'translate-x-8 opacity-0'}>
                By submitting the form, I consent to the processing of personal data in accordance with the
                {' '}<a href="#" className="font-normal text-pink-300 underline">Privacy&nbsp;Policy</a>.
              </FormDescr>
            </Form>
          </Content>
        </Flex>
      </Container>
    </Section>
  )
}

const Section = tw.div`
  pt-[1.875em] md:pt-[1.375em]
  pb-9 md:pb-[3.25em]
  relative
  bg-[#0F2222]
`;
const Img = tw.img`
  absolute
  w-[80%]
  xs:w-[60%]
  xl:w-[52.5%]
  rotate-45
  lg:-rotate-45
  duration-500 ease-in-out
`;
const Leaves = tw(Img)`
  top-0 lg:top-8 xl:top-0 -left-40
  hidden lg:block
`;
const LeavesShadow = tw(Img)`
  top-10 lg:top-16 xl:top-10 -left-48
  hidden lg:block
`;
const MobLeaves = tw(Img)`
  -top-20 sm:-top-28 -right-32 sm:-right-36
  lg:hidden
`;
const MobLeavesShadow = tw(Img)`
  -top-12 sm:-top-20 -right-24 sm:-right-28
  lg:hidden
`;
const FancyText = tw.p`
  absolute
  top-[17.5%] xs:top-[15%] md:top-[26.125%] lg:top-[37.5%]
  left-1/2 lg:left-[45%] xl:left-[37.5%]
  -translate-x-1/2
  font-fancy
  text-[30px] xs:text-[45px] sm:text-[60px] md:text-[75px] lg:text-[100px]
  leading-[0.75] tracking-[0.04em]
  text-[#0F2222]
  -rotate-[18deg]
`;
const Flex = tw.div`
  flex justify-between items-start
  flex-col lg:flex-row
  gap-2
`;
const Content = tw.div`
  mt-28 xs:mt-52 lg:mt-0
  flex flex-col items-start lg:items-end
`;
const Line = tw.span`
  w-1/3 md:w-[60%] lg:w-3/4 h-px
  mt-[3.75em] mb-5 lg:mb-[3.25em]
  bg-teal
  duration-500 ease-in-out origin-right
`;
const FormText = tw.p`
  sm:w-[55%] lg:w-[70%]
  mb-[1.875rem] md:mb-16
  font-oswald font-medium
  text-sm tracking-[0.04em]
  uppercase
  text-white
  duration-500 ease-in-out
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
  duration-300 ease-in-out
`;

export default AnyQuestions;