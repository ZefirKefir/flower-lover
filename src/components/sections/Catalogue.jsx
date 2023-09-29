import { useState } from "react";
import tw from "twin.macro";

import { useSelector, useDispatch } from "react-redux";
import { addCategory, removeCategory, resetFilter, } from "../../redux-toolkit/reducers/filterSlice";

import Container from "../Container";
import Path from "../Path";
import SectionTitle from "../SectionTitle";
import Checkbox from "../Checkbox";
import DoubleSlider from "../DoubleSlider";
import ProductCard from "../ProductCard";

import { IoCloseOutline, IoCaretDown } from 'react-icons/io5';

import data from "../../constants/data";
import images from "../../constants/images";
import { addToList, clearList } from "../../redux-toolkit/reducers/listSlice";
import Radio from "../Radio";
import { useInView } from "react-intersection-observer";
import SelectedItem from "../SelectedItem";
import NoRes from "../NoRes";

const idList = ['FMAA1S', 'BQZ9W8', 'Y1JB95', 'HFVARV', 'T13DST', '063NYB', 'P2YRDJ', 'KIMC7C', 'X65GJL', 'FW72RE', 'GUEHRY', 'CMD3M2', '1K7JAC', 'UDKGTR', '7M3XV3', 'EP3V1I', 'EZ0M04', 'A2OVVU', 'XDIN8H', 'HSUWQ8', 'ID2QR5', 'PS20OX', 'FFX3CW', '9VBO6O', 'WS4T8X', '596EQ0', '56DTQA', 'BY2GLE', '0WXWZP', 'TYASS3', 'WYSAUF', 'D1T71U', '4BZZQQ', '9FN7L6', 'NZ8ZYT', '64K8GK', 'HP12HI', 'O5RCN9', 'ERXPB8', '87B0V0', 'L4U579', '4L5QFC', '4JC6FM', 'AA1SBQ', 'Z9W8Y1', 'JB95HF', 'VARVT1', '3DST06', '3NYBP2', 'YRDJKI', 'MC7CX6', '5GJLFW', '72REGU', 'EHRYCM'];

const Catalogue = () => {
  const [sortBy, setSortBy] = useState(localStorage.getItem('sortBy') || 'по популярности');
  const [showDropdown, setShowDropdown] = useState(false);
  // mob dropdowns
  const [showMobFilters, setShowMobFilters] = useState(false);
  const [showMobSortBy, setShowMobSortBy] = useState(false);
  const [showMobCategories, setShowMobCategories] = useState(false);

  // inView
  const { ref: textRef, inView: textInView } = useInView({
    threshold: .75,
    triggerOnce: true,
  });
  const { ref: catRef, inView: catInView } = useInView({
    threshold: .25,
    triggerOnce: true,
  });
  const { ref: filtersRef, inView: filtersInView } = useInView({
    threshold: .1,
    triggerOnce: true,
  });
  const { ref: sortRef, inView: sortInView } = useInView({
    threshold: .65,
    triggerOnce: true,
  });
  const { ref: mobRef, inView: mobInView } = useInView({
    threshold: .65,
    triggerOnce: true,
  });
  const { ref: backRef, inView: backInView } = useInView({
    threshold: .25,
    triggerOnce: true,
  });
  const { ref: noResultsRef, inView: noResultsInView } = useInView({
    threshold: .4,
    triggerOnce: true,
  });

  const dispatch = useDispatch();

  const productsList = Array.from(data.products);
  // categories
  const { categories } = useSelector(state => state.filter);
  const list = [];
  const tempList = [];
  // dispatch(clearList());no need in this i guess
  // if no categories chosen then leave the idList as it was, if there ARE some cat.s then do shinanigans
  categories.length === 0 ? idList.map(item => list.push(item)) :
    productsList.map(item => categories.map(cat => (item.categories?.includes(cat) && !list.includes(item.id)) ? list.push(item.id) : ''));


  // shades (lightness)
  const { shades } = useSelector(state => state.filter);
  Array.from(productsList.filter(item => list.includes(item.id))).map(item => tempList.push(item));
  list.length = 0;
  shades.length === 0 ? tempList.map(item => list.push(item.id)) :
    tempList.map(item => shades.map(shade => (item.categories?.includes(shade) && !list.includes(item.id)) ? list.push(item.id) : ''));

  // colors
  const { colors } = useSelector(state => state.filter);
  tempList.length = 0;
  Array.from(productsList.filter(item => list.includes(item.id))).map(item => tempList.push(item));
  list.length = 0;
  colors.length === 0 ? tempList.map(item => list.push(item.id)) :
    tempList.map(item => colors.map(color => (item.categories?.includes(color) && !list.includes(item.id)) ? list.push(item.id) : ''));

  // format
  const { format } = useSelector(state => state.filter);
  tempList.length = 0;
  Array.from(productsList.filter(item => list.includes(item.id))).map(item => tempList.push(item));
  list.length = 0;
  format.length === 0 ? tempList.map(item => list.push(item.id)) :
    tempList.map(item => format.map(tamrof => (item.format === tamrof && !list.includes(item.id)) ? list.push(item.id) : ''));

  // price segment
  let minimum = Array.from(productsList).sort((a, b) => a.price - b.price)[0]?.price;
  let maximum = Array.from(productsList).sort((a, b) => b.price - a.price)[0]?.price;
  const [values, setValues] = useState(localStorage.getItem('priceSegment')?.split(',') || [minimum, maximum]);

  tempList.length = 0;
  Array.from(productsList.filter(item => list.includes(item.id))).map(item => tempList.push(item));
  list.length = 0;
  tempList.map(item => (item.price >= values[0] && item.price <= values[1]) ? list.push(item.id) : '')

  // by flowers
  const { flowers } = useSelector(state => state.filter);
  tempList.length = 0;
  Array.from(productsList.filter(item => list.includes(item.id))).map(item => tempList.push(item));
  list.length = 0;
  flowers.length === 0 ? tempList.map(item => list.push(item.id)) :
    tempList.map(item => flowers.map(flower => (item.flowers_id?.includes(flower) && !list.includes(item.id)) ? list.push(item.id) : ''));

  // sort
  tempList.length = 0;
  Array.from(productsList.filter(item => list.includes(item.id))).map(item => tempList.push(item));
  sortBy === 'по популярности' ? tempList.sort((a, b) => b.rating - a.rating) :
    sortBy === 'сначала дорогие' ? tempList.sort((a, b) => b.price - a.price) :
      sortBy === 'сначала дешёвые' ? tempList.sort((a, b) => a.price - b.price) : '';
  list.length = 0;
  tempList.map(item => list.push(item.id));


  const scrollToFirst = () => {
    window.scrollTo({
      top: 610,
      left: 0,
      behavior: 'smooth',
    });
  }

  const removeCat = (name) => {
    const found = document.querySelector('.selected').querySelector(`button[datatype*=${name}]`);


    found.classList.remove('opacity-100');
    found.classList.add('opacity-0');
    found.classList.add('-translate-y-4')

    setTimeout(() => {
      dispatch(removeCategory(name));
    }, 150)
  }

  return (
    <Section>
      <div className='absolute rounded-full blur-[125px] animate-leftsided w-[360px] h-[500px] top-[-11.5em] md:top-[17.5em] left-[-18.5em] md:left-[-5%] bg-pink-800 rotate-[-43.21deg]' />
      <div className='absolute hidden md:block rounded-full blur-[125px] animate-bubble-left-slow w-[360px] h-[500px] top-[25em] left-[-5%] bg-pink-800 rotate-[-43.21deg]' />
      <div className='absolute hidden md:block rounded-full blur-[125px] animate-bubble-right-slow w-[280px] h-[390px] top-[-3em] right-[-5%] bg-pink-800 rotate-[-43.21deg]' />
      <div className='absolute hidden md:block rounded-full blur-[125px] animate-leftsided w-[255px] h-[435px] top-[35em] right-[12.5%] bg-pink-800 rotate-[-43.21deg]' />
      <div className='absolute hidden md:block rounded-full blur-[125px] animate-leftsided w-[500px] h-[173px] top-[80em] left-[-10%] bg-teal rotate-[-43.21deg]' />
      <div className='absolute rounded-full blur-[125px] animate-bubble-left-slow w-[100px] h-[200px] -bottom-[10em] -left-[0%] bg-teal rotate-[21.1deg]' />
      <div className='absolute rounded-full blur-[125px] animate-bubble-right-slow w-[800px] h-[200px] -bottom-[22.5em] left-[42.5%] bg-teal rotate-[21.1deg]' />
      <div className='absolute rounded-full blur-[125px] animate-bubble-right-slow w-[360px] h-[350px] -bottom-[15em] -right-[5%] bg-pink-800 rotate-[32.83deg]' />
      <LeftBack ref={backRef} className={`duration-500 ease-in-out
        ${backInView ? 'translate-x-0 opacity-100' : '-translate-x-12 opacity-0'}
      `} src={images.red} />
      <RightBack className={`duration-500 ease-in-out
        ${backInView ? 'translate-x-0 opacity-100' : 'translate-x-12 opacity-0'}
      `} src={images.red} />
      <Container>
        <Path path='/catalog' pathName='Каталог' />
        <TitleBlock>
          <SectionTitle>
            каталог
            <span className="block ml-16 sm:ml-24 md:ml-32 lg:ml-64">букетов</span>
          </SectionTitle>
          <Text ref={textRef} className={`duration-500 ease-in-out ${textInView ? 'translate-x-0 opacity-100' : 'translate-x-6 opacity-0'}`}>В нашем магазине самый большой выбор букетов для любых событий:</Text>
          <Categories ref={catRef} className="hidden md:flex">
            {data.categories.map((item, index) => (
              <Category key={index}
                className={`
                  ${categories.includes(item.name) ? 'bg-teal text-black delay-0' : 'text-white border-[0.5px] border-white delay-0'}
                  duration-300 ease-in-out ${catInView ? `translate-x-0 opacity-100}` : `translate-x-4 opacity-0`}
                `}
                onClick={() => categories.includes(item.name) ? removeCat(item.name) : dispatch(addCategory(item.name))}
              >
                {item.displayName}
              </Category>
            )
            )}
          </Categories>
        </TitleBlock>
        <MainBlock className='main_block'>
          <MobileFilters>
            <MobileFilterButton className={`duration-300 ease-in-out
              ${showMobFilters ? 'text-teal' : 'text-pink-300'}
              ${mobInView ? 'translate-x-0 opacity-100' : '-translate-x-4 opacity-0'}  
            `} onClick={() => setShowMobFilters(!showMobFilters)}>
              фильтр товаров
              <IoCaretDown size={14} className={`transition-all duration-200 ${showMobFilters ? '-scale-y-100' : ''}`} />
            </MobileFilterButton>
            <Filters action="#" className={`
              duration-300 ease-in-out origin-top
              ${showMobFilters ? 'pt-5 pb-[1.875rem] scale-y-100 opacity-100 h-full' : 'scale-y-0 opacity-0 h-0'}
              `}>
              <Filter>
                <FilterTitle>По свету</FilterTitle>
                <div className="flex flex-col gap-[5px]">
                  <Checkbox theme='shades' name='soft' displayName='нежные' />
                  <Checkbox theme='shades' name='light' displayName='яркие' />
                </div>
              </Filter>
              <Filter>
                <FilterTitle>По цвету</FilterTitle>
                <div className="flex flex-col gap-[5px]">
                  <Checkbox theme="colors" name='white' displayName='белый' />
                  <Checkbox theme="colors" name='yellow' displayName='желтый' />
                  <Checkbox theme="colors" name='green' displayName='зелёный' />
                  <Checkbox theme="colors" name='red' displayName='красный' />
                  <Checkbox theme="colors" name='orange' displayName='оранжевый' />
                  <Checkbox theme="colors" name='pink' displayName='розовый' />
                  <Checkbox theme="colors" name='blue' displayName='синий' />
                  <Checkbox theme="colors" name='violet' displayName='фиолетовый' />
                  <Checkbox theme="colors" name='mixed' displayName='смешано' />
                </div>
              </Filter>
              <Filter>
                <FilterTitle>По формату</FilterTitle>
                <div className="flex flex-col gap-[5px]">
                  <Checkbox values={values} setValues={setValues} theme="format" name='bouquet' displayName='букет' />
                  <Checkbox values={values} setValues={setValues} theme="format" name='vase' displayName='в горшке' />
                  <Checkbox values={values} setValues={setValues} theme="format" name='envelope' displayName='в конверте' />
                  <Checkbox values={values} setValues={setValues} theme="format" name='basket' displayName='в корзине' />
                  <Checkbox values={values} setValues={setValues} theme="format" name='hatbox' displayName='в шляпной коробке' />
                  <Checkbox values={values} setValues={setValues} theme="format" name='box' displayName='в ящике' />
                </div>
              </Filter>
              <Filter>
                <FilterTitle>стоимость</FilterTitle>
                <DoubleSlider currency='₽' title='Цена'
                  values={values} setValues={setValues}
                  min={minimum} max={maximum}
                />
              </Filter>
              <Filter>
                <FilterTitle>по цветку</FilterTitle>
                <div className='max-h-[10rem] custom-scrollbar flex flex-col gap-[5px]'>
                  {data.flowers.sort((a, b) => a.name.localeCompare(b.name)).map(flower => (
                    <Checkbox theme="flowers" name={flower.id} displayName={flower.name}
                      amount={Array.from(productsList).filter(item => list.includes(item.id)).filter(item => item.flowers_id?.includes(data.flowers.find(item => item.name === flower.name).id)).length} />
                  ))}
                </div>
              </Filter>
              <ResetButton onClick={(e) => {
                e.preventDefault();
                dispatch(resetFilter());
                setValues([minimum, maximum]);
                scrollToFirst();
              }}>
                Сбросить фильтр
              </ResetButton>
            </Filters>
            <div ref={mobRef}>
              {/* <div className="h-40" /> */}
              <MobileFilterButton className={`duration-300 ease-in-out
                ${showMobSortBy ? 'text-teal' : 'text-pink-300'}
                ${mobInView ? 'translate-x-0 opacity-100 delay-150' : '-translate-x-4 opacity-0'}
              `} onClick={() => setShowMobSortBy(!showMobSortBy)}>
                сортировка товаров
                <IoCaretDown size={14} className={`transition-all duration-200 ${showMobSortBy ? '-scale-y-100' : ''}`} />
              </MobileFilterButton>
              <div className={`duration-300 origin-top flex flex-col gap-[5px] ${showMobSortBy ? 'h-full scale-y-100 opacity-100' : 'h-0 scale-y-0 opacity-0'}`}>
                <Radio name='по популярности' sortBy={sortBy} setSortBy={setSortBy} />
                <Radio name='сначала дорогие' sortBy={sortBy} setSortBy={setSortBy} />
                <Radio name='сначала дешёвые' sortBy={sortBy} setSortBy={setSortBy} className='mb-2.5' />
              </div>
              <MobileFilterButton className={`duration-300 ease-in-out
                ${showMobCategories ? 'text-teal' : 'text-pink-300'}
                ${mobInView ? 'translate-x-0 opacity-100 delay-300' : '-translate-x-4 opacity-0'}
              `} onClick={() => setShowMobCategories(!showMobCategories)}>
                Категории
                <IoCaretDown size={14} className={`transition-all duration-200 ${showMobCategories ? '-scale-y-100' : ''}`} />
              </MobileFilterButton>
            </div>
            <Categories className={`flex origin-top duration-300 ease-in-out
              ${showMobCategories ? 'h-full scale-y-100 opacity-100' : 'h-0 scale-y-0 opacity-0'}
            `}>
              {data.categories.map((item, index) => (
                <Category key={index}
                  className={categories.includes(item.name) ? 'bg-teal text-black' : 'text-white border-[0.5px] border-white'}
                  onClick={() => categories.includes(item.name) ? removeCat(item.name) : dispatch(addCategory(item.name))}
                >
                  {item.displayName}
                </Category>
              ))}
            </Categories>
          </MobileFilters>
          <Filters ref={filtersRef} action="#" className={`
            hidden md:block duration-500 ease-in-out
            ${filtersInView ? 'translate-x-0 opacity-100' : '-translate-x-10 opacity-0'}
          `}>
            <Filter>
              <FilterTitle>По свету</FilterTitle>
              <div className="flex flex-col gap-[5px]">
                <Checkbox theme='shades' name='soft' displayName='нежные' />
                <Checkbox theme='shades' name='light' displayName='яркие' />
              </div>
            </Filter>
            <Filter>
              <FilterTitle>По цвету</FilterTitle>
              <div className="flex flex-col gap-[5px]">
                <Checkbox theme="colors" name='white' displayName='белый' />
                <Checkbox theme="colors" name='yellow' displayName='желтый' />
                <Checkbox theme="colors" name='green' displayName='зелёный' />
                <Checkbox theme="colors" name='red' displayName='красный' />
                <Checkbox theme="colors" name='orange' displayName='оранжевый' />
                <Checkbox theme="colors" name='pink' displayName='розовый' />
                <Checkbox theme="colors" name='blue' displayName='синий' />
                <Checkbox theme="colors" name='violet' displayName='фиолетовый' />
                <Checkbox theme="colors" name='mixed' displayName='смешано' />
              </div>
            </Filter>
            <Filter>
              <FilterTitle>По формату</FilterTitle>
              <div className="flex flex-col gap-[5px]">
                <Checkbox values={values} setValues={setValues} theme="format" name='bouquet' displayName='букет' />
                <Checkbox values={values} setValues={setValues} theme="format" name='vase' displayName='в горшке' />
                <Checkbox values={values} setValues={setValues} theme="format" name='envelope' displayName='в конверте' />
                <Checkbox values={values} setValues={setValues} theme="format" name='basket' displayName='в корзине' />
                <Checkbox values={values} setValues={setValues} theme="format" name='hatbox' displayName='в шляпной коробке' />
                <Checkbox values={values} setValues={setValues} theme="format" name='box' displayName='в ящике' />
              </div>
            </Filter>
            <Filter>
              <FilterTitle>стоимость</FilterTitle>
              <DoubleSlider currency='₽' title='Цена'
                values={values} setValues={setValues}
                min={minimum} max={maximum}
              />
            </Filter>
            <Filter>
              <FilterTitle>по цветку</FilterTitle>
              <div className='max-h-[10rem] custom-scrollbar flex flex-col gap-[5px]'>
                {data.flowers.sort((a, b) => a.name.localeCompare(b.name)).map(flower => (
                  <Checkbox theme="flowers" name={flower.id} displayName={flower.name}
                    amount={Array.from(productsList).filter(item => list.includes(item.id)).filter(item => item.flowers_id?.includes(data.flowers.find(item => item.name === flower.name).id)).length} />
                ))}
              </div>
            </Filter>
            <ResetButton onClick={(e) => {
              e.preventDefault();
              dispatch(resetFilter());
              setValues([minimum, maximum]);
              scrollToFirst();
            }}>
              Сбросить фильтр
            </ResetButton>
          </Filters>
          <Main>
            <PreProductUI>
              <Selected className="selected">
                {data.categories.map((item, idx) => categories.includes(item.name) ? (
                  <SelectedItem datatype={item.name} idx={idx} onClick={() => removeCat(item.name)}>
                    {item.displayName}
                    <IoCloseOutline size={14} />
                  </SelectedItem>
                ) : <></>)}
              </Selected>
              <Sort ref={sortRef} className={`duration-500 ease-in-out ${sortInView ? 'translate-x-0 opacity-100' : 'translate-x-10 opacity-0'}`}>
                <SortByButton className="hidden md:flex" onClick={() => setShowDropdown(!showDropdown)}>
                  {sortBy}
                  <IoCaretDown size={14} />
                </SortByButton>
                <SortDropdown className={showDropdown ? 'scale-y-100 opacity-100' : 'scale-y-0 opacity-0'}>
                  <DropdownList>
                    <DropdownItem onClick={() => {
                      setSortBy('по популярности');
                      setShowDropdown(false);
                      localStorage.setItem('sortBy', 'по популярности');
                    }}>по популярности</DropdownItem>
                    <DropdownItem onClick={() => {
                      setSortBy('сначала дорогие');
                      setShowDropdown(false);
                      localStorage.setItem('sortBy', 'сначала дорогие');
                    }}>сначала дорогие</DropdownItem>
                    <DropdownItem onClick={() => {
                      setSortBy('сначала дешёвые');
                      setShowDropdown(false);
                      localStorage.setItem('sortBy', 'сначала дешёвые');
                    }}>сначала дешёвые</DropdownItem>
                  </DropdownList>
                </SortDropdown>
              </Sort>
            </PreProductUI>
            {list.length === 0 ?
              <NoRes /> : (

                <Products className="text-xl text-sky-300">
                  {list.map((id, i) => productsList.map(item => id === item.id ? (
                    <ProductCard id={item.id} style={{ transitionDelay: `${i % 3 * 150}ms` }} wide />
                  ) : ''))}
                </Products>
              )}
          </Main>
        </MainBlock>
      </Container>
    </Section>
  )
}

const Section = tw.div`
  pt-[115px] pb-[12.5em]
  w-full
`;
const LeftBack = tw.img`
  absolute
  rotate-[-20deg] sm:rotate-0
  w-[17.5em] sm:w-[27.5em] md:w-full
  top-[8.5em] sm:top-[3em] md:top-[-3.5em]
  left-[-6em] md:left-[-19em]
`;
const RightBack = tw.img`
  absolute
  w-[20em] sm:w-[35em] md:w-full
  top-5 sm:-top-4 md:top-10
  right-[-7em] sm:right-[-11.5em] md:right-[-25.5em]
  rotate-[-100deg] sm:rotate-[-79.24deg]
`;
const TitleBlock = tw.div`
  w-full lg:w-[83%]
  md:px-4 md:pt-4 md:pb-[1.875em]
  mt-5 md:mt-6 mb-[1.875em]
  md:bg-[#000]/30
  md:backdrop-blur-[20px]
  rounded-[20px]
`;
const Text = tw.p`
  mt-2.5 md:mt-0
  ml-16 sm:ml-24 md:ml-32 lg:ml-64 lg:max-w-[48.5%]
  md:mb-16
  font-oswald font-normal
  text-sm leading-normal tracking-[0.04em]
  uppercase
  text-white
`;
const MobileFilters = tw.div`
  md:hidden
  w-full
`;
const MobileFilterButton = tw.button`
  flex items-center gap-5
  font-oswald font-normal
  text-base tracking-[0.1em]
  uppercase
  mb-2.5 last:mb-0
`;
const MobSortBy = tw.div``;
const Categories = tw.div`
  gap-2.5 flex-wrap
`;
const Category = tw.button`
  py-2.5 px-4
  font-oswald font-normal
  text-xs leading-normal tracking-[0.04em]
  uppercase
  rounded-[40px]
`;

const MainBlock = tw.div`
  flex items-start gap-[1.875rem]
  flex-col md:flex-row
`;

const Filters = tw.form`
  md:mt-[50px]
  w-full md:w-[23%] shrink-0
  px-4 md:pt-5 md:pb-[1.875rem]
  bg-[#000]/30 backdrop-blur-[20px]
  rounded-[20px]
`;
const Filter = tw.div`mb-5`;
const FilterTitle = tw.h5`
  font-oswald font-bold
  text-sm leading-normal tracking-[0.04em]
  uppercase
  text-teal
  mb-2
`;
const Main = tw.div`w-full relative`;
const PreProductUI = tw.div`
  w-full mb-5
  flex justify-between items-end gap-[1.875rem]
`;
const Selected = tw.div`
  flex flex-wrap gap-6
`;
const Sort = tw.div`
  relative w-[30%]
  z-10
`;
const SortByButton = tw.button`
  w-full rounded-[10px]
  justify-between items-center gap-4
  pl-5 pr-4 py-3
  font-oswald font-light
  text-xs leading-normal tracking-[0.04em]
  uppercase whitespace-nowrap
  text-white
  bg-[#000]/20 backdrop-blur-[20px]
  // shadow
  shadow
  hover:shadow-md hover:shadow-black hover:scale-[1.01]
  active:shadow active:scale-100
  transition duration-200
`;
const SortDropdown = tw.div`
  absolute top-12 right-0 z-10
  w-full py-2
  bg-[#000]/50 backdrop-blur-[20px]
  rounded-[10px]
  origin-top ease-out duration-300
`;
const DropdownList = tw.ul`
  w-full
`;
const DropdownItem = tw.li`
  py-2 text-center
  font-oswald font-light
  text-xs leading-normal tracking-[0.04em]
  uppercase
  text-gray-300 hover:text-white
  cursor-pointer
  duration-300
`;
const Products = tw.div`
  grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3
  gap-x-[1.875rem] gap-y-[3.75rem]
`;
const ResetButton = tw.button`
  block w-full py-4
  border border-white
  font-oswald font-bold
  text-xs leading-normal tracking-[0.1em]
  uppercase
  text-white
`;

export default Catalogue;