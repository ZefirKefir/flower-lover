import tw from "twin.macro";
import { useDispatch, useSelector } from "react-redux";
import { useInView } from "react-intersection-observer";
import { Link } from 'react-router-dom';

import { TfiClose } from 'react-icons/tfi';

import CartItem from "./CartItem";

import images from "../../constants/images";
import data from '../../constants/data';


const Cart = ({ ref, visible = false, setVisible = () => console.log('') }) => {
  const { ref: inViewRef, inView } = useInView({
    threshold: .9,
    triggerOnce: false,
  });

  const { cart } = useSelector(state => state.carter);

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

  const closeCart = () => {
    setVisible(false);
    document.body.classList.remove('hide-scrollbar');
  };
  const handleEscClick = (e) => {
    if (e.key === 'Escape') {
      closeCart();
    }
  }


  return (
    <Div onKeyDown={handleEscClick} ref={inViewRef} className={`
      ${visible ? 'translate-x-0' : 'translate-x-full'}
    `}>
      <input ref={ref} className="absolute right-0 opacity-0 foccc" />
      <Back onClick={closeCart} className={visible ? 'translate-x-0' : 'translate-x-100'}>
        <CartIcon className={visible ? 'translate-x-0' : 'translate-x-[30em]'}>
          <img className="w-[30px] aspect-square" src={images.icons.cart} alt='cart' />
          <CartItemsAmount>{cart.length}</CartItemsAmount>
        </CartIcon>
      </Back>
      <Content className={visible ? 'translate-x-0' : 'translate-x-full'}>
        <div className='absolute -z-10 rounded-full blur-[125px] animate-leftsided w-[360px] h-[500px] top-10 -right-2/3 bg-pink-800 rotate-[-43.21deg]' />
        <TitleDiv>
          <Title>Your cart</Title>
          <TfiClose size={24} onClick={closeCart} className="scale-[.7] cursor-pointer md:scale-100" />
        </TitleDiv>

        <CartList className="custom-scrollbar">
          {cartList.map((item, i) => (
            <CartItem i={i} id={item.id} amount={item.amount} additional={item.additional} appearing={false}
              className={inView ? 'translate-x-0 opacity-100' : 'translate-x-8 opacity-0'}
              style={{ transitionDelay: `${i * 100 + 150}ms` }} externalInView={inView}
            />
          ))}
        </CartList>

        <CardBottom>
          <CartTitle>Preliminary cost: {sum !== 0 ? sum.toString().slice(0, -3) + ',' + sum.toString().slice(-3) : 0}.00 rub.</CartTitle>
          <CartSubtitle>To find out the shipping cost, please proceed <br />to checkout.</CartSubtitle>
        </CardBottom>
        <CheckoutButton onClick={closeCart} to='/checkout'>Checkout</CheckoutButton>
      </Content>
    </Div>
  )
}

const Div = tw.div`
  fixed inset-0
  w-full h-[100vh]
  bg-[#000]/20
  backdrop-blur-[20px]
  duration-300
  ease-in-out
`;
const Back = tw.div`
  w-full h-full
`;
const CartIcon = tw.button`
  absolute p-4
  top-2.5 -right-10
  md:right-[50.5%] lg:right-[40.5%] xl:right-[30.5%]
  duration-500 delay-[.2s]
`;
const CartItemsAmount = tw.span`
  w-4 h-4
  absolute
  top-3 right-2
  font-oswald font-normal
  text-xs
  rounded-full
  bg-teal
  text-[#142B2B]
`;
const Content = tw.div`
  absolute top-0 right-0
  w-[93.75%] sm:w-4/5 md:w-1/2 lg:w-2/5 xl:w-[30%]
  h-full bg-[#000]
  p-2.5 md:px-[1.875em] md:py-5
  text-white
  origin-right
  transition-all duration-300 delay-200
  // z-10
`;
const TitleDiv = tw.div`
  flex justify-between items-center
  text-teal
  pb-2.5 md:pb-4
  border-b border-[#555]
`;
const Title = tw.h3`
  font-oswald font-bold
  text-sm md:text-3xl
  leading-normal tracking-[0.04em]
  uppercase
`;
const CartList = tw.div`
  grow w-full
  // overflow-scroll
  pr-4
  h-[calc(100vh - 11.4875rem)]
  // h-[calc(100vh - 10.8125rem)]
  md:h-[calc(100vh - 15.375rem)]
`;
const CardBottom = tw.div`
  w-full pt-2.5
  border-t border-[#555]
`;
const CartTitle = tw.p`
  font-oswald font-bold
  leading-normal tracking-[0.02em]
  uppercase grow
  text-[0.675rem] md:text-sm
  text-teal
`;
const CartSubtitle = tw(CartTitle)`
  font-normal
  text-xs
  text-white
`;
const CheckoutButton = tw(Link)`
  block text-center py-4
  mt-2.5 md:mt-5
  border-[.5px] border-white
  font-oswald font-bold
  text-xs leading-[1.5] tracking-[0.1em]
  uppercase whitespace-nowrap
  text-white hover:text-black
  hover:bg-teal hover:border-none
  focus:outline-teal
  active:shadow-inner
  duration-300
`;

export default Cart;