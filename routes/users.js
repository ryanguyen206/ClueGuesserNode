const UserSchema = require('../schema/UserSchema')
const express = require('express');
const router = express.Router();


//get all users
router.get('/', (req, res) => {
    res.status(200).json({
        message: 'Record page',
    });
});

//get a specific user


//sign up a user
router.post('/', async (req, res) => {
    let newUser = new UserSchema(req.body);
    try {
      const userCreated = await newUser.save();
      res.status(201).json(userCreated); // returns the new object from MongoDB
    } catch (err) {
      console.log(err);
      res.status(500).send(err);
    } 
});
  
  
  
    
  
module.exports = router;