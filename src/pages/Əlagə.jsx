import axios from 'axios';
import React, { useEffect, useState } from 'react'
// import Header from '../components/Header'

function Əlagə() {
  const [yazilarFilter, setYazilarFilter] = useState([]);
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
  const [elagecategory, setelageCategory] = useState([]);
  useEffect(() => {
    const elege = async () => {
      try {
        axios.get(localStorage.getItem('languages')==="Aze"? ` http://localhost:3300/elagecategory`:localStorage.getItem('languages')==="Ru"?`http://localhost:3301/elagecategory`:"http://localhost:3302/elagecategory").then((e) => {
          setelageCategory(e.data);
        });
      } catch (error) {}
    };

    elege();
  }, []);
  return (
    <>
    <div style={localStorage.getItem("darkLightMod")==="light"?({background:"linear-gradient(45deg, #76bc21, #8cc745)"}):({background:"#132a13"})}  className="container">
      <div className="pading">
        <div className="elage-container-name">
          <h1>{yazilarFilter.Bizimləlaqə}</h1>
        </div>
        
      </div>
    </div>
    <div id="elage">
      <div className="elage-container">
        <ul>
          {
      elagecategory.map((item,id)=>(
        <li key={id} style={localStorage.getItem('darkLightMod')==='light'?({}):({color:"white"})}>
          <b>{item.name}</b> 
          <span >{item.title}</span>
        </li>
      ))
    }
        </ul>
      </div>
    </div>
    
    </>
  )
}

export default Əlagə