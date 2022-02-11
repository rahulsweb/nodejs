const express=require('express');
const productController=require('../controllers/shop');
const router=express.Router();
router.get("/",productController.getIndex);
router.get("/products",productController.getProducts);
router.get("/cart",productController.getCart);
router.post("/cart",productController.addCart);
router.get("/checkout",productController.getCheckout);
router.get("/orders",productController.getOrders);
router.get("/details/:id",productController.getDetails);

module.exports=router;
