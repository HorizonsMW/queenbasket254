const express = require('express');
const mysql = require('mysql');
const app = express();
const cors = require('cors');
const dotenv = require('dotenv');
const fs = require('fs');
var http = require('http');

const router = express.Router();

function serviceRoute(rootPath,OTHERPATH,assetsPath){

    router.use(assetsPath,express.static('assets'));
    //services root
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
          console.log("services root");
    });
    //add a service
    router.post('/add',(req, res)=>{
        console.log('instert service');
        res.write('service add');
    });


    return router;
}




module.exports = serviceRoute;