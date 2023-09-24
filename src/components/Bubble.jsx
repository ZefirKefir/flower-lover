import tw from "twin.macro";

const Bubble = ({ className, animationDelay = 0 }) => {
  return (
    <Div style={{ animationDelay: animationDelay }} className={className} />
  )
}

const Div = tw.div`
  
  animate-header-leftsided
`;

export default Bubble;