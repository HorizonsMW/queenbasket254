const express = require('express');
const mysql = require('mysql');
const app = express();
const cors = require('cors');
const dotenv = require('dotenv');
const fs = require('fs');
var http = require('http');

const router = express.Router();

function accountsRoute(rootPath,loginPath,assetsPath){
    router.use(assetsPath,express.static('assets'));
    //Accounts root
    router.get('/',(req,res)=>{
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
          console.log("Accounts root");
    });
    //login
    router.get('/login',(req,res)=>{
        fs.readFile(loginPath,null,(err,data)=>{
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
          console.log("Accounts login");
    });
    return router;
}

module.exports = accountsRoute;