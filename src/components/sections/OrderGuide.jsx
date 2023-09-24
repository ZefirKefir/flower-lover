import { useInView } from "react-intersection-observer";
import tw from "twin.macro"

import Container from "../Container";
import SectionTitle from "../SectionTitle"
import Sign from "../Sign";

import images from "../../constants/images";

const steps = [
  'Выберите какие цветы или подарки вы хотите купить',
  'Оформите заказ, и мы отправим вам подтверждение на электронную почту, а так же менеджер свяжется с вами по телефону или в WhatsApp',
  'Наши флористы бережно подойдут к созданию букета цветов в самом начале дня или накануне',
  'Один из наших курьеров или партнёров доставит ваш заказ по указанному адресу. Мы отправим вам сообщение в Whats App как только заказ будет доставлен',
  'Наслаждайтесь цветами , если вы заказали их для дома или любовью, которой поделились, если вы заказали для друга',
]
const OrderGuide = () => {
  const { ref, inView } = useInView({
    threshold: .75,
    triggerOnce: true,
  });
  const { ref: imgRef, inView: imgInView } = useInView({
    threshold: .4,
    triggerOnce: true,
  });

  return (
    <Section>
      <div className='absolute md:hidden rounded-full blur-[150px] animate-bubble-left-slow w-[300px] h-[195px] bottom-[10%] left-[-40%] bg-teal rotate-[32.83deg]' />
      <Img className={imgInView ? 'translate-x-0 opacity-100' : '-translate-x-20 opacity-0'} ref={imgRef} src={images.pinkFlower} />
      <Container>
        <SectionTitle className="ml-12 text-right -translate-y-16 xs:hidden" nextClassName="xs:inline,block pl-8 xs:inline,block pb-4 pr-4">
          <>Как</>
          <>сделать</>
          <>заказ</>
        </SectionTitle>
        <SectionTitle className="hidden ml-12 text-center translate-y-0 xs:block md:ml-0 md:text-left" nextClassName=",block pb-4 pr-4">
          <>Как сделать</>
          <>заказ</>
        </SectionTitle>
        <Steps ref={ref} className={inView ? 'after:scale-y-100' : 'after:scale-y-[.1]'}>
          <Flex>
            <div>
              {steps.map((step, index) => index >= 3 ? <></> : (
                <Step key={index + 1}
                  className={`${inView ? 'first:before:delay-[.6s] first:before:scale-y-100' : 'first:before:scale-y-0'} ${index === 0 ? 'ml-[50%] md:ml-0' :
                    index === 1 ? 'ml-[35%] xs:ml-[40%] sm:ml-[48.5%] md:ml-0' : 'ml-[15%] xs:ml-[27.5%] sm:ml-[40%] md:ml-0'}`}>
                  <StepTitle className={
                    index === 0 ? inView ? 'translate-x-0 opacity-100' : '-translate-x-10 opacity-0' :
                      index === 1 ? inView ? 'delay-100 translate-x-0 opacity-100' : '-translate-x-10 opacity-0' :
                        index === 2 ? inView ? 'delay-200 translate-x-0 opacity-100' : '-translate-x-10 opacity-0' : ''
                  }>{index + 1} шаг</StepTitle>
                  <StepText className={
                    index === 0 ? inView ? 'delay-100 translate-x-0 opacity-100' : '-translate-x-10 opacity-0' :
                      index === 1 ? inView ? 'delay-200 translate-x-0 opacity-100' : '-translate-x-10 opacity-0' :
                        index === 2 ? inView ? 'delay-300 translate-x-0 opacity-100' : '-translate-x-10 opacity-0' : ''
                  }>
                    {step}
                  </StepText>
                </Step>
              ))}
            </div>
            <div>
              {steps.map((step, index) => index <= 2 ? <></> : (
                <Step key={index + 1} className={`first:before:hidden ${index === 3 ? 'sm:ml-[32.5%] md:ml-0' : 'sm:ml-[27.5%]'} md:ml-0`}>
                  <StepTitle className={
                    index === 3 ? inView ? 'delay-300 translate-x-0 opacity-100' : '-translate-x-10 opacity-0' :
                      index === 4 ? inView ? 'delay-[.4s] translate-x-0 opacity-100' : '-translate-x-10 opacity-0' : ''
                  }>{index + 1} шаг</StepTitle>
                  <StepText className={
                    index === 3 ? inView ? 'delay-[.4] translate-x-0 opacity-100' : '-translate-x-10 opacity-0' :
                      index === 4 ? inView ? 'delay-500 translate-x-0 opacity-100' : '-translate-x-10 opacity-0' : ''
                  }>
                    {step}
                  </StepText>
                </Step>
              ))}
            </div>
          </Flex>
          <Sign className='absolute right-0 -bottom-20' />
        </Steps>
      </Container>
    </Section>
  )
}

const Section = tw.div`
  relative
  pb-24 md:pb-36
`;
const Img = tw.img`
  absolute
  -top-12 md:top-12 left-0 md:-left-24
  w-1/2 md:w-[39%] md:h-[calc(100% - 3rem)]
  object-contain object-bottom
  z-10
  duration-500 ease-in-out
`;
const Steps = tw.div`
  ml-auto w-full md:w-[70%]
  mt-0 xs:mt-9
  pb-10 md:pb-0 last:pb-0
  relative md:pr-10
  after:hidden md:after:block
  after:content-['']
  after:w-px after:h-[87.5%]
  after:bg-pink-300
  after:absolute after:right-0 after:bottom-0
  after:duration-1000 after:ease-in-out after:origin-top
`;
const Flex = tw.div`
  flex md:gap-12 xl:gap-28
  flex-col md:flex-row
`;
const Step = tw.div`
  md:max-w-[280px]
  mt-8 sm:mt-5 md:mt-10 relative
  first:before:content-['']
  first:before:w-[65px] before:h-[10px]
  first:before:bg-pink-300
  first:before:absolute
  first:before:-top-5 before:left-0
  md:first:before:-top-20
  first:before:duration-500
  first:before:ease-in-out
  first:before:origin-bottom
`;
const StepTitle = tw.h4`
  font-oswald font-bold
  text-3xl leading-normal tracking-[0.04em]
  uppercase
  text-pink-300
  duration-300 ease-in-out
`;
const StepText = tw.p`
  mt-2.5 md:mt-3
  font-oswald font-normal
  text-sm leading-normal tracking-[0.04em]
  md:uppercase
  text-white
  duration-300 ease-in-out
`;

export default OrderGuide;