const db = require('../db');

const express = require('express');
const minionRouter = express.Router();

minionRouter.get('/', (req, res, next) => {
    res.send(db.getAllFromDatabase('minions'));
});

minionRouter.post('/', (req, res, next) => {
    // Minion {id: string, name: string, title: string, salary: number}
    const info = req.body;
    if(info){
        const newMinion = db.addToDatabase('minions', info+);
        res.status(201).send(newMinion);
    }
    res.status(400).send('Bad request. Minion not added, check info provided');
});

minionRouter.get('/:minionId', (req, res, next) => {});

minionRouter.put('/:minionId', (req, res, next) => {});

minionRouter.delete('/:minionId', (req, res, next) => {});

module.exports = minionRouter;