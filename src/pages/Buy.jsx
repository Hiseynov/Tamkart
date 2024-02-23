import axios from 'axios';
// import binking from "binking";
import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { deletItemFromCart, PopopBuy } from '../redux/cart/reducer';


function Buy() {
  const [cardNumber, setCardNumber] = useState('');
  const dispatch = useDispatch()
  const [konfeti,setkonfeti] = useState(false)
  var b = new Date()
  b = b.toDateString()
  console.log(b);
  // const date = new Date(); 
  // const handleChange = (e) => {
  //     const { value } = e.target;
  //     setCardNumber(value);
  //     e.preventDefault();
  //     // Удаление пробелов из номера карты
  //     const trimmedCardNumber = cardNumber.replace(/\s/g, '');
  
  //     // Проверка наличия только цифр в номере карты
  //     // if (!/^\d+$/.test(trimmedCardNumber)) {
  //     //     setIsValid(false);
  //     //     return;
  //     // }
  
  //     // Проверка длины номера карты
  //     if (cardNumber.length !== 16) {
  //         setIsValid(false);
  //         return;
  //     }
  //     else{
  //       setIsValid(true);
  //     }
  //     console.log(value.length);
  
  //     // Проверка контрольной суммы по алгоритму Луна
  //     // let sum = 0;
  //     // for (let i = 0; i < trimmedCardNumber.length; i++) {
  //     //     let digit = parseInt(trimmedCardNumber[i]);
  
  //     //     if (i % 2 === 0) {
  //     //         digit *= 2;
  //     //         if (digit > 9) {
  //     //             digit -= 9;
  //     //         }
  //     //     }
  
  //     //     sum += digit;
  //     // }
  
  //     // setIsValid(sum % 10 === 0);
  // };
  
  // const handleSubmit = (e) => {
   
  // };
    const [yazilarFilter, setYazilarFilter] = useState([]);
    // const dispatch = useDispatch();
    const items = useSelector(state => state.cart.BuyEl)
    const open = useSelector(state => state.cart.BuyOpen)
    const submit =(e)=>{
      e.preventDefault()
      setkonfeti(true)
      dispatch(deletItemFromCart(items.id)),dispatch(PopopBuy(true))
    }
    const CartNum =(e)=>{
     setCardNumber(e.target.value)
    }
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
      
  return (
    <>
     <div className='BuyElement'>
      {
        open && (
          <>
    <div class="confetti">
  <div class="confetti-piece"></div>
  <div class="confetti-piece"></div>
  <div class="confetti-piece"></div>
  <div class="confetti-piece"></div>
  <div class="confetti-piece"></div>
  <div class="confetti-piece"></div>
  <div class="confetti-piece"></div>
  <div class="confetti-piece"></div>
  <div class="confetti-piece"></div>
  <div class="confetti-piece"></div>
  <div class="confetti-piece"></div>
  <div class="confetti-piece"></div>
  <div class="confetti-piece"></div>
  {/* background: rgb(44, 70, 57); */}
  <div  style={
          localStorage.getItem("darkLightMod") === "light"
            ? ({background: "#79BD26" })
            : ({ background: "rgb(44, 70, 57)" ,color:"white"})
        } className="popopBuy">
  <div className="popopBuy-container">
    <h3>{yazilarFilter.sucses}</h3>
    <div className="buyCart-info">
      <p><strong>{yazilarFilter.KartAdi}</strong> {items.name}</p>
      <p><strong>{yazilarFilter.KartSekil}</strong><img src={items.img[0]} alt="" /></p>
      <p><strong>{yazilarFilter.KartQiymet}</strong>{items.qiymet[1]}</p>
      {/* <p><strong>Alindigi vaht</strong>{date}</p> */}
      <p><strong>{yazilarFilter.Odeniskart}</strong>{cardNumber}</p>
      <p><strong>{yazilarFilter.odenilenkart}</strong>4127 1234 5678 9102</p>
      <p><strong>{yazilarFilter.vaht}</strong>{b}</p>
    </div>
    <Link onClick={()=>dispatch(PopopBuy(false))} className='buy-button'  to={"/"}>{yazilarFilter.Anasehife}</Link>
  </div>
</div>
</div>
          </>
        )
      }


        <div className="BuyElement-container">
          <h2>{yazilarFilter.secilmis}</h2>
            <div className="BuyElementItem">
            <div style={localStorage.getItem('darkLightMod')==='light'?({}):({color:"white"})} className="BuyElement-word">
                <h3>{items.name}</h3>
                <p>{items.Karthaqqında[1]}</p>
                <p><strong>{items.qiymet[0]}</strong>: {items.qiymet[1]}</p>
            </div>
            <div className="BuyElement-photo">
                 <img src={items.img[0]} alt="" />
            </div>
            </div>
        </div>
    
       
    </div>
    <form onSubmit={submit}>
      <div style={localStorage.getItem('darkLightMod')==='light'?({}):({color:"white"})} className='biking_container'>
        <h3>{yazilarFilter.odenisUsulu} :</h3>
        <div className="myCart">
        <strong>{yazilarFilter.cartOdenis}</strong>
       <div className='biking-center'>
       <div class="binking__panels">
        <div class="binking__panel binking__front-panel">
          <img class="binking__form-bank-logo binking__hide" src='https://seeklogo.com/images/T/tam-logo-6FEC7E651B-seeklogo.com.png'></img>
          <img className='binking__hide biking__abb' src="https://upload.wikimedia.org/wikipedia/commons/thumb/3/35/ABB_Logo.png/1200px-ABB_Logo.png"  />
          <img class="binking__form-brand-logo binking__hide" src='https://logohistory.net/wp-content/uploads/2023/08/Visa-Logo.png'></img>
          <div class="binking__front-fields">
            <input onChange={CartNum} required name="cardnumber" autocomplete="cc-number" inputmode="numeric" pattern="[0-9]{16}" class="binking__field binking__number-field" type="text" placeholder="0000 0000 0000 0000"></input>
            <label class="binking__label binking__date-label">Valid thru</label>
            <input required name="ccmonth" autocomplete="cc-exp-month" inputmode="numeric" pattern="[0-9]{2}" class="binking__field binking__month-field binking__date-field" type="text" placeholder="MM"></input>
            <input required name="ccyear" autocomplete="cc-exp-year" inputmode="numeric" pattern="[0-9]{2}" class="binking__field binking__year-field binking__date-field" type="text" placeholder="YY"></input>
          </div>
        </div>
        <div class="binking__panel binking__back-panel">
          <input required name="cvc" autocomplete="cc-csc" placeholder='cvc' inputmode="numeric" pattern="[0-9]{3}" class="binking__field binking__code-field" type="password"></input>
          <label class="binking__label binking__code-label">Safetycode</label>
        </div>
      </div>
       </div>
        </div>
        <div className="yourCart">
          <strong>{yazilarFilter.cartaOde} :</strong>
          <div  class="binking__panels-2">
        <div class="myItsCard binking__front-panel">
          <img class="binking__form-bank-logo binking__hide" src='https://seeklogo.com/images/T/tam-logo-6FEC7E651B-seeklogo.com.png'></img>
          <img className='binking__hide biking__abb' src="https://upload.wikimedia.org/wikipedia/commons/thumb/3/35/ABB_Logo.png/1200px-ABB_Logo.png"  />
          <img class="binking__form-brand-logo binking__hide" src='https://logohistory.net/wp-content/uploads/2023/08/Visa-Logo.png'></img>
          <div class="binking__front-fields">
            <input  required  value="4127 1234 5678 9102"  class="binking__field binking__number-field" type="text" readOnly ="readOnly"></input>
            <label class="binking__label binking__date-label">Valid thru</label>
            <input readOnly ="readOnly"  class="binking__field binking__month-field binking__date-field" type="text" value="01"></input>
            <input readOnly ="readOnly" value="25" class="binking__field binking__year-field binking__date-field" type="text"></input>
          </div>
        </div>
        </div>
        </div>
      <button  type='submit'>{yazilarFilter.almago} {items.qiymet[1]}</button>
      </div>
      {/* dispatch(deletItemFromCart(items.id)),dispatch(PopopBuy(true)) */}
    </form>

    </>
   
  )
}

export default Buy
