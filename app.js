const express = require("express");
const app = express();

const userModel = require("./usermodel");

app.get("/", (req, res) => {
  res.send("hey");
});

// to create user in database
app.get("/create", async (req, res) => {
  let createuser = await userModel.create({name: "chinmayi",username: "chinmayi03",email: "chinmayimondkar2003@gmail.com",});

  res.send(createuser);
});


// find give arry ---find one give object


// to read user from database
app.get("/read", async (req, res) => {
    let users= await userModel.find(); //to fond all
    // let users= await userModel.find({username:"chinmay03"}); //to find one

    res.send(users);

  });


// to update user from database

app.get("/update", async (req, res) => {
  //   userModel = findOneUpdate(findeone, update, { new: true });
  let updateduser = await userModel.findOneAndUpdate({ username: "chinmay03" },{ name: "Chinmay Mondkar" },{ new: true })
  res.send(updateduser);
});


  // to read user from database
app.get("/delete", async (req, res) => {
    let users = await userModel.findOneAndDelete({ username: "chinmayi03" })

    res.send(users);

  });



app.listen(3000);
