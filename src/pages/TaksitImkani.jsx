import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';

function TaksitImkani() {
  const [yazilarFilter,setYazilarFilter]=useState([])

    useEffect(() => {
        const filterYazilar = async () => {
          try {
            axios.get(localStorage.getItem('languages')==="Aze"? `http://localhost:3300/yazilar`:localStorage.getItem('languages')==="Ru"?` http://localhost:3301/yazilar`:" http://localhost:3302/yazilar").then((e) => {
              setYazilarFilter(e.data);
            });
          } catch (error) {}
        };
    
        filterYazilar();
      }, []);
  return (
    <>
        <div style={localStorage.getItem("darkLightMod")==="light"?({background:"linear-gradient(45deg, #76bc21, #8cc745)"}):({background:"#132a13"})} className="container">
            <div className="taksit-container">
                <div className="taksit-container-text">
                    <h3>{yazilarFilter.taksityazilar} </h3>
                    <p> 
                        <Link to={'/Login-Registr'}>{yazilarFilter.Sifarişet}</Link>
                    </p>
                </div>
                <div className="taksit-container-photo">
                    <img src="https://tamkart.az/assets/frontend/images/tamkart-banner.png" alt="" />
                </div>
            </div>
        </div>
        <div id="Takit">
            <div className="Taksit-button">
                <h3>{yazilarFilter.Tamal}</h3>
                <p>{yazilarFilter.TamKartlaseçilmiş}</p>
                <button>
                    <Link to={'/' + yazilarFilter.Partnyorlar}>{yazilarFilter.Partnyorlarabax}</Link>
                </button>
                
                </div>       
        </div>
    </>
  )
}

export default TaksitImkani