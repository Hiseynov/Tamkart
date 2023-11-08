import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
    name:'cart',
    initialState:{
        itemsInCard:[]
    },
    reducers:{
        setItemInCard:(state,action) =>{
            state.itemsInCard.push(action.payload)
        },
        deletItemFromCart:(state,action)=>{
            state.itemsInCard = state.itemsInCard.filter(card =>card.id !== action.payload)
        }
        // ,
        // deleteI: (state, action) => {
        //     const id = action.payload
        //     state.cart = [...state.cart.filter(x=> x.id != id)]
        //     localStorage.setItem('cart', JSON.stringify(state.cart) )
        //   }
    }
})




// export const { cart } = cartSlice;
export const { setItemInCard, deletItemFromCart } = cartSlice.actions;
export default cartSlice.reducer


