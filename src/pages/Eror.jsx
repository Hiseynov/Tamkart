import axios from 'axios';
import React from 'react'
import { useState } from 'react';
import { useEffect } from 'react';
import { Link } from 'react-router-dom'

function Eror() {
  const [yazilarFilter,setYazilarFilter]=useState([])

    useEffect(() => {
        const filterYazilar = async () => {
          try {
            axios.get(localStorage.getItem('languages')==="Aze"? `http://localhost:3300/yazilar`:localStorage.getItem('languages')==="Ru"?` http://localhost:3301/yazilar`:"http://localhost:3302/yazilar").then((e) => {
              setYazilarFilter(e.data);
            });
          } catch (error) {}
        };
    
        filterYazilar();
      }, []);
  return (
    <>
        <div className="eror-page" style={localStorage.getItem("darkLightMod")==="light"?({background:""}):({background:"black"})}>
            <div className="eror-container">
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTZ1HHmAl-Q8JIzlwecw52BIhxzl1TwkijBzg&usqp=CAU" alt="" />
                <h1>404</h1>
                <p>{yazilarFilter.Erormesage}</p>
                <Link to={'/'}>{yazilarFilter.Anasehife}</Link>
            </div>
            
        </div>
    </>
  )
}

export default Eror