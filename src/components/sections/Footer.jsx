import tw from "twin.macro";
import { Link } from 'react-router-dom';

import Container from "../Container"
import Logo from "../Logo";

import images from '../../constants/images';
import { useInView } from "react-intersection-observer";

const Footer = ({ className = '' }) => {
  const { ref, inView } = useInView({
    threshold: .5,
    triggerOnce: true,
  });
  // here!!
  return (
    <Foot ref={ref} className={className}>
      <Container>
        <FooterFlex>
          <Logo className={`mx-auto mb-7 md:hidden duration-500 ease-in-out ${inView ? 'translate-x-0 opacity-100' : '-translate-x-10 opacity-0'}`} large />
          <FooterAbout className={`order-5 md:order-1 origin-top duration-500 ease-in-out ${inView ? 'delay-500 md:delay-0 translate-x-0 opacity-100' : '-translate-x-10 opacity-0'}`}>
            <Logo className={`hidden mb-2 md:block ${inView ? 'visible' : 'invisible'}`} />
            <FooterTitle>REQUISITES</FooterTitle>
            <p className="mt-2.5">
              <FooterText>
                LLC «Ловефлове» 220035, Republic of Belarus, Minsk, st. Timiryazeva, 67/112 (room 11) УНП 193263781, р{'\ufeff'}{'\u002f'}{'\ufeff'}с BY55MTBK30120001093300096372 ЗАО «МТБанк», БИК MTBKBY22 220007, Minsk, st. Tolstogo
              </FooterText>
            </p>
          </FooterAbout>
          <FooterLinks className="order-1 md:order-2">
            <FooterTitleLink className={`duration-500 ease-in-out ${inView ? 'delay-100 translate-x-0 opacity-100' : '-translate-x-10 opacity-0'}`} to='/catalog'>Catalog</FooterTitleLink>
            <LinksList>
              <LinksItem className={`duration-500 ease-in-out ${inView ? 'delay-200 translate-x-0 opacity-100' : '-translate-x-10 opacity-0'}`}>
                <ALink href="#"><FooterText>Popular</FooterText></ALink>
              </LinksItem>
              <LinksItem className={`duration-500 ease-in-out ${inView ? 'delay-[.25s] translate-x-0 opacity-100' : '-translate-x-10 opacity-0'}`}>
                <ALink href="#"><FooterText>Dried Flowers</FooterText></ALink>
              </LinksItem>
              <LinksItem className={`duration-500 ease-in-out ${inView ? 'delay-300 translate-x-0 opacity-100' : '-translate-x-10 opacity-0'}`}>
                <ALink href="#"><FooterText>Rose Bouquets</FooterText></ALink>
              </LinksItem>
              <LinksItem className={`duration-500 ease-in-out ${inView ? 'delay-[.35s] translate-x-0 opacity-100' : '-translate-x-10 opacity-0'}`}>
                <ALink href="#"><FooterText>Flower Compositions</FooterText></ALink>
              </LinksItem>
              <LinksItem className={`duration-500 ease-in-out ${inView ? 'delay-[.4s] translate-x-0 opacity-100' : '-translate-x-10 opacity-0'}`}>
                <ALink href="#"><FooterText>Individual Bouquet</FooterText></ALink>
              </LinksItem>
              <LinksItem className={`duration-500 ease-in-out ${inView ? 'delay-[.45s] translate-x-0 opacity-100' : '-translate-x-10 opacity-0'}`}>
                <ALink href="#"><FooterText>Holiday Bouquet</FooterText></ALink>
              </LinksItem>
              <LinksItem className={`duration-500 ease-in-out ${inView ? 'delay-500 translate-x-0 opacity-100' : '-translate-x-10 opacity-0'}`}>
                <ALink href="#"><FooterText>Gift Package</FooterText></ALink>
              </LinksItem>
              <LinksItem className={`duration-500 ease-in-out ${inView ? 'delay-[.55s] translate-x-0 opacity-100' : '-translate-x-10 opacity-0'}`}>
                <ALink href="#"><FooterText>Balloons</FooterText></ALink>
              </LinksItem>
              <LinksItem className={`duration-500 ease-in-out ${inView ? 'delay-[.6s] translate-x-0 opacity-100' : '-translate-x-10 opacity-0'}`}>
                <ALink href="#"><FooterText>Postcards</FooterText></ALink>
              </LinksItem>
              <LinksItem className={`duration-500 ease-in-out ${inView ? 'delay-[.65s] translate-x-0 opacity-100' : '-translate-x-10 opacity-0'}`}>
                <ALink href="#"><FooterText>Envelopes</FooterText></ALink>
              </LinksItem>
            </LinksList>
          </FooterLinks>
          <FooterLinks className="order-2 hidden md:block md:order-3">
            <FooterTitle className={`duration-500 ease-in-out ${inView ? 'delay-[.15s] translate-x-0 opacity-100' : '-translate-x-10 opacity-0'}`}>Bouquet</FooterTitle>
            <LinksList>
              <LinksItem className={`duration-500 ease-in-out ${inView ? 'delay-[.25s] translate-x-0 opacity-100' : '-translate-x-10 opacity-0'}`}>
                <ALink href="#"><FooterText>for a girl</FooterText></ALink>
              </LinksItem>
              <LinksItem className={`duration-500 ease-in-out ${inView ? 'delay-300 translate-x-0 opacity-100' : '-translate-x-10 opacity-0'}`}>
                <ALink href="#"><FooterText>for a man</FooterText></ALink>
              </LinksItem>
              <LinksItem className={`duration-500 ease-in-out ${inView ? 'delay-[.35s] translate-x-0 opacity-100' : '-translate-x-10 opacity-0'}`}>
                <ALink href="#"><FooterText>for a wife</FooterText></ALink>
              </LinksItem>
              <LinksItem className={`duration-500 ease-in-out ${inView ? 'delay-[.4s] translate-x-0 opacity-100' : '-translate-x-10 opacity-0'}`}>
                <ALink href="#"><FooterText>for mom</FooterText></ALink>
              </LinksItem>
              <LinksItem className={`duration-500 ease-in-out ${inView ? 'delay-[.45s] translate-x-0 opacity-100' : '-translate-x-10 opacity-0'}`}>
                <ALink href="#"><FooterText>for colleague</FooterText></ALink>
              </LinksItem>
              <LinksItem className={`duration-500 ease-in-out ${inView ? 'delay-500 translate-x-0 opacity-100' : '-translate-x-10 opacity-0'}`}>
                <ALink href="#"><FooterText>for the boss</FooterText></ALink>
              </LinksItem>
              <LinksItem className={`duration-500 ease-in-out ${inView ? 'delay-[.55s] translate-x-0 opacity-100' : '-translate-x-10 opacity-0'}`}>
                <ALink href="#"><FooterText>for a daughter</FooterText></ALink>
              </LinksItem>
              <LinksItem className={`duration-500 ease-in-out ${inView ? 'delay-[.6s] translate-x-0 opacity-100' : '-translate-x-10 opacity-0'}`}>
                <ALink href="#"><FooterText>for children</FooterText></ALink>
              </LinksItem>
              <LinksItem className={`duration-500 ease-in-out ${inView ? 'delay-[.65s] translate-x-0 opacity-100' : '-translate-x-10 opacity-0'}`}>
                <ALink href="https://forhonorinfohub.com/" target="_blank"><FooterText>for honor ;)</FooterText></ALink>
              </LinksItem>
            </LinksList>
          </FooterLinks>
          <FooterHugeLinks className="order-3 md:order-4">
            <FooterTitleLink className={`duration-500 ease-in-out ${inView ? 'delay-200 translate-x-0 opacity-100' : 'translate-x-10 opacity-0'}`} to='/delment'>Delivery & Payment</FooterTitleLink>
            <FooterTitleLink className={`duration-500 ease-in-out ${inView ? 'delay-300 translate-x-0 opacity-100' : 'translate-x-10 opacity-0'}`} to='/aboutus'>About Us</FooterTitleLink>
            <FooterTitleLink className={`duration-500 ease-in-out ${inView ? 'delay-[.4s] translate-x-0 opacity-100' : 'translate-x-10 opacity-0'}`} to='/faq'>FAQ</FooterTitleLink>
            <FooterTitleLink className={`duration-500 ease-in-out ${inView ? 'delay-500 translate-x-0 opacity-100' : 'translate-x-10 opacity-0'}`} to='/contacts'>Contacts</FooterTitleLink>
            <FooterTitleLink className={`duration-500 ease-in-out ${inView ? 'delay-[.6s] translate-x-0 opacity-100' : 'translate-x-10 opacity-0'}`} href="#">for corporate clients</FooterTitleLink>
          </FooterHugeLinks>
          <FooterContact className="order-4 md:order-5">
            <div className="mt-2.5 mb-5 md:mt-0">
              <FooterSubtitleLink className={`duration-500 ease-in-out ${inView ? 'delay-100 translate-x-0 opacity-100' : 'translate-x-10 opacity-0'}`} href='mailto:zakaz@loverflower.by'>zakaz@loverflower.by</FooterSubtitleLink>
              <FooterDescr className={`duration-500 ease-in-out ${inView ? 'delay-200 translate-x-0 opacity-100' : 'translate-x-10 opacity-0'}`}>24/7 delivery by agreement with the operator</FooterDescr>
            </div>
            <div className="mb-5">
              <FooterSubtitleLink className={`duration-500 ease-in-out ${inView ? 'delay-300 translate-x-0 opacity-100' : 'translate-x-10 opacity-0'}`} href="#">Timiryazeva St. 67</FooterSubtitleLink>
              <FooterDescr className={`duration-500 ease-in-out ${inView ? 'delay-[.4s] translate-x-0 opacity-100' : 'translate-x-10 opacity-0'}`}>10:00 - 21:00<br />everyday</FooterDescr>
            </div>
            <div>
              <FooterSubtitleLink className={`duration-500 ease-in-out ${inView ? 'delay-500 translate-x-0 opacity-100' : 'translate-x-10 opacity-0'}`} href='tel:+375291136969'>+375 (29) 113-69-69</FooterSubtitleLink>
              <FooterDescr className={`duration-500 ease-in-out ${inView ? 'delay-[.6s] translate-x-0 opacity-100' : 'translate-x-10 opacity-0'}`}>receiving calls 24h a day</FooterDescr>
            </div>
            <SocialFlex>
              <a href="#" className={`duration-500 ease-in-out ${inView ? 'delay-[.7s] translate-x-0 opacity-100' : 'translate-x-10 opacity-0'}`}><img src={images.icons.insta} /></a>
              <a href="#" className={`duration-500 ease-in-out ${inView ? 'delay-[.75s] translate-x-0 opacity-100' : 'translate-x-10 opacity-0'}`}><img src={images.icons.whatsapp} /></a>
              <a href="#" className={`duration-500 ease-in-out ${inView ? 'delay-[.8s] translate-x-0 opacity-100' : 'translate-x-10 opacity-0'}`}><img src={images.icons.viber} /></a>
            </SocialFlex>
          </FooterContact>
        </FooterFlex>
      </Container>
    </Foot>
  )
}

const Foot = tw.footer`
  pt-[1.875em] pb-[3.75em]
  bg-[#000]
  overflow-hidden
`;
const FooterFlex = tw.div`
  flex justify-between
  flex-col md:flex-row
  items-center md:items-start
  text-center md:text-left
  gap-2.5 md:gap-4
`;
const FooterAbout = tw.div`
  max-w-[75%] md:max-w-[25%] lg:max-w-[22%]
  mt-10 md:mt-0
`;
const FooterTitle = tw.h5`
  font-oswald font-bold
  text-sm tracking-[0.04em]
  uppercase
  text-teal
`;
const FooterText = tw.span`
  font-oswald font-light
  text-xs tracking-[0.04em]
  uppercase
  text-white
`;
const FooterLinks = tw.div``;
const LinksList = tw.ul`
  mt-2.5
  hidden md:flex
  flex-col gap-1
`;
const LinksItem = tw.li``;
const ALink = tw.a``;
const FooterHugeLinks = tw.div`
  flex flex-col gap-2.5 md:gap-5
`;
const FooterTitleLink = tw(Link)`
  block
  font-oswald font-bold
  text-sm tracking-[0.04em]
  uppercase
  text-teal
  md:max-w-[10rem]
`;
const FooterContact = tw.div``;
const FooterSubtitleLink = tw.a`
  block mb-1.5
  font-oswald font-normal
  text-sm leading-normal tracking-[0.1em]
  uppercase
  text-teal
`;
const FooterDescr = tw.p`
  font-oswald font-light
  text-[0.625rem] leading-normal tracking-[0.1em]
  uppercase
  text-white
`;
const SocialFlex = tw.div`
  mt-10
  flex grow items-end gap-5
  justify-center md:justify-start
`;

export default Footer;