import React, { useEffect } from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
// import { useTranslation } from "react-i18next";

function Faq() {
  const [dataF, setdataF] = useState([]);
  const [value , setvalue] = useState("");
  const [yazilar , setyazilar] = useState([]);

  const filtervalue = dataF.filter((data) => {
    return data.sual.toLowerCase().includes(value.toLowerCase());
  });
  const onsubmit = (e)=>{
    e.preventDefault()
  }
  const handlchange = (e) => {
    if (e.target.value.trim() !== "") {
      setvalue(e.target.value);
    }
    else{
        setvalue('')
    }
   
  };

  useEffect(()=>{
    
    const fetchData = async () => {
      try {
       axios.get(localStorage.getItem('languages') ==="Aze"?`http://localhost:3300/dataFaq`:localStorage.getItem('languages')==="Ru"? "http://localhost:3301/dataFaq":"http://localhost:3302/datafaq").then((e)=>{
  
  
         console.log(e.data)
         setdataF(e.data);
       })
      } catch (error) {
        console.error(error);
      }
    };
    
    fetchData();
  },[])
  useEffect(()=>{

    const yazilar = async () => {
      try {
       axios.get(localStorage.getItem('languages') ==="Aze"?`http://localhost:3300/yazilar`:'http://localhost:3301/yazilar').then((e)=>{
        setyazilar(e.data);
       })
      } catch (error) {
        console.error(error);
      }
    };
    
    yazilar();
  },[])
//   const handsubmite = (e)=>{
//     e.preventDefault(); 
//   }
// const {t} =useTranslation()
  return (
    <>
      <div style={localStorage.getItem("darkLightMod")==="light"?({background:"linear-gradient(45deg, #76bc21, #8cc745)"}):({background:"#132a13"})} className="container">
        <div className="pading">
          <div className="faq-containers">
            <h1>{yazilar.teztezSualar}</h1>
            <form action="">
              <input onSubmit={onsubmit}
                type="text"
                placeholder={yazilar.placeHolder}
                onChange={handlchange}
                // onSubmit={(e)=>{
                //     e.preventDefault()
                // }}
              />
            </form>
          </div>
        </div>
      </div>
      <div className="faq-container">
        {filtervalue.map((data, ind) => (
          <div key={ind} className="faq-item">
            <div className="sual">
              {/* <b>{t(`${data.sual}`)}</b> */}
              {/* {console.log(t('sual'))} */}
              <b style={localStorage.getItem('darkLightMod')==='light'?({}):({color:"white"})}>{data.sual}</b>
            </div>
            <div className="cavab" >
              <p style={localStorage.getItem('darkLightMod')==='light'?({}):({color:"white"})}>
                <p>{data.def}</p>
                <a href="https://kredit.abb-bank.az/en/tamkart?utm_source=tamkart.az&utm_medium=faq&utm_campaign=tamkart">
                  {data.kreditAbb}
                </a>
                <a href="https://abb-bank.az/az/ferdi/bank-24-7/abb-mobile">
                  {data.Abbmobile}
                </a>
                <span>{data.yazi}</span>
                <Link to={"/"}>{data.tamkart}</Link>
                <a href="">{data.space2}</a>
                <span>{data.yazi2}</span>
                <a href="https://abb-bank.az/">{data.abb} </a>
                <span>{data.yazi3}</span>
                <span>{data.yazi4} </span>
                <a href="https://abb-bank.az/az/xidmet-shebekesi/terminallar">
                  {data.odenis}
                </a>
                <span> {data.yazi5}</span>
                <a href="https://abb-bank.az/az/xidmet-shebekesi/filiallar">
                  {data.filial}{" "}
                </a>
                <span>{data.yazi6}</span>
                <a href="https://abb-bank.az/az/xidmet-shebekesi/shobeler">
                  {data.sobeler}
                </a>
                <a href="https://www.loungekey.com/visacisseeloungeprogram">
                  {data.lounge}
                </a>
                {data.cavab}{" "}
                <a href="https://www.loungekey.com/en/visacisseeloungeprogram/create-account">
                  {data.internet}
                </a>{" "}
                <a href="https://abb-bank.az/">{data.abbb}</a>{" "}
                <Link to={"/"}>{data.tamkart}</Link>
                <Link to={"Partnyorlar"}>{data.partnyor}</Link>
                {data.cavab2}
                <a href="https://abb-bank.az/az/ferdi/qaygicash-klubu">
                  {data.Qaygi}
                </a>
                <a href="https://cabinet.tamkart.az/index.php/cabinet/login">
                  {data.sexsi}
                </a>
                {data.cavab3}
              </p>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}

export default Faq;
