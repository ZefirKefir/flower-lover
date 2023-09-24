import tw from "twin.macro";

import Header from "./components/sections/Header";
import Navbar from "./components/sections/Navbar";
import Catalog from "./components/sections/LandingCatalog";
import Popular from "./components/sections/Popular";
import OrderGuide from "./components/sections/OrderGuide";
import SpecialOccasion from "./components/sections/SpecialOccasion";
import AnyQuestions from "./components/sections/AnyQuestions";
import LandingSocial from "./components/sections/LandingSocial";
import Footer from "./components/sections/Footer";
import ScrollToTop from "./components/ScrollToTop";

function App() {
  return (
    <>
      <ScrollToTop />
      <Header>
        <Navbar landing logoLanding />
      </Header>
      <Main>
        <Catalog />
        <Popular />
        <OrderGuide />
        <SpecialOccasion />
        <AnyQuestions />
        <LandingSocial />
      </Main>
      <Footer />
    </>
  )
}
// \u+feff = zero width no break space
// [&>*:nth-child(n)]:... = selecting a specific child in tailwind

const Main = tw.main`
  overflow-hidden
`;

export default App;