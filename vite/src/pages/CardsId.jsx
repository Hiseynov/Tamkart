import React from "react";
import { useState } from "react";
import { dataKart } from "../../data/data";

function CardsId() {
  const id = window.location.pathname.split("/")[2];
  const [dataK, setDataK] = useState(dataKart[id - 1]);

  return (
    <>
    
      <div className="container">
        <div className="cards-header">
          <div className="cards-header-word">
            <h1>{dataK.name}</h1>
          </div>
          <div className="cards-header-img">
            <img src={dataK.img[0]} alt="" />
          </div>
        </div>
      </div>
      <div id="main-cards">
        <div className="cards-container">
          <div className="cards-top">
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
       
           <div className="cards-button">
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
       
  {
            dataK.Müstəri?
            <div className="cards-ustunluk-button">
              <p>{dataK.Müstəri}</p>
            </div>
            :""
          }
  

  </div> 
  <div className="cards-items">
    <div className="cards-ustunluk-top">
      <div className="cards-ustunluk-left">
        <h3>{dataK.ÜstünlüklərY[0]}</h3>
    </div>
    <div className="cards-ustunluk-right">
      <p>{dataK.ÜstünlüklərY[1]}</p>
      <p>{dataK.ÜstünlüklərY[2]}</p>
      <p>{dataK.ÜstünlüklərY[3]}</p>
      <p>{dataK.ÜstünlüklərY[4]}</p>
      {/* <p>{dataK.ÜstünlüklərY[5]}</p> */}
      {/* <p>{dataK.ÜstünlüklərY[6]}</p> */}
    </div>
    </div>
    <div className="cards-ustunluk-button">
      <p>{dataK.ÜstünlüklərA[0]}</p>
      <p>{dataK.ÜstünlüklərA[1]}</p>
      <p>{dataK.ÜstünlüklərA[2]}</p>
    </div>
  
    
  </div>
  <div className="cards-item">
    <div className="cards-left">
      <h3>{dataK.Tariflər[0]}</h3>
    </div>
    <div className="cards-right">
      <p>{dataK.Tariflər[1]}</p>
      <p>{dataK.Tariflər[2]}</p>
      <p>{dataK.Tariflər[3]}</p>
      <p>{dataK.Tariflər[4]}</p>
     <a href={dataK.TarifLink}>{dataK.TariflərCedvel[0]}</a>
    </div>
  </div>
  {
      dataK.type=="Debet kartlar"?
     
    //  console.log('salam' )
   ""
    :  
    // console.log('got')
    (
      <>

  <div className="cards-item">
    <div  className="cards-left green">
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
                  <p>{dataK.ÜstünlüklərY2[1]}</p>
                  <p>{dataK.ÜstünlüklərY2[2]}</p>
                  <p>{dataK.ÜstünlüklərY2[3]}</p>
                  <p>{dataK.ÜstünlüklərY2[4]}</p>
                  <p>{dataK.ÜstünlüklərY2[5]}</p>
                  <p>{dataK.ÜstünlüklərY2[6]}</p>
                </div>
                </div>
                <div className="cards-ustunluk-button">
                  <p>{dataK.ÜstünlüklərA2[0]}</p>
                  <p>{dataK.ÜstünlüklərA2[1]}</p>
                  <p>{dataK.ÜstünlüklərA2[2]}</p>
                </div>
              </div>
              <div className="cards-item">
                <div className="cards-left">
                  <h3>{dataK.Tariflər2[0]}</h3>
                </div>
                <div className="cards-right">
                  <p>{dataK.Tariflər2[1]}</p>
                  <p>{dataK.Tariflər2[2]}</p>
                  <p>{dataK.Tariflər2[3]}</p>
                  <p>{dataK.Tariflər2[4]}</p>
                 <a href={dataK.TarifLink}>{dataK.TariflərCedvel2[0]}</a>
                </div>
              </div>
      </>
    )
    
 
  }
  
 
         
           
            </div>
        </div>
      </div>
    </>
  );
}

export default CardsId;
