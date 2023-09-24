import tw from "twin.macro"
import Navbar from "../components/sections/Navbar"
import { useSelector } from "react-redux"
import Container from "../components/Container";
import SectionTitle from "../components/SectionTitle";
import { Link } from "react-router-dom";
import Sign from "../components/Sign";
import images from "../constants/images";
import Footer from "../components/sections/Footer";
import ScrollToTop from "../components/ScrollToTop";
import { useInView } from "react-intersection-observer";

const Summary = () => {
  const summary = useSelector(state => state.summary.value);

  const { ref: img1Ref, inView: img1InView } = useInView({
    threshold: .4,
    triggerOnce: true,
  });
  const { ref: img2Ref, inView: img2InView } = useInView({
    threshold: .4,
    triggerOnce: true,
  });
  const { ref: img3Ref, inView: img3InView } = useInView({
    threshold: .4,
    triggerOnce: true,
  });
  const { ref: details1Ref, inView: details1InView } = useInView({
    threshold: .8,
    triggerOnce: true,
  });
  const { ref: details2Ref, inView: details2InView } = useInView({
    threshold: .8,
    triggerOnce: true,
  });
  const { ref: details3Ref, inView: details3InView } = useInView({
    threshold: .5,
    triggerOnce: true,
  });

  return (
    <>
      <ScrollToTop />
      <Navbar />
      {summary === 'success' ? (
        <SuccessOption>
          <div className='absolute rounded-full blur-[125px] animate-leftsided w-[220px] h-[180px] top-[-7.5%] left-[-7.5%] bg-teal rotate-[-43.21deg]' />
          <div className='absolute hidden md:block rounded-full blur-[125px] animate-bubble-right-slow w-[625px] h-[504px] top-[-7.5%] right-[2.5%] bg-pink-800 rotate-[-43.21deg]' />
          <div className='absolute rounded-full blur-[125px] animate-bubble-left-slow w-[350px] h-[165px] bottom-[5%] right-0 md:bottom-[-2.5%] md:left-[-12.5%] bg-pink-800 rotate-[-43.21deg]' />
          <div className='absolute hidden md:block rounded-full blur-[125px] animate-bubble-right-slow w-[880px] h-[220px] bottom-[-42.5%] right-[-5%] bg-teal rotate-[-43.21deg]' />

          <SuccessBack ref={img1Ref} className={img1InView ? 'translate-x-0 opacity-100' : 'translate-x-10 opacity-0'} src={images.successBack} />
          <Container>
            <SectionTitleCustom nextClassName="
              block sm:inline,sm:inline
              flex items-center gap-7
              before:content-['']
              before:w-[1em] before:h-px
              before:bg-pink-300,
              ml-[1em]
              flex items-center gap-[.5em]
              before:hidden
              before:content-['']
              sm:before:block
              before:w-[3.5em] before:h-px
              before:bg-pink-300
            "
              className="lg:whitespace-nowrap mt-[5vh] lg:mt-20"
            >
              <>Оплата {' '}</>
              <>прошла</>
              <>успешно!</>
            </SectionTitleCustom>
            <Details ref={details1Ref} className="md:ml-[6.25rem] w-3/4 md:w-1/2 relative">
              <DetailsP className={`mt-2.5 md:mt-5 ${details1InView ? 'delay-100 translate-x-0 opacity-100' : 'translate-x-8 opacity-0'}`}>Ваш номер заказа – {395808599}</DetailsP>
              <DetailsP className={`mt-2 md:mt-5 ${details1InView ? 'delay-200 translate-x-0 opacity-100' : 'translate-x-8 opacity-0'}`}>Спасибо за заказ!<br />
                <span className={`hidden md:block`}>Вы получите уведомление о статусе вашего заказа</span>
                <span className={`md:hidden`}>Наш менеджер свяжется с вами в течении 15 минут для уточнения деталей и подтверждения заказа</span>
              </DetailsP>
              <DetailsLink to='/' className={`mt-5 md:mt-[3.75rem] text-teal ${details1InView ? 'delay-300 translate-x-0 opacity-100' : 'translate-x-8 opacity-0'}`}>на главную</DetailsLink>
              <Sign className="text-pink-300 absolute z-10 translate-y-1/2 -bottom-2/3 left-[10%] lg:-bottom-4 lg:left-60" />
            </Details>
          </Container>
        </SuccessOption>
      ) : summary === 'error' ? (
        <PaymentErrorOption>
          <div className='absolute rounded-full blur-[62.5px] md:blur-[125px] animate-leftsided w-[100px] md:w-[360px] h-[200px] md:h-[166px] top-0 md:top-[-10%] -left-16 md:right-[-5%] bg-pink-800 rotate-[-43.21deg]' />
          <div className='absolute rounded-full blur-[62.5px] md:blur-[125px] animate-leftsided w-[100px] md:w-[360px] h-[200px] md:h-[166px] -bottom-8 md:bottom-[-12.5%] right-[20%] md:left-[-15%] bg-pink-800 rotate-[-43.21deg]' />
          <div className='absolute hidden md:block rounded-full blur-[125px] animate-bubble-right-slow w-[550px] h-[413px] bottom-[-15em] right-[-5%] bg-pink-800 rotate-[-43.21deg]' />

          <PaymentErrorBack ref={img2Ref} className={img2InView ? 'translate-x-0 opacity-100' : 'translate-x-10 opacity-0'} src={images.errorBack} />
          <Container>
            <SectionTitleCustom className="mt-[10vh] sm:mt-[15vh] lg:mt-12  ">
              Ошибка
              <span className="block ml-12 md:ml-[1.5em] lg:ml-[2em]">платежа</span>
            </SectionTitleCustom>
            <Details ref={details2Ref} className="relative ml-12 md:ml-[9.375em] lg:ml-[12.5em] w-3/4 md:w-2/3">
              <DetailsP className={`mt-5 mb-2.5 md:my-5 ${details2InView ? 'delay-100 translate-x-0 opacity-100' : 'translate-x-8 opacity-0'}`}>Произошла ошибка....</DetailsP>
              <DetailsP className={details2InView ? 'delay-100 translate-x-0 opacity-100' : 'translate-x-8 opacity-0'}>Попробуйте оплатить еще раз!</DetailsP>
              {/* buttons */}
              <div className="flex flex-col items-start gap-5 mt-8 lg:gap-12 md:mt-4 lg:flex-row lg:items-center">
                <PinkButton className={details2InView ? 'delay-200 translate-x-0 opacity-100' : 'translate-x-8 opacity-0'}>Оплатить еще раз</PinkButton>
                <DetailsLink to='/' className={`text-pink-300 ${details2InView ? 'delay-[.25s] translate-x-0 opacity-100' : 'translate-x-8 opacity-0'}`}>Вернуться на главную</DetailsLink>
              </div>
            </Details>
          </Container>
        </PaymentErrorOption>
      ) : (
        <Main404>
          <div className='absolute rounded-full blur-[75px] lg:blur-[125px] animate-bubble-left-slow lg:animate-bubble-right-slow w-[204px] lg:w-[166px] h-[104px] lg:h-[355px] top-[0em] lg:top-[-3em] left-[-6.5em] lg:right-[-1em] bg-blue-800 rotate-[-43.21deg]' />
          <div className='absolute rounded-full blur-[125px] animate-bubble-left-slow lg:animate-bubble-right-slow w-[500px] lg:w-[283px] h-[250px] lg:h-[600px] -bottom-20 lg:bottom-[-10em] right-1/2 lg:right-[-3.5em] bg-blue-800 rotate-[-43.21deg]' />
          <div className='absolute rounded-full hidden xl:block blur-[125px] animate-bubble-right-slow w-[283px] h-[600px] bottom-[-40%] left-[-5em] z-10 bg-blue-800 rotate-[-43.21deg]' />
          <Error404Back>
            <NumbersDiv>
              <Number4First className={`gradient_text ${img3InView ? 'delay-300 translate-x-0 opacity-100' : '-translate-x-10 opacity-0'}`}>4</Number4First>
              <Number4Second className={`gradient_text ${img3InView ? 'delay-[.4s] translate-x-0 opacity-100' : 'translate-x-6 opacity-0'}`}>4</Number4Second>
            </NumbersDiv>
            <Error404BackImg ref={img3Ref} className={img3InView ? 'translate-x-0 opacity-100' : '-translate-x-12 opacity-0'} src={images.err404Back} />
            <Number0 className={`gradient_text ${img3InView ? 'delay-[.35s] translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>0</Number0>
          </Error404Back>
          <Error404Back2 className={img3InView ? 'delay-150 translate-x-0 opacity-100' : 'translate-x-10 opacity-0'} src={images.err404Back} />
          <Details ref={details3Ref} className="absolute translate-x-1/3 bottom-8 sm:bottom-16 md:bottom-24 right-1/3">
            <DetailsP className={details3InView ? 'translate-x-0 opacity-100' : 'translate-x-8 opacity-0'}>Ошибка 404</DetailsP>
            <DetailsP className={`my-5 ${details3InView ? 'delay-100 translate-x-0 opacity-100' : 'translate-x-8 opacity-0'}`}>Упс...Такой страницы нет</DetailsP>
            <DetailsLink to='/' className={`text-blue-400 ${details3InView ? 'delay-200 translate-x-0 opacity-100' : 'translate-x-8 opacity-0'}`}>на главную</DetailsLink>
          </Details>
          <Sign className="text-blue-800 absolute right-0 sm:right-8 md:right-[10%] lg:right-1/4 xl:right-1/5 lg:translate-x-1/2 xl:translate-x-1/3 top-[65%] -translate-y-[65%] xl:top-[37.5%] rotate-[-14.17deg]" />
        </Main404>
      )}
      <Footer className="hidden md:block" />
    </>
  )
}

const Main = tw.main`
  pt-20 relative
  w-full h-[100vh] lg:h-[120vh]
  overflow-hidden
`;
const SuccessOption = tw(Main)`
  // bg-green-300/50
`;
const PaymentErrorOption = tw(Main)``;
const Main404 = tw(Main)``;
const SectionTitleCustom = tw(SectionTitle)`
  md:text-[6.25em]
`;
const SuccessBack = tw.img`
  lg:w-2/3 xl:w-[55%]
  absolute
  -bottom-16 md:-bottom-40 lg:-bottom-20 xl:-bottom-[15%]
  -right-32 md:-right-52 lg:-right-36
  z-10
  duration-500 ease-in-out
`;
const PaymentErrorBack = tw.img`
  origin-right scale-[1.25] md:scale-100
  sm:w-4/5 md:w-full lg:w-2/3
  absolute
  -bottom-2 md:-bottom-24 lg:-bottom-24
  -right-[30%] md:-right-[30%] lg:-right-14
  duration-500 ease-in-out
`;
const Error404Back = tw.div`
  absolute
  w-full h-full
  duration-500 ease-in-out
`;
const Error404BackImg = tw.img`
  absolute
  min-w-[175%] sm:min-w-[150%] md:min-w-[125%] lg:min-w-[50%] lg:max-w-[110%] xl:max-w-[85%]
  top-[40%] md:top-[45%] -translate-y-1/2 lg:top-[40%]
  -left-[55.5%] sm:-left-[40%] lg:-left-[20%] xl:-left-[10%]
  duration-500 ease-in-out
`;
const Error404Back2 = tw.img`
  absolute w-4/5
  top-6 xl:top-1/2 xl:-translate-y-1/2
  right-[-55.5%] xl:right-[-52.5%]
  -rotate-[85deg] xl:-rotate-[70deg]
  hidden lg:block
  duration-500 ease-in-out
`;
const NumbersDiv = tw.div`
  // max-w-[200px]
  w-full
  max-w-[20em] sm:max-w-[30em] md:max-w-[35em] lg:max-w-[37.5em]
  absolute
  top-0 md:top-[-6.5%]
  left-1/3 -translate-x-1/3 sm:left-1/4
  bg-white/20
`;
const Number = tw.h1`
  absolute
  font-cormorant font-normal
  text-[18.75rem] sm:text-[25.625rem] md:text-[32.5rem]
  leading-[1]
  bg-gradient-to-t
  from-[#B6CDFF]
  // to-blue-800
  to-[#10327C]
  duration-500 ease-in-out
`;
const Number4First = tw(Number)`
  top-[-7.25rem] sm:top-[-6.5rem]
  left-[0%]
`;
const Number4Second = tw(Number)`
  top-[-4.5rem] sm:top-[-9.5rem] lg:top-[-11.5rem]
  right-[0] lg:right-[-2.5rem]

`;
const Number0 = tw(Number)`
  top-[0] lg:top-[-0.75rem]
  left-[37.5%] sm:left-1/3 lg:left-[31.5%] -translate-x-1/3
`;
const TitleSpan1 = tw.span`
  sm:inline
  flex items-center gap-7
  before:content-['']
  before:w-[1em] before:h-px
  before:bg-pink-300
`;
const TitleSpan2 = tw.span`
  ml-[1em]
  // ml-[6.25rem]
  flex items-center gap-[.5em]
  before:hidden
  before:content-['']
  sm:before:block
  before:w-[3.5em] before:h-px
  before:bg-pink-300
`;
const Details = tw.div``;
const DetailsP = tw.p`
  font-oswald font-normal
  text-sm leading-normal tracking-[0.04em]
  uppercase
  text-white
  duration-500 ease-in-out
`;
const DetailsLink = tw(Link)`
  inline-block relative
  font-oswald font-bold
  text-sm leading-normal tracking-[0.04em]
  uppercase
  after:content-['']
  after:absolute after:bottom-0 after:left-0
  after:w-full after:h-[1.5px]
  after:bg-current
  after:origin-left after:scale-x-0
  hover:after:scale-x-100
  after:duration-200
  active:after:origin-top
  active:after:scale-110 active:after:translate-y-0.5
  active:after:duration-300
  duration-500 ease-in-out
`;
const PinkButton = tw.button`
  px-6 sm:px-10 md:px-16 py-4
  relative
  font-oswald font-bold
  text-sm leading-normal tracking-[0.1em]
  uppercase
  text-white
  bg-pink-800
  before:content-['']
  before:w-full before:h-full
  before:absolute before:top-0 before:left-0
  before:bg-pink-400/20
  before:scale-x-0 before:origin-left
  hover:before:scale-x-100
  before:duration-300
  active:before:scale-x-0
  active:before:duration-100
  active:scale-95 duration-200
`;

export default Summary;