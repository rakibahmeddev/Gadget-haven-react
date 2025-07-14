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
    console.log('successfully added to the cart', newCart);
  }
};

// for wishlist
const getWishlist = () => {
  const currentWishlist = localStorage.getItem('wishlist');
  if (currentWishlist) {
    const newCurrentWishlist = JSON.parse(currentWishlist);
    console.log('new wishlist from get function', newCurrentWishlist);

    return newCurrentWishlist;
  } else {
    return [];
  }
};

const addToWishlist = (id) => {
  const wishlist = getWishlist(id);

  if (wishlist.includes(id)) {
    console.log('id already into the wishlist');
    return wishlist;
  } else {
    wishlist.push(id);
    const neWishlist = JSON.stringify(wishlist);
    localStorage.setItem('wishlist', neWishlist);
    console.log('successfully added to the wishlist');
  }
};

export { getStoredCart, addToStoredCart, getWishlist, addToWishlist };
