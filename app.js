
const express=require('express');
const app=express();
const path=require('path');
const rootDir=require('./util/path');
const adminRoutes=require('./routes/admin');
const shopRoutes=require('./routes/shop');
const errorController=require('./controllers/error');
const body=require('body-parser');
app.set("view engine","ejs");
app.set("views","views");
app.use(body.urlencoded({extended:false}));
app.use('/admin',adminRoutes);
app.use(shopRoutes);

app.use('/admin', express.static('public'));
app.use('/admin/products', express.static('public'));
app.use('/admin/add', express.static('public'));
app.use('/details', express.static('public'));
app.use(express.static(path.join(__dirname,"public")))

app.use(errorController.status404);
// const server=http.createServer(app);
// server.listen(3000);
app.listen(3000);