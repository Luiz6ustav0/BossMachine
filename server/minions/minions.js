const db = require('../db');

const express = require('express');
const minionRouter = express.Router();

minionRouter.param('minionId', (req, res, next, id) => {
    const minion = db.getFromDatabaseById('minions', id);
    if (minion) {
      req.minion = minion;
      next();
    } else {
      res.status(404).send();
    }
});

minionRouter.get('/', (req, res, next) => {
    res.send(db.getAllFromDatabase('minions'));
});

minionRouter.post('/', (req, res, next) => {
    // Minion {id: string, name: string, title: string, salary: number}
    const info = req.body;
    if(info){
        const newMinion = db.addToDatabase('minions', info);
        res.status(201).send(newMinion);
    }
    res.status(400).send('Bad request. Minion not added, check info provided');
});

minionRouter.get('/:minionId', (req, res, next) => {
    res.send(req.minion);
});

minionRouter.put('/:minionId', (req, res, next) => {
    const updatedMinion = db.updateInstanceInDatabase('minions', req.body);
    res.status(200).send(updatedMinion);
});

minionRouter.delete('/:minionId', (req, res, next) => {
    const deletedMinion = db.deleteFromDatabasebyId('minions', req.minion.id);
    res.sendStatus(204);
});

module.exports = minionRouter;