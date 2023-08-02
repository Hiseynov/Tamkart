import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

function Footer() {
  const [yazilarFilter, setYazilarFilter] = useState([]);
  const footeraze =  ["Kartlar","Partnyorlar","FAQ","Əlaqə"]
  const footerru =  ["Карты","Партнеры","FAQ","Контакты"]
  const footerangl =  ["Cards", "Partners", "FAQ", "Contacts"]
  useEffect(() => {
    const filterYazilar = async () => {
      try {
        axios.get(localStorage.getItem('languages')==="Aze"? `http://localhost:3300/yazilar`:localStorage.getItem('languages')==="ru"?` http://localhost:3301/yazilar`:" http://localhost:3302/yazilar").then((e) => {
          setYazilarFilter(e.data);
        });
      } catch (error) {}
    };

    filterYazilar();
  }, []);
  return (
    <>
    <div id="footer">
      <div className="footer-top">
        <div className="footer-ph">
          <div className="iphone">
            <div className="iphone-case">
            </div>
            <div className="iphone-into">
            </div>
          </div>
          <div className="samsung">
            <div className="samsung-case">

            </div>
            <div className="samsung-into">

            </div>
          </div>
        </div>
        <div  className="footer-word">
          <b style={localStorage.getItem('darkLightMod')==='light'?({}):({color:"white"})}>{yazilarFilter.ABBmobile}</b>
          <p style={localStorage.getItem('darkLightMod')==='light'?({}):({color:"white"})}>{yazilarFilter.Abbmobiletittle} </p>
          <ul>
            <li className='word-category store'>
              <a href="https://apps.apple.com/us/app/ibam-mobil-bank/id1251456175?amp%3Bmt=8&ls=1"></a>
            </li>
            <li className='word-category play'>
              <a href="https://play.google.com/store/apps/details?id=iba.mobilbank"></a>
            </li>
            <li className='word-category gallery'>
              <a href="https://appgallery.huawei.com/app/C105078433"></a>
            </li>
          </ul>
        </div>
      </div>
      <div className="footer-bottom">
        <div className="bottom-left">
        <a href="https://abb-bank.az/"><img src="https://abb-bank.az/img/logo.svg?v=163" alt="" /></a>
          <div className="bottom-left-menyu">
            <ul>
              {/* <li><Link to={'Kartlar'}>Kartlar</Link></li>
              <li><Link to={'Partnyorlar'}>Partnyorlar</Link></li>
              <li><Link to={"Faq"}>FAQ</Link></li>
              <li><Link to={'Əlaqə'}>Bizimlə əlaqə</Link></li> */}
              {(localStorage.getItem('languages')==="Aze"?(footeraze):localStorage.getItem('languages')==="ru"?(footerru):(footerangl)).map((item,id)=>(
                <li key={id}>
                  <Link to={item} style={localStorage.getItem('darkLightMod')==='light'?({}):({color:"white"})} >
                     {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div className="bottom-right">
          <ul>
            <li><a href="https://www.facebook.com/tamkart.az/" className='facebook navigate'><i class="fa-brands fa-facebook-f"></i></a></li>
            <li><a href="https://www.instagram.com/tamkart.az/" className='instagram navigate'><i class="fa-brands fa-instagram"></i></a></li>
            <li><a href="https://www.youtube.com/channel/UCOACvV-QSjfRII38PJdUyYw" className='youtube navigate'><i class="fa-brands fa-youtube"></i></a></li>
          </ul>
        </div>
      </div>
    </div>
    </>
  )
}

export default Footer