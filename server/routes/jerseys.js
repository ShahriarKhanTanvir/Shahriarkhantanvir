const express = require('express');
const Jersey = require('../models/Jersey');
const router = express.Router();

router.get('/', async (req, res) => {
  const jerseys = await Jersey.find();
  res.json(jerseys);
});

router.post('/', async (req, res) => {
  const jersey = await Jersey.create(req.body);
  res.status(201).json(jersey);
});

module.exports = router;
