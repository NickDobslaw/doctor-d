import React, {useState, useEffect} from "react";
import "./MobileApp.css";
import Carousel from "better-react-carousel";
import p1 from "../images/gallery/p3.jpg";
import p2 from "../images/gallery/p2(2).jpg";
import p3 from "../images/gallery/p3(2).jpg";
import p4 from "../images/gallery/p4(2).jpg";
import p5 from "../images/gallery/p5(2).jpg";
import p6 from "../images/gallery/p6.jpg";
import p7 from "../images/gallery/p7.jpg";
import p8 from "../images/gallery/p8.jpg";
import blackcraft from "../images/logos/blackcraft.png";
import tsau from "../images/logos/tsau.png";
import dwp from "../images/logos/dwp.png";
import drd from "../images/logos/drd.png";
import hm from "../images/logos/hm.png";
import nb from "../images/logos/nailbite.png";
import church from "../images/logos/church.png";
import stage from "../images/about/stage.jpg";
import doctor from "../images/about/doctor.jpg";
import fb from "../images/logos/fb.png";
import ig from "../images/logos/ig.png";
import cpmas from "../images/logos/cpmas.png";
import drdTrans from "../images/logos/drd-trans.png";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {
  faCameraRetro,
  faSitemap,
  faAddressCard,
  faLink,
} from "@fortawesome/free-solid-svg-icons";

function FadeInSection(props) {
  const [isVisible, setVisible] = React.useState(false);
  const domRef = React.useRef();
  React.useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => setVisible(entry.isIntersecting));
    });
    observer.observe(domRef.current);
  }, []);
  return (
    <div
      className={`fade-in-section ${isVisible ? "is-visible" : ""}`}
      ref={domRef}
    >
      {props.children}
    </div>
  );
}

export default function MobileApp() {
  return (
    <>
      <div className="wrapperMobile">
        <div className="sidebarMobile">
          <li>
            <a
              onClick={() => {
                document
                  .getElementById("page1")
                  .scrollIntoView({behavior: "smooth"});
              }}
              className="active"
            >
              <FontAwesomeIcon size="2xl" color="white" icon={faCameraRetro} />
            </a>
          </li>
          <li>
            <a
              onClick={() => {
                document
                  .getElementById("page2Mobile")
                  .scrollIntoView({behavior: "smooth"});
              }}
              className="active"
            >
              <FontAwesomeIcon size="2xl" color="white" icon={faSitemap} />
            </a>
          </li>
          <li>
            <a
              onClick={() => {
                document
                  .getElementById("home")
                  .scrollIntoView({behavior: "smooth"});
              }}
              className="active"
            >
              <img src={drd} alt="sidebar_picture" />
            </a>
          </li>
          <li>
            <a
              onClick={() => {
                document
                  .getElementById("page3")
                  .scrollIntoView({behavior: "smooth"});
              }}
              className="active"
            >
              <FontAwesomeIcon size="2xl" color="white" icon={faAddressCard} />
            </a>
          </li>
          <li>
            <a
              onClick={() => {
                document
                  .getElementById("page4")
                  .scrollIntoView({behavior: "smooth"});
              }}
              className="active"
            >
              <FontAwesomeIcon size="2xl" color="white" icon={faLink} />
            </a>
          </li>
        </div>
      </div>
      <div className="page-wrap-mobile">
        <div className="homepageMobile" id="home">
          <FadeInSection key="homepageFade">
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <img src={drdTrans} />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
          </FadeInSection>
        </div>
        <div id="page1">
          <FadeInSection key="page1Fade">
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <h1>PHOTOS</h1>
            <br />
            <Carousel cols={1} rows={1} gap={10} loop>
              <Carousel.Item>
                <a
                  href="https://www.instagram.com/p/CmH8dBCpCn2/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <img width="100%" src={p1} />
                </a>
              </Carousel.Item>
              <Carousel.Item>
                <a
                  href="https://www.instagram.com/p/ClzH0f2JTmV/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <img width="100%" src={p4} />
                </a>
              </Carousel.Item>
              <Carousel.Item>
                <a
                  href="https://www.instagram.com/p/Clw5mGSJYEp/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <img width="100%" src={p6} />
                </a>
              </Carousel.Item>
              <Carousel.Item>
                <a
                  href="https://www.instagram.com/p/CmDE54rJfSW/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <img width="100%" src={p2} />
                </a>
              </Carousel.Item>
              <Carousel.Item>
                <a
                  href="https://www.instagram.com/p/CmW1sb-pkvi/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <img width="100%" src={p5} />
                </a>
              </Carousel.Item>
              <Carousel.Item>
                <a
                  href="https://www.instagram.com/p/CmE5WRhJRLl/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <img width="100%" src={p3} />
                </a>
              </Carousel.Item>
            </Carousel>
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
          </FadeInSection>
        </div>
        <div id="page2Mobile">
          <FadeInSection key="page2Fade">
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <h1>ORGANIZATIONS</h1>
            <br />
            <div className="logoTableMobile">
              <div style={{display: "table", margin: "0 auto"}}>
                <a href="https://dannywimmerpresents.com/">
                  <img src={dwp}></img>
                </a>
                <a href="https://www.blackcraftcult.com/">
                  <img src={blackcraft}></img>
                </a>
              </div>
              <div style={{display: "table", margin: "0 auto"}}>
                <a href="https://www.thestrangeandunusual.com/">
                  <img src={tsau}></img>
                </a>
                <a href="https://www.nailbiteofficial.com/">
                  <img src={nb}></img>
                </a>
              </div>
              <div
                className="bottomLogosMobile"
                style={{display: "table", margin: "0 auto"}}
              >
                <a href="https://www.facebook.com/scsthechurch/">
                  <img src={church}></img>
                </a>
                <a href="https://www.facebook.com/hatemachinePA/">
                  <img src={hm}></img>
                </a>
              </div>
            </div>
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
          </FadeInSection>
        </div>
        <div className="aboutPage" id="page3">
          <FadeInSection key="page3Fade">
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <h1>ABOUT</h1>
            <div className="aboutPhotosMobile">
              <img src={stage} />
              <img src={doctor} />
            </div>
            <p className="paraAboutMobile">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris in
              dapibus felis. Integer efficitur dui a suscipit feugiat.
              Suspendisse quis mauris quis lacus luctus eleifend. Sed eu orci
              egestas, imperdiet lectus ut, egestas nunc. Integer semper rhoncus
              magna nec pharetra. Phasellus eu arcu ac ex finibus mattis ut sit
              amet libero. Aenean commodo, lacus porta ullamcorper molestie,
              ligula libero semper diam, eget suscipit ex ex a est. Morbi ac
              tellus lacus. Nulla fermentum arcu ac ultricies fermentum.
              Phasellus scelerisque diam at quam blandit, et gravida nunc
              posuere. Phasellus rutrum malesuada risus vel imperdiet. Nunc
              vitae accumsan nunc. Nulla dui purus, lobortis quis nisi a,
              pretium egestas lacus. Pellentesque habitant morbi tristique
              senectus et netus et malesuada fames ac turpis egestas. Proin
              vehicula nisi sit amet faucibus pulvinar. Proin pellentesque
              rutrum sapien id malesuada. Aenean ultrices ante luctus, sagittis
              sem eget, mattis enim. Donec porta finibus purus eu tempor.
              Pellentesque hendrerit est sem, ut bibendum lectus maximus eget.
              Suspendisse posuere facilisis nulla, vitae tempus justo egestas a.
              Sed pellentesque vehicula lectus in malesuada. Aenean blandit
              metus scelerisque felis sagittis semper. Etiam vel elit elit.
              Donec blandit quis enim at dapibus. Suspendisse tempor ante at
              lorem facilisis posuere. Sed lacus leo, eleifend ac ultricies in,
              dignissim ac dui. Nulla fermentum, tellus sed hendrerit convallis,
              tellus nisl lacinia risus, sit amet posuere ligula velit gravida
              urna. Cras in elit malesuada, aliquam enim vel, rhoncus eros.
            </p>
            <div className="cpmasPhotoMobile">
              <img src={cpmas} />
            </div>
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
          </FadeInSection>
        </div>
        <div className="linksMobile" id="page4">
          <FadeInSection key="page4Fade">
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <h1>LINKS</h1>
            <br />
            <br />
            <a
              href="https://www.instagram.com/doctordphotography/"
              target="_blank"
              rel="noreferrer"
            >
              <div className="linksRow1">
                <img src={ig} />
                <h2>@doctordphotography</h2>
              </div>
            </a>
            <br />
            <a
              href="https://www.facebook.com/DoctorDPhotography"
              target="_blank"
              rel="noreferrer"
            >
              <div className="linksRow2">
                <img src={fb} />
                <h2>Doctor D Photography</h2>
              </div>
            </a>
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
          </FadeInSection>
        </div>
      </div>
    </>
  );
}
