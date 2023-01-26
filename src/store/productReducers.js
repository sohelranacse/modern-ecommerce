let product
let updatedPrice
let updatedQty

const a=JSON.parse(localStorage.getItem('addedProducts'))
const q=JSON.parse(localStorage.getItem('totalQty'))
const s=JSON.parse(localStorage.getItem('subTotalPrice'))
const p = JSON.parse(localStorage.getItem('totalPrice'))

const initialState={
    addedProducts:a || [],
    totalQty:q || 0,
    subTotalPrice: s || 0,
    totalPrice: p || 0,
}

const productReducers = (state=initialState, action) => {
    if (action.type === "ADD_TO_CART") {
        product = action.payload;
        product.qty = action.qty?action.qty:1;
        updatedQty = state.totalQty + product.qty;
        updatedPrice = state.subTotalPrice + Number(product.price*product.qty);
        return {
            ...state,
            addedProducts: [product, ...state.addedProducts],
            subTotalPrice: updatedPrice,
            totalPrice: updatedPrice,
            totalQty: updatedQty,
        }
    } else if (action.type === "INC_PRODUCT") {
        product = state.addedProducts.find(v=>v.id===action.payload.id);
        // console.log(product.qty+1);
        product.qty = product.qty+1
        updatedQty = state.totalQty + 1;
        updatedPrice = state.subTotalPrice + Number(product.price);
        return {
            ...state,
            subTotalPrice: updatedPrice,
            totalPrice: updatedPrice,
            totalQty: updatedQty,
        }
    } else if (action.type === "DEC_PRODUCT") {
        
        if (action.payload.qty > 1) {
            product = state.addedProducts.find(v=>v.id===action.payload.id);
            product.qty = product.qty-1
            updatedQty = state.totalQty - 1;
            updatedPrice = state.subTotalPrice - product.price;

            return {
                ...state,
                subTotalPrice: updatedPrice,
                totalPrice: updatedPrice,
                totalQty: updatedQty,
            }
        } else {
            return state
        }
    } else if (action.type === "DELETE_PRODUCT") {
    
        product = action.payload;
        const filterd = state.addedProducts.filter(item => product.id !== item.id);
        updatedQty = state.totalQty - Number(product.qty);
        updatedPrice = state.subTotalPrice - (Number(product.price) * Number(product.qty))

        return {
            ...state,
            addedProducts: [ ...filterd],
            subTotalPrice: updatedPrice,
            totalPrice: updatedPrice,
            totalQty: updatedQty
        }
    } else if (action.type === "ADD_SHIPPING_METHOD") {
        
        if(action.name==="Free Delivery") {
            updatedPrice=state.subTotalPrice
        } else {
            updatedPrice=state.subTotalPrice+Number(action.value)
        }
        
        return {
            ...state,
            totalPrice:updatedPrice
        }
    } else {
        return state
    }
}

export default productReducers