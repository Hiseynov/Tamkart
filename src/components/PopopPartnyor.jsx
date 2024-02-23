import React from 'react'
import GoogleMapReact from "google-map-react";
// import { Repeat } from 'react-bootstrap-icons';


function PopopPartnyor({ setPopop, def }) {
  const defaultProps = {
    center: {
      lat: 40.570082,
      lng: 49.688976},
    zoom: 15,
  };
  const AnyReactComponent = ({ text }) => <div>{text}</div>;
  return (
    <>

      <div className="oferwlof" onClick={() => setPopop(false)}></div>
      <div id="Popop-partnorlar">
        <div className="Popop-partnorlar-container">
          <div className="Popop-partnorlar-container-left">
            <div className="Popop-partnorlar-container-left-top">
              <div className="Popop-partnorlar-firstImg">
              <img src={def.img} alt="" />
              <div className="positionLeft">
                {def.logo}
              </div>
              <div className="positionRight">
                <img src={def.iconLogo} alt="" />
              </div>
              </div>

            </div>
            <div className="Popop-partnorlar-container-left-button">
              <div className="Popop-partnor-button-name">
                <h3>{def.name}</h3>
              </div>
              <div className="Popop-partnor-taksit">
                <div className="Popop-partnor-taksit-name">
                  {def.Taksit}
                </div>
                <div className="Popop-partnor-taksit-aylar" style={{display:'grid',gridTemplateColumns:(`repeat(${def.aylar.length},1fr)`),gap:'5px'}}>
                  {def.aylar.map((item,i)=>(<b  style={{background: item ==='2'?"#e2e0e0":item==='3'?"#E88B8B":item==="6"?"#3c7eea":item==='9'?"aquamarine":item==='12'?"#acbd6f":item==='18'?'#f3d219':item==='24'?'cadetblue':''}} key={i} >{`${item}`} ay</b>))}
                </div>
                <div className="Popop-partnor-category">
                  <ul>
                    {def.info.map((item,i)=>(<li key={i}>{item}</li>))}
                  </ul>
                </div>
              </div>
              <div className="Popop-partnorlar-location">
                <img src={def.iconLogotion} alt="" />
                <span>{def.location}</span>
              </div>
            </div>
          </div>
          <div className="Popop-partnorlar-container-right">
          <div style={{ height: "100%" }}>
          {/* <GoogleMapReact 
            bootstrapURLKeys={{ key: "" }}
            defaultCenter={defaultProps.center}
            defaultZoom={defaultProps.zoom}
          >
            <AnyReactComponent style={{position:"relative"}}
              lat={59.955413}
              lng={30.337844}
              text="My Marker"
            />
 
          </GoogleMapReact> */}
          <img src="https://media.wired.com/photos/59269cd37034dc5f91bec0f1/master/w_1920,c_limit/GoogleMapTA.jpg" alt="" />           <div className='MapLocation' style={{position:"absolute"}}>
              <ul>
                <li>{def.name}</li>
                <li className='Maplocation'>{def.location}</li>
              </ul>
            </div>
            <div className='MapIcon' style={{position:'absolute'}}>
              <img src={def.iconLogo} alt="" />
            </div>
        </div>
          </div>
        </div>
      </div>
    </>
    
  )
}

export default PopopPartnyor