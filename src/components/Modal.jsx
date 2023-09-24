import tw from "twin.macro";

const Modal = ({ children, className = '', state = false, stateFunc = () => console.log('fisg') }) => {
  return (
    <ModalDiv className={`${className} ${state ? 'flex' : 'hidden'}`} onClick={() => {
      stateFunc(false);
      document.body.classList.remove('no-scrollbar');
    }}>
      <ModalContent>
        {children}
      </ModalContent>
    </ModalDiv>
  )
}

const ModalDiv = tw.div`
  before:content-['✕']
  before:absolute
  before:text-white
  before:top-10 before:right-10
  before:cursor-pointer
  before:w-10 before:aspect-square
  before:flex before:justify-center before:items-center
  fixed top-0 left-0
  w-full h-[100vh]
  px-20 py-10 bg-[#000]/80
  z-20
  justify-center items-center
  `;
const ModalContent = tw.div`
  bg-black/20
  p-5 h-full
  overflow-hidden
  cursor-zoom-out
`;

export default Modal;