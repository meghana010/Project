var mongoose=require('mongoose');
var db = require('../database');
var fs=require('fs');
const { query } = require('express');
const {UserModel,userTable2,userTable,userTable3,userTable4,userTable5,userTable6,UserModel2}=require('./user');

const userData = [{
   name: 'krushika',
   age:'11',
   childId:'203A0501',
   mobileNumber:'9975431234',
   avatar: fs.readFileSync('./girlchild1.jpg')
},{
   name: 'Harini',
   age:'12',
   childId:'203A0502',
   mobileNumber:'9875431234',
   avatar: fs.readFileSync('./girlchild2.jpeg')
},{
   name: 'Radha',
   age:'10',
   childId:'203A0503',
   mobileNumber:'8975431234',
   avatar: fs.readFileSync('./girlchild3.jpeg')
},{
   name: 'Varun',
   age:'9',
   childId:'203A0504',
   mobileNumber:'9875431234',
   avatar: fs.readFileSync('./boychild1.jpeg')
},{
   name: 'Rashi',
   age:'11',
   childId:'203A0505',
   mobileNumber:'9975401234',
   avatar: fs.readFileSync('./girlchild4.jpeg')
},{
   name: 'Krithik',
   age:'11',
   childId:'203A0506',
   mobileNumber:'9975431234',
   avatar: fs.readFileSync('./images/demo/boy11.jpeg')
},{
   name: 'Rajini',
   age:'7',
   childId:'203A0507',
   mobileNumber:'9975431234',
   avatar: fs.readFileSync('./girlchild5.jpeg')
}]
userData.forEach(function(data){

var user = new userTable(data);
user.avatar.contentType = 'image/png';

user.save()
   .then(() => console.log('User Saved Successfully!'))
   .catch((err) => console.log(`Error in Saving User: ${err}`));

});

module.exports={
     
     fetchData:function(callback){
        var userData=userTable.find({});
        userData.exec(function(err, data){
         if(err) throw err;
         return callback(data);
     }); 
     }
}