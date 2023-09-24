import { useInView } from "react-intersection-observer";
import tw from "twin.macro";
import data from "../constants/data";
import Stars from "./Stars";

const Review = ({ text = '', stars = 0, name = '', date = new Date(0), }) => {
  const { ref, inView } = useInView({
    threshold: .85,
    triggerOnce: true,
    rootMargin: '-40px 0px',
  });

  return (
    <Rev ref={ref} className={inView ? 'translate-x-0 opacity-100' : 'translate-x-8 opacity-0'}>
      <ReviewText>{text}</ReviewText>
      <Stars amount={stars} />
      <ReviewGray>
        {name},{' '}
        <span className="tracking-[0.01em]">
          {date.getDate().toString().length === 1 ? '0' + date.getDate() : date.getDate()}/
          {date.getMonth().toString().length === 1 ? '0' + (date.getMonth() + 1) : (date.getMonth() + 1)}/
          {date.getFullYear()}
        </span>
      </ReviewGray>
    </Rev>
  )
};

const Rev = tw.div`
  relative mb-20 last:mb-0
  before:content-['“']
  before:font-oswald before:font-normal
  before:text-3xl before:leading-normal before:tracking-[0.02em]
  before:text-teal
  before:absolute before:-translate-y-[calc(100%-0.5rem)]
  duration-500 ease-in-out
`;
const ReviewText = tw.p`
  w-[47.5%] mb-2.5
  font-oswald font-normal
  text-base leading-normal tracking-[0.02em]
  text-white
`;
const ReviewGray = tw.p`
  mt-2.5
  font-oswald font-normal
  text-sm leading-normal tracking-[0.02em]
  text-[#555]
`;

export default Review;