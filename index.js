//jshint esversion:6
//setting express
const express = require("express");

const app = express();
//setting body-parser
const bodyParser = require("body-parser");

app.use(bodyParser.urlencoded({extended:true}))

//get request
app.get("/", function(req, res){
    res.sendFile(__dirname + "/index.html");
}); 

//post request
app.post("/", function(req, res){
   
    var num1 = Number(req.body.num1);
    var num2 = Number(req.body.num2);
    var opp = (req.body.operation);

    switch(opp){
        case "+": 
        var result = num1 + num2;
        break;

        case "-": 
        var result = num1 - num2;
        break;

        case "*":
        var result = num1 * num2;
        break;
        
        case "/": 
        var result = num1 / num2;
    };
    

    var result;

    res.send( num1 + opp + num2 + " = " + result);
    
});

// Set the port here
app.listen(3000, function(){
    console.log("Server is running on port 3000");
});