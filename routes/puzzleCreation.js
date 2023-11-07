const express = require('express');
const router = express.Router();
const PuzzleCreationSchema = require('../schema/PuzzleCreation/PuzzleCreationSchema')
const WordSchema = require('../schema/PuzzleCreation/WordSchema')



router.get('/', async (req, res) => {
    try {
      const result = await WordSchema.find();
      res.json(result);
    } catch (error) {
      console.error('Error:', error);
      res.status(500).json({ error: 'Failed to retrieve documents' });
    }
  });

router.post('/', async (req, res) => {
    console.log(req.body.cards[0])
    let newPuzzle = new PuzzleCreationSchema(req.body);
 
    try{
      const createdWord = await newPuzzle.save();
      res.json(createdWord);
    } catch(error) {
      console.log('Error:', error);
      res.status(500).json({ error: 'Failed to create a word' });
    }
  });

module.exports = router;