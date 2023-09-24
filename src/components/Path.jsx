import { useInView } from 'react-intersection-observer';
import { Link } from 'react-router-dom';

import tw from "twin.macro";

const Path = ({ path, pathName = 'path' }) => {
  const { ref, inView } = useInView({
    threshold: .75,
    triggerOnce: true,
  })
  const pathList = path.split(',');
  const pathNameList = pathName.split(',')

  return (
    <P ref={ref}>
      <Link to='/' className={`duration-500 block ease-in-out ${inView ? 'translate-x-0 opacity-100' : 'translate-x-4 opacity-0'}`}>
        Главная</Link>
      {pathList.map((item, index) => {
        {/* const delay = index * 150 + 150; */ }
        return (
          <span className={`duration-500 block ease-in-out ${index === 0 ? 'delay-100' : index === 1 ? 'delay-200' : 'delay-300'} ${inView ? 'translate-x-0 opacity-100' : 'translate-x-4 opacity-0 delay-0'}`}>
            {' '}/{' '}
            <Link to={item}>{pathNameList[index]}</Link>
          </span>
        )
      })
      }
    </P>
  )
}

const P = tw.p`
  font-oswald font-normal
  text-xs leading-normal tracking-[0.04em]
  uppercase
  text-white
  flex gap-1
`;

export default Path;