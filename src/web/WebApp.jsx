import React, {useState, useEffect} from "react";
import "./WebApp.css";
import Carousel from "better-react-carousel";
import p1 from "../images/gallery/p3.jpg";
import p2 from "../images/gallery/p2(2).jpg";
import p3 from "../images/gallery/p3(2).jpg";
import p4 from "../images/gallery/p4(2).jpg";
import p5 from "../images/gallery/p5(2).jpg";
import p6 from "../images/gallery/p6.jpg";
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
import drdTrans from "../images/logos/drd-long-striped.png";
import togfather from "../images/logos/togfather.png";
import hoodie from "../images/hoodie.png";
import paypal from "../images/logos/paypal.png";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faShoppingCart} from "@fortawesome/free-solid-svg-icons";

function FadeInSection(props) {
  const [isVisible, setVisible] = React.useState(false);
  const domRef = React.useRef();
  useEffect(() => {
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

export default function WebApp() {
  const [size, setSize] = useState("Select size");

  const handleChange = (e) => {
    setSize(e.target.value);
    document.getElementById("sizeError").style.visibility = "hidden";
  };

  const buyHoodie = () => {
    switch (size) {
      case "Select size":
        document.getElementById("sizeError").style.visibility = "visible";
        break;
      case "S":
        window.open(
          "https://www.paypal.com/webapps/hermes?token=74665285XC824211J",
          "_blank"
        );
        break;
      case "M":
        window.open(
          "https://www.paypal.com/webapps/hermes?token=0SC57422KL720550U",
          "_blank"
        );
        break;
      case "L":
        window.open(
          "https://www.paypal.com/webapps/hermes?token=19W40266UN9283944",
          "_blank"
        );
        break;
      case "XL":
        window.open(
          "https://www.paypal.com/webapps/hermes?token=6RX22522S4771321W",
          "_blank"
        );
        break;
      case "2XL":
        window.open(
          "https://www.paypal.com/webapps/hermes?token=9MD566045A6701105",
          "_blank"
        );
        break;
      default:
        break;
    }
  };
  return (
    <>
      <div className="bodyWrapper">
        <div className="shopButton">
          <a
            onClick={() => {
              document
                .getElementById("shop")
                .scrollIntoView({behavior: "smooth"});
            }}
            class="active"
          >
            <FontAwesomeIcon size="2xl" color="white" icon={faShoppingCart} />
          </a>
        </div>
        <div className="wrapper">
          <div className="sidebar">
            <li>
              <a
                onClick={() => {
                  document
                    .getElementById("page1")
                    .scrollIntoView({behavior: "smooth"});
                }}
                class="active"
              >
                <h3 class="item">PHOTOS</h3>
              </a>
            </li>
            <li>
              <a
                onClick={() => {
                  document
                    .getElementById("page2")
                    .scrollIntoView({behavior: "smooth"});
                }}
                class="active"
              >
                <h3 class="item">ORGANIZATIONS</h3>
              </a>
            </li>
            <li>
              <a
                onClick={() => {
                  document
                    .getElementById("home")
                    .scrollIntoView({behavior: "smooth"});
                }}
                class="active"
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
                class="active"
              >
                <h3 class="item">ABOUT</h3>
              </a>
            </li>
            <li>
              <a
                onClick={() => {
                  document
                    .getElementById("page4")
                    .scrollIntoView({behavior: "smooth"});
                }}
                class="active"
              >
                <h3 class="item">LINKS</h3>
              </a>
            </li>
          </div>
        </div>

        <div className="page-wrap">
          <div className="homepage" id="home">
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
              <img src={drdTrans} />
              <br />
              <br />
              <br />
            </FadeInSection>
          </div>
          <div className="content">
            <div id="page1">
              <FadeInSection key="page1Fade">
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                <h1>PHOTOS</h1>
                <br />
                <Carousel cols={2} rows={1} gap={10} loop>
                  <Carousel.Item>
                    <a
                      onMouseEnter={() => {
                        document.getElementById("galleryPhoto1").style.filter =
                          "brightness(50%)";
                        document.getElementById("igLogo1").style.display =
                          "block";
                      }}
                      onMouseLeave={() => {
                        document.getElementById("galleryPhoto1").style.filter =
                          "brightness(100%)";
                        document.getElementById("igLogo1").style.display =
                          "none";
                      }}
                      id="photo1"
                      href="https://www.instagram.com/p/CmH8dBCpCn2/"
                      target="_blank"
                      rel="noreferrer"
                    >
                      <div className="galleryWrapper">
                        <img
                          id="galleryPhoto1"
                          className="galleryPhoto"
                          width="100%"
                          src={p1}
                        />
                        <img
                          style={{display: "none"}}
                          id="igLogo1"
                          className="igGallery"
                          width="10%"
                          src={ig}
                        />
                      </div>
                    </a>
                  </Carousel.Item>
                  <Carousel.Item>
                    <a
                      onMouseEnter={() => {
                        document.getElementById("galleryPhoto4").style.filter =
                          "brightness(50%)";
                        document.getElementById("igLogo4").style.display =
                          "block";
                      }}
                      onMouseLeave={() => {
                        document.getElementById("galleryPhoto4").style.filter =
                          "brightness(100%)";
                        document.getElementById("igLogo4").style.display =
                          "none";
                      }}
                      id="photo4"
                      href="https://www.instagram.com/p/ClzH0f2JTmV/"
                      target="_blank"
                      rel="noreferrer"
                    >
                      <div className="galleryWrapper">
                        <img
                          id="galleryPhoto4"
                          className="galleryPhoto"
                          width="100%"
                          src={p4}
                        />
                        <img
                          style={{display: "none"}}
                          id="igLogo4"
                          className="igGallery"
                          width="10%"
                          src={ig}
                        />
                      </div>
                    </a>
                  </Carousel.Item>
                  <Carousel.Item>
                    <a
                      onMouseEnter={() => {
                        document.getElementById("galleryPhoto6").style.filter =
                          "brightness(50%)";
                        document.getElementById("igLogo6").style.display =
                          "block";
                      }}
                      onMouseLeave={() => {
                        document.getElementById("galleryPhoto6").style.filter =
                          "brightness(100%)";
                        document.getElementById("igLogo6").style.display =
                          "none";
                      }}
                      id="photo6"
                      href="https://www.instagram.com/p/Clw5mGSJYEp/"
                      target="_blank"
                      rel="noreferrer"
                    >
                      <div className="galleryWrapper">
                        <img
                          id="galleryPhoto6"
                          className="galleryPhoto"
                          width="100%"
                          src={p6}
                        />
                        <img
                          style={{display: "none"}}
                          id="igLogo6"
                          className="igGallery"
                          width="10%"
                          src={ig}
                        />
                      </div>
                    </a>
                  </Carousel.Item>
                  <Carousel.Item>
                    <a
                      onMouseEnter={() => {
                        document.getElementById("galleryPhoto2").style.filter =
                          "brightness(50%)";
                        document.getElementById("igLogo2").style.display =
                          "block";
                      }}
                      onMouseLeave={() => {
                        document.getElementById("galleryPhoto2").style.filter =
                          "brightness(100%)";
                        document.getElementById("igLogo2").style.display =
                          "none";
                      }}
                      id="photo2"
                      href="https://www.instagram.com/p/CmDE54rJfSW/"
                      target="_blank"
                      rel="noreferrer"
                    >
                      <div className="galleryWrapper">
                        <img
                          id="galleryPhoto2"
                          className="galleryPhoto"
                          width="100%"
                          src={p2}
                        />
                        <img
                          style={{display: "none"}}
                          id="igLogo2"
                          className="igGallery"
                          width="10%"
                          src={ig}
                        />
                      </div>
                    </a>
                  </Carousel.Item>
                  <Carousel.Item>
                    <a
                      onMouseEnter={() => {
                        document.getElementById("galleryPhoto5").style.filter =
                          "brightness(50%)";
                        document.getElementById("igLogo5").style.display =
                          "block";
                      }}
                      onMouseLeave={() => {
                        document.getElementById("galleryPhoto5").style.filter =
                          "brightness(100%)";
                        document.getElementById("igLogo5").style.display =
                          "none";
                      }}
                      id="photo5"
                      href="https://www.instagram.com/p/CmW1sb-pkvi/"
                      target="_blank"
                      rel="noreferrer"
                    >
                      <div className="galleryWrapper">
                        <img
                          id="galleryPhoto5"
                          className="galleryPhoto"
                          width="100%"
                          src={p5}
                        />
                        <img
                          style={{display: "none"}}
                          id="igLogo5"
                          className="igGallery"
                          width="10%"
                          src={ig}
                        />
                      </div>
                    </a>
                  </Carousel.Item>
                  <Carousel.Item>
                    <a
                      onMouseEnter={() => {
                        document.getElementById("galleryPhoto3").style.filter =
                          "brightness(50%)";
                        document.getElementById("igLogo3").style.display =
                          "block";
                      }}
                      onMouseLeave={() => {
                        document.getElementById("galleryPhoto3").style.filter =
                          "brightness(100%)";
                        document.getElementById("igLogo3").style.display =
                          "none";
                      }}
                      id="photo3"
                      href="https://www.instagram.com/p/CmE5WRhJRLl/"
                      target="_blank"
                      rel="noreferrer"
                    >
                      <div className="galleryWrapper">
                        <img
                          id="galleryPhoto3"
                          className="galleryPhoto"
                          width="100%"
                          src={p3}
                        />
                        <img
                          style={{display: "none"}}
                          id="igLogo3"
                          className="igGallery"
                          width="10%"
                          src={ig}
                        />
                      </div>
                    </a>
                  </Carousel.Item>
                  {/* <Carousel.Item>
                      <img width="100%" src={p5} />
                    </Carousel.Item>
                    <Carousel.Item>
                      <img width="100%" src={p7} />
                    </Carousel.Item> */}
                </Carousel>

                {/* <Tooltip visible={showIg} offsetX={-370} offsetY={40}>
                    <div
                      className="tooltipElement"
                      style={{backgroundColor: "black"}}
                    >
                      <span style={{color: "white"}}>Open in Instagram</span>
                    </div>
                  </Tooltip> */}
                <br />
                <br />
                <br />
              </FadeInSection>
            </div>
            <div className="shopPage" id="shop">
              <FadeInSection key="shopFade">
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                <h1>SHOP</h1>
                <br />
                <img className="hoodiePhoto" src={hoodie} />
                <br />
                <br />
                <select
                  style={{
                    margin: "0 auto",
                    display: "block",
                    width: "130px",
                    height: "30px",
                    fontSize: "18px",
                  }}
                  value={size}
                  onChange={handleChange}
                >
                  <option value="Select size" disabled>
                    Select size
                  </option>
                  <option value="S">Small</option>
                  <option value="M">Medium</option>
                  <option value="L">Large</option>
                  <option value="XL">XL</option>
                  <option value="2XL">2XL</option>
                </select>
                <br />
                <button className="buyButton" onClick={buyHoodie}>
                  <img src={paypal} />
                  Buy Now
                </button>
                <div id="sizeError" style={{visibility: "hidden"}}>
                  <h3 style={{color: "red"}}>Please select a size</h3>
                </div>
                <br />
                <br />
                <br />
              </FadeInSection>
            </div>
            <div id="page2">
              <FadeInSection key="page2Fade">
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                <h1>ORGANIZATIONS</h1>
                <br />
                <div className="logoTable">
                  <div style={{display: "table", margin: "0 auto"}}>
                    <a
                      href="https://dannywimmerpresents.com/"
                      target="_blank"
                      rel="noreferrer"
                    >
                      <img src={dwp}></img>
                    </a>
                    <a
                      href="https://www.blackcraftcult.com/"
                      target="_blank"
                      rel="noreferrer"
                    >
                      <img src={blackcraft}></img>
                    </a>
                    <a
                      href="https://www.thestrangeandunusual.com/"
                      target="_blank"
                      rel="noreferrer"
                    >
                      <img src={tsau}></img>
                    </a>
                  </div>
                  <div
                    className="bottomLogos"
                    style={{display: "table", margin: "0 auto"}}
                  >
                    <a
                      href="https://www.nailbiteofficial.com/"
                      target="_blank"
                      rel="noreferrer"
                    >
                      <img src={nb}></img>
                    </a>
                    <a
                      href="https://www.facebook.com/scsthechurch/"
                      target="_blank"
                      rel="noreferrer"
                    >
                      <img src={church}></img>
                    </a>
                    <a
                      href="https://www.facebook.com/hatemachinePA/"
                      target="_blank"
                      rel="noreferrer"
                    >
                      <img src={hm}></img>
                    </a>
                  </div>
                </div>
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
                <h1>ABOUT</h1>
                {/* <div className="aboutPhotos">
                  <img src={doctor} />
                  <img src={stage} />
                </div> */}
                <div className="aboutFrame">
                  <div className="photosVert">
                    <img src={stage} />
                    <img src={doctor} />
                  </div>
                  <div className="aboutText">
                    <p className="paraAbout">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Mauris in dapibus felis. Integer efficitur dui a suscipit
                      feugiat. Suspendisse quis mauris quis lacus luctus
                      eleifend. Sed eu orci egestas, imperdiet lectus ut,
                      egestas nunc. Integer semper rhoncus magna nec pharetra.
                      Phasellus eu arcu ac ex finibus mattis ut sit amet libero.
                      Aenean commodo, lacus porta ullamcorper molestie, ligula
                      libero semper diam, eget suscipit ex ex a est. Morbi ac
                      tellus lacus. Nulla fermentum arcu ac ultricies fermentum.
                      Phasellus scelerisque diam at quam blandit, et gravida
                      nunc posuere. Phasellus rutrum malesuada risus vel
                      imperdiet. Nunc vitae accumsan nunc. Nulla dui purus,
                      lobortis quis nisi a, pretium egestas lacus. Pellentesque
                      habitant morbi tristique senectus et netus et malesuada
                      fames ac turpis egestas. Proin vehicula nisi sit amet
                      faucibus pulvinar. Proin pellentesque rutrum sapien id
                      malesuada. Aenean ultrices ante luctus, sagittis sem eget,
                      mattis enim. Donec porta finibus purus eu tempor.
                      Pellentesque hendrerit est sem, ut bibendum lectus maximus
                      eget. Suspendisse posuere facilisis nulla, vitae tempus
                      justo egestas a. Sed pellentesque vehicula lectus in
                      malesuada. Aenean blandit metus scelerisque felis sagittis
                      semper. Etiam vel elit elit. Donec blandit quis enim at
                      dapibus. Suspendisse tempor ante at lorem facilisis
                      posuere. Sed lacus leo, eleifend ac ultricies in,
                      dignissim ac dui. Nulla fermentum, tellus sed hendrerit
                      convallis, tellus nisl lacinia risus, sit amet posuere
                      ligula velit gravida urna.
                    </p>
                    <img src={cpmas} />
                  </div>
                </div>

                <div className="cpmasPhoto"></div>
                <br />
                <br />
                <br />
              </FadeInSection>
            </div>
            <div className="links" id="page4">
              <FadeInSection key="page4Fade">
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
              </FadeInSection>
            </div>
            <div className="togfatherLogo" id="page5">
              <FadeInSection key="page5Fade">
                <img src={togfather} />
              </FadeInSection>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
