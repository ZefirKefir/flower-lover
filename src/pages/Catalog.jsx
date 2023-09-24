import tw from "twin.macro";

import Navbar from "../components/sections/Navbar";
import Footer from "../components/sections/Footer";
import Catalogue from "../components/sections/Catalogue";
import ScrollToTop from "../components/ScrollToTop";

const Catalog = () => {
  return (
    <>
      <ScrollToTop />
      <Navbar landing />
      <Main>
        <Catalogue />
      </Main>
      <Footer />
    </>
  )
}
const Main = tw.main`relative overflow-hidden`;

export default Catalog;