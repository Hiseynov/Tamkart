import React from "react";
import { Link } from "react-router-dom";

function Header({def}) {
  const page = ["Kartlar", "Kampaniyalar", "Partnyorlar", "Əlaqə"];
  return (
    <>
      <header id="header">
        <nav className="nav">
          <div className="logo">
            <Link to={"/"}>tam.</Link>
          </div>
          <div className="page">
            <ul>
              {page.map((item, index) => (
                <Link key={index} to={`${item}`}>
                  <li>{item}</li>
                </Link>
              ))}
            </ul>
          </div>
          <div className="nav-right">
            <a className="phone" href="tel:+994506041905">
             <img src="https://cdn.pixabay.com/photo/2014/04/02/11/16/phone-305741_1280.png" alt="" />
              <span>937</span>
            </a>
            <a className="kabinet" href="https://cabinet.tamkart.az/">
            <i class="fa-regular fa-circle-user"></i>
              <span>Şəxsi kabinet</span>
            </a>
          </div>
        </nav>
       {/* <div className="swiper-container">
        {def}

       </div> */}
      </header>
      
    </>
  );
}

export default Header;
