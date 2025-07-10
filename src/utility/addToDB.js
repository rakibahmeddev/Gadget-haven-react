const getStoredCart = () => {
  const currentCart = localStorage.getItem('products');
  const newCurrentCart = JSON.parse(currentCart);
  if (newCurrentCart) {
    console.log('this is new cart', newCurrentCart);
    return newCurrentCart;
  } else {
    return [];
  }
};

const addToStoredCart = (id) => {
  const getCart = getStoredCart(id);
  if (getCart.includes(id)) {
    console.log('already in the cart');
    return getStoredCart;
  } else {
    getCart.push(id);
    const newCart = JSON.stringify(getCart);
    localStorage.setItem('products', newCart);
    console.log('successfully added to the cart', newCart)
  }
};

export { getStoredCart, addToStoredCart };
