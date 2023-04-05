const express = require('express');
const Usermodel = require('../Model/User.Model');

const Profilerouter = express.Router()


Profilerouter.get("/", async(req, res) => {
try {
    const {email,password} = req.body;
    const user = await Usermodel.find({ email });
     res.send({ msg: "hello", user: user[0] });
} catch (error) {
     res.send({
       msg: "something went wrong",
       error: error,
       
     });
}
   

});

module.exports = Profilerouter