
var express=require('express');
var path=require('path');
var app=express();

var user=require('./routes/user');
//var home=require('./routes/home');
app.use(express.static(path.join(__dirname,'public')));

app.set('view engine','ejs');

//app.get('/',home);
 //app.get('/user',user);
// app.get('/user/profile',user.profile);
 app.get('/user/addPost',user.addPost);

app.listen(3000,function(){
    console.log("Server is satrted");
});