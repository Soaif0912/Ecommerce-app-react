
const CartReducer = (state, action) => {
    switch (action.type) {
        case "ADD_TO_CART":
            let { id, color, amount, product } = action.payload;

            let existingProduct = state.cart.find((curElem)=>
                curElem.id === (id + color)
            )

            if (existingProduct){
                let updateProduct = state.cart.map((curElem)=>{
                    if(curElem.id == id + color){
                        let newAmount = curElem.amount + amount;

                        if(newAmount >= curElem.maxAmount){
                            newAmount = curElem.maxAmount;
                        }
                        return{
                            ...curElem,
                            amount: newAmount,
                        }
                    }else{
                        return{
                            ...curElem,
                        }
                    } 
                })
                return{
                    ...state,
                    cart: updateProduct,
                }
            }else{

                let cartProduct = {
                    id: id + color,
                    name: product.name,
                    color: color,
                    amount: amount,
                    image: product.image[0].url,
                    maxAmount: product.stock,
                    price: product.price,
                };
                return {
                    ...state,
                    cart: [...state.cart, cartProduct],
                };
            }
        
        case "SET_INCREMENT":
            let updateProduct = state.cart.map((curElem)=>{
                if(curElem.id === action.payload){
                    curElem.amount = curElem.amount + 1;
                }
                if(curElem.amount >= curElem.maxAmount){
                    curElem.amount = curElem.maxAmount;
                }
                return{
                    ...curElem,
                    amount: curElem.amount,
                }
            })
            return{
                ...state,
                cart: updateProduct,
            }

        case "SET_DECREMENT":
            let updatecart = state.cart.map((curElem)=>{
                if(curElem.id === action.payload){
                    curElem.amount = curElem.amount - 1;
                }
                if(curElem.amount >= curElem.maxAmount){
                    curElem.amount = curElem.maxAmount;
                }
                return{
                    ...curElem,
                    amount: curElem.amount,
                }
            })
            return{
                ...state,
                cart: updatecart,
            }

        case "REMOVE_ITEM":
            let newCart = state.cart.filter((curElem)=>
                curElem.id != action.payload
            )
            return{
                ...state,
                cart: newCart,
            }

        case "CLEAR_CART":
            return{
                ...state,
                cart: [],
            }

        case "TOTAL_ITEM":
            let totalItem = state.cart.reduce((initialvalue,CurValue)=>{
                let {amount} = CurValue;
                initialvalue = initialvalue + amount;
                return initialvalue;
            },0);
            return{
                ...state,
                total_item: totalItem ,
            };

        case "TOTAL_PRICE":
            let totalPrice = state.cart.reduce((initialValue, CurValue)=>{
                let {amount, price} = CurValue;
                initialValue = initialValue + (amount * price);
                return initialValue;
            },0);
            return{
                ...state,
                total_price: totalPrice,
            }

        default:
            return state;
    }
}

export default CartReducer;
