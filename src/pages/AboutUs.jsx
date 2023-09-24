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
          <Path path='/aboutus' pathName="о нас" />
          <SectionTitleCustom className="mt-5 md:mt-[0.45em] mb-[5.5rem] md:mb-[0.9em] ml-[1.25em] md:ml-[0.9em]">
            <>
              о нас
            </>
          </SectionTitleCustom>
          <div className=" md:ml-[11.625em] flex items-end gap-2.5 md:gap-5">
            <Subtitle ref={sub1Ref} className={`text-teal
              ${sub1InView ? 'trasnlate-x-0 opacity-100' : 'translate-x-12 opacity-0'}
            `}>Lover<br />
              flower</Subtitle>
            <Line className={sub1InView ? 'delay-150 trasnlate-x-0 opacity-100' : 'translate-x-12 opacity-0'} />
          </div>
        </Container>
        <Block rounded={false}>
          <AboutBack2 className={back1InView ? 'translate-x-0 opacity-100' : 'translate-x-12 opacity-0'} src={images.aboutUsBack} />
          <SectionText className='mb-5 uppercase'>молодая команда разных людей с одинаковыми ценностями.</SectionText>
          <SectionText className='md:w-[75%]'>Мы считаем, что удовольствие от качества длится дольше, чем удовольствие
            от низкой цены. И поэтому в создание нашей букетерии мы вложили все,
            чем располагаем: душу, сердце, время и мечты! Мы готовы обещать вам только то, что можем сделать. А делаем мы только самое качественное, самое интересное
            и обязательно уникальное. Мы всегда честны со своими клиентами во всем –
            в нашем каталоге только те букеты, которые вы действительно сможете купить.</SectionText>
        </Block>
        <Container>
          <Subtitle ref={sub2Ref} className={`mt-[3.75rem] md:mt-[1.6667em] mb-2.5 md:mb-5 text-teal
            ${sub2InView ? 'trasnlate-x-0 opacity-100' : 'translate-x-12 opacity-0'}
          `}>гарантии</Subtitle>
          <SectionText className='uppercase balance'>Каждый цветок уникален и чтобы вы были уверены в качестве, мы пришлем вам фотографию именно вашего букета до его отправки получателю. Вся предоставленная Вами информация конфиденциальна и будет известна только нам и курьеру для осуществления доставки.</SectionText>
          <Subtitle ref={sub3Ref} className={`mt-[3.75rem] md:mt-[1.6667em] md:mb-5 text-teal
            ${sub3InView ? 'trasnlate-x-0 opacity-100' : 'translate-x-12 opacity-0'}
          `}>Заказ букетов на сайте{'\u00a0'}компании<br />
            Lower Flower – это:</Subtitle>
          <List>
            <Item>выбор оттенков и сортов цветков в любое время года;</Item>
            <Item>отправка фото готовой композиции перед отправкой;</Item>
            <Item>возможность заказать цветы с доставкой в течение часа;</Item>
            <Item>выгодные цены – на сайте только те варианты, что Вы сможете купить;</Item>
            <Item>полная конфиденциальность по заказу;</Item>
            <Item>мы подбираем открытку, воздушные шар, подарок по Вашему желанию;</Item>
            <Item>в нашем уютном цветочном магазине цветы, которые приятно дарить.</Item>
          </List>
          <Subtitle ref={sub4Ref} className={`mt-16 md:mt-[2.7em] mb-6 md:mb-[0.6667em] w-4/5 md:w-3/4 text-white
            ${sub4InView ? 'trasnlate-x-0 opacity-100' : 'translate-x-12 opacity-0'}
          `}>
            Природная гармония цвета, неповторимость бутонов
            и{'\u00a0'}Ваши чувства
            в нежных лепестках
            не оставят никого равнодушным.
          </Subtitle>
          <SectionText className='uppercase w-[60.6667%] md:w-[40.5%] md:ml-[11.875rem]'>
            Вы выбираете и заказываете цветочный сюрприз, а мы вкладываем в него душу!
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