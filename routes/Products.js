const express = require('express');
const mysql = require('mysql');
const app = express();
const cors = require('cors');
const dotenv = require('dotenv');
const fs = require('fs');
var http = require('http');

const router = express.Router();

function productRoute(rootPath,productPath,assetsPath){
    router.use(assetsPath,express.static('assets'));
    //products root
    router.get('/all',(req,res)=>{
        fs.readFile(rootPath,null,(err,data)=>{
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
          console.log("Products root");
    });
    //capture specific product
    router.get('/:id',(req,res)=>{
        fs.readFile(productPath,null,(err,data)=>{
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
          console.log("Products selected " );
    });


    router.post('/add',(req, res)=>{
        console.log('instert service');
        res.write('service add');
    });


    return router;
}
module.exports = productRoute;