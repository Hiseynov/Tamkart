import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
    name:'cart',
    initialState:{
        itemsInCard:localStorage.getItem('cart')?JSON.parse(localStorage.getItem('cart')):[]
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
        }
    }
})




// export const { cart } = cartSlice;
export const { setItemInCard, deletItemFromCart } = cartSlice.actions;
export default cartSlice.reducer


