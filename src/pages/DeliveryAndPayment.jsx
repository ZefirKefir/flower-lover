import tw from "twin.macro"

import Navbar from "../components/sections/Navbar"
import Footer from "../components/sections/Footer"
import Container from "../components/Container"
import Path from "../components/Path"
import SectionTitle from "../components/SectionTitle"
import SectionTitleSm from "../components/SectionTitleSm"
import SectionText from "../components/SectionText"
import SectionSubtitle from "../components/SectionSubtitle"
import GridX4 from "../components/GridX4"
import ListItem from "../components/ListItem"
import BlurBlock from "../components/BlurBlock"
import Sign from "../components/Sign"
import ScrollToTop from "../components/ScrollToTop"

import images from "../constants/images"
import { useInView } from "react-intersection-observer"

const DeliveryAndPayment = () => {
  const { ref: back1Ref, inView: back1InView } = useInView({
    threshold: .4,
    triggerOnce: true,
  });
  const { ref: back2Ref, inView: back2InView } = useInView({
    threshold: .25,
    triggerOnce: true,
  });
  const { ref: back3Ref, inView: back3InView } = useInView({
    threshold: .15,
    triggerOnce: true,
  });

  return (
    <>
      <ScrollToTop />
      <Navbar />
      <Main>
        <div className='absolute rounded-full blur-[125px] animate-leftsided w-[360px] h-[500px] top-[-17.5em] md:top-[-20.5em] left-[-20.5em] md:left-[-27.5em] bg-[#6B535F] rotate-[-43.21deg]' />
        <div className='absolute hidden md:block rounded-full blur-[125px] animate-bubble-right-slow w-[500px] h-[625px] top-[-10em] right-[-2.5em] bg-[#6B535F] rotate-[-43.21deg]' />
        <div className='absolute rounded-full blur-[125px] animate-leftsided w-[274px] h-[220px] top-[35%] md:top-[27.5%] left-[15%] bg-[#6B535F] rotate-[-43.21deg]' />
        <div className='absolute rounded-full blur-[125px] animate-bubble-right-slow w-[220px] h-[345px] top-[17.5%] md:top-[22.5%] right-[10%] md:right-[17.5%] bg-[#6B535F] rotate-[-43.21deg]' />
        <div className='absolute rounded-full blur-[125px] animate-bubble-left-slow w-[260px] md:w-[431px] h-[330px] md:h-[538px] top-[57.5%] md:top-[49.5%] left-[-22.5%] md:left-[-12.5%] bg-[#6B535F] rotate-[-43.21deg]' />
        <div className='absolute rounded-full blur-[125px] animate-leftsided w-[326px] md:w-[538px] h-[261px] md:h-[431px] top-[77.5%] md:top-[60.5%] right-[-10%] md:right-[17.5%] bg-[#6B535F] rotate-[-43.21deg]' />
        <div className='absolute rounded-full blur-[125px] animate-bubble-left-slow w-[206px] h-[436px] bottom-[-13.5%] md:bottom-[-12.5%] left-[-50%] md:left-[-7.5%] bg-[#6B535F] rotate-[-43.21deg]' />
        <div className='absolute rounded-full blur-[125px] md:z-10 animate-leftsided w-[354px] h-[364px] bottom-[-12.5%] md:bottom-[-5%] right-[-50%] md:right-[-5%] bg-[#6B535F] rotate-[-43.21deg]' />

        <Back1 ref={back1Ref} src={images.delmentBack}
          className={`duration-500 ease-in-out
            ${back1InView ? 'translate-x-0 opacity-100' : 'translate-x-12 opacity-0'}
          `} />
        <Back2 ref={back2Ref} src={images.delmentBack}
          className={`duration-500 ease-in-out
            ${back2InView ? 'translate-x-0 opacity-100' : '-translate-x-12 opacity-0'}
          `} />
        <Back3 ref={back3Ref} src={images.delmentBack}
          className={`duration-500 ease-in-out
            ${back3InView ? 'translate-x-0 opacity-100' : 'translate-x-12 opacity-0'}
          `} />
        <Container>
          <Path path='/delment' pathName="Доставка и оплата" />
          <SectionTitleCustom className="mt-5 md:mt-[3.75rem]">
            доставка
            <span className="block ml-[1em]">и оплата</span>
          </SectionTitleCustom>
          <Exclamation>
            <ExclamMark className={back1InView ? 'delay-100 -translate-y-6 md:translate-y-0 opacity-100' : '-translate-y-14 md:-translate-y-8 opacity-0'}>!</ExclamMark>
            <div>
              <ExclamTitle className='mb-2.5'>Дорогие клиенты!</ExclamTitle>
              <Descr>Во время пандемии (COVID-19) компания Lover Flower призывает всех меньше контактировать с другими людьми для защиты себя и своих близких. Именно поэтому мы организовали <span className='text-teal'>БЕСКОНТАКТНУЮ ДОСТАВКУ</span></Descr>
            </div>
          </Exclamation>
          <SectionSubtitleCustom className='text-center lg:text-left'>Способы оплаты:</SectionSubtitleCustom>
          <GridX4 className="mt-5 mb-[3.75em] md:mb-[6.25em]">
            <>
              <GridBefore />
              <GridText>БАНКОВСКОЙ КАРТОЙ ПРИ ОФОРМЛЕНИИ ЗАКАЗА ЧЕРЕЗ САЙТ или по ссылке</GridText>
            </>
            <>
              <GridBefore />
              <GridText>НАЛИЧНЫМИ,  БАНКОВСКОЙ КАРТОЙ ПРИ САМОВЫВОЗЕ или с расчетного счета орагнизации</GridText>
            </>
            <>
              <GridBefore />
              <GridText>НАЛИЧНЫМИ ПРИ{'\u00a0'}ДОСТАВКЕ КУРЬЕРОМ</GridText>
            </>
            <>
              <GridBefore />
              <GridText>КРИПТОВАЛЮТОЙ</GridText>
            </>
          </GridX4>
          <div className="lg:ml-28">
            <SectionSubtitleCustom>стоимость доставки:</SectionSubtitleCustom>
            <List className="lg:-ml-8">
              <ListItem className="mb-2.5 last:mb-0">
                <span className="font-bold">Бесплатно</span> – при заказе на сумму от <span className="text-teal">90 рублей</span>
              </ListItem>
              <ListItem className="mb-2.5 last:mb-0">
                <span className='font-bold'>10 рублей</span> – при заказе на сумму <span className="text-teal">менее 90 рублей</span></ListItem>
              <ListItem className="mb-2.5 last:mb-0">Так же вы можете забрать ваш заказ самостоятельно по адресу:<br />
                <span className="text-teal">г. Минск, ул. Тимирязева д. 67, комн. 112 ежедневно с 10.00 до 21.00</span></ListItem>
            </List>
          </div>
          <SectionSubtitleCustom>Условия доставки:</SectionSubtitleCustom>
          <List>
            <ListItem className="mb-2.5 last:mb-0">Доставка осуществляется по городу Минску в пределах МКАД <span className="text-teal">в любой день</span></ListItem>
            <ListItem className="mb-2.5 last:mb-0 max-w-[42em]">Возможность, сроки и стоимость доставки за пределы МКАД, доставки в ночное время, праздники оговариваются с менеджером</ListItem>
          </List>
          {/* className="md:w-4/5" */}
          <BlurBlock className="md:w-[86.6%]">
            <SectionSubtitleCustom className='mb-1.5 md:mb-5'>Дополнительно:</SectionSubtitleCustom>
            <SectionText>Доставка иному лицу возможна только в случае оплаты заказа заказчиком. Доставка осуществляется не ранее
              чем через 2 часа после оплаты заказа, но может быть ранее, если букет есть в наличии либо по договорённости
              с менеджером.</SectionText>
            <SectionText>Время ожидания курьера составляет 15 минут.</SectionText>
            <SectionText>В случае если на момент доставки цветов получателя нет либо нет возможности по иным причинам произвести доставку (указан неточный адрес, закрытая входная дверь, контрольно-пропускная система и др.), мы оставляем за собой право по собственному выбору:</SectionText>
            <ul className="mb-[1.875em]">
              <LowercaseListItem>оставить цветы тому, кто открыл дверь;</LowercaseListItem>
              <LowercaseListItem>с заказчиком согласовать повторную доставку, которая дополнительно оплачивается;</LowercaseListItem>
              <LowercaseListItem>отказаться от передачи цветов без возврата денежных средств.</LowercaseListItem>
            </ul>
            <SectionText className='mb-[1.875em]'>
              Если вы либо иной получатель не получили заказ, вам необходимо сообщить об этом менеджеру по телефону<br />
              <span className="text-teal">+375 29 113 69 69</span>.
            </SectionText>
            <SectionSubtitleCustom className='mb-2.5 md:mb-5'>Возврат денег:</SectionSubtitleCustom>
            <SectionText>
              При отказе заказчика от заказа в течение двух часов, если заказ ещё не начал готовиться, средства возвращаются в полном объёме. Если же флорист начал подготовку, то заказчик имеет право на возврат 50% стоимости, либо, если ещё не был оплачен, то обязан оплатить 50%.
            </SectionText>
            <SectionText className='mt-[1em]'>
              Цветы надлежащего качества возврату и обмену не подлежат, а если имеются какие-либо недостатки в цветах – возврат производится лишь если эти недостатки не являются природными и естественными изъянами растения.
              Возврат денежных средств производится незамедлительно на тот счёт, с которого произошла оплата, их же поступление на счёт зависит от платёжной системы.
            </SectionText>
            <Sign className='absolute -bottom-[5.25rem] md:-bottom-36 left-6 md:left-20 text-[#6B535F] rotate-[-14.17deg]' />
          </BlurBlock>
        </Container>
      </Main>
      <Footer />
    </>
  )
}

const Main = tw.main`
  mt-20 relative
  pt-5 md:pt-9 pb-40 md:pb-[12.5em]
  overflow-hidden
`;
const Back = tw.img`absolute`;
const Back1 = tw(Back)`
  w-[68.5%]
  top-8
  right-[-28.5%]
  z-10
`;
const Back2 = tw(Back)`
  w-full md:w-[60%]
  top-[64%] md:top-[60%] lg:top-[64.5%] -translate-y-1/2
  left-[-65%] md:left-[-36.8%]
  rotate-[17.5deg]
`;
const Back3 = tw(Back)`
  md:w-[80%]
  -bottom-32 sm:-bottom-72 md:-bottom-80 lg:bottom-[-17.5%] xl:bottom-[-23.75%]
  right-[-55%] md:right-[-29.25%]
  rotate-[17.5deg]
`;
const SectionTitleCustom = tw(SectionTitle)`leading-[1.075] md:text-[5rem] lg:text-[6.25rem]`;
const SectionSubtitleCustom = tw(SectionSubtitle)`
  text-sm md:text-xl
`;
const Exclamation = tw.div`
  mt-6 md:ml-[4em]
  mb-[3.75em] md:mb-[6.25em]
  flex gap-3
  items-start md:items-end
`;
const ExclamMark = tw.span`
  block
  font-cormorant font-normal
  text-[6.25rem] leading-[1.2] tracking-[0.02em]
  text-pink-300
  duration-500 ease-in-out
`;
const ExclamTitle = tw(SectionTitleSm)`text-pink-300`;
const Descr = tw(SectionText)`
  font-normal md:text-sm
  uppercase
  max-w-[25em] sm:max-w-[30.5em] md:max-w-[35em] lg:max-w-[40.75em]
`;
const GridBefore = tw.span`
  block mb-6
  w-[11px] aspect-square
  rounded-full
  bg-[#6B535F]
`;
const GridText = tw.p`
  flex flex-col grow
  justify-center items-center
  font-oswald font-light
  text-sm md:text-xl leading-tight tracking-[0.02em]
  text-center uppercase
  text-white
  // max-w-[9.5em]
`;
const List = tw.ul`
  mt-2.5 md:mt-5
  mb-[3.75em] md:mb-[6.25em]
`;
const LowercaseListItem = tw(ListItem)`
  lowercase
`;

export default DeliveryAndPayment;