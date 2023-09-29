import tw from "twin.macro"
import data from "../../constants/data";
import { Link } from 'react-router-dom';
import { setProduct } from "../../redux-toolkit/reducers/filterSlice";
import { addToCart, removeAllOfSort, removeFromCart } from "../../redux-toolkit/reducers/cartSlice";
import { useDispatch } from "react-redux";
import { useInView } from "react-intersection-observer";
import priceDisplayer from "../../functions/priceDisplayer";

const CartItem = ({ className = '', style = {}, id, appearing = true, amount, additional, externalInView = false }) => {
  const { ref, inView } = useInView({
    threshold: .6,
    triggerOnce: true,
  });
  const dispatch = useDispatch();

  const product = data.products.find(item => item.id === id);

  const closeCart = () => {
    setVisible(false);
    document.body.classList.remove('hide-scrollbar');
  };

  return (
    <Item style={style} ref={ref} className={
      appearing ? inView ? 'translate-x-0 opacity-100' : 'translate-x-8 opacity-0' :
        externalInView ? 'translate-x-0 opacity-100' : 'translate-x-8 opacity-0'
    }>
      <ItemImg src={product.src} />
      <ItemDetails>
        <ItemTitle to='/catalog/product' onClick={() => {
          closeCart();
          dispatch(setProduct(product.id));
        }}>{product.name}</ItemTitle>
        <div className="w-full my-0.5">
          <ItemAdditional>
            {additional.includes('fertilizer') ?
              <>
                <p>+ Удобрения</p>
                <p className="font-bold text-teal tracking-[0.1em]">{data.additional[0].price}.00 ₽</p>
              </>
              : ''}
          </ItemAdditional>
          <ItemAdditional>
            {additional.includes('signature') ?
              <>
                <p>+ Подпись открытки</p>
                <p className="font-bold text-teal tracking-[0.1em]">{data.additional[1].price}.00 ₽</p>
              </>
              : ''}
          </ItemAdditional>
          <ItemAdditional>
            {additional.includes('photo') ?
              <>
                <p>+ Фото перед отправкой</p>
                <p className="font-bold text-teal tracking-[0.1em]">{data.additional[2].price}.00 ₽</p>
              </>
              : ''}
          </ItemAdditional>
          <ItemAdditional>
            {additional.includes('surprise') ?
              <>
                <p>+ Букет-сюрприз</p>
                <p className="font-bold text-teal tracking-[0.1em]">{data.additional[3].price}.00 ₽</p>
              </>
              : ''}
          </ItemAdditional>
        </div>
        <ItemPrice>
          {priceDisplayer(product.price)}
        </ItemPrice>
        <p className="text-white">{additional}</p>
        <AmountButton className="group">
          <span onClick={() => dispatch(removeFromCart(additional.length !== 0 ? product.id + `/${additional.join('/')}` : product.id))} className="px-1.5 cursor-pointer duration-200 -translate-y-px hover:text-[#888]">–</span>
          <span className="duration-200">{amount}</span>
          <span onClick={() => dispatch(addToCart(additional.length !== 0 ? product.id + `/${additional.join('/')}` : product.id))} className="px-1.5 cursor-pointer duration-200 hover:text-[#888]">+</span>
        </AmountButton>
        <RemoveButton onClick={() => dispatch(removeAllOfSort(additional.length !== 0 ? product.id + `/${additional.join('/')}` : product.id))}>Удалить</RemoveButton>
      </ItemDetails>
    </Item>
  )
}

const Item = tw.div`
  py-2.5 md:py-5 border-b border-[#555]
  flex justify-between gap-2.5 md:gap-5
  duration-300 ease-in-out
`;
const ItemImg = tw.img`
  h-20 aspect-[3/4]
  object-cover object-center
`;
const ItemDetails = tw.div`
  grow relative
  flex flex-col items-start
`;
const ItemTitle = tw(Link)`
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

export default CartItem;