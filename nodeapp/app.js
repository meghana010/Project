const express = require("express");
const app = express();
const path = require("path");
const {
  UserModel,
  userTable2,
  userTable,
  userTable3,
  userTable4,
  userTable5,
  userTable6,
  UserModel2,
} = require("./models/user");
app.use(express.static(__dirname));
app.use(express.urlencoded({ extended: true }));

const PORT = process.env.PORT || 8000;

// View Engine Setup

app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");

app.get("/adptform", function (req, res) {
  // Rendering form.ejs page
  res.render("form");
});

app.get("/studentReg", function (req, res) {
  // Rendering form.ejs page
  res.render("studentReg");
});
app.post("/studentReg", (req, res) => {
  const student = new UserModel2(req.body);
  student.save((error, result) => {
    if (error) throw error;

    res.send("Hurrayy!! Lend your Helping Hands");
  });
});
app.post("/adptform", (req, res) => {
  /*  async function foo(reqbody){
    const x=await UserModel.findOne({FullName:reqbody.FullName,email:reqbody.email,contactNo:reqbody.contactNo,Occupation:reqbody.Occupation,Amount:reqbody.Amount,adopt:reqbody.adopt,address:reqbody.address,DateOfRegistration:reqbody.DateOfRegistration,adopted:"by "+reqbody.adopted});
  return x;
}
const y=  foo(req.body); */
  UserModel.findOne(
    {
      FullName: req.body.FullName,
      email: req.body.email,
      contactNo: req.body.contactNo,
      Occupation: req.body.Occupation,
      Amount: req.body.Amount,
      adopt: req.body.adopt,
      address: req.body.address,
      DateOfRegistration: req.body.DateOfRegistration,
    },
    function (err, result) {
      if (err) throw err;
      if (!result) {
        const SaveUser = new UserModel(req.body);
        SaveUser.adopted = "by " + req.body.FullName;
        const id = req.body.adopt;

        var update = { adopted: "Adopted by " + req.body.FullName };
        userTable2.findOneAndUpdate(
          { childId: id },
          update,
          {
            returnNewDocument: true,
          },
          function (error, result) {
            if (error) throw error;
          }
        );
        userTable.findOneAndUpdate(
          { childId: id },
          update,
          {
            returnNewDocument: true,
          },
          function (error, result) {
            if (error) throw error;
          }
        );
        userTable3.findOneAndUpdate(
          { childId: id },
          update,
          {
            returnNewDocument: true,
          },
          function (error, result) {
            if (error) throw error;
          }
        );
        userTable4.findOneAndUpdate(
          { childId: id },
          update,
          {
            returnNewDocument: true,
          },
          function (error, result) {
            if (error) throw error;
          }
        );
        userTable5.findOneAndUpdate(
          { childId: id },
          update,
          {
            returnNewDocument: true,
          },
          function (error, result) {
            if (error) throw error;
          }
        );
        userTable6.findOneAndUpdate(
          { childId: id },
          update,
          {
            returnNewDocument: true,
          },
          function (error, result) {
            if (error) throw error;
          }
        );
        SaveUser.save((error, savedUser) => {
          if (error) throw error;

          //res.send("You can have a screenshot for future reference")
        });
      }
      if (result) {
        const SaveUser = new UserModel(req.body);
        SaveUser.adopted = "Withdrawn by " + req.body.FullName;
        const id = req.body.adopt;

        var update = { adopted: "" };
        userTable2.findOneAndUpdate(
          { childId: id },
          update,
          {
            returnNewDocument: true,
          },
          function (error, result) {
            if (error) throw error;
          }
        );
        userTable.findOneAndUpdate(
          { childId: id },
          update,
          {
            returnNewDocument: true,
          },
          function (error, result) {
            if (error) throw error;
          }
        );
        userTable3.findOneAndUpdate(
          { childId: id },
          update,
          {
            returnNewDocument: true,
          },
          function (error, result) {
            if (error) throw error;
          }
        );
        userTable4.findOneAndUpdate(
          { childId: id },
          update,
          {
            returnNewDocument: true,
          },
          function (error, result) {
            if (error) throw error;
          }
        );
        userTable5.findOneAndUpdate(
          { childId: id },
          update,
          {
            returnNewDocument: true,
          },
          function (error, result) {
            if (error) throw error;
          }
        );
        userTable6.findOneAndUpdate(
          { childId: id },
          update,
          {
            returnNewDocument: true,
          },
          function (error, result) {
            if (error) throw error;
          }
        );

        SaveUser.save((error, savedUser) => {
          if (error) throw error;
        });
      }
      res.redirect("/display");
    }
  );
});

app.get("/", (req, res) => {
  res.sendFile(__dirname + "/index.html");
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
});

var fetchRouter = require("./routes/fetch-route");
app.use("/", fetchRouter);
var fetchRouter2 = require("./routes/fetch-router2");
app.use("/", fetchRouter2);
var fetchRouter3 = require("./routes/fetch-router3");
app.use("/", fetchRouter3);
var fetchRouter4 = require("./routes/fetch-router4");
app.use("/", fetchRouter4);
var fetchRouter5 = require("./routes/fetch-router5");
app.use("/", fetchRouter5);
var fetchRouter6 = require("./routes/fetch-router6");
app.use("/", fetchRouter6);
var fetchRouter7 = require("./routes/fetchRouternew");
app.use("/", fetchRouter7);
