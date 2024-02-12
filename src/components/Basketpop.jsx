import axios from 'axios'
import React, { useEffect } from 'react'
import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { deletItemFromCart } from '../redux/cart/reducer'


function Basket() {
    // const cart = useSelector((state) => state.reducer).cart
    const items = useSelector(state => state.cart.itemsInCard)
    const [yazilarFilter, setYazilarFilter] = useState([]);
    // const totalPrice = items.reduce ( (acc, game ) => acc +=game.price, 0 )
    const [openBasket,setOpenBasket]=useState(false)
    const dispatch = useDispatch()
    useEffect(() => {
      const filterYazilar = async () => {
        try {
          axios
            .get(
              localStorage.getItem("languages") === "Aze"
                ? `http://localhost:3300/yazilar`
                : localStorage.getItem("languages") === "Ru"
                ? ` http://localhost:3301/yazilar`
                : " http://localhost:3302/yazilar"
            )
            .then((e) => {
              setYazilarFilter(e.data);
            });
        } catch (error) {}
      };
  
      filterYazilar();
    }, []);
  return (
    <>
    <div id="basketmenu">
      <div className="iconbasket">
        <i onClick={()=>setOpenBasket(!openBasket) } className="fa-solid fa-cart-shopping"> </i> 
        <sup>
          {items.length}
        </sup>
        {/* "" */}
        {/* localStorage.getItem("darkLightMod") === "light"?({background:"#2ab811"}):({background:"#000"}) */}
             <div className={`${localStorage.getItem("darkLightMod") === "light"?"basketLight":"basketDark"} basket-container`} style={openBasket?({transform:`scaleX(${1})`}):({transform:`scaleX(${0})`})}>
              <h3>{yazilarFilter.sebet}</h3>
               {
                items.map((i,id)=>(
                  // <p>{i.name}
                  // <img src={i.img[0]} alt="" />
                  // </p>
                  <>
                  <div key={id} className="basket-menu">
                         <div  className="basket-item" >
                      <div className="basket-photo">
                        <img src={i.img[0]} alt="" />
                      </div>
                      <div className="basket-word">
                        <p>{i.name}</p>
                        <strong>{i.qiymet[1]}</strong>
                      </div>
            
                      
                     </div>
                     <div onClick={()=> dispatch(deletItemFromCart(i.id))} className="basket-delete">
                      <span >
                      <i class="fa-solid fa-trash-can"></i>
                      </span>
                     </div>
                  </div>
                
                  </>
                
                ))
               
            }
          </div>
      </div>
    </div>,
      
    </>
  )
}

export default Basket