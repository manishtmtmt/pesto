let productViews = new WeakMap();

let cartItems = new WeakSet();

function incrementProductViews(productId) {
  const key = { id: productId };

  if (productViews.has(key)) {
    const currentViews = productViews.get(key);
    const newViews = currentViews + 1;
    productViews.set(key, newViews);
    console.log(`Product ${productId} views: ${newViews}`);
  } else {
    productViews.set(key, 1);
    console.log(`Product ${productId} views: 1`);
  }
};

const productId = 123;

incrementProductViews(productId);
incrementProductViews(productId);
incrementProductViews(productId);
incrementProductViews(productId);

const addToCart = productId => {
  const key = { id: productId };
  if (!cartItems.has(key)) {
    cartItems.add(key);
    console.log(`Product ${productId} added to cart`);
  } else {
    console.log(`Product ${productId} already in cart`);
  }
};

addToCart(productId);
addToCart(productId);

