import { useEffect, useRef, useState } from "react";
import { useSelector } from 'react-redux';
import tw from "twin.macro";
import { Link } from 'react-router-dom';
import { InView, useInView } from "react-intersection-observer";

import Logo from "../Logo";
import images from "../../constants/images";
import Container from "../Container";
import Cart from './Cart';
import ProductCard from '../ProductCard';
import SectionText from '../SectionText';

import { IoMenuOutline, IoCloseOutline } from 'react-icons/io5';

import data from '../../constants/data';


const SCROLL = 200;

const Navbar = ({ landing = false, logoLanding = false }) => {
  const { cart } = useSelector(state => state.carter);
  const [navFixed, setNavFixed] = useState(!landing);
  const [isMobileOpen, setIsMobileOpen] = useState(false);
  const [cartVisible, setCartVisible] = useState(false);
  const [searchMode, setSearchMode] = useState(false);

  const [searchText, setSearchText] = useState('')
  const foundList = Array.from(data.products.filter(item => item.name.toLowerCase().search(searchText.toLowerCase()) !== -1));

  const ref = useRef(null);
  const mobInputRef = useRef(null)
  const cartRef = useRef();
  const { ref: inViewRef, inView } = useInView({
    threshold: 1,
  });

  const unfocus = () => {
    (searchMode && landing) ? setNavFixed(false) : setNavFixed(true);
    setSearchMode(false);
    ref.current.value = '';
    mobInputRef.current.value = '';
    setSearchText('')
    document.body.classList.remove('hide-scrollbar');
  };
  const handleEscClick = (e) => {
    if (e.key === 'Escape') {
      unfocus();
    }
  };
  const openCart = () => {
    setCartVisible(true);
    document.body.classList.add('hide-scrollbar');
    document.querySelector('.foccc').focus();
  }
  const openMobile = () => {
    setIsMobileOpen(true);
    document.body.classList.add('hide-scrollbar');
  }
  const closeMobile = () => {
    setIsMobileOpen(false);
    document.body.classList.remove('hide-scrollbar');
  }

  useEffect(() => {
    const handleScroll = () => {
      if (landing) {
        if ((searchMode) ? window.scrollY >= 0 : window.scrollY >= SCROLL) {
          setNavFixed(true);
        } else if ((!searchMode)) {
          setNavFixed(false);
        }
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    }
  }, [searchMode]);
  return (
    <>
      <MainNav className={navFixed ? 'fixed bg-[#000] pt-1 lg:pt-2' : 'absolute'}>
        <SearchResultsPC className={`${searchMode ? 'hidden lg:block' : 'hidden'} custom-scrollbar`}>
          <Container>
            <div className={searchText.length === 0 ? 'hidden' : 'block'}>
              <ResultsTitle className='mt-[1.875rem] mb-5'>Результат поиска: <span className='text-pink-300'>{searchText}</span></ResultsTitle>
              <ResultsGrid className='mt-[1.875em]'>
                {searchText.length !== 0 ? foundList.map(item => (
                  <ProductCard id={item.id} name={item.name} feature={item.feature} price={item.price} src={item.src} actual={item.actualPrice} wide />
                )) : ''}
              </ResultsGrid>
              {foundList.length === 0 ? (
                <>
                  <ResultsText className='mt-10 uppercase md:text-sm'>
                    По данному запросу ничего не найдено.<br />
                    Попробуйте еще раз или перейдите в каталог
                  </ResultsText>
                  <CatalogLink to='/catalog'>В каталог</CatalogLink>
                </>
              ) : ''}
            </div>
          </Container>
        </SearchResultsPC>
        <SearchResultsMobile className={`${searchMode ? 'translate-y-0 scale-y-100 lg:translate-[100%] lg:scale-0' : 'translate-y-[100%] scale-y-0'} custom-scrollbar`}>
          <Container>
            <SearchDiv className={searchMode ? 'flex' : 'absolute -top-40 opacity-0'}>
              <SearchIcon className='w-6' src={images.icons.search} alt='search' />
              <SearchInput onChange={(e) => setSearchText(e.target.value)}
                onKeyUp={handleEscClick} ref={mobInputRef}
                placeholder='Введите свой запрос'
              />
              <IoCloseOutline className='cursor-pointer text-[#7c7c7c]' size={24}
                onClick={() => {
                  unfocus();
                }}
              />
            </SearchDiv>
            <div className={searchText.length === 0 ? 'hidden' : 'block'}>
              <ResultsTitle className='my-5'>Результат поиска: <span className='text-pink-300'>{searchText}</span></ResultsTitle>
              <ResultsGrid>
                {searchText.length !== 0 ? foundList.map(item => (
                  <ProductCard id={item.id} name={item.name} feature={item.feature} price={item.price} src={item.src} actual={item.actualPrice} wide />
                )) : ''}
              </ResultsGrid>
              {foundList.length === 0 ? (
                <>
                  <ResultsText className='mt-10 uppercase md:text-sm'>
                    По данному запросу ничего не найдено.<br />
                    Попробуйте еще раз или перейдите в каталог
                  </ResultsText>
                  <CatalogLink to='/catalog'>В каталог</CatalogLink>
                </>
              ) : ''}
            </div>
          </Container>
        </SearchResultsMobile>
        <Container className='bg-[#000]'>
          <Nav ref={inViewRef} className={`mt-8 lg:mt-0 ${navFixed ? 'pt-0.5' : 'pt-2.5'} lg:pt-0`}>
            <MobileNavButton className={`duration-500 ease-in-out ${inView ? 'translate-y-0 opacity-100' : '-translate-y-6 opacity-0'}`} onClick={openMobile}>
              <IoMenuOutline size={36} className={`text-teal ${navFixed ? 'scale-90' : 'scale-100'}`} />
            </MobileNavButton>
            <MobileMenu className={`${isMobileOpen ? 'translate-x-0' : '-translate-x-full'}`}>
              <MobileNavList className={`no-scrollbar`}>
                <NavCloseButton onClick={closeMobile}>
                  <IoCloseOutline size={18} />
                </NavCloseButton>
                <Logo width="22px" height="68px" />
                <NavInput className='flex cursor-pointer' onClick={() => {
                  (searchMode && landing) ? setNavFixed(false) : setNavFixed(true);
                  setSearchMode(true);
                  mobInputRef.current.focus();
                  closeMobile();
                  document.body.classList.add('hide-scrollbar');
                }}>
                  <SearchIcon src={images.icons.search} alt='search' />
                  поиск
                </NavInput>
                <NavItem>
                  <NavLink to='/' onClick={closeMobile}>Главная</NavLink>
                </NavItem>
                <NavItem>
                  <NavLink to='/catalog' onClick={closeMobile}>Каталог</NavLink>
                </NavItem>
                <NavItem>
                  <NavLink to='/delment' onClick={closeMobile}>Доставка и оплата</NavLink>
                </NavItem>
                <NavItem>
                  <NavLink to='/aboutus' onClick={closeMobile}>О нас</NavLink>
                </NavItem>
                <NavItem>
                  <NavLink to='/contacts' onClick={closeMobile}>Контакты</NavLink>
                </NavItem>
                <NavItem>
                  <NavLink to='/faq' onClick={closeMobile}>FAQ</NavLink>
                </NavItem>
                <div className="h-px w-[6.25em] bg-[#555]">damn</div>
                <MobileNavContact>
                  <ContactBlock>
                    <ContactTitle>
                      <a href="mailto: zakaz@loverflower.by">zakaz@loverflower.by</a>
                    </ContactTitle>
                    <ContactDescr className="max-w-[11.25rem]">Доставка 24/7 по договоренности с оператором</ContactDescr>
                  </ContactBlock>
                  <ContactBlock>
                    <ContactTitle>ул. Тимирязева 67</ContactTitle>
                    <ContactDescr>10:00 до 21:00<br />
                      без выходных</ContactDescr>
                  </ContactBlock>
                  <ContactBlock>
                    <a href="#" className="font-oswald font-normal text-[10px] leading-normal tracking-[0.04em] text-[#555] block hover:text-[#888] transition">Политика конфиденциальности</a>
                    <a href="#" className="font-oswald font-normal text-[10px] leading-normal tracking-[0.04em] text-[#555] block hover:text-[#888] transition">Обработка персональных данных</a>
                  </ContactBlock>
                  <ContactBlock>
                    <ContactTitle>
                      <a href="tel:+375291136969" className="text-white">+375 (29) 113-69-69</a>
                    </ContactTitle>
                  </ContactBlock>
                  <NavSocial>
                    <SocialLink href="#">
                      <SocialIcon src={images.icons.insta} alt="insta" />
                    </SocialLink>
                    <SocialLink href="#">
                      <SocialIcon src={images.icons.whatsapp} alt="whatsapp" />
                    </SocialLink>
                    <SocialLink href="#">
                      <SocialIcon src={images.icons.viber} alt="viber" />
                    </SocialLink>
                  </NavSocial>
                </MobileNavContact>
              </MobileNavList>
              <div className="w-full h-full" onClick={closeMobile} />
            </MobileMenu>
            <FixedNavLogo to='/' className={(navFixed || !logoLanding) ? 'block' : 'hidden'}>
              <span className={`block duration-500 ease-in-out ${inView ? 'translate-x-0 opacity-100' : 'translate-x-10 opacity-0'}`}>Lover</span>
              <span className={`block duration-500 ease-in-out ${inView ? 'translate-x-0 opacity-100' : '-translate-x-10 opacity-0'}`}>Flower</span>
            </FixedNavLogo>
            <NavList className={searchMode ? 'w-full' : ''}>
              <Logo className={inView ? 'translate-y-0 opacity-100' : '-translate-y-2 opacity-0'} />
              <NavItem className={inView ? 'translate-y-0 opacity-100 delay-[.05s]' : 'opacity-0 -translate-y-6'}>
                <NavLink to='/catalog'>Каталог</NavLink>
              </NavItem>
              <NavItem className={inView ? 'translate-y-0 opacity-100 delay-[.1s]' : 'opacity-0 -translate-y-6'}>
                <NavLink to='/delment'>Доставка и оплата</NavLink>
              </NavItem>
              <NavItem className={inView ? 'translate-y-0 opacity-100 delay-[.15s]' : 'opacity-0 -translate-y-6'}>
                <NavLink to='/aboutus'>О нас</NavLink>
              </NavItem>
              <NavItem className={inView ? 'translate-y-0 opacity-100 delay-[.2s]' : 'opacity-0 -translate-y-6'}>
                <NavLink to='/contacts'>Контакты</NavLink>
              </NavItem>
              <NavItem className={inView ? 'translate-y-0 opacity-100 delay-[.25s]' : 'opacity-0 -translate-y-6'}>
                <NavLink to='/faq'>FAQ</NavLink>
              </NavItem>
              <NavItem className={`w-full ${inView ? 'translate-y-0 opacity-100 delay-[.3s]' : 'opacity-0 -translate-y-6'}`}>
                <NavInput className={`${!searchMode ? 'flex' : 'hidden'} cursor-pointer`}
                  onClick={() => {
                    (searchMode && landing) ? setNavFixed(false) : setNavFixed(true);
                    setSearchMode(true);
                    ref.current.focus();
                    document.body.classList.add('hide-scrollbar');
                  }}>
                  <SearchIcon src={images.icons.search} alt='search' />
                  поиск
                </NavInput>
                <SearchDiv className={searchMode ? 'flex' : 'absolute -top-40 opacity-0'}>
                  <SearchIcon className='w-6' src={images.icons.search} alt='search' />
                  <SearchInput onChange={(e) => setSearchText(e.target.value)}
                    onKeyUp={handleEscClick} ref={ref}
                    placeholder='Введите свой запрос'
                  />
                  <IoCloseOutline className='cursor-pointer text-[#7c7c7c]' size={24}
                    onClick={() => {
                      unfocus();
                    }}
                  />
                </SearchDiv>
              </NavItem>
            </NavList>
            <div className={`lg:hidden ${navFixed ? 'scale-75' : 'scale-100'}`}>
              <CartButton className={`duration-500 ease-in-out ${inView ? 'translate-y-0 opacity-100' : '-translate-y-6 opacity-0'}`} onClick={openCart}>
                <img className="w-[30px] aspect-square" src={images.icons.cart} alt='cart' />
                <CartItemsAmount>{cart.length}</CartItemsAmount>
              </CartButton>
            </div>
            <NavContact className={navFixed ? 'hidden' : 'hidden lg:flex'}>
              <ContactBlock className={inView ? 'translate-y-0 opacity-100' : '-translate-y-4 opacity-0'}>
                <ContactTitle>
                  <a href="mailto: zakaz@loverflower.by">zakaz@loverflower.by</a>
                </ContactTitle>
                <ContactDescr>Доставка 24/7 по договоренности с оператором</ContactDescr>
              </ContactBlock>
              <ContactBlock className={inView ? 'translate-y-0 opacity-100 delay-[.1s]' : '-translate-y-4 opacity-0'}>
                <ContactTitle>ул. Тимирязева 67</ContactTitle>
                <ContactDescr>
                  10:00 до 21:00<br />
                  без выходных
                </ContactDescr>
              </ContactBlock>
              <NavSocial className={`duration-300 ease-in-out ${inView ? 'translate-y-0 opacity-100 delay-[.2s]' : '-translate-y-4 opacity-0'}`}>
                <SocialLink href="#">
                  <SocialIcon src={images.icons.insta} alt="insta" />
                </SocialLink>
                <SocialLink href="#">
                  <SocialIcon src={images.icons.whatsapp} alt="whatsapp" />
                </SocialLink>
                <SocialLink href="#">
                  <SocialIcon src={images.icons.viber} alt="viber" />
                </SocialLink>
              </NavSocial>
              <NavPhone>
                <ContactBlock>
                  <ContactTitle className={`duration-300 ease-in-out ${inView ? 'translate-y-0 opacity-100 delay-[.3s]' : '-translate-y-4 opacity-0'}`}>+375 (29) 113-69-69</ContactTitle>
                  <NavButtonButLink className={`duration-300 ease-in-out flex mt-2 mb-5 ${inView ? 'translate-y-0 opacity-100 delay-[.35s]' : '-translate-y-4 opacity-0'}`} href='tel: +375291136969'>
                    <img src={images.icons.phone} />
                    заказать звонок
                  </NavButtonButLink>
                  <CartButton className={`duration-300 ease-in-out ${inView ? 'translate-y-0 opacity-100 delay-[.4s]' : '-translate-y-4 opacity-0'}`} onClick={openCart}>
                    <img className="w-[30px] aspect-square" src={images.icons.cart} alt='cart' />
                    <CartItemsAmount>{cart.length}</CartItemsAmount>
                  </CartButton>
                </ContactBlock>
              </NavPhone>
            </NavContact>
            <FixedNavContact className={navFixed ? 'hidden lg:flex' : 'hidden'}>
              <ContactTitle className="mt-1">
                <NavButtonButLink className={`duration-300 ease-in-out ${inView ? 'translate-y-0 opacity-100 delay-[.05s]' : '-translate-y-6 opacity-0'} ${searchMode ? 'hidden' : 'flex'}`} href='tel:+375291136969'>
                  <img src={images.icons.phone} className='w-6 translate-y-1' />
                  +375 (29) 113-69-69
                </NavButtonButLink>
              </ContactTitle>
              <CartButton onClick={openCart} className={`duration-300 ease-in-out shrink-0 ${inView ? 'translate-y-0 opacity-100' : '-translate-y-4 opacity-0'}`}>
                <img className="w-[30px] aspect-square" src={images.icons.cart} alt='cart' />
                <CartItemsAmount>{cart.length}</CartItemsAmount>
              </CartButton>
            </FixedNavContact>
          </Nav>
          <Cart ref={cartRef} visible={cartVisible} setVisible={setCartVisible} />
        </Container>
      </MainNav>
      {/* was here */}
    </>
  )
}

const SearchResultsPC = tw.div`
  fixed top-20 left-0 pb-[3.5em]
  w-full h-[calc(100% - 5em)]
  bg-black
  z-30
`;
const SearchResultsMobile = tw.div`
  fixed top-20 left-0
  w-full h-[calc(100% - 5em)]
  bg-black
  z-30
  duration-500 ease-in-out
  origin-bottom
`;
const ResultsText = tw(SectionText)`md:text-sm`;
const CatalogLink = tw(Link)`
  inline-block mt-5
  py-4 px-24
  font-oswald font-bold
  text-xs leading-normal tracking-[0.1em]
  uppercase
  text-[#000] hover:text-white
  bg-teal hover:bg-pink-800
  focus:outline-pink-800
  active:shadow-inner
  duration-300
`;
const ResultsTitle = tw.h2`
  w-full
  font-oswald font-bold
  text-sm lg:text-3xl leading-normal tracking-[0.04em]
  uppercase
  text-teal
`;
const Results = tw.div``;
const ResultsGrid = tw.div`
  grid
  grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4
  gap-x-[1.875em] gap-y-10 md:gap-y-12
`;
const MainNav = tw.nav`
  top-0 left-0
  w-full z-30
  h-20
  duration-500
  
`;
const Nav = tw.div`
  absolute inset-0 w-full h-full
  flex items-center lg:items-start
  gap-4
  justify-between
`;
const MobileNavButton = tw.button`
  block lg:hidden
`;
const MobileMenu = tw.div`
  w-full h-full
  fixed top-0 left-0
  // z-10
  duration-300 ease-in-out
  z-50
`;
const MobileNavList = tw.div`
  absolute top-0 left-0
  w-4/5 h-full overflow-scroll
  p-2.5 pb-5
  bg-[#000]
  flex flex-col gap-2.5
  lg:hidden
  // z-20
  z-50
`;
const NavCloseButton = tw.button`
  absolute top-2.5 right-2.5
  text-teal
`;
const NavList = tw.ul`
  lg:flex items-center gap-7 xl:gap-[50px]
  hidden
`;
const NavItem = tw.li`relative duration-300 ease-in-out`;
const NavLink = tw(Link)`
  font-oswald font-normal
  text-sm tracking-[0.04em]
  uppercase whitespace-nowrap
  text-white
  absolute top-1/2 -translate-y-1/2 left-0
  lg:static
`;
const NavInput = tw.div`
  // flex
  items-center gap-2.5
  font-oswald font-normal
  text-sm tracking-[0.04em]
  uppercase
  text-white
`;
const SearchDiv = tw.div`
  w-full grow py-1
  items-center gap-2.5
  border-b border-[#555]
`;
const SearchInput = tw.input`
  grow w-full bg-transparent
  font-oswald font-normal
  text-sm leading-normal tracking-[0.04em]
  text-white uppercase
  focus:outline-0
  placeholder:text-[#7c7c7c]
  placeholder:normal-case
`;
const SearchIcon = tw.img``;

const MobileNavContact = tw.div`
  flex flex-col gap-2.5
  mt-2.5
`;
const NavContact = tw.div`
  mt-6
  flex-col items-end
`;
const FixedNavLogo = tw(Link)`
  font-cormorant font-light
  text-xl leading-[1.2] tracking-[0.2em]
  uppercase text-center
  text-white
  lg:hidden
`;
const FixedNavContact = tw.div`
  items-center gap-5
  mt-0.5
`;
const ContactBlock = tw.div`
  lg:first:mb-[1.625em]
  lg:text-right
  duration-300 ease-in-out
`;
const ContactTitle = tw.h6`
  font-oswald font-normal
  text-sm tracking-[0.1em]
  uppercase
  text-teal
  mb-1
`;
const ContactDescr = tw.p`
  font-oswald font-light
  text-[10px] leading-[1.5] tracking-[0.1em]
  uppercase
  text-white
`;
const NavSocial = tw.div`
  rounded-[10px]
  mt-2.5 lg:mt-[3.75em]
  lg:py-5 lg:px-[1.125em]
  flex lg:flex-col gap-5
  lg:bg-[#000]/20
  lg:backdrop-blur-[10px]
`;
const SocialLink = tw.a``;
const SocialIcon = tw.img``;
const NavPhone = tw.div`
  mt-44
`;
const NavButtonButLink = tw.a`
  items-center gap-2.5
  rounded-[10px]
  px-5 py-2.5
  font-oswald font-normal
  text-sm tracking-[0.1em]
  uppercase
  text-teal
  bg-[#000]/20
  backdrop-blur-[10px]
  whitespace-nowrap
`;
const CartButton = tw.button`
  relative
  p-4
  rounded-[10px]
  bg-[#000]/20
  backdrop-blur-[10px]
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


export default Navbar;