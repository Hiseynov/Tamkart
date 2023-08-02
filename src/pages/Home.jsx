import React, { useEffect, useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Autoplay, Pagination } from "swiper";
import { Link } from "react-router-dom";
import axios from "axios";
import GoogleMapReact from "google-map-react";

function Home() {
  // const [PartnyorData,setPartnyorData]=useState([])
  const defaultProps = {
    center: {
      lat: 40.570082,
      lng: 49.688976},
    zoom: 15,
  };
  const AnyReactComponent = ({ text }) => <div>{text}</div>;
  const [yazilarFilter, setYazilarFilter] = useState([]);
  useEffect(() => {
  
    const filterYazilar = async () => {
      try {
        axios.get(localStorage.getItem('languages')==="Aze"? `http://localhost:3300/yazilar`:localStorage.getItem('languages')==='Ru'? ` http://localhost:3301/yazilar`:"http://localhost:3302/yazilar").then((e) => {
          setYazilarFilter(e.data);
        });
      } catch (error) {}
    };

    filterYazilar();
  }, []);
  // useEffect(() => {
  
  //   const filterYazilar = async () => {
  //     try {
  //       axios.get(localStorage.getItem('languages')==="Aze"? `http://localhost:3300/Partnyorlar  `:` http://localhost:3301/yazilar`).then((e) => {
  //         setPartnyorData(e.data);
  //       });
  //     } catch (error) {}
  //   };

  //   filterYazilar();
  // }, []);
  return (
    <>
      <div style={localStorage.getItem("darkLightMod")==="light"?({background:"linear-gradient(45deg, #76bc21, #8cc745)"}):({background:"#132a13"})} className={"container"}>
        <Swiper
          spaceBetween={30}
          centeredSlides={true}
          autoplay={{
            delay: 4500,
            disableOnInteraction: false,
          }}
          pagination={{
            clickable: true,
          }}
          navigation={true}
          modules={[Autoplay, Pagination]}
          className="mySwiper"
        >
          <SwiperSlide>
            <div className="left">
              <h3>Gəncliyini tam yaşa!</h3>
              <p>TamGənc kartını indi sifariş et</p>
              <Link className="ButtonNavigate" to={"Kartlar"}>
                Daha ətraflı
              </Link>
            </div>
            <div className="right">
              <img
                src="https://tamkart.az/assets/frontend/images/tamgenc_banner_1.png"
                alt=""
              />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="left">
              <h3>24 ayadək taksit</h3>
              <p>imkanından sən də faydalan!</p>
              <Link className="ButtonNavigate" to={"taksit"}>
                Daha ətraflı
              </Link>
            </div>
            <div className="right">
              <img
                src="https://tamkart.az/assets/frontend/images/tamkart-24-banner-new.png"
                alt=""
              />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="left">
              <span>Debet Kart</span>
              <h3>TamKart debet kartı</h3>
              <p>əldə etmək artıq çox asandır</p>
              <a href="https://abb-bank.az/az/xeberler/indi-her-kes-tamkart-ala-biler" className="ButtonNavigate" >
                Daha ətraflı
              </a>
            </div>
            <div className="right">
              <img
                src="https://tamkart.az/assets/frontend/images/slide_new.png"
                alt=""
              />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="left">
              <span>Cashback</span>
              <h3>Tam istədiyin kimi</h3>
              <p>Bütün ödənişlərinizdə min. 1% cashback</p>
              <Link className="ButtonNavigate" to={"Kartlar"}>
                Daha ətraflı
              </Link>
            </div>
            <div className="right">
              <img
                src="https://tamkart.az/assets/frontend/images/slide_img.png"
                alt=""
              />
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
      <div id="Home">
        <div className="Home-container">
          <div className="Home-container-top">
            <ul style={localStorage.getItem('darkLightMod')==='light'?({}):({color:"white"})}>
              <li>
                <b>{yazilarFilter.Sizədaha}</b>
              </li>
              <li>
                <Link to={yazilarFilter.Partnyorlar}>{yazilarFilter.Partnyorlar}</Link>
                <b>{yazilarFilter.Sizədaha}</b>
              </li>
              <li >
                <Link to={yazilarFilter.Kartlar}>{yazilarFilter.Bütünkartlar}</Link>
                </li>
            </ul>
          </div>
          <div className="Home-container-bottom">
            <div className="Home-container-bottom-left">
            <div style={{ margin:"0 auto", height: "100%", width: "100%" }}>
          <GoogleMapReact 
            bootstrapURLKeys={{ key: "" }}
            defaultCenter={defaultProps.center}
            defaultZoom={defaultProps.zoom}
          >
             <AnyReactComponent style={{position:"relative"}}
              lat={59.955413}
              lng={30.337844}
              text="My Marker"
              
            />
          
         
          </GoogleMapReact>
        </div>
            </div>
            <div className="Home-container-bottom-right">
              <div className="Home-black-top">
                <div className="Home-black-text">
                  <ul>
                    <li>
                      <h3>{yazilarFilter.Sifarişintamvaxtıdır}</h3>
                    </li>
                    <li>
                      <div className="Home-black-category">
                        <b>{yazilarFilter.Kartqiyməti}</b>
                        <strong>{yazilarFilter.KartqiymətiDeyer}</strong>
                      </div>
                      <div className="Home-black-category">
                        <b>{yazilarFilter.cashback}</b>
                        <strong>{yazilarFilter.Faizqiymet}</strong>
                      </div>
                      
                    </li>
                    <li>
                      <Link to={yazilarFilter.Kartlar}>{yazilarFilter.Kartınıəldəet}</Link>
                    </li>
                  </ul>
                </div>
                <div className="Home-black-photo">
                  <img src="https://tamkart.az/assets/uploads/cards/8f0577744f1fa55d03b0237a8af72932.png" alt="" />
                </div>
              </div>
              <div className="Home-black-bottom">
                <img src="https://tamkart.az/assets/frontend/style/img/login.svg" alt="" />
                <strong>{yazilarFilter.Bütünkartsahibləri} </strong>
              </div>
            </div>
          </div>
        </div>
      </div>
 
    </>
  );
}

export default Home;
