import React from "react";
import { Link } from "react-router-dom";

function popup({ setPopop, popopNone, def }) {
  return (
    <>
    
      <div className="oferwlof" onClick={() => setPopop(false)}></div>
      <div id="popop-main">
        <div className="popop-container">
          <div className="popop-top">
            <div className="popop-top-ox" onClick={() => popopNone(false)}>
              <i class="fa-solid fa-x"></i>
            </div>
          </div>
          <div className="popop-button">
            <div className="popop-photo">
              <img src={def.img} alt="" />
            </div>
            <div className="popop-word">
              <div className="popop-logo">
                <h1>
                  {def.name} <span>{def.data}</span>
                </h1>
              </div>
              <div className="popop-categories">
                {def.fistP?(
                   <>
                     <p>{def.fistP[0]}</p>
                   </>
                ):''}
                {def.info?(
                  <>
                       <p>
                  <span>{def.info[0]}</span>
                  {def.link?(<a href={def.link[1]}>{def.link[0]}</a>):""} {def.b?(<b>{def.b[0]}</b>):""}
                  <span>{def.info[1]}</span>
                  <span>{def.info[2]}</span>
                  <span>{def.info[3]}</span>
                  <span>{def.info[4]}</span>
                  <span>{def.info[5]}
                  {def.strongP? (
                      <>
                        <strong>{def.strongP}</strong>
                        <strong>{def.spanP}</strong>
                      </>) : ("")}
                  </span>
                  </p>
                  </>
                ):''}
                {def.pLink?(
                  <>
                   {def.pLink[0]?(<p>{def.pLink[0]}</p>):''}
                   {def.pLink[1]?(<p>{def.pLink[1]}</p>):''}
                   <p>
                    {def.pLink[2]?( <span>{def.pLink[2]}</span>):''}
                   {def.aLink[0]?(<Link to={'/'}>{def.aLink[0]}</Link>):''}
                   {def.pLink[3]?(<span>{def.pLink[3]}</span>):''}
                   </p>
                   <p>
                   {def.pLink[4]?( <span>{def.pLink[4]}</span>):''}
                   {def.aLink[0]?(<Link to={'/'}>{def.aLink[0]}</Link>):''}
                   {def.pLink[5]?(<span>{def.pLink[5]}</span>):''}
                   </p>
                   {def.pLink[6]?(<p>{def.pLink[6]}</p>):''}
                   {def.pLink[7]?(<p>{def.pLink[7]}</p>):''}

                  </>
                 
                ):''}
               
                {def.lis?(
               <>
                  {def.lis.map((e,i)=>(
                    <p key={i}><b>{e}</b></p>
                  ))}
               </>

                ):''}

                {def.li? (
                  <ul>
                    {def.li.map((e,i)=>(
                      <li key={i}>
                        <strong>{e.pst}</strong>
                        <span>{e.list}</span>
                      </li>
                    ))}
                  </ul>
                ) : (
                  ""
                )}
                {def.sert ? <span>{def.sert}</span> : ""}
              </div>
            </div>
            {def.button ? (
              <div className="popop-button">
                <a href={def.button[1]}>{def.button[0]}</a>
              </div>) : ("")}
              {def.buttonLink?(<div className="popop-button">
                <Link to={"/TamGenc"}>{def.buttonLink}</Link>
              </div>):''}
              {def.buttonTamkart?(
                <Link to={'/Kartlar'}>{def.buttonTamkart[0]}</Link>
              ):''}
              {def.second?(
                <p>{def.second[0]}</p>
              ):""}
              {def.button2?(<a href={def.button2[1]}>{def.button2[0]}</a>):''}
          </div>
        </div>
      </div>
    </>
  );
}

export default popup;
