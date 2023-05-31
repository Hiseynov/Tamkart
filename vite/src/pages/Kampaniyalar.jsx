import React, { useState } from 'react'
import { dataKampaniya } from '../../data/data'
import PopopKampaniya from '../components/PopopKampaniya'

function Kampaniyalar() {
  const [datakamp,setDataKamp]= useState(dataKampaniya)
  const [popop,setPopop]=useState(false)
  const [dataitem,setDataItem]=useState('')
console.log(popop);
function none(params) {
  setPopop(params)
}
  return (
    <>
    <div className="container">
      <div className="pading">
        <div className="Kampaniyalar-container">
        <h1>Kampaniyalar</h1>
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
                  <h1>{item.name}</h1>
                  {item.elave?(
                    <p>{item.elave}</p>
                  ):''}
                </div>
                <div className="kampaniya-list kampaniya-info">
                  <p>{item.data}</p>
                  
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