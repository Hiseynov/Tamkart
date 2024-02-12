import axios from "axios";
import React, { useEffect } from "react";
import { useState } from "react";
import Login from "../Login";
import Regist from "../Regist";
function LoginRegisrt() {
  const [yazilarFilter, setYazilarFilter] = useState([]);
  useEffect(() => {
    const filterYazilar = async () => {
      try {
        axios.get(localStorage.getItem('languages')==="Aze"? `http://localhost:3300/yazilar`:localStorage.getItem('languages')==="Ru"? ` http://localhost:3301/yazilar`:" http://localhost:3302/yazilar").then((e) => {
          setYazilarFilter(e.data);
        });
      } catch (error) {}
    };

    filterYazilar();
  }, []);
  // useEffect(() => {
  //   const filterYazilar = async () => {
  //     try {
  //       axios.get(` http://localhost:3301/yazilar`).then((e) => {
  //         setYazilarFilterRu(e.data);
  //       });
  //     } catch (error) {}
  //   };

  //   filterYazilar();
  // }, []);
  // useEffect(() => {
  //   const filtersual = async () => {
  //     try {
  //       axios.get(`http://localhost:3300/sualCavab`).then((e) => {
  //           setsualcavab(e.data);
  //       });
  //     } catch (error) {}
  //   };

  //   filtersual();
  // }, []);
  return (
    <>
      <div
        style={
          localStorage.getItem("darkLightMod") === "light"
            ? { background: "linear-gradient(45deg, #76bc21, #8cc745)" }
            : { background: "#132a13" }
        }
        className="container"
      >
        <div className="pading">
          <h1 >{ yazilarFilter.Üzvüol}</h1>
        </div>
      </div>
      <div id="LoginRegistr">
        <div className="LoginRegister">
             <div className="LoginRegister-container">
          <div className="LoginRegister-container-left">
            <img
              src={
                localStorage.getItem("login") === "true"
                  ? "https://abb-bank.az/storage/uploads/ZjBjELZlTas9a51xk636LiZMimqUmVpFiFzXx4tr.png"
                  : "https://abb-bank.az/storage/uploads/files/1701236911_tunzala-xpert-sade-500x500.webp"
              }
              alt=""
            />
          </div>
          <div className="LoginRegister-container-right">
            {localStorage.getItem("login") === "true" ? (
              <Login></Login>
            ) : (
              <Regist></Regist>
            )}
          </div>
        </div>
        </div>
        <div className="TamKartKredit">
          <div className="TamKartKredit-container">
            <div className="TamKartKredit-container-left">
              <img src={yazilarFilter.img} alt="" />
            </div>
            <div className="TamKartKredit-container-right">
              <h1>{yazilarFilter.logo}</h1>
              <p>{yazilarFilter.title}</p>
              <ul>
                <li>
                  <span>{yazilarFilter.faiz}</span>
                  <b>{yazilarFilter.faizDeyer}</b>
                </li>
                <li>
                  <span>{yazilarFilter.Kartqiyməti}</span>
                  <b>{yazilarFilter.KartqiymətiDeyer}</b>
                </li>
                <li>
                  <span>{yazilarFilter.Müddət}</span>
                  <b>{yazilarFilter.MüddətDeyer}</b>
                </li>
                <li>
                  <span>{yazilarFilter.Güzəştmüddəti}</span>
                  <b>{yazilarFilter.GüzəştmüddətiDeyer}</b>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="AbbMobile">
            <div className="AbbMobile-container" style={localStorage.getItem("darkLightMod")==="light"?({background:"linear-gradient(45deg, #76bc21, #8cc745)"}):({background:"#132A13"})} >
                <div className="AbbMobile-container-left">
                    <h1>{yazilarFilter.ABBmobile}</h1>
                    <p>{yazilarFilter.titlemobile}</p>
                    <ul>
                        
                        <li><a href="https://apps.apple.com/az/app/iba-mobile/id1251456175">
                            <div className="mobileIcon">
                            <i class="fa-brands fa-apple"></i>
                            </div>
                            <div className="mobiltitle">
                            <strong>{yazilarFilter.Yüklə}</strong>
                            <h3>App Store</h3>
                            </div>
                            </a></li>
                        <li>
                            <a href="https://play.google.com/store/apps/details?id=iba.mobilbank&pli=1">
                                <div className="mobileIcon">
                                <i class="fa-brands fa-google-play"></i>
                                </div>
                                <div className="mobiltitle">
                                    <strong>{yazilarFilter.Yüklə}</strong>
                                    <h3>Google Play</h3>
                                </div>
                            
                            </a>
                        </li>
                    </ul>

                </div>
                <div className="AbbMobile-container-right">
                    <img src={yazilarFilter.imgmobile} alt="" />
                </div>
            </div>
        </div>
        {/* <div className="sualCavab">
            <div className="sualCavab-container">
                <ul>
                    {sualcavab.map((i,index)=>(<li  key={index}>
                       <p onClick={()=>(setac(!ac),setid(i.id),console.log(i.id))}> {i.sual}</p>
                       {ac && (<p className="cavabmobile">{i.cavab}</p>)}
                      
                    </li>))}
                </ul>
            </div>
        </div> */}

      </div>
    </>
  );
}

export default LoginRegisrt;
