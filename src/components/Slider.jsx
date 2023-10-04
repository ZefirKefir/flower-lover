import { useRef } from "react";
import { useInView } from "react-intersection-observer";
import tw from "twin.macro"

const Slider = ({ children, className, mobile = false }) => {
  const ref = useRef();
  const { ref: arrowRef, inView } = useInView({
    threshold: 1,
    triggerOnce: true,
    rootMargin: '0px 0px -80px 0px',
  });

  const scroll = (direction) => {
    const { current } = ref;
    if (direction === 'left') {
      current.scrollLeft -= 250;
    } else {
      current.scrollLeft += 250;
    }
  };
  return (
    <ProductSlider className={mobile ? `[&>:nth-child(1)]:hidden md:[&>:nth-child(1)]:flex md:md:[&>:nth-child(2)]:hidden ${className}` : className}>
      {/* pc */}
      <div className="flex justify-between w-full h-full px-16">
        <LeftLongArrow className={inView ? 'translate-y-0 opacity-100' : '-translate-y-8 opacity-0'} onClick={() => scroll('left')} ref={arrowRef} />
        <SliderContainer ref={ref} className={`clip-10 no-scrollbar`}>
          {children}
        </SliderContainer>
        <RightLongArrow className={inView ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'} onClick={() => scroll('right')} />
      </div>
      {/* mobile */}
      {mobile ? (
        <SliderContainer className={`clip-10 no-scrollbar`}>
          {children}
        </SliderContainer>
      ) : ''}
    </ProductSlider>
  )
}

const ProductSlider = tw.div``;
const Arrow = tw.button`
  relative
  mt-[18.5%]
  h-px
  py-4
  before:content-['']
  before:absolute
  before:w-0 before:h-0
  after:content-['']
  after:h-px
  after:bg-teal
  after:absolute
  after:top-1/2 after:-translate-y-1/2
  after:left-0
  duration-500 ease-in-out
`;
const LeftLongArrow = tw(Arrow)`
  w-[80px] after:w-full
  ml-1.5 mr-5
  before:border-l-[3px] before:border-l-transparent
  before:border-r-[6px] before:border-r-teal
  before:border-b-[3px] before:border-b-transparent
  before:left-0 before:top-1/2
  before:-translate-y-1/2
`;
const RightLongArrow = tw(Arrow)`
  w-[80px] after:w-full
  mr-1.5 ml-2.5
  before:border-t-[3px] before:border-t-transparent
  before:border-l-[6px] before:border-l-teal
  before:border-b-[3px] before:border-b-transparent
  before:right-0 before:top-1/2
  before:-translate-y-1/2
`;
const SliderContainer = tw.div`
  pt-[15px] px-2.5
  md:pt-[10px] md:pr-[10px]
  relative
  w-full h-full
  flex items-stretch
  gap-[30px]
  flex-col md:flex-row
  snap-x snap-mandatory
  scroll-smooth
  overflow-scroll
  // bg-white
`;

export default Slider;