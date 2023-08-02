import axios from 'axios'
import React, { useEffect, useState } from 'react'
import PopopKampaniya from '../components/PopopKampaniya'

function Kampaniyalar() {
  const [datakamp,setDataKamp]= useState([])
  const [popop,setPopop]=useState(false)
  const [dataitem,setDataItem]=useState('')
function none(params) {
  setPopop(params)
}
const [yazilarFilter, setYazilarFilter] = useState([]);
useEffect(() => {
  const filterYazilar = async () => {
    try {
      axios.get(localStorage.getItem('languages')==="Aze"? `http://localhost:3300/yazilar`:localStorage.getItem('languages')==='Ru'?` http://localhost:3301/yazilar`:" http://localhost:3302/yazilar").then((e) => {
        setYazilarFilter(e.data);
      });
    } catch (error) {}
  };

  filterYazilar();
}, []);
useEffect(()=>{

  const fetchData = async () => {
    try {
     axios.get(localStorage.getItem('languages') ==="Aze"?` http://localhost:3300/dataKampaniya`:localStorage.getItem('languages')==='Ru'? " http://localhost:3301/dataKampaniya":"http://localhost:3302/datacampaniya").then((e)=>{


       setDataKamp(e.data);
     })
    } catch (error) {
      console.error(error);
    }
  };
  
  fetchData();
},[])
  return (
    <>
    <div style={localStorage.getItem("darkLightMod")==="light"?({background:"linear-gradient(45deg, #76bc21, #8cc745)"}):({background:"#132a13"})} className="container">
      <div className="pading">
        <div className="Kampaniyalar-container">
        <h1>{yazilarFilter.Kampaniyalar}</h1>
    </div>
      </div>
    
    </div>
    <div id="main-kampaniya">
      <div className="kampaniya">
        <div className="kampaniya-container">
          {
            datakamp.map((item,id)=>(
              <div key={id} className="kampaniyalar-item" onClick={()=>{setPopop(true),setDataItem(item)}  }>
                <div className="kampaniya-img">
                  <img src={item.img} alt="" />
                </div>
                <div className="kampaniya-word">
                    <div className="kampaniya-list kampaniya-name">
                  <h1 style={localStorage.getItem("darkLightMod")==="light"?({color:"black"}):({color:'white'})}>{item.name}</h1>
                  {item.elave?(
                    <p style={localStorage.getItem("darkLightMod")==="light"?({color:"black"}):({color:'white'})}>{item.elave}</p>
                  ):''}
                </div>
                <div className="kampaniya-list kampaniya-info">
                  <p style={localStorage.getItem("darkLightMod")==="light"?({color:"black"}):({color:'white'})}>{item.data}</p>
                  
                </div>
                </div>
              
                
              </div>
            ))
          }

        </div>
        {
          popop? 
          
          <PopopKampaniya popop={popop} setPopop={setPopop} popopNone={none} def={dataitem}></PopopKampaniya>
          :
          ''
        }
      </div>
      
    </div>
    </>
  
  )
}

export default Kampaniyalar