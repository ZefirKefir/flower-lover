import { useInView } from "react-intersection-observer";
import tw from "twin.macro"

const ListItem = ({ children, className = '' }) => {
  const { ref, inView } = useInView({
    threshold: .8,
    triggerOnce: true,
    rootMargin: '-20px 0px',
  });

  return (
    <Item ref={ref}
      className={`${inView ? 'translate-x-0 opacity-100' : 'translate-x-10 opacity-0'} ${className} duration-500 ease-in-out`}>{children}</Item>
  )
}

const Item = tw.li`
  font-oswald font-light
  text-sm md:text-xl leading-normal tracking-[0.02em]
  uppercase
  text-white
  relative pl-8
  before:content-['•']
  before:w-7 before:h-7
  before:absolute
  before:top-0 before:left-0
  before:flex before:justify-center before:items-center
  // before:bg-pink-900
`;

export default ListItem;