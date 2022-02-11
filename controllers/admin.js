const Product = require('../models/product');
exports.getAddProducts = (req, res, next) => {

    res.render("admin/add-product", {
        titles: "add-product",
    });


};
exports.getEditProducts = (req, res, next) => {
    const id = req.params.id;
    const details = Product.findById(id).then(([rows, fieldData]) => {
        console.log(rows)
        res.render("admin/edit-product", {
            titles: "edit-product",
            id: id,
            details: rows[0]
        });
    }).catch(err => {
        console.log(err)
    });



};
exports.getProducts = (req, res, next) => {
    const products = Product.getAll().then(([rows, fieldData]) => {
        res.render("admin/products", {
            products: rows,
            titles: "products"
        });
    }).catch(err => {
        console.log(err)
    });

};


exports.addProducts = (req, res, next) => {

    const requestData = {
        title: req.body.title,
        description: req.body.desc,
        price: req.body.price,
        image: req.body.image,
        discount: req.body.dis
    };
    console.log(requestData)
    const product = new Product(requestData);
    product.save();

    res.redirect('/admin/products')
};
exports.deleteProducts = (req, res, next) => {
    let id = req.body.id;
    Product.deleteById(id);
    res.redirect('/admin/products')
};

exports.editProducts = (req, res, next) => {

    const requestData = {
        id: req.body.id,
        title: req.body.title,
        description: req.body.desc,
        price: req.body.price,
        image: req.body.image,
        discount: req.body.dis
    };

    const index = Product.updateProducts(requestData);
    res.redirect('/admin/products')
};