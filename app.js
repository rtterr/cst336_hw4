const express = require("express");
const app = express();
app.engine('html', require('ejs').renderFile);
app.use(express.static("public"));

//faker
var faker = require('faker');
let fakeInfo = "Webmaster: " + faker.name.findName() + "<br />" + faker.internet.email() + "<br />" + faker.company.companyName() + "<br />" + faker.address.city() + ", " + faker.address.state();

//routes
app.get("/", function(req, res){
    res.render("index.html", {"currentPage":"about", "fakeInfo":fakeInfo});
});

app.get("/availability", function(req, res){
    res.render("availability.html", {"currentPage":"avail", "fakeInfo":fakeInfo});
});

app.get("/confidentiality", function(req, res){
    res.render("confidentiality.html", {"currentPage":"confi", "fakeInfo":fakeInfo});
});

app.get("/integrity", function(req, res){
    res.render("integrity.html", {"currentPage":"integ", "fakeInfo":fakeInfo});
});

//starting server
app.listen(process.env.PORT, process.env.IP, function(){
//app.listen("8080", "127.0.0.1", function(){
    console.log("Express server is running...");
})
