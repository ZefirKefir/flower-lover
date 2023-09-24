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
            <FooterTitle>реквизиты</FooterTitle>
            <p className="mt-2.5">
              <FooterText>
                ООО «Ловефлове» 220035, Республика Беларусь, г. Минск, ул. Тимирязева д. 67, комн. 112 (пом.11) УНП 193263781, р{'\ufeff'}{'\u002f'}{'\ufeff'}с BY55MTBK30120001093300096372 ЗАО «МТБанк», БИК MTBKBY22 220007, г. Минск, улица Толстого
              </FooterText>
            </p>
          </FooterAbout>
          <FooterLinks className="order-1 md:order-2">
            <FooterTitleLink className={`duration-500 ease-in-out ${inView ? 'delay-100 translate-x-0 opacity-100' : '-translate-x-10 opacity-0'}`} to='/catalog'>Каталог</FooterTitleLink>
            <LinksList>
              <LinksItem className={`duration-500 ease-in-out ${inView ? 'delay-200 translate-x-0 opacity-100' : '-translate-x-10 opacity-0'}`}>
                <ALink href="#"><FooterText>Популярное</FooterText></ALink>
              </LinksItem>
              <LinksItem className={`duration-500 ease-in-out ${inView ? 'delay-[.25s] translate-x-0 opacity-100' : '-translate-x-10 opacity-0'}`}>
                <ALink href="#"><FooterText>Сухоцветы</FooterText></ALink>
              </LinksItem>
              <LinksItem className={`duration-500 ease-in-out ${inView ? 'delay-300 translate-x-0 opacity-100' : '-translate-x-10 opacity-0'}`}>
                <ALink href="#"><FooterText>Букеты роз</FooterText></ALink>
              </LinksItem>
              <LinksItem className={`duration-500 ease-in-out ${inView ? 'delay-[.35s] translate-x-0 opacity-100' : '-translate-x-10 opacity-0'}`}>
                <ALink href="#"><FooterText>Композиции из цветов</FooterText></ALink>
              </LinksItem>
              <LinksItem className={`duration-500 ease-in-out ${inView ? 'delay-[.4s] translate-x-0 opacity-100' : '-translate-x-10 opacity-0'}`}>
                <ALink href="#"><FooterText>Индивидуальный букет</FooterText></ALink>
              </LinksItem>
              <LinksItem className={`duration-500 ease-in-out ${inView ? 'delay-[.45s] translate-x-0 opacity-100' : '-translate-x-10 opacity-0'}`}>
                <ALink href="#"><FooterText>Букет на праздник</FooterText></ALink>
              </LinksItem>
              <LinksItem className={`duration-500 ease-in-out ${inView ? 'delay-500 translate-x-0 opacity-100' : '-translate-x-10 opacity-0'}`}>
                <ALink href="#"><FooterText>Упаковка подарков</FooterText></ALink>
              </LinksItem>
              <LinksItem className={`duration-500 ease-in-out ${inView ? 'delay-[.55s] translate-x-0 opacity-100' : '-translate-x-10 opacity-0'}`}>
                <ALink href="#"><FooterText>Шары</FooterText></ALink>
              </LinksItem>
              <LinksItem className={`duration-500 ease-in-out ${inView ? 'delay-[.6s] translate-x-0 opacity-100' : '-translate-x-10 opacity-0'}`}>
                <ALink href="#"><FooterText>Открытки</FooterText></ALink>
              </LinksItem>
              <LinksItem className={`duration-500 ease-in-out ${inView ? 'delay-[.65s] translate-x-0 opacity-100' : '-translate-x-10 opacity-0'}`}>
                <ALink href="#"><FooterText>Конверты</FooterText></ALink>
              </LinksItem>
            </LinksList>
          </FooterLinks>
          <FooterLinks className="order-2 hidden md:block md:order-3">
            <FooterTitle className={`duration-500 ease-in-out ${inView ? 'delay-[.15s] translate-x-0 opacity-100' : '-translate-x-10 opacity-0'}`}>Букет</FooterTitle>
            <LinksList>
              <LinksItem className={`duration-500 ease-in-out ${inView ? 'delay-[.25s] translate-x-0 opacity-100' : '-translate-x-10 opacity-0'}`}>
                <Link href="#"><FooterText>для девушки</FooterText></Link>
              </LinksItem>
              <LinksItem className={`duration-500 ease-in-out ${inView ? 'delay-300 translate-x-0 opacity-100' : '-translate-x-10 opacity-0'}`}>
                <Link href="#"><FooterText>для мужчины</FooterText></Link>
              </LinksItem>
              <LinksItem className={`duration-500 ease-in-out ${inView ? 'delay-[.35s] translate-x-0 opacity-100' : '-translate-x-10 opacity-0'}`}>
                <Link href="#"><FooterText>для жены</FooterText></Link>
              </LinksItem>
              <LinksItem className={`duration-500 ease-in-out ${inView ? 'delay-[.4s] translate-x-0 opacity-100' : '-translate-x-10 opacity-0'}`}>
                <Link href="#"><FooterText>для мамы</FooterText></Link>
              </LinksItem>
              <LinksItem className={`duration-500 ease-in-out ${inView ? 'delay-[.45s] translate-x-0 opacity-100' : '-translate-x-10 opacity-0'}`}>
                <Link href="#"><FooterText>для коллеги</FooterText></Link>
              </LinksItem>
              <LinksItem className={`duration-500 ease-in-out ${inView ? 'delay-500 translate-x-0 opacity-100' : '-translate-x-10 opacity-0'}`}>
                <Link href="#"><FooterText>для начальника</FooterText></Link>
              </LinksItem>
              <LinksItem className={`duration-500 ease-in-out ${inView ? 'delay-[.55s] translate-x-0 opacity-100' : '-translate-x-10 opacity-0'}`}>
                <Link href="#"><FooterText>для дочки</FooterText></Link>
              </LinksItem>
              <LinksItem className={`duration-500 ease-in-out ${inView ? 'delay-[.6s] translate-x-0 opacity-100' : '-translate-x-10 opacity-0'}`}>
                <Link href="#"><FooterText>для детей</FooterText></Link>
              </LinksItem>
              <LinksItem className={`duration-500 ease-in-out ${inView ? 'delay-[.65s] translate-x-0 opacity-100' : '-translate-x-10 opacity-0'}`}>
                <Link href="#"><FooterText>для женщины</FooterText></Link>
              </LinksItem>
            </LinksList>
          </FooterLinks>
          <FooterHugeLinks className="order-3 md:order-4">
            <FooterTitleLink className={`duration-500 ease-in-out ${inView ? 'delay-200 translate-x-0 opacity-100' : 'translate-x-10 opacity-0'}`} to='/delment'>Доставка и оплата</FooterTitleLink>
            <FooterTitleLink className={`duration-500 ease-in-out ${inView ? 'delay-300 translate-x-0 opacity-100' : 'translate-x-10 opacity-0'}`} to='/aboutus'>О нас</FooterTitleLink>
            <FooterTitleLink className={`duration-500 ease-in-out ${inView ? 'delay-[.4s] translate-x-0 opacity-100' : 'translate-x-10 opacity-0'}`} to='/faq'>FAQ</FooterTitleLink>
            <FooterTitleLink className={`duration-500 ease-in-out ${inView ? 'delay-500 translate-x-0 opacity-100' : 'translate-x-10 opacity-0'}`} to='/contacts'>Контакты</FooterTitleLink>
            <FooterTitleLink className={`duration-500 ease-in-out ${inView ? 'delay-[.6s] translate-x-0 opacity-100' : 'translate-x-10 opacity-0'}`} href="#">для корпоративных клиентов</FooterTitleLink>
          </FooterHugeLinks>
          <FooterContact className="order-4 md:order-5">
            <div className="mt-2.5 mb-5 md:mt-0">
              <FooterSubtitleLink className={`duration-500 ease-in-out ${inView ? 'delay-100 translate-x-0 opacity-100' : 'translate-x-10 opacity-0'}`} href='mailto:zakaz@loverflower.by'>zakaz@loverflower.by</FooterSubtitleLink>
              <FooterDescr className={`duration-500 ease-in-out ${inView ? 'delay-200 translate-x-0 opacity-100' : 'translate-x-10 opacity-0'}`}>Доставка 24/7 по договоренности с оператором</FooterDescr>
            </div>
            <div className="mb-5">
              <FooterSubtitleLink className={`duration-500 ease-in-out ${inView ? 'delay-300 translate-x-0 opacity-100' : 'translate-x-10 opacity-0'}`} href="#">ул. Тимирязева 67</FooterSubtitleLink>
              <FooterDescr className={`duration-500 ease-in-out ${inView ? 'delay-[.4s] translate-x-0 opacity-100' : 'translate-x-10 opacity-0'}`}>10:00 до 21:00<br />без выходных</FooterDescr>
            </div>
            <div>
              <FooterSubtitleLink className={`duration-500 ease-in-out ${inView ? 'delay-500 translate-x-0 opacity-100' : 'translate-x-10 opacity-0'}`} href='tel:+375291136969'>+375 (29) 113-69-69</FooterSubtitleLink>
              <FooterDescr className={`duration-500 ease-in-out ${inView ? 'delay-[.6s] translate-x-0 opacity-100' : 'translate-x-10 opacity-0'}`}>прием звонков круглосуточно</FooterDescr>
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