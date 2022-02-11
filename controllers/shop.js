const Product = require('../models/product');
const Cart = require('../models/cart');
exports.getIndex = (req, res, next) => {
    const products = Product.getAll().then(([rows, fieldData]) => {
        res.render("shop/index", {
            products: rows,
            titles: "shop"
        });
    }).catch(err => {
        console.log(err)
    });

}
exports.getProducts = (req, res, next) => {
    const products = Product.getAll();
    res.render("shop/product-list", {
        products: products,
        titles: "shop"
    });
}
exports.getCart = (req, res, next) => {
    const products = Product.getAll();
    res.render("shop/cart", {
        products: products,
        titles: "shop"
    });
}
exports.getCheckout = (req, res, next) => {
    const products = Product.getAll();
    res.render("shop/checkout", {
        products: products,
        titles: "shop"
    });
}
exports.getDetails = (req, res, next) => {

    const id = req.params.id;
     Product.findById(id).then(([rows, fieldData]) => {
        console.log(rows)
        res.render("shop/product-details", {
            products: rows[0],
            titles: "shop",
        });
    }).catch(err => {
        console.log(err)
    });
}
exports.getOrders = (req, res, next) => {
    const products = Product.getAll();
    res.render("shop/orders", {
        products: products,
        titles: "shop"
    });
}
exports.addCart = (req, res, next) => {
    const id = req.body.cart;
    const prod = Product.findById(id);
    Cart.addProduct(prod.id, prod.price);
    // res.redirect('/cart');

}