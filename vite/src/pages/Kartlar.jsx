import React, { useState } from "react";
import { Link } from "react-router-dom";
import { dataKart } from "../../data/data";

function Kartlar() {
  const [active, setactive] = useState("Hamisi");
  const [dataK, setDataK] = useState(dataKart);
  console.log(dataK);
  return (
    <>
      <div className="container">
        <div className="pading">
          <div className="kartlar-container">
            <div className="kartlar-container-name">
              <h1>Kartlarımız</h1>
            </div>
            <div className="kartlar-container-categories">
              <ul>
                <li
                  className={`${active === "Hamisi" ? "active" : ""}`}
                  onClick={() => {setactive("Hamisi"),setDataK(dataKart)}}
                >
                  Hamisi
                </li>
                <li
                  className={`${active === "Taksit-kartlar" ? "active" : ""}`}
                  onClick={() => {
                    setactive("Taksit-kartlar"),setDataK(dataKart.filter(x=>x.type==='Taksit kartlar'))
                  }}
                >
                  Taksit kartlar
                </li>
                <li
                  className={`${active === "Debet-kartlar" ? "active" : ""}`}
                  onClick={() => {
                    setactive("Debet-kartlar"),setDataK(dataKart.filter(x=>x.type==='Debet kartlar'))
                  }}
                >
                  Debet kartlar
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <main id="kartlar-main">
        <div className="main-kartlar-container">
          {dataK.map((item, ind) => (
            
            <div key={ind} className="kart-item">
              <Link to={`${item.id}`} className="kart-item-img">
                <img src={item.img[0]} alt="" />
              </Link>
              <div className="kart-item-word">
                <Link  to={`${item.id}`} className="item-logo">
                  <h3>{item.name}</h3>
                </Link>
                <Link to={`${item.id}`} className="item-categories">
                  <ul>
                    <li>
                      <span>{item.kreditLimit[0]}</span>
                      <b>{item.kreditLimit[1]}</b>
                    </li>
                    <li>
                    <span>{item.faiz[0]}</span>
                      <b>{item.faiz[1]}</b>
                    </li>
                    <li>
                    <span>{item.qiymet[0]}</span>
                      <b>{item.qiymet[1]}</b>
                    </li>
                    <li>
                    <span>{item.muddet[0]}</span>
                      <b>{item.muddet[1]}</b>
                    </li>
                  </ul>
                </Link>
                <div className="item-navigate">
                  {
                    item.Kartsifariş?( <a className="navigate-link" href="https://kredit.abb-bank.az/ru/tamkart?cardCode=010MCSTDPS&utm_source=tamkart-az&utm_medium=master-vis-classic&utm_campaign=TamKart-az-redirect">{item.Kartsifariş}</a>):''
                  }
                 
                 <Link to={`${item.id}`}>
                 <span>{item.Ətraflıməlumat}</span>
                 </Link>
                </div>
              </div>
              
            </div>
          ))}
        </div>
      </main>
    </>
  );
}

export default Kartlar;
