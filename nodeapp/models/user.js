const mongoose = require("mongoose");


const Schema = mongoose.Schema
const userSchema = new mongoose.Schema({
    name: { type: String, required: true  },
    age:{ type: String, required: true },
    childId:{ type: String, required: true },
    mobileNumber:{ type: String, required: true },
    adopted:String,
    avatar:Buffer
 });
 //userSchema.index({avatar: 1 }, { unique: true});
 const userTable=mongoose.model('users',userSchema,'users');
 const userSchema3 = new mongoose.Schema({
    name: { type: String, required: true  },
    age:{ type: String, required: true },
    childId:{ type: String, required: true },
    mobileNumber:{ type: String, required: true },
    adopted:String,
    avatar:Buffer
 });
 //userSchema.index({avatar: 1 }, { unique: true});
 const userTable3=mongoose.model('aadarana',userSchema3,'aadarana');
 const userSchema4 = new mongoose.Schema({
    name: { type: String, required: true  },
    age:{ type: String, required: true },
    childId:{ type: String, required: true },
    mobileNumber:{ type: String, required: true },
    adopted:String,
    avatar:Buffer
 });
 //userSchema.index({avatar: 1 }, { unique: true});
 const userTable4=mongoose.model('careLove',userSchema4,'carelove');
const userSchema2 = new mongoose.Schema({
    name: { type: String, required: true  },
    age:{ type: String, required: true },
    childId:{ type: String, required: true },
    mobileNumber:{ type: String, required: true },
    adopted:String,
    avatar:Buffer
 });

 const userSchema5 = new mongoose.Schema({
    name: { type: String, required: true  },
    age:{ type: String, required: true },
    childId:{ type: String, required: true },
    mobileNumber:{ type: String, required: true },
    adopted:String,
    avatar:Buffer
 });
 //userSchema.index({avatar: 1 }, { unique: true});
 const userTable5=mongoose.model('shraddha',userSchema5,'shraddha');
 const userSchema6 = new mongoose.Schema({
    name: { type: String, required: true  },
    age:{ type: String, required: true },
    childId:{ type: String, required: true },
    mobileNumber:{ type: String, required: true },
    adopted:String,
    avatar:Buffer
 });
 //userSchema.index({avatar: 1 }, { unique: true});
 const userTable6=mongoose.model('org6',userSchema6,'org6');
 const userTable2=mongoose.model('helpingHand',userSchema2,'helpingHand');
const UserSchema = new Schema({
    FullName: String,

 email: String,

 contactNo:String,

 Occupation:String,

 Amount:String,

 adopt:String,

 address:String,

 DateOfRegistration:Date,
 adopted:String
});

const UserSchema2 = new Schema({
   FullName: String,
   age:String,
email: String,
contactNo:String,
course:String,
address:String,
DateOfRegistration:Date,

});
const UserModel2 = mongoose.model("studentform", UserSchema2,'studentform')
const UserModel = mongoose.model("form", UserSchema,'form')
module.exports ={UserModel,userTable2,userTable,userTable3,userTable4,userTable5,userTable6,UserModel2}