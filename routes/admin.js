const express=require('express');
const productController=require('../controllers/admin');
const router=express.Router();
router.get("/products/:id",productController.getEditProducts);
router.get("/add",productController.getAddProducts);
router.get("/add/:id",productController.getEditProducts);
router.get("/products",productController.getProducts);
router.post("/products",productController.addProducts);
router.post("/edit-products",productController.editProducts);
router.post("/delete-products",productController.deleteProducts);

module.exports=router;