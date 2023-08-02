import React from 'react'

function DarkLight() {
  return (
    <>
    <div className="DarkLight-container">
           
            <span onClick={()=>localStorage.getItem("darkLightMod")==="light"?(localStorage.setItem("darkLightMod","dark"),location.reload()):(localStorage.setItem("darkLightMod","light"),location.reload())} style={localStorage.getItem("darkLightMod")==="light"?({boxShadow:"inset 0px 0px 8px 3px #86c43c"}):({boxShadow:'inset 0px 0px 8px 3px #132a13'})} className='ckeckbox'>
            <span style={localStorage.getItem("darkLightMod")==="dark"?({right:"3px",background:'#132a13'}):({left:'3px',background:'#89c640'})} className='yumuru'></span>
           </span>
            
            {localStorage.getItem("darkLightMod")==="dark"?<i style={{right:'11px'}} onClick={()=>{localStorage.setItem("darkLightMod","light"),location.reload()}} className="fa-solid fa-moon"></i>: <i style={{left:'10px'}} onClick={()=>{localStorage.setItem("darkLightMod","dark"),location.reload()}} className="fa-solid fa-sun"></i>}
    </div>
            
     
    </>
  )
}

export default DarkLight