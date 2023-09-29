import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { setProduct } from "../redux-toolkit/reducers/filterSlice";

import { useInView } from "react-intersection-observer";
import { useState } from "react";

import tw from "twin.macro"

import ButtonOutlined from "./ButtonOutlined";
import Modal from "./Modal";

import data from "../constants/data";
import { addToCart } from "../redux-toolkit/reducers/cartSlice";
import priceDisplayer from "../functions/priceDisplayer";


const ProductCard = ({ id, wide = false, style = {}, i = null }) => {
  const [modal, setModal] = useState(false);

  const dispatch = useDispatch();

  const product = data.products.find(item => item.id === id);
  const { name, price, feature, src, actualPrice } = product;

  const { ref, inView } = useInView({
    threshold: .15,
    triggerOnce: true,
  });
  return (
    <>
      <Modal state={modal} stateFunc={setModal}>
        <img className="w-full h-full" src={src} />
      </Modal>
      <Card ref={ref} style={inView ? style : { transitionDelay: '0ms' }} className={inView ? 'scale-100 opacity-100' : 'scale-90 opacity-0 delay-0'}>
        <CardImg onClick={() => {
          setModal(true);
          document.body.classList.add('no-scrollbar');
        }} src={src} />
        {feature === '' ? <></> : <CardFeature className={feature === 'sale' ? 'bg-[#31985A]' : 'bg-pink-300'}>{feature}</CardFeature>}
        <CardName onClick={() => dispatch(setProduct(id))} to={'/catalog/product'}>{name}</CardName>
        <CardPrice>
          <SalePrice>
            {priceDisplayer(price, 1)}
          </SalePrice>
          <ActualPrice>
            {actualPrice ? priceDisplayer(actualPrice, 1) : ''}
          </ActualPrice>
        </CardPrice>
        {/* <div className="absolute flex items-center justify-center p-2 font-bold leading-normal -translate-x-1/2 -translate-y-1/2 bg-gray-900 rounded-full w-14 top-1/3 left-1/2 aspect-square font-cormorant font-3xl text-sky-200 ">{pop}</div> */}
        <ButtonOutlined pX='4.75rem' wide={wide}
          onClick={() => dispatch(addToCart(id))}
        >В корзину</ButtonOutlined>
      </Card>
    </>
  )
}

const Card = tw.div`
  relative
  w-full
  flex flex-col
  cursor-default
  duration-500 ease-in-out
`;
const CardImg = tw.img`
  w-full aspect-[7/9]
  object-cover
  grow-0 shrink-0
  cursor-zoom-in
`;
const CardFeature = tw.span`
  absolute top-0 right-0
  translate-x-[5px] -translate-y-[15px]
  md:translate-x-[10px] md:-translate-y-[10px]
  w-[60px] aspect-square rounded-full
  flex items-center justify-center
  font-oswald font-light
  text-xl tracking-[0.02em]
  uppercase
  text-black
`;
const CardName = tw(Link)`
  my-2.5
  font-oswald font-normal
  text-xl leading-[1.5] tracking-[0.04em]
  uppercase
  text-white
  grow
  whitespace-nowrap
  overflow-hidden
  text-ellipsis
`;
const CardPrice = tw.div`
  mb-5
  flex items-center gap-4
`;
const SalePrice = tw.p`
  font-oswald font-bold
  text-sm leading-normal tracking-[0.04em]
  uppercase
  text-white
`;
const ActualPrice = tw.p`
  font-oswald font-light
  text-sm leading-normal tracking-[0.04em]
  uppercase line-through
  text-white
`;

export default ProductCard;