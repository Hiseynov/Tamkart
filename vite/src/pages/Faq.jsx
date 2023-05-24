import React from "react";
import { useState } from "react";
import { dataFaq } from "../../data/data";
import { Link } from "react-router-dom";

function Faq() {
  const [dataF, setdataF] = useState(dataFaq);
  const [value , setvalue] = useState("");
  const filtervalue = dataF.filter((data) => {
    return data.sual.toLocaleLowerCase().includes(value.toLocaleLowerCase());
  });
  const handlchange = (e) => {
    if (e.target.value.trim() !== "") {
      setvalue(e.target.value);
    }
    else{
        setvalue('')
    }
   
  };
//   const handsubmite = (e)=>{
//     e.preventDefault(); 
//   }
  return (
    <>
      <div className="container">
        <div className="pading">
          <div className="faq-containers">
            <h1>Tez-tez verilən suallar</h1>
            <form action="">
              <input
                type="text"
                placeholder="Axtardığınız suali daxil edin"
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
              <b>{data.sual}</b>
            </div>
            <div className="cavab">
              <p>
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
