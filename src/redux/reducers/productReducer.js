
const initialState = {
    product: [],
    cart: [],
    productDetails: [],
    upDatedCart:[],
  };
  
  const productReducer = (state = initialState, action) => {
    switch (action.type) {
      case 'FETCH_PRODUCT':
        return {
          ...state,
          product: action.payload,
        };
      case 'ADD_TO_CART':
        const newItem = {
          ...action.payload,
          quantity: 1,
        };
        return {
          ...state,
          cart: [...state.cart, newItem],
        };
      case 'PRODUCT_DETAIL':
        return {
          ...state,
          productDetails: [...state.productDetails, action.payload],
        };
      case 'REMOVE_FROM_CART':
        return {
          ...state,
          cart: state.cart.filter(item => item.id !== action.payload),
        };

      case 'UPDATE_QUANTITY':
        return {
          ...state,
          cart: state.cart.map((item) =>
            item.id === action.payload.productId
              ? { ...item, quantity: action.payload.newQuantity }
              : item
          ),
        };
      default:
        return state;
    }
  };
  
  export default productReducer;