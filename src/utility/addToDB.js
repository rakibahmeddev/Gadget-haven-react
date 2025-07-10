const getStoredCart = () => {
    const currentCart = localStorage.getItem('products');
    const newCurrentCart = JSON.parse(currentCart);
    if(newCurrentCart){
        console.log("this is new cart", newCurrentCart)
        return newCurrentCart;
    }
    else{
        return [];
    }
}


const addToStoredCart = (id) => {
    
}