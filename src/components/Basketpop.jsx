import React from 'react'
import { useState } from 'react'
import { useSelector } from 'react-redux'

function Basket() {
    // const cart = useSelector((state) => state.reducer).cart
    const items = useSelector(state => state.cart.itemsInCard)
    // const totalPrice = items.reduce ( (acc, game ) => acc +=game.price, 0 )
    const [openBasket,setOpenBasket]=useState(false)
  return (
    <>
    <div id="basketmenu">
      <div className="iconbasket">
        <i onClick={()=>setOpenBasket(!openBasket) } className="fa-solid fa-cart-shopping">
      
         {/* mf */}
          </i> 
             <div className="basket-container" style={openBasket?({transform:`scaleX(${1})`}):({transform:`scaleX(${0})`})}>
               {
                
                items.map((i,id)=>(
                  // <p>{i.name}
                  // <img src={i.img[0]} alt="" />
                  // </p>
                  <>
                     <div className="basket-item" >
                      <div className="basket-photo">
                        <img src={i.img[0]} alt="" />
                      </div>
                      <div className="basket-word">
                        <p>{i.name}</p>
                        <strong>{i.qiymet[1]}</strong>
                      </div>
                     </div>
                  </>
                
                ))
               
            }
          </div>
      </div>
    </div>
      
    </>
  )
}

export default Basket