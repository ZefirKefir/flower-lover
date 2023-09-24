import tw from "twin.macro"

import { useInView } from "react-intersection-observer"
import { useDispatch, useSelector } from "react-redux"
import { Link } from "react-router-dom"
import { setSummary } from "../redux-toolkit/reducers/summarySlice"

import Navbar from "../components/sections/Navbar"
import Footer from "../components/sections/Footer"
import Path from "../components/Path"
import Sign from "../components/Sign"
import Container from "../components/Container"
import SectionTitle from "../components/SectionTitle"
import SectionHeading from "../components/SectionHeading"
import ScrollToTop from "../components/ScrollToTop"
import SectionTitleSm from "../components/SectionTitleSm"
import Input from "../components/Input"
import CartItem from "../components/sections/CartItem"

import data from "../constants/data"
import images from "../constants/images"


const Checkout = () => {
  const { ref: radios1Ref, inView: radios1InView } = useInView({
    threshold: .6,
    triggerOnce: true,
  });
  const { ref: radios2Ref, inView: radios2InView } = useInView({
    threshold: .6,
    triggerOnce: true,
  });
  const { ref: promoRef, inView: promoBtnInView } = useInView({
    threshold: .85,
    triggerOnce: true,
  });
  const { ref: textRef, inView: textInView } = useInView({
    threshold: .8,
    triggerOnce: true,
  });
  const { ref: btnRef, inView: btnInView } = useInView({
    threshold: .85,
    triggerOnce: true,
  });
  const { ref: littleRef, inView: littleInView } = useInView({
    threshold: .85,
    triggerOnce: true,
  });
  const { ref: back1Ref, inView: back1InView } = useInView({
    threshold: .2,
    triggerOnce: true,
  });

  const { cart } = useSelector(state => state.carter);
  const dispatch = useDispatch();

  const tempCartItems = [];
  const unique = [];
  cart.map(item => {
    if (unique.includes(item)) {
      tempCartItems.find(elem => elem.name === item).amount += 1;
    } else tempCartItems.push(Object.assign({ name: item }, { amount: 1 }));
    !unique.includes(item) ? unique.push(item) : '';
  });

  const cartItems = [];
  tempCartItems.map(temp => temp.name?.search('/') ? cartItems.push(Object.assign({ name: temp.name.split('/')[0] }, { amount: temp.amount }, { addons: temp.name.split('/').slice(1) })) :
    cartItems.push(Object.assign({ name: temp.name }, { amount: temp.amount }, { addons: [] })));

  const cartList = [];
  cartItems.map(item => data.products.map(prod => item.name === prod.id ?
    cartList.push(Object.assign(
      { id: prod.id },
      { name: prod.name },
      { price: prod.price },
      { src: prod.src },
      { additional: item.addons },
      { amount: item.amount }
    )) : ''));

  let sum = 0;
  for (let item of cartList) {
    if (item.additional.length === 0) {
      sum += item.price * item.amount;
    } else {
      const addons = Array.from(item.additional);
      let value = 0;
      value += item.price;
      addons.forEach(item => value += data.additional.find(dataAddon => item === dataAddon.name).price)
      sum += value * item.amount;
    }
  }
  return (
    <>
      <ScrollToTop />
      <Navbar />
      <Main>
        <div className='absolute rounded-full blur-[125px] animate-leftsided w-[360px] h-[500px] top-[-21.5em] left-[-20em] bg-teal rotate-[-43.21deg]' />
        <div className='absolute rounded-full blur-[125px] animate-leftsided w-[625px] h-[504px] top-[-7.5em] right-[-2.5em] bg-pink-800 rotate-[-43.21deg]' />
        <div className='absolute rounded-full blur-[125px] animate-leftsided w-[402px] h-[211px] top-[70em] right-[-7.5em] bg-teal rotate-[-43.21deg]' />
        <div className='absolute rounded-full blur-[125px] animate-leftsided w-[354px] h-[364px] top-[77.5em] right-[-4.5em] bg-pink-800 rotate-[-43.21deg]' />

        <div className='absolute rounded-full blur-[125px] animate-bubble-left-slow w-[100px] h-[200px] -bottom-[10em] -left-[0%] bg-teal rotate-[21.1deg]' />
        <div className='absolute rounded-full blur-[125px] animate-bubble-right-slow w-[800px] h-[200px] -bottom-[22.5em] left-[42.5%] bg-teal rotate-[21.1deg]' />
        <div className='absolute rounded-full blur-[125px] animate-bubble-right-slow w-[360px] h-[350px] -bottom-[15em] -right-[5%] bg-pink-800 rotate-[32.83deg]' />

        <BackLeft className={`duration-500 ease-in-out ${back1InView ? 'translate-x-0 opacity-100' : '-translate-x-12 opacity-0'}`} ref={back1Ref} src={images.checkoutBack} />
        <BackRight1 className={`duration-500 ease-in-out ${back1InView ? 'translate-x-0 opacity-100' : 'translate-x-12 opacity-0'}`} src={images.checkoutBack} />
        <BackRight2 className={`duration-500 ease-in-out ${back1InView ? 'translate-x-0 opacity-100' : 'translate-x-12 opacity-0'}`} src={images.checkoutBack} />
        <Container>
          <Path path={'/checkout'} pathName="Оформление заказа" />
          <SectionTitle className="mt-5 mb-[3.75rem] md:mb-0 md:mt-[3.75rem] relative">
            Оформление
            <span className="block md:ml-24">заказа</span>
            <Sign className={`
              absolute
              -bottom-10 md:-bottom-20 xl:-bottom-8
              right-[38.75%] sm:right-[55%] md:right-[15.5%] lg:right-1/3
              translate-x-[71.25%] sm:translate-x-0
              rotate-[-19.17deg]
              text-pink-300
            `} />
          </SectionTitle>
          <SectionHeading className='hidden mt-20 mb-10 md:block'>Оформление заказа</SectionHeading>
          <Content>
            <Left>
              <Form action="#" onSubmit={(e) => e.preventDefault()}>
                <SectionTitleSm>Контактные данные</SectionTitleSm>
                <Input className='mt-5' id='name' label='Ваше имя*' placeholder='Введите ваше имя' />
                <Input numeric type="tel" className='mt-5' id='phone' label='Ваш телефон*' placeholder='+7 (977) 777-77-77' />
                <Input className='mt-5' id='email' label='Ваш e-mail*' placeholder='Введите вашу почту' />
                <Input className='mt-5' id='receiver_name' label='Имя получателя (необязательно)' placeholder='Введите имя получателя' />
                <Input className='mt-5' id='commentary' label='Комментарий к заказу' placeholder='Примечания к вашеу заказу,  особые пожелания отделу доставки' />
                <SectionTitleSm className='mt-[3.75rem] mb-5'>Доставка</SectionTitleSm>
                <RadioDiv className={`mb-5 ${radios1InView ? 'translate-x-0 opacity-100' : 'translate-x-10 opacity-0'}`}>
                  <Radio type='radio' name="delivery" id='takeaway' className="peer" />
                  <Circle />
                  <Label htmlFor='takeaway'>Самовывоз</Label>
                </RadioDiv>
                <RadioDiv ref={radios1Ref} className={`mb-5 ${radios1InView ? 'delay-100 translate-x-0 opacity-100' : 'translate-x-10 opacity-0'}`}>
                  <Radio defaultChecked type='radio' name="delivery" id='delivery' className="peer" />
                  <Circle />
                  <Label htmlFor='delivery'>Доставка курьером</Label>
                </RadioDiv>
                <Input className='mt-5' id='city' label='Город*' placeholder='Выберите город' />
                <Input className='mt-5' id='street' label='Улица*' placeholder='Выберите улицу' />
                <div className="flex flex-wrap justify-between w-full gap-x-7">
                  <Input className='mt-5 basis-[calc(50%-1.75rem)] sm:basis-[calc(33.333%-3.5rem)] md:basis-[calc(33.333%-1.2rem)] md:shrink-0 grow' id='page' label='Корп/стр' placeholder='Корп/стр' />
                  <Input className='mt-5 basis-[calc(50%-1.75rem)] sm:basis-[calc(33.333%-3.5rem)] md:basis-[calc(33.333%-1.2rem)] md:shrink-0 grow' id='building' label='Дом' placeholder='Дом' />
                  <Input className='mt-5 basis-[calc(50%-1.75rem)] sm:basis-[calc(33.333%-3.5rem)] md:basis-[calc(33.333%-1.2rem)] md:shrink-0 grow' id='appartment' label='Кв/офис' placeholder='Кв/офис' />
                  <Input className='mt-5 basis-[calc(50%-1.75rem)] sm:basis-[calc(33.333%-3.5rem)] md:basis-[calc(33.333%-1.2rem)] md:shrink-0 grow sm:grow-0' id='appartment' label='Время доставки' placeholder='__/__' />
                </div>
                <p className="text-[#555] font-oswald font-normal text-sm leading-normal tracking-[0.04em] uppercase mt-5">
                  Стоимость доставки 0 ₽
                </p>
                <SectionTitleSm className='mt-[3.75rem] mb-4'>Доставка</SectionTitleSm>
                <RadioDiv className={`mb-4 ${radios2InView ? 'translate-x-0 opacity-100' : 'translate-x-10 opacity-0'}`}>
                  <Radio defaultChecked type='radio' name="payment" id='bank_card' className="peer" />
                  <Circle />
                  <Label htmlFor='bank_card'>Банковская карта</Label>
                </RadioDiv>
                <RadioDiv className={`mb-4 ${radios2InView ? 'delay-100 translate-x-0 opacity-100' : 'translate-x-10 opacity-0'}`}>
                  <Radio type='radio' name="payment" id='cash' className="peer" />
                  <Circle />
                  <Label htmlFor='cash'>Наличными</Label>
                </RadioDiv>
                <RadioDiv className={`mb-4 ${radios2InView ? 'delay-200 translate-x-0 opacity-100' : 'translate-x-10 opacity-0'}`}>
                  <Radio type='radio' name="payment" id='apple_pay' className="peer" />
                  <Circle />
                  <Label htmlFor='apple_pay'>Apple Pay</Label>
                </RadioDiv>
                <RadioDiv ref={radios2Ref} className={`mb-4 ${radios2InView ? 'delay-300 translate-x-0 opacity-100' : 'translate-x-10 opacity-0'}`}>
                  <Radio type='radio' name="payment" id='google_pay' className="peer" />
                  <Circle />
                  <Label htmlFor='google_pay'>Google Pay</Label>
                </RadioDiv>
                <RadioDiv className={`mb-4 ${radios2InView ? 'delay-[.4s] translate-x-0 opacity-100' : 'translate-x-10 opacity-0'}`}>
                  <Radio type='radio' name="payment" id='crypto' className="peer" />
                  <Circle />
                  <Label htmlFor='crypto'>Криптовалюта</Label>
                </RadioDiv>
                <RadioDiv className={`mb-4 ${radios2InView ? 'delay-500 translate-x-0 opacity-100' : 'translate-x-10 opacity-0'}`}>
                  <Radio type='radio' name="payment" id='what' className="peer" />
                  <Circle />
                  <Label htmlFor='what'>С расчетного счета</Label>
                </RadioDiv>
                <SectionTitleSm lowercase className='mt-[3.75rem] mb-1'>Промокод</SectionTitleSm>
                <Promo>
                  <Input noLabel id='promocode' label='Промокод' placeholder='Промокод' />
                  <PromoButton ref={promoRef} className={promoBtnInView ? 'delay-200 translate-x-0 opacity-100' : 'translate-x-10 opacity-0'}
                    onClick={() => dispatch(setSummary(document.querySelector('#promocode').value))}>Применить</PromoButton>
                </Promo>
                <Sum className="flex justify-between gap-12">
                  <span>Общая сумма заказа</span>
                  <span>{sum !== 0 ? sum.toString().slice(0, -3) + ',' + sum.toString().slice(-3) : 0}.00{'\u00a0'}₽</span>
                </Sum>
                <SectionText className={textInView ? 'translate-x-0 opacity-100' : 'translate-x-6 opacity-0'}>Скидка = 0 ₽</SectionText>
                <SectionText className={textInView ? 'delay-200 translate-x-0 opacity-100' : 'translate-x-6 opacity-0'} ref={textRef}>Доставка = 0 ₽</SectionText>
                <LinkPrimary className={btnInView ? 'translate-x-0 opacity-100' : 'translate-x-10 opacity-0'} ref={btnRef} to='/summary'>К оплате</LinkPrimary>
                <Little ref={littleRef} className={littleInView ? 'translate-x-0 opacity-100' : 'translate-x-8 opacity-0'}>
                  Нажимая  на кнопку «К Оплате», я даю свое согласие на обработку персональных данных, в соответствии с <a href="#" className="text-pink-300">Политикой{'\u00a0'}конфиденциальности,</a> а так же ознакомлен с условиями оплаты и доставки
                  <Sign customText="Payment" className='
                    absolute
                    -bottom-14 sm:-bottom-8 lg:-bottom-2
                    right-6 sm:-right-24 md:-right-52 lg:-right-60
                    rotate-[-19.17deg]
                    text-pink-300
                  ' />
                </Little>
              </Form>
            </Left>
            <Right>
              <SectionTitleSm>Ваш заказ:</SectionTitleSm>
              <div className="border-t border-[#555] mt-[2.8125em]">
                {cartList.map(item => (
                  <CartItem id={item.id} amount={item.amount} additional={item.additional} />
                ))}
              </div>
              <SectionTitleSm className='mt-5'>
                Предварительный итог: {sum !== 0 ? sum.toString().slice(0, -3) + ',' + sum.toString().slice(-3) : 0}.00 руб.
              </SectionTitleSm>
            </Right>
          </Content>
        </Container>
      </Main>
      <Footer />
    </>
  )
}

const Main = tw.main`
  relative overflow-hidden
  pt-28 pb-[11.75em]
`;
const Content = tw.div`
  flex items-start
  flex-col lg:flex-row
  justify-between gap-20
`;
const Back = tw.img`absolute `;
const BackLeft = tw(Back)`
  w-[216px] h-[324px]
  md:w-[637.75px] md:h-[956.62px]
  rotate-[33.31deg] md:rotate-[21deg]
  -scale-x-100 md:scale-x-100
  top-8 -left-[7.625em]
  md:-top-44 md:-left-[25.5em]
`;
const BackRight1 = tw(Back)`
  w-[779.17px] h-[1168.76px]
  rotate-[-43deg]
  -top-[16.5em] -right-80
  hidden md:block
`;
const BackRight2 = tw(Back)`
  w-[357px] h-[536px]
  md:w-[790.31px] md:h-[1185.47px]
  rotate-[-44deg] -scale-x-100
  -top-[6.25em] -right-52
  md:-top-[17.5em] md:-right-[21.25em]
`;
const Left = tw.div`basis-3/5 w-full grow md:order-2 lg:order-1`;
const Form = tw.form`w-full relative`;
const Right = tw.div`basis-2/5 grow w-full hidden md:block lg:order-2`;
const RadioDiv = tw.div`flex gap-[10px] items-center duration-500 ease-in-out`;
const Radio = tw.input`appearance-none`;
const Label = tw.label`
  font-oswald font-normal
  text-sm leading-normal tracking-[0.04em]
  uppercase
  text-[#353535]
  peer-checked:text-white
  duration-300
  relative
  flex items-center
  cursor-pointer
`;
const Circle = tw.p`
  w-4 h-4
  rounded-full
  border-2 border-[#353535]
  peer-checked:border-white
  flex items-center justify-center
  duration-300
  before:content-['']
  before:w-[8.89px] before:aspect-square
  before:rounded-full
  peer-checked:before:bg-white
  before:duration-300
  cursor-pointer
`;
const Promo = tw.div`
  flex items-center
  flex-col sm:flex-row
  mb-[3.75em]
`;
const PromoButton = tw.button`
  px-[3.125em] py-5
  border border-teal hover:border-teal/10
  font-oswald font-bold
  text-sm leading-normal tracking-[0.04em]
  text-teal
  hover:bg-teal/40
  hover:text-white
  active:shadow-inner
  duration-300 ease-in-out
  translate-y-0.5
`;
const Sum = tw(SectionHeading)`
  text-xl md:text-3xl
`;
const SectionText = tw.p`
  mt-2.5
  font-oswald font-normal
  text-sm leading-normal tracking-[0.04em]
  uppercase
  text-white
  duration-300 ease-in-out
`;
const Little = tw.div`
  relative
  max-w-[32.7em] mt-2.5
  font-roboto font-normal
  text-[0.625rem] leading-tight tracking-[0.02em]
  text-white
  duration-300 ease-in-out
`;
const ListItem = tw.div`
  py-2.5 md:py-5 border-b border-[#555]
  flex justify-between gap-2.5 md:gap-5
`;
const ItemImg = tw.img`
  h-20 aspect-[3/4]
  object-cover object-center
`;
const ItemDetails = tw.div`
  grow relative
  flex flex-col items-start
`;
const ItemTitle = tw.p`
  font-oswald font-normal
  text-xs md:text-sm leading-normal tracking-[0.02em]
  uppercase grow
  text-white
`;
const ItemAdditional = tw.div`
  w-full last:mb-2
  flex justify-between
  font-oswald font-light
  text-[0.675rem] md:text-xs leading-normal tracking-[0.04em]
  uppercase
  text-gray-300
`;
const ItemPrice = tw.h6`
  absolute top-0 right-0
  font-oswald font-bold
  text-sm leading-normal tracking-[0.02em]
  uppercase
  text-teal
`;
const AmountButton = tw.button`
  px-3.5 py-1.5
  border-[.5px] border-[#555]
  flex items-center gap-4
  font-oswald font-normal
  text-xs leading-normal tracking-[0.1em]
  text-[#555]
  hover:border-white
  hover:text-white
  duration-200
`;
const RemoveButton = tw.button`
  absolute bottom-0 right-0
  font-oswald font-normal
  text-[0.625rem] leading-normal tracking-[0.04em]
  uppercase underline
  text-white
`;
const LinkPrimary = tw(Link)`
  inline-block
  mt-[1.875rem] px-[6.25rem] py-4
  font-oswald font-bold
  text-xs leading-[1.5] tracking-[0.1em]
  uppercase whitespace-nowrap
  text-[#000] hover:text-white
  bg-teal hover:bg-pink-800
  focus:outline-pink-800
  active:shadow-inner
  duration-300 ease-in-out
`;

export default Checkout;