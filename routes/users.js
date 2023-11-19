const UserSchema = require('../schema/UserSchema')
const PuzzleSchema = require('../schema/PuzzleSchema')
const express = require('express');
const router = express.Router();

//get all users for login
router.get('/', async (req, res) => {
  const {useremail} = req.params;
  try {
    const existingUser = await UserSchema.find();
    if (existingUser) {
      res.status(200).json(existingUser);
      console.log(existingUser)
    } else {
      res.status(404).json({ message: 'User not found' });
      console.log('welp');
    }
  } catch (error) {
    console.error(error);
    res.status(500).send(error);
  }   
});

//get specific user
router.get('/:useremail', async (req, res) => {
  const {useremail} = req.params;
  try {
    const existingUser = await UserSchema.findOne({email: {$regex: new RegExp(useremail.trim(), 'i')}});
    if (existingUser) {
      res.status(200).json(existingUser);
    
    } else {
      res.status(404).json({ message: 'User not found' });
     
    }
  } catch (error) {
    console.error(error);
    res.status(500).send(error);
  }   
});




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

//update guesser

router.put('/', async (req,res) => {

  let {scoreToUpdate, email, puzzleID} = req.body;
  console.log(scoreToUpdate, email, puzzleID);
  try {
    const userWithUpdatedScores = await UserSchema.findOneAndUpdate(
      { email: { $regex: new RegExp(email.trim(), 'i') } },
      {
        $inc: {
          guessingScore: scoreToUpdate,
        }
      },
      { new: true } 
    );


    const puzzle = await PuzzleSchema.findById(puzzleID)
    const id = puzzle.userId
    const updateCreatorScore = await UserSchema.findOneAndUpdate(
      { _id: id  },
      {
        $inc: {
          creationScore: scoreToUpdate,
        }
      },
      { new: true } 
    );
    console.log('success updating guesser score');
    res.status(200).json(userWithUpdatedScores);
  } catch(error)
  {
    console.error('Error updating user scores:', error);
    res.status(500).send(error);
  }
})

  
module.exports = router;