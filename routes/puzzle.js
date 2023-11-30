const express = require('express');
const router = express.Router();
const PuzzleSchema = require('../schema/PuzzleSchema')


// get a completed puzzle
router.get('/', async (req, res) => {
    try {
      const randomPuzzle = await PuzzleSchema.find();
      res.json(randomPuzzle);
    } catch (error) {
      console.error('Error:', error);
      res.status(500).json({ error: 'Failed to retrieve documents' });
    }
  });

// router.get('/', function(req, res) {
//   res.send('Hello. Testing testing testing. TESTING TESSTTTT.')
// });

//create a new puzzle.
router.post('/', async (req, res) => {
    let newPuzzle = new PuzzleSchema(req.body);
 
    try{
      const createdPuzzle = await newPuzzle.save();
      console.log(createdPuzzle)
      res.json(createdPuzzle);
    } catch(error) {
      console.log('Error:', error);
      res.status(500).json({ error: 'Failed to create a word' });
    }
  });

module.exports = router;