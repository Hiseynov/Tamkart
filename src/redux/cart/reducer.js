import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
    name:'cart',
    initialState:{
        itemsInCard:localStorage.getItem('cart')?JSON.parse(localStorage.getItem('cart')):[],
        BuyEl:localStorage.getItem('BuyElement')?JSON.parse(localStorage.getItem('BuyElement')):"",
        BuyOpen:localStorage.getItem('OpenPop')?JSON.parse(localStorage.getItem('OpenPop')):"",

    },
    reducers:{
        setItemInCard:(state,action) =>{
            const item = action.payload
            if(!state.itemsInCard.find(x=> x.id == item.id)) {
                state.itemsInCard = [...state.itemsInCard, action.payload];
                localStorage.setItem('cart', JSON.stringify(state.itemsInCard) ) 
            }
            else {
            //    alert('alrd add')
            }
        },
        deletItemFromCart:(state,action)=>{
            const id = action.payload
            state.itemsInCard = [...state.itemsInCard.filter(x=> x.id != id)]
            localStorage.setItem('cart', JSON.stringify(state.itemsInCard) )
        },
        BuyElement:(state,action)=>{
            state.BuyEl = action.payload
            localStorage.setItem('BuyElement', JSON.stringify(action.payload))
        },
        PopopBuy:(state,action)=>{
            state.BuyOpen = action.payload
            localStorage.setItem('OpenPop', JSON.stringify(action.payload))
        }
    }
})




// export const { cart } = cartSlice;
export const { setItemInCard, deletItemFromCart,BuyElement,PopopBuy } = cartSlice.actions;
export default cartSlice.reducer


