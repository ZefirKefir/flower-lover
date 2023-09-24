import React from "react";
import { useInView } from "react-intersection-observer";
import tw from "twin.macro";

const GridX4 = ({ children, className = '', square = false }) => {
  const childs = React.Children.toArray(children);

  const { ref, inView } = useInView({
    threshold: .5,
    triggerOnce: true,
  });

  return (
    <Grid ref={ref} className={`${className.includes('flex') ? '' : 'flex'} ${className}`}>
      {childs.map((item, i) => (
        <GridItem className={`
          ${square ? 'aspect-square' : 'aspect-[5/4]'}
          ${inView ?
            i === 0 ? 'translate-x-0 opacity-100' :
              i === 1 ? 'delay-100 translate-x-0 opacity-100' :
                i === 2 ? 'delay-200 translate-x-0 opacity-100' :
                  i === 3 ? 'delay-300 translate-x-0 opacity-100' : '' :
            'translate-x-8 opacity-0'}
        `}>{item}</GridItem>
      ))}
    </Grid>
  )
}

const Grid = tw.div`
  // grid grid-cols-4 gap-x-[1.875em]
  justify-center gap-[1.875em]
  flex-wrap ll:flex-nowrap
`;
const GridItem = tw.div`
  basis-[12.5rem] md:basis-[15.9375rem]
  ll:grow
  shrink-0 md:shrink lg:shrink-0 ll:shrink
  pt-5 pb-[1.875em] px-4 md:px-8
  bg-[#000]/30 backdrop-blur-[20px]
  rounded-[20px]
  flex flex-col items-center justify-center
  duration-500 ease-in-out
`;

export default GridX4;