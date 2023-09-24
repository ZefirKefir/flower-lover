import tw from "twin.macro"

const ButtonOutlined = ({ children, pX = '5.875rem', wide = false, className = '', onClick = () => console.log('fini') }) => {
  return (
    <Button onClick={onClick} className={className}
      style={wide ? { width: '100%' } : { paddingLeft: pX, paddingRight: pX, }}>
      {children}
    </Button>
  )
}

const Button = tw.button`
  block
  py-4
  border-[.5px] border-white
  font-oswald font-bold
  text-xs leading-[1.5] tracking-[0.1em]
  uppercase whitespace-nowrap
  text-white hover:text-black
  hover:bg-teal hover:border-none
  focus:outline-teal
  active:shadow-inner
  duration-300
`;

export default ButtonOutlined;