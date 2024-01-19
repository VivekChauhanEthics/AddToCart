export const fetchProduct = () => async(dispatch) => {
      try {
        const response = await fetch('https://fakestoreapi.com/products');
        const product = await response.json();
        dispatch({
          type: 'FETCH_PRODUCT',
          payload: product,
        })
      } catch (error) {
        console.error('Fetch API error:', error);
      }
};


export const addToCart = (product) => ({
  type: 'ADD_TO_CART',
  payload:{
    ... product,
    quantity: 1,
  }
});

export const removeFromCart = (productId) => ({
  type: 'REMOVE_FROM_CART',
  payload: productId,
});

export const productDetail = (productDetails) => ({
  type: 'PRODUCT_DETAIL',
  payload: productDetails,
});

export const updateQuantity = (productId, newQuantity) => ({
  type: 'UPDATE_QUANTITY',
  payload: {
    productId,
    newQuantity,
  },
});