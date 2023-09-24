import tw from "twin.macro"

const Container = ({ children, className = '' }) => {
  return (
    <Cont className={className}>
      {children}
    </Cont>
  )
}

const Cont = tw.div`
  relative
  max-w-[95%]
  md:max-w-[90%]
  lg:max-w-[85%]
  xl:max-w-[80%]
  mx-auto
`;

export default Container;