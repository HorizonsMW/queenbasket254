const express = require('express');
const mysql = require('mysql');
const app = express();
const cors = require('cors');
const dotenv = require('dotenv');
const fs = require('fs');
var http = require('http');

//import("./assets/css/myStyle.css");
app.use("/assets",express.static('assets'));

dotenv.config();
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({extended:false}));

//Routes
//create

//root/////////////////////////////////////////////////////////
app.get('/',(req,res)=>{
    fs.readFile('./index.html',null,(err,data)=>{
        if (err){
            res.writeHead(404);
            res.write("Page not Found");
            res.end();
        }else{
            res.writeHead(200,{'Content-type':"text/html"});
            res.write(data);
            res.end();
        }
    });
    console.log("root");
    //res.send("success")
});
//////////////////////////////////////////////////////////////////
//Services route//////////////////////////////////////////////////
const servicesRoute = require('./routes/Services');
var route = servicesRoute('./services.html',null,"/assets");
app.use('/services',route);

//////////////////////////////////////////////////////////////////

//////////////////////////////////////////////////////////////////
//Accounts route//////////////////////////////////////////////////
const accountsRoute = require('./routes/Accounts');
var route = accountsRoute('./account.html','./login.html',"/assets");
app.use('/account',route);

//////////////////////////////////////////////////////////////////

//////////////////////////////////////////////////////////////////
//Products route//////////////////////////////////////////////////
const productsRoute = require('./routes/Products');
var route = productsRoute('./products.html',null,"/assets");
app.use('/products',route);

//////////////////////////////////////////////////////////////////

//////////////////////////////////////////////////////////////////
//Cart route//////////////////////////////////////////////////
const cartRoute = require('./routes/Cart');
var route = cartRoute('./shopping-cart.html',"/assets");
app.use('/cart',route);

//////////////////////////////////////////////////////////////////

//////////////////////////////////////////////////////////////////
//Contacts route//////////////////////////////////////////////////
const contactsRoute = require('./routes/Contacts');
var route = contactsRoute('./contacts.html',"/assets");
app.use('/contacts',route);

///////////////////////////////////////////////////////////////////

app.listen(process.env.PORT,(err)=>{
    if(err){
        throw err;
    }
    console.log('app running on port '+ process.env.PORT);
})


