const express = require('express');
const router = express.Router();
const PuzzleSchema = require('../schema/PuzzleSchema')


//get a completed puzzle
router.get('/', async (req, res) => {
    try {
      const result = await WordSchema.find();
      res.json(result);
    } catch (error) {
      console.error('Error:', error);
      res.status(500).json({ error: 'Failed to retrieve documents' });
    }
  });


//create a new puzzle.
router.post('/', async (req, res) => {
    let newPuzzle = new PuzzleSchema(req.body);
 
    try{
      const createdWord = await newPuzzle.save();
      res.json(createdWord);
    } catch(error) {
      console.log('Error:', error);
      res.status(500).json({ error: 'Failed to create a word' });
    }
  });

module.exports = router;