const { Router } = require('express');
const Game = require('../models/Game');

const router = Router();

router
  .get('/:id', async (req, res) => {
    const resp = await Game.getById(req.params.id);

    res.json(resp);
  })
  .get('/', async (req, res) => {
    const games = await Game.getAll();
    const resp = games.map(game => ({ id: game.id, title: game.title }));

    res.json(resp);
  });

module.exports = router;
