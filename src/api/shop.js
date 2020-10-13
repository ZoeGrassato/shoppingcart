var products = [{
  id: 1,
  title: 'ipad',
  price: 500,
  inventory: 2
}]

export default {
  getProducts (cb) {
    setTimeout(() => cb(products), 100)
  },

  buyProducts (products, cb, errorCb) {
    setTimeout(() => {
      (Math.random() > 0.5 || navigator.userAgent.indexOf('PhantomJs') > -1)
        ? cb() : errorCb()
    }, 100)
  }
}
