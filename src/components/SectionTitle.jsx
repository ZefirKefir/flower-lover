import tw from "twin.macro"
import { useInView } from "react-intersection-observer";


const SectionTitle = ({ children, className = '', nextClassName = '' }) => {
  const { ref, inView } = useInView({
    threshold: .8,
    triggerOnce: true,
    rootMargin: '-30px 0px',
  });
  const childClassName = nextClassName.split(',');
  return (
    <Title ref={ref} className={className}>
      <>
        {children.length ? (
          children.map((child, idx) => (
            idx === 0 ? <Span className={`${inView ? 'translate-x-0 opacity-100' : '-translate-x-10 opacity-0'} ${childClassName[0] ? childClassName[0] : 'block'}`}>{child}</Span> :
              idx === 1 ? <Span className={`delay-200 ${inView ? 'translate-x-0 opacity-100' : '-translate-x-10 opacity-0'} ${childClassName[1] ? childClassName[1] : 'block'}`}>{child}</Span> :
                <Span className={`delay-[.4s] ${inView ? 'translate-x-0 opacity-100' : '-translate-x-10 opacity-0'} ${childClassName[2] ? childClassName[2] : 'block'}`}>{child}</Span>
          ))
        ) : (
          <Span className={`${inView ? 'translate-x-0 opacity-100' : '-translate-x-10 opacity-0'} ${childClassName[0] ? childClassName[0] : 'block'}`}>{children}</Span>
        )}
      </>
    </Title>
  )
}

const Title = tw.h1`
  font-cormorant font-normal
  text-[2.5rem] lg:text-[6.25rem] leading-[1.1] tracking-[0.02em]
  uppercase
  text-white
`;
const Span = tw.span`duration-500 ease-in-out`;

export default SectionTitle;