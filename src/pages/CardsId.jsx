import axios from "axios";
import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

function CardsId() {
  const [dataK, setDataK] = useState();
  const [dataK2, setDataK2] = useState();
  const [whiteAct,setWhiteAct]=useState('Ümumi məlumat')
  const {id} =useParams()
  // console.log(id)
  const [yazilarFilter, setYazilarFilter] = useState([]);
  const navigate = useNavigate();
  console.log(id);
  // function errors() {
  //   if(+id >= 16 || typeof(+id) != Number ){
  //     navigate("/*")
  //   }else{
  //     navigate('/Cards/:id')
  //   }
  // }
  // errors()
  useEffect(() => {
    const filterYazilar = async () => {
      try {
        axios.get(localStorage.getItem('languages')==="Aze"? `http://localhost:3300/yazilar`:localStorage.getItem('languages')==="Ru"? ` http://localhost:3301/yazilar`:"http://localhost:3302/yazilar").then((e) => {
          setYazilarFilter(e.data);
        });
      } catch (error) {}
    };

    filterYazilar();
  }, []);
  useEffect(()=>{

    const fetchData = async () => {
      try {
       axios.get(localStorage.getItem('languages') ==="Aze"?(`http://localhost:3300/dataKart/${id}`):localStorage.getItem('languages')==="Ru"?(`http://localhost:3301/dataKart/${id}`):(`http://localhost:3302/dataKart/${id}`)).then((e)=>{


         console.log(e.data)
         setDataK(e.data);
       })
      } catch (error) {
        console.error(error);
      }
    };
    
    fetchData();
  },[])
  useEffect(()=>{

    const fetchData = async () => {
      try {
       axios.get(localStorage.getItem('languages') ==="Aze"?(`http://localhost:3300/dataKart/${id}`):localStorage.getItem('languages')==="Ru"?(`http://localhost:3301/dataKart/${id}`):(`http://localhost:3302/dataKart/${id}`)).then((e)=>{


         console.log(e.data)
         setDataK2(e.data);
       })
      } catch (error) {
        console.error(error);
      }
    };
    
    fetchData();
  },[])

   window.onscroll = function() {
    var scrolled = window.pageYOffset;
    if (scrolled<=420) {
      setWhiteAct('Ümumi məlumat')
    }else{
      setWhiteAct('Kart haqqında')
    }
};


  return (
    // <>
    // {/* <p>{dataK.name}</p> */}
    // </>
    <>
 {dataK &&       
<>
<div className="container" style={localStorage.getItem("darkLightMod")==="light"?({background:"linear-gradient(45deg, #76bc21, #8cc745)",borderRadius:"0px"}):({background:"#132a13",borderRadius:"0px"})}>
        <div className="cards-header">
          <div className="cards-header-word">
            <h1>{ dataK.name}</h1>
          </div>
          <div className="cards-header-img">
            <img src={ dataK.img[0]} alt="" />
          </div>
        </div>
      </div>
      <div style={localStorage.getItem("darkLightMod")==="light"?({background:"linear-gradient(45deg, #76bc21, #8cc745)"}):({background:"#132A13"})} className="page-cards-nav">
        <div className="page-cards-container">
          <ul>
            <li><a href="#Ümumi-məlumat" className={whiteAct==='Ümumi məlumat'?'whiteActive':''} onClick={()=>{setWhiteAct('Ümumi məlumat')}}>{yazilarFilter.Ümumiməlumat} </a></li>
            <li><a href="#Kart haqqında" className={whiteAct==='Kart haqqında'?'whiteActive':''} onClick={()=>{setWhiteAct('Kart haqqında')}}>{yazilarFilter.Karthaqqında}</a></li>
          </ul>
        </div>
      </div>
     
      <div id="main-cards">
        <div  className="cards-container">
          <div id="Ümumi-məlumat" className="cards-top">
            <ul>
              <li>
                <b>{dataK.kreditLimit[0]}</b>
                <span style={localStorage.getItem("darkLightMod")==="light"?({color:"black"}):({color:'white'})} >{dataK.kreditLimit[1]}</span>
              </li>
              <li>
                <b>{dataK.faiz[0]}</b>
                <span style={localStorage.getItem("darkLightMod")==="light"?({color:"black"}):({color:'white'})}>{dataK.faiz[1]}</span>
              </li>
              <li>
                <b>{dataK.qiymet[0]}</b>
                <span style={localStorage.getItem("darkLightMod")==="light"?({color:"black"}):({color:'white'})}>{dataK.qiymet[1]}</span>
              </li>
              <li>
                <b>{dataK.muddet[0]}</b>
                <span style={localStorage.getItem("darkLightMod")==="light"?({color:"black"}):({color:'white'})}>{dataK.muddet[1]}</span>
              </li>
            
            </ul>
          </div>

          <div style={localStorage.getItem("darkLightMod")==="light"?({background:"#f0f0f0"}):({background:'#2C4639',color:"white"})} id="Kart haqqında" className="cards-button">
            <h1>{dataK.Karthaqqında[0]}</h1>
            <div className="cards-items">
              <div className="cards-ustunluk-top">
                <div className="cards-ustunluk-left">
                  {dataK.Karthaqqında}
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
                  {  dataK &&dataK.ÜstünlüklərY.map((e,i)=>(
                     <p key={i}>{e}</p>
                  ))}
                </div>
              </div>
              <div className="cards-ustunluk-button">
                {dataK.ÜstünlüklərA && dataK.ÜstünlüklərA.map((e,i)=>(
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
                <a href={dataK.TarifLink}>{dataK.TariflərCedvel}</a>
              </div>
            </div>
            {dataK.type === "Debet kartlar" ? (
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
                    <h3>{dataK.Güzəştmüddəti}</h3>
                  </div>
                  <div className="cards-right">
                    <p>{dataK.Güzəştmüddəti}</p>
                  </div>
                </div>
                <div className="cards-item">
                  <div className="cards-left">
                    <h3>{dataK.Kreditxəttiüzrəlimitinmüddəti}</h3>
                  </div>
                  <div className="cards-right">
                    <p>{dataK.Kreditxəttiüzrəlimitinmüddəti}</p>
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
                    <a href={dataK.TarifLink}>{dataK.TariflərCedvel2}</a>
                  </div>
                </div>
              </>
            )}
          </div>
        </div>
      </div>
</>
}
    </>

  );
}

export default CardsId;
