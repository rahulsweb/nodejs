  const db = require('../util/database');
 
  module.exports = class Product {
    constructor(req) {
      this.title = req.title;
      this.description = req.description;
      this.price = req.price;
      this.image = req.image;
      this.discount = req.discount;
    }
    save() {
     
     let temp=[this.title,this.description,this.price,this.discount,this.image]
      db.execute("insert into products (title,description,price,discount,image) values (?,?,?,?,?)",temp).then().catch(err=>{
        console.log("error",err)
      });
    }
    static getAll() {
      let products = db.execute("select * from products");
      return products;
    }
    static findById(id) {
      let products = db.execute(`select * from products where id = ${id}`);
      return products;
    }
    static updateProducts(request) {
       db.execute(`UPDATE products SET title='${request.title}',description='${request.description}',price=${request.price},discount=${request.discount},image='${request.image}' WHERE id=${request.id}`).then().catch(err=>{
         console.log("error",err)
       });
    }
    static deleteById(id) {
      db.execute(`delete  from products where id = ${id}`);
    }
  };