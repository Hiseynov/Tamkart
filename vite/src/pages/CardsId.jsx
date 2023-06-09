import React from "react";
import { useState } from "react";
import { dataKart } from "../../data/data";

function CardsId() {
  const id = window.location.pathname.split("/")[2];
  const [dataK, setDataK] = useState(dataKart[id - 1]);
  const [whiteAct,setWhiteAct]=useState('')

   window.onscroll = function() {
    var scrolled = window.pageYOffset;
    if (scrolled<=420) {
      setWhiteAct('Ümumi məlumat')
    }else{
      setWhiteAct('Kart haqqında')
    }
};


  return (
    <>
       <div className="container" style={{borderRadius:"0px"}}>
        <div className="cards-header">
          <div className="cards-header-word">
            <h1>{dataK.name}</h1>
          </div>
          <div className="cards-header-img">
            <img src={dataK.img[0]} alt="" />
          </div>
        </div>
      </div>
      <div className="page-cards-nav">
        <div className="page-cards-container">
          <ul>
            <li><a href="#Ümumi-məlumat" className={whiteAct==='Ümumi məlumat'?'whiteActive':''} onClick={()=>{setWhiteAct('Ümumi məlumat')}}>Ümumi məlumat</a></li>
            <li><a href="#Kart haqqında" className={whiteAct==='Kart haqqında'?'whiteActive':''} onClick={()=>{setWhiteAct('Kart haqqında')}}>Kart haqqında</a></li>
          </ul>
        </div>
      </div>
    {/* </div> */}
     
      <div id="main-cards">
        <div  className="cards-container">
          <div id="Ümumi-məlumat" className="cards-top">
            <ul>
              <li>
                <b>{dataK.kreditLimit[0]}</b>
                <span>{dataK.kreditLimit[1]}</span>
              </li>
              <li>
                <b>{dataK.faiz[0]}</b>
                <span>{dataK.faiz[1]}</span>
              </li>
              <li>
                <b>{dataK.qiymet[0]}</b>
                <span>{dataK.qiymet[1]}</span>
              </li>
              <li>
                <b>{dataK.muddet[0]}</b>
                <span>{dataK.muddet[1]}</span>
              </li>
            
            </ul>
          </div>

          <div id="Kart haqqında" className="cards-button">
            <h1>{dataK.Karthaqqında[0]}</h1>
            <div className="cards-items">
              <div className="cards-ustunluk-top">
                <div className="cards-ustunluk-left">
                  {dataK.Karthaqqında[1]}
                </div>
                <div className="cards-ustunluk-right">
                  <div className="cards-item-img">
                    <div className="card-item-top">
                      <img src={dataK.img[2]} alt="" />
                    </div>
                    <div className="card-item-button">
                      <img src={dataK.img[1]} alt="" />
                    </div>
                  </div>
                </div>
              </div>

              {dataK.Müstəri ? (
                <div className="cards-ustunluk-button">
                  <p>{dataK.Müstəri}</p>
                </div>
              ) : (
                ""
              )}
            </div>
            <div className="cards-items">
              <div className="cards-ustunluk-top">
                <div className="cards-ustunluk-left">
                  <h3>{dataK.ÜstünlüklərY[0]}</h3>
                </div>
                <div className="cards-ustunluk-right">
                  {dataK.ÜstünlüklərY.map((e,i)=>(
                     <p key={i}>{e}</p>
                  ))}
                </div>
              </div>
              <div className="cards-ustunluk-button">
                {dataK.ÜstünlüklərA.map((e,i)=>(
                  <p key={i}>{e}</p>
                ))}
              </div>
            </div>
            <div className="cards-item">
              <div className="cards-left">
                <h3>{dataK.Tariflər[0]}</h3>
              </div>
              <div className="cards-right">
                {dataK.Tariflər.map((e,i)=>(
                  <p key={i}>{e}</p>
                ))}
                <a href={dataK.TarifLink}>{dataK.TariflərCedvel[0]}</a>
              </div>
            </div>
            {dataK.type == "Debet kartlar" ? (
              ""
            ) : (
              <>
                <div className="cards-item">
                  <div className="cards-left green">
                    <h3>{dataK.Kreditkartüzrəfunksionallıq}</h3>
                  </div>
                </div>

                <div className="cards-item">
                  <div className="cards-left">
                    <h3>{dataK.Güzəştmüddəti[0]}</h3>
                  </div>
                  <div className="cards-right">
                    <p>{dataK.Güzəştmüddəti[1]}</p>
                  </div>
                </div>
                <div className="cards-item">
                  <div className="cards-left">
                    <h3>{dataK.Kreditxəttiüzrəlimitinmüddəti[0]}</h3>
                  </div>
                  <div className="cards-right">
                    <p>{dataK.Kreditxəttiüzrəlimitinmüddəti[1]}</p>
                  </div>
                </div>
                <div className="cards-item">
                  <div className="cards-left green">
                    <h3>{dataK.DebetKartUzreFunksialig}</h3>
                  </div>
                </div>
                <div className="cards-items">
                  <div className="cards-ustunluk-top">
                    <div className="cards-ustunluk-left">
                      <h3>{dataK.ÜstünlüklərY2[0]}</h3>
                    </div>
                    <div className="cards-ustunluk-right">
                      {dataK.ÜstünlüklərY2.map((e,i)=>{
                         <p key={i}>{e}</p>
                      })}
                    </div>
                  </div>
                  <div className="cards-ustunluk-button">
                    {dataK.ÜstünlüklərA2.map((e,i)=>(
                      <p key={i}>{e}</p>
                    ))}
                  </div>
                </div>
                <div className="cards-item">
                  <div className="cards-left">
                    <h3>{dataK.Tariflər2[0]}</h3>
                  </div>
                  <div className="cards-right">
                    {dataK.Tariflər2.map((e,i)=>(
                      <p key={i}>{e}</p>
                    ))}
                    <a href={dataK.TarifLink}>{dataK.TariflərCedvel2[0]}</a>
                  </div>
                </div>
              </>
            )}
          </div>
        </div>
      </div>
    </>
  );
}

export default CardsId;
