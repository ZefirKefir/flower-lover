import { useRef, useState } from "react";
import { useInView } from "react-intersection-observer";
import { useDispatch, useSelector } from "react-redux";
import { addToCart } from "../redux-toolkit/reducers/cartSlice";
import { Link } from "react-router-dom";

import tw from "twin.macro";

import { BsChevronUp, BsChevronDown, BsChevronLeft, BsChevronRight } from 'react-icons/bs';
import { AiOutlineCheckCircle } from 'react-icons/ai';

import Footer from "../components/sections/Footer"
import Navbar from "../components/sections/Navbar"
import Path from "../components/Path";
import Container from "../components/Container";
import ButtonOutlined from '../components/ButtonOutlined';
import SectionSubtitle from "../components/SectionSubtitle";
import Stars from "../components/Stars";
import Input from "../components/Input";
import ButtonPrimary from "../components/ButtonPrimary";
import SectionHeading from "../components/SectionHeading";
import Slider from "../components/Slider";
import ProductCard from "../components/ProductCard";
import Modal from "../components/Modal";
import ListItem from "../components/ListItem";
import InfoTitle from "../components/InfoTitle";
import Review from "../components/Review";
import ScrollToTop from "../components/ScrollToTop";

import data from "../constants/data";
import images from "../constants/images";


const Product = () => {
  const dispatch = useDispatch();
  // usestates
  const [amount, setAmount] = useState(1);
  const [additionalChecked, setAdditionalChecked] = useState([false, false, false, false])
  const [tab, setTab] = useState(+localStorage.getItem('tabNr') || 1);
  const [revStar, setRevStar] = useState(0);
  const [modalVisible, setModalVisible] = useState(false);
  // useInView
  const { ref, inView } = useInView({
    threshold: .8,
    triggerOnce: true,
  });
  const { ref: rightRef, inView: rightInView } = useInView({
    threshold: .35,
    triggerOnce: true,
  });
  const { ref: gridRef, inView: gridInView } = useInView({
    threshold: .8,
    triggerOnce: true,
  });
  const { ref: buttonsRef, inView: buttonsInView } = useInView({
    threshold: .8,
    triggerOnce: true,
    rootMargin: '-40px 0px',
  });
  const { ref: descrRef, inView: descrInView } = useInView({
    threshold: .8,
    triggerOnce: true,
    rootMargin: '-20px 0px',
  });
  const { ref: formRef, inView: formInView } = useInView({
    threshold: .25,
    triggerOnce: true,
  });
  const { ref: smallRef, inView: smallInView } = useInView({
    threshold: 1,
    triggerOnce: true,
    rootMargin: '-20px 0px',
  });

  const xRef = useRef();
  const yRef = useRef();
  const scroll = (direction) => {
    const currentX = xRef.current;
    const currentY = yRef.current;
    if (direction === 'up') {
      currentY.scrollTop -= 150;
    }
    if (direction === 'down') {
      currentY.scrollTop += 150;
    }
    if (direction === 'left') {
      currentX.scrollLeft -= 550;
    }
    if (direction === 'right') {
      currentX.scrollLeft += 550;
    }
  }

  const id = useSelector(state => state.filter.product);
  const product = data.products.find(item => item.id === id);
  const flowers = product.flowers_id.map(id => data.flowers.find(flower => flower.id === id)?.name)
  const categories = product.categories.map(item => data.categories.find(cat => item === cat.name)?.displayName).filter(item => item);

  const featured = [];
  product.flowers_id.map(flower => data.products.map(item => (item.flowers_id.includes(flower) && item.id !== id && !featured.includes(item)) ? featured.push(item) : ''))
  featured.length >= 7 ? '' : product.categories.map(cat => data.products.map(item => (item.categories.includes(cat) && item.id !== id && !featured.includes(item) && featured.length < 10) ? featured.push(item) : ''));


  return (
    <>
      <ScrollToTop elem={id} />
      <Navbar />
      <Main>
        <div className='absolute rounded-full blur-[125px] animate-leftsided w-[360px] h-[500px] top-[-21.5em] left-[-28.5em] bg-teal rotate-[-43.21deg]' />
        <div className='absolute hidden md:block rounded-full blur-[125px] animate-bubble-right-slow w-[504px] h-[360px] top-[-5em] right-[-7.5em] bg-pink-800 rotate-[-43.21deg]' />
        <div className='absolute hidden md:block rounded-full blur-[125px] animate-bubble-left-slow w-[590px] h-[360px] top-[16.125em] left-[6em] bg-pink-800 rotate-[-43.21deg]' />
        <div className='absolute hidden md:block rounded-full blur-[125px] animate-leftsided w-[255px] h-[450px] top-[45em] left-[15em] bg-pink-800 rotate-[-43.21deg]' />
        <div className='absolute hidden md:block rounded-full blur-[125px] animate-leftsided w-[173px] h-[650px] top-[40em] right-[15em] bg-teal rotate-[-43.21deg]' />

        <div className='absolute rounded-full blur-[125px] animate-bubble-left-slow w-[100px] h-[200px] -bottom-[10em] -left-[0%] bg-teal rotate-[21.1deg]' />
        <div className='absolute rounded-full blur-[125px] animate-bubble-right-slow w-[800px] h-[200px] -bottom-[22.5em] left-[42.5%] bg-teal rotate-[21.1deg]' />
        <div className='absolute rounded-full blur-[125px] animate-bubble-right-slow w-[360px] h-[350px] -bottom-[15em] -right-[5%] bg-pink-800 rotate-[32.83deg]' />
        <Container>
          <Path path={'/catalog,/catalog/product'} pathName={`Каталог, ${product.name}`} />
          <BackLink className="flex mt-5 lg:hidden" to='/catalog'>
            <BsChevronLeft size={12} />
            назад
          </BackLink>
          <ProductMain ref={ref}>
            <Left className={`duration-500 ease-in-out ${inView ? 'delay-200 translate-x-0 opacity-100' : '-translate-x-12 opacity-0'}`}>
              <UpButton onClick={() => scroll('up')}>
                <BsChevronUp className="text-white" size={14} />
              </UpButton>
              <ImgSlider>
                <ImgSliderContainer className="no-scrollbar" ref={yRef}>
                  <LeftImg className="group" onClick={() => {
                    document.querySelector('.product__main-img').src = product.src;
                  }}>
                    <img className="object-cover object-center w-full h-full ease-in duration-200 group-hover:scale-[1.02] group-hover:duration-100 group-active:scale-[0.99]" src={product.src} />
                  </LeftImg>
                  <LeftImg className="group" onClick={() => {
                    document.querySelector('.product__main-img').src = images.products.prodBack1;
                  }}>
                    <img className="object-cover object-center w-full h-full ease-in duration-200 group-hover:scale-[1.02] group-hover:duration-100 group-active:scale-[0.99]" src={images.products.prodBack1} />
                  </LeftImg>
                  <LeftImg className="group" onClick={() => {
                    document.querySelector('.product__main-img').src = images.products.prodBack2;
                  }}>
                    <img className="object-cover object-center w-full h-full ease-in duration-200 group-hover:scale-[1.02] group-hover:duration-100 group-active:scale-[0.99]" src={images.products.prodBack2} />
                  </LeftImg>
                  <LeftImg className="group" onClick={() => {
                    document.querySelector('.product__main-img').src = images.products.prodBack3;
                  }}>
                    <img className="object-cover object-center w-full h-full ease-in duration-200 group-hover:scale-[1.02] group-hover:duration-100 group-active:scale-[0.99]" src={images.products.prodBack3} />
                  </LeftImg>
                </ImgSliderContainer>
              </ImgSlider>
              <DownButton onClick={() => scroll('down')}>
                <BsChevronDown className="text-white" size={14} />
              </DownButton>
            </Left>
            <LeftMobile>
              <LeftButton onClick={() => scroll('left')}>
                <BsChevronLeft className="text-teal" size={28} />
              </LeftButton>
              <ImgSlider>
                <ImgSliderContainer className="no-scrollbar" ref={xRef}>
                  <LeftImgMobile src={product.src} />
                  <LeftImgMobile src={images.products.prodBack1} />
                  <LeftImgMobile src={images.products.prodBack2} />
                  <LeftImgMobile src={images.products.prodBack3} />
                </ImgSliderContainer>
              </ImgSlider>
              <RightButton onClick={() => scroll('right')}>
                <BsChevronRight className="text-teal" size={28} />
              </RightButton>
            </LeftMobile>
            <Center className={`duration-500 ease-in-out ${inView ? 'translate-y-0 opacity-100' : '-translate-y-10 opacity-0'}`}>
              <ProductImg onClick={() => {
                setModalVisible(true);
                document.body.classList.add('no-scrollbar');
              }} className="product__main-img" src={product.src} />
              <Modal state={modalVisible} stateFunc={setModalVisible}>
                <img className="w-full h-full" src={document.querySelector('.product__main-img')?.src} />
              </Modal>
            </Center>
            <Right>
              <BackLink className={`duration-500 ease-in-out hidden md:flex ${inView ? 'delay-200 translate-x-0 opacity-100' : 'translate-x-8 opacity-0'}`} to='/catalog'>
                <BsChevronLeft size={12} />
                назад
              </BackLink>
              <ProductTitle className={`duration-500 ease-in-out ${inView ? 'delay-300 translate-x-0 opacity-100' : 'translate-x-12 opacity-0'}`}>{product.name}</ProductTitle>
              <div className="flex gap-5">
                <Price className={`delay-[.35s] duration-500 ease-in-out ${inView ? 'translate-x-0 opacity-100' : 'translate-x-8 opacity-0'}`}>
                  {product.price.toString().length >= 4 ? product.price.toString().slice(0, -3) + ',' + product.price.toString().slice(-3) : product.price}.00 ₽
                </Price>
                <PriceBefore className={`duration-500 ease-in-out ${inView ? 'delay-[.4s] translate-x-0 opacity-100' : 'translate-x-8 opacity-0'}`}>
                  {product.actualPrice ? product.actualPrice + '.00 ₽' : ''}
                </PriceBefore>
              </div>
              <Block>
                <Text className={`duration-500 ease-in-out ${inView ? 'delay-500 translate-x-0 opacity-100' : 'translate-x-10 opacity-0'}`}>
                  <span className="font-bold">Состав: </span>
                  {flowers.join(', ')}
                </Text>
              </Block>
              <Block>
                <Text className={`duration-500 ease-in-out ${inView ? 'delay-[.55s] translate-x-0 opacity-100' : 'translate-x-10 opacity-0'}`}>
                  Завораживающая глубина ваших чувств передана огненными красками этого букета</Text>
              </Block>
              <Block>
                <Descr className={`duration-500 ease-in-out ${inView ? 'delay-[.6s] translate-x-0 opacity-100' : 'translate-x-10 opacity-0'}`}>
                  <span className="font-bold">Категории: </span>
                  {categories.join(', ')}
                </Descr>
              </Block>
              <Buttons className={`duration-500 ease-in-out ${inView ? 'delay-500 translate-x-0 opacity-100' : 'translate-x-12 opacity-0'}`}>
                <ButtonOutlined className='px-16 xl:px-24 basis-16 grow-0' wide
                  onClick={() => {
                    let str = id;
                    additionalChecked.map((i, index) => i ? str += `/${data.additional[index].name}` : '')
                    for (let i = 0; i < amount; i++) dispatch(addToCart(str));
                  }}
                >В корзину</ButtonOutlined>
                <AmountButton>
                  <button className='px-2' onClick={() => (amount === 1) ? '' : setAmount(amount - 1)}>-</button>
                  <button>{amount}</button>
                  <button className='px-2' onClick={() => (amount === 100) ? '' : setAmount(amount + 1)}>+</button>
                </AmountButton>
              </Buttons>
            </Right>
            <RightSm ref={rightRef}>
              <ProductTitle className={`duration-500 ease-in-out
                ${rightInView ? 'translate-x-0 opacity-100' : 'translate-x-8 opacity-0'}`}>
                {product.name}</ProductTitle>
              <div className="flex gap-5">
                <Price className={`duration-500 ease-in-out ${rightInView ? 'delay-100 translate-x-0 opacity-100' : 'translate-x-8 opacity-0'}`}>{product.price.toString().length >= 4 ? product.price.toString().slice(0, -3) + ',' + product.price.toString().slice(-3) : product.price}.00 ₽</Price>
                <PriceBefore className={`duration-500 ease-in-out ${rightInView ? 'delay-150 translate-x-0 opacity-100' : 'translate-x-8 opacity-0'}`}>
                  {product.actualPrice ? product.actualPrice + '.00 ₽' : ''}
                </PriceBefore>
              </div>
              <Block>
                <Text className={`duration-500 ease-in-out ${rightInView ? 'delay-200 translate-x-0 opacity-100' : 'translate-x-8 opacity-0'}`}>
                  <span className="font-bold">Состав: </span>
                  {flowers.join(', ')}
                </Text>
              </Block>
              <Block>
                <Text className={`duration-500 ease-in-out ${rightInView ? 'delay-300 translate-x-0 opacity-100' : 'translate-x-8 opacity-0'}`}>Завораживающая глубина ваших чувств передана огненными красками этого букета</Text>
              </Block>
              <Block>
                <Descr className={`duration-500 ease-in-out ${rightInView ? 'delay-[.4s] translate-x-0 opacity-100' : 'translate-x-8 opacity-0'}`}>
                  <span className="font-bold">Категории: </span>
                  {categories.join(', ')}
                </Descr>
              </Block>
              <Buttons className={`duration-500 ease-in-out ${rightInView ? 'delay-500 translate-x-0 opacity-100' : 'translate-x-8 opacity-0'}`}>
                <ButtonOutlined className='px-6 basis-16 sm:px-24 grow sm:grow-0' wide
                  onClick={() => {
                    let str = id;
                    additionalChecked.map((i, index) => i ? str += `/${data.additional[index].name}` : '')
                    for (let i = 0; i < amount; i++) dispatch(addToCart(str));
                  }}
                >В корзину</ButtonOutlined>
                <AmountButton>
                  <button className='px-2' onClick={() => (amount === 1) ? '' : setAmount(amount - 1)}>-</button>
                  <button>{amount}</button>
                  <button className='px-2' onClick={() => (amount === 100) ? '' : setAmount(amount + 1)}>+</button>
                </AmountButton>
              </Buttons>
            </RightSm>
          </ProductMain>

          <Additional>
            <SectionSubtitle className='text-center'>Дополнительно к заказу:</SectionSubtitle>
            <Grid ref={gridRef}>
              {data.additional.map((item, index) => (
                <ServiceCard className={`duration-500 ease-in-out
                  ${gridInView ?
                    index === 0 ? 'translate-x-0 opacity-100' :
                      index === 1 ? 'translate-x-0 opacity-100 delay-100' :
                        index === 2 ? 'translate-x-0 opacity-100 delay-200' :
                          index === 3 ? 'translate-x-0 opacity-100 delay-300' : '' :
                    'translate-x-8 opacity-0'}
                `} onClick={() => setAdditionalChecked([
                      index === 0 ? (!additionalChecked[0]) : additionalChecked[0],
                      index === 1 ? (!additionalChecked[1]) : additionalChecked[1],
                      index === 2 ? (!additionalChecked[2]) : additionalChecked[2],
                      index === 3 ? (!additionalChecked[3]) : additionalChecked[3],
                    ])}>
                  <CardBefore>
                    <input name={item.name} type='checkbox' className="appearance-none peer" />
                    <CardLabel for={item.name} className={additionalChecked[index] ? 'opacity-100' : 'opacity-0'}>
                      <AiOutlineCheckCircle className="w-full h-full text-teal" />
                    </CardLabel>
                  </CardBefore>
                  <CardTitle>{item.title}</CardTitle>
                  <CardDescr>{item.descr}</CardDescr>
                </ServiceCard>
              ))}

            </Grid>
          </Additional>
          <ProductSummary>
            <SummaryButtons>
              <TabButton ref={buttonsRef} className={`duration-500 ease-in-out
              ${tab === 1 ? 'text-teal font-bold border-b-[3px] border-teal' : 'text-[#555] font-light border-b border-[#555]'}
              ${buttonsInView ? 'translate-x-0 opacity-100' : '-translate-x-10 opacity-0'}
              `} onClick={() => { setTab(1); localStorage.setItem('tabNr', 1) }}>доставка и оплата</TabButton>
              <TabButton className={`duration-500 ease-in-out
              ${tab === 2 ? 'text-teal font-bold border-b-[3px] border-teal' : 'text-[#555] font-light border-b border-[#555]'}
              ${buttonsInView ? 'translate-x-0 opacity-100' : 'translate-x-10 opacity-0'}
              `} onClick={() => { setTab(2); localStorage.setItem('tabNr', 2) }}>отзывы ({product.reviews.length})</TabButton>
            </SummaryButtons>
            <Tabs>
              <Prodback className={`duration-500 ease-in-out ${buttonsInView ? 'delay-500 translate-x-0 opacity-100' : 'translate-x-10 opacity-0'}`} src={images.productBack} />
              <Delivery className={tab === 1 ? 'block' : 'hidden'}>
                <InfoTitle className='mb-5'>Способы оплаты:</InfoTitle>
                <List>
                  <ListItem className="mb-2.5 md:mb-1.5 last:mb-0 w-[95%] md:w-3/4 lg:w-[70%]">БАНКОВСКОЙ КАРТОЙ ПРИ ОФОРМЛЕНИИ ЗАКАЗА ЧЕРЕЗ САЙТ</ListItem>
                  <ListItem className="mb-2.5 md:mb-1.5 last:mb-0 w-[95%] md:w-3/4 lg:w-[70%]">НАЛИЧНЫМИ ИЛИ БАНКОВСКОЙ КАРТОЙ ПРИ САМОВЫВОЗЕ</ListItem>
                  <ListItem className="mb-2.5 md:mb-1.5 last:mb-0 w-[95%] md:w-3/4 lg:w-[70%]">НАЛИЧНЫМИ ПРИ ДОСТАВКЕ КУРЬЕРОМ</ListItem>
                  <ListItem className="mb-2.5 md:mb-1.5 last:mb-0 w-[95%] md:w-3/4 lg:w-[70%]">КРИПТОВАЛЮТОЙ ОНЛАЙН</ListItem>
                </List>
                <InfoTitle className='mb-5'>стоимость доставки:</InfoTitle>
                <List>
                  <ListItem className="mb-2.5 md:mb-1.5 last:mb-0 w-[95%] md:w-3/4 lg:w-[70%]"><span className="font-bold">Бесплатно</span> – при заказе на сумму <span className="text-teal">от 90 рублей</span></ListItem>
                  <ListItem className="mb-2.5 md:mb-1.5 last:mb-0 w-[95%] md:w-3/4 lg:w-[70%]"><span className="font-bold">10 рублей</span> – при заказе на сумму <span className="text-teal">менее 90 рублей</span></ListItem>
                  <ListItem className="mb-2.5 md:mb-1.5 last:mb-0 w-[95%] md:w-3/4 lg:w-[70%]">Возможность, сроки и стоимость доставки за пределы МКАД, доставки в ночное время, праздники <span className="text-teal">оговариваются с менеджером</span></ListItem>
                  <ListItem className="mb-2.5 md:mb-1.5 last:mb-0 w-[95%] md:w-3/4 lg:w-[70%]">Так же вы можете забрать ваш заказ самостоятельно по адресу:<br />
                    <span className="text-teal">г. Минск, ул. Тимирязева д. 67, комн. 112 ежедневно с 10.00 до 21.00</span></ListItem>
                </List>
                <InfoTitle className='mb-5'>Условия доставки:</InfoTitle>
                <p ref={descrRef} className={`text-sm md:text-xl font-light font-oswald leading-normal tracking-[0.02em] text-white uppercase
                  duration-500 ease-in-out ${descrInView ? 'translate-x-0 opacity-100' : 'translate-x-10 opacity-0'}
                `}>Доставка осуществляется по городу Минску в пределах МКАД <span className="text-teal">в любой день с 09.00 до 22.00.</span><br />
                  Доставка в ночное время осуществляется по договоренности с оператором</p>
              </Delivery>
              <Reviews className={tab === 2 ? 'block' : 'hidden'}>
                <div className={`${product.reviews.length === 0 ? 'md:mb-[3.75em]' : 'md:mb-[6.25em]'} mb-10`}>
                  {product.reviews.length === 0 ? <FormText className="text-white">Отзывов пока нет</FormText> : (
                    product.reviews.map(item => (
                      <Review text={item.text} stars={item.star} name={item.reviewer_name} date={item.review_date} />
                    ))
                  )}
                </div>
                <ReviewForm ref={formRef} action="#">
                  <FormText className={`mb-1 uppercase text-teal ${formInView ? 'translate-x-0 opacity-100' : 'translate-x-8 opacity-0'}`}>
                    {product.reviews.length === 0 ? 'Будьте первым, кто оставил' : 'Оставьте свой'} отзыв на “{product.name}”
                  </FormText>
                  <FormText className={`mb-5 text-white ${formInView ? 'delay-100 translate-x-0 opacity-100' : 'translate-x-8 opacity-0'}`}>Ваш адрес email не будет опубликован. <span className='whitespace-nowrap'>Обязательные поля помечены *</span>
                  </FormText>
                  <FormText className={`mb-1 text-white ${formInView ? 'delay-200 translate-x-0 opacity-100' : 'translate-x-8 opacity-0'}`}>Ваша оценка:</FormText>
                  <Stars className={`duration-500 ease-in-out ${formInView ? 'delay-300 translate-x-0 opacity-100' : 'translate-x-8 opacity-0'}`} amount={revStar} setAmount={setRevStar} logic />
                  <Input type="textarea" className='mt-5' id='review_text' label='Ваш отзыв*' placeholder='Введите комментарий' uppercase />
                  <Input className='mt-5' id='reviewer_name' label='Имя*' placeholder='Введите ваше имя' uppercase />
                  <Input type='email' className='mt-5' id='reviewer_email' label='E-mail*' placeholder='Введите вашу почту  ' uppercase />
                  <ButtonPrimary className='mt-[1.875rem] mb-2.5' pX="5.75rem">отправить</ButtonPrimary>
                  <SmallDescr ref={smallRef} className={`balance duration-500 ease-in-out ${smallInView ? 'translate-x-0 opacity-100' : 'translate-x-8 opacity-0'}`}>Нажимая  на кнопку «Отправить», я даю свое согласие на обработку персональных данных, в соответствии с
                    <a href="#" className="text-pink-300 hover:underline"> Политикой конфиденциальности</a>
                  </SmallDescr>
                </ReviewForm>
              </Reviews>
            </Tabs>
          </ProductSummary>
        </Container>
        <YouWouldLike className={tab === 1 ? 'mt-[6.25em]' : 'mt-[12.5em]'}>
          <Container>
            <SectionHeading>вам может понравиться:</SectionHeading>
          </Container>
          <Slider className='mt-6'>
            {featured.map((item, index) => (
              <SliderItem >
                <div className="w-[16rem] aspect-[53.84/100]">
                  <ProductCard id={item.id} style={{ transitionDelay: `${(index % 4) * 100}ms` }} />
                </div>
              </SliderItem>
            ))}
          </Slider>
        </YouWouldLike>
      </Main>
      <Footer />
    </>
  )
}

const Main = tw.main`
  pt-28 pb-[6.25em] md:pb-[12.5em] relative overflow-hidden
`;
const ProductMain = tw.div`
  mt-5 lg:mt-[3.75em] w-full
  grid grid-cols-1
  md:flex md:justify-between
  md:flex-wrap
  lg:grid lg:grid-cols-[1fr,1.8fr,2.5fr]
  gap-[1.875em]
`;
const Left = tw.div`
  // basis-[14.42%]
  relative
  shrink-0 grow-0 h-full
  hidden md:flex
  flex-col justify-center items-center self-center
  gap-2
  md:shrink
`;
const LeftMobile = tw.div`
  md:hidden
  relative
  // shrink-0 grow-0 h-full
`;
const ImgSlider = tw.div`
  // flex md:flex-col gap-5
`;
const ImgSliderContainer = tw.div`
  flex md:flex-col gap-2.5 items-start
  md:h-[calc(11.5625rem*3 + 20px)]
  lg:h-[calc(11.5625rem*2 + 0.625rem)]
  overflow-scroll
  snap-x md:snap-y snap-mandatory
  scroll-smooth
`;
const yAxisButton = tw.button`
  hidden md:block
`;
const xAxisButton = tw.button`
  absolute top-1/2 -translate-y-1/2
  bg-black/90 p-2 rounded
  md:hidden
`;
const UpButton = tw(yAxisButton)``;
const DownButton = tw(yAxisButton)``;
const LeftButton = tw(xAxisButton)`
  -left-px pl-1
`;
const RightButton = tw(xAxisButton)`
  -right-px pr-1
`;
const LeftImg = tw.div`
  // w-full aspect-[32/37]
  md:w-40 md:min-h-[11.5625rem]
  overflow-hidden
  cursor-pointer
  snap-start
  transition duration-300
`;
const LeftImgMobile = tw.img`
  block
  snap-start
  w-full aspect-[3/4]
  shrink-0
  object-cover object-center
`;
const Center = tw.div`
  // basis-[30.3%]
  hidden md:block
  relative
  aspect-[7/9]
  shrink-0 grow-0
  md:shrink md:basis-1/2 md:grow
  bg-white
  sm:mr-auto md:mr-0
`;
const ProductImg = tw.img`
  w-full h-full
  object-cover object-center
  cursor-zoom-in
`;
const Right = tw.div`relative hidden lg:block`;
const RightSm = tw.div`
  relative
  md:mr-auto
  lg:hidden
`;
const BackLink = tw(Link)`
  items-center gap-1.5
  font-oswald font-normal
  text-[0.625rem] leading-normal tracking-[0.04em]
  uppercase
  text-white
`;
const ProductTitle = tw.h2`
  mt-5 mb-2.5 md:my-0 lg:mt-5
  font-cormorant font-normal
  text-xl md:text-[2.5rem]
  leading-[1.2] tracking-[0.02em]
  uppercase
  text-white
`;
const Price = tw.h3`
  font-oswald font-normal
  text-xl md:text-3xl
  leading-normal tracking-[0.04em]
  uppercase
  text-teal
`;
const PriceBefore = tw.span`
  font-oswald font-light
  text-xl md:text-3xl leading-normal tracking-[0.04em]
  uppercase line-through
  text-[#555]
`;
const Block = tw.div`mt-5`;
const Text = tw.p`
  font-oswald font-normal
  text-sm leading-normal tracking-[0.04em]
  uppercase
  text-white
`;
const Descr = tw.p`
  font-oswald font-light
  text-xs leading-normal tracking-[0.04em]
  text-white
`;
const Buttons = tw.div`
  flex gap-2.5 sm:gap-[1.875rem]
  lg:absolute bottom-0 left-0
  justify-start w-full
  mt-[1.875em]
  // [&>*]:grow
`;
const AmountButton = tw.div`
  grow-0
  px-2 py-2.5
  border border-white
  flex items-center justify-between
  gap-[1.375rem] sm:gap-10
  font-oswald font-normal
  text-xl leading-normal tracking-[0.1em]
  text-white
`;
const Additional = tw.div`
  mt-10 md:mt-20 mb-[4.375em]
`;
const Grid = tw.div`
  mt-12
  // grid grid-cols-4 gap-x-[1.875em]
  flex justify-center gap-[1.875em]
  flex-wrap lg:flex-nowrap
`;
const ServiceCard = tw.div`
  relative
  basis-[15.75rem]
  grow-0
  shrink-0 md:shrink
  px-4 pt-[1.875em] pb-6
  bg-[#000]/30 backdrop-blur-[20px]
  rounded-[20px]
  flex flex-col items-center
  cursor-pointer
`;
const CardBefore = tw.div`
  w-[1.875em] aspect-square
  bg-[#000] rounded-full
  absolute top-0 left-1/2
  -translate-x-1/2
  -translate-y-1/2
  overflow-hidden
`;
const CardLabel = tw.label`
  absolute inset-0
  // w-[calc(100% - 4px)] h-[calc(100% - 4px)]
  w-full h-full
  rounded-full
  bg-black
  duration-300
  ease-in-out
`;
const CardTitle = tw.h5`
  max-w-[60%]
  font-oswald font-normal
  text-sm leading-normal tracking-[0.04em]
  uppercase text-center
  text-teal
  basis-14 shrink-0
`;
const CardDescr = tw.p`
  mt-2
  font-oswald font-normal
  text-sm leading-normal tracking-[0.06em]
  text-center
  text-white
`;
const ProductSummary = tw.div``;
const SummaryButtons = tw.div`
  flex items-center justify-center
`;
const TabButton = tw.button`
  w-[22.5rem] py-4 md:py-7
  font-oswald
  text-sm md:text-xl leading-normal tracking-[0.04em]
  uppercase
  transition-all duration-300
`;
const Tabs = tw.div`relative`;
const Prodback = tw.img`
  absolute rotate-[-18.18deg]
  w-[55%]
  top-12 sm:-top-5 lg:-top-16 xl:-top-32
  -right-[30%]
  z-10
`;
const Delivery = tw.div`
  pt-5 md:pt-16
`;
const List = tw.ul`
  mb-10 md:mb-[3.75em]
`;
const Reviews = tw.div`pt-16`;
// const Review = tw.div`
//   relative mb-20 last:mb-0
//   before:content-['“']
//   before:font-oswald before:font-normal
//   before:text-3xl before:leading-normal before:tracking-[0.02em]
//   before:text-teal
//   before:absolute before:-translate-y-[calc(100%-0.5rem)]
// `;
// const ReviewText = tw.p`
//   w-[47.5%] mb-2.5
//   font-oswald font-normal
//   text-base leading-normal tracking-[0.02em]
//   text-white
// `;
// const ReviewGray = tw.p`
//   mt-2.5
//   font-oswald font-normal
//   text-sm leading-normal tracking-[0.02em]
//   text-[#555]
// `;
const ReviewForm = tw.form`w-5/6 md:w-3/4 lg:w-2/3 xl:w-1/2 mt-[3.75em]`;
const FormText = tw.p`
  font-oswald font-normal
  text-sm leading-normal tracking-[0.06em]
  duration-500 ease-in-out
`;
const SmallDescr = tw.p`
  md:w-3/5 xl:w-3/4
  font-roboto font-normal
  text-[0.625rem] leading-tight tracking-[0.02em]
  text-white
`;
const YouWouldLike = tw.div`hidden md:block`;
const SliderItem = tw.div`
  basis-[calc(16rem)]  
  grow-0 shrink-0
  snap-start
`;

export default Product;