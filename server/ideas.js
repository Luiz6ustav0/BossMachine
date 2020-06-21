const express = require('express');
const db = require('./db');
const ideasRouter = express.Router();

const checkMillionDollarIdea = require('./checkMillionDollarIdea');

ideasRouter.param('ideaId', (req, res, next, id) => {
    const element = db.getFromDatabaseById('ideas', id);
    if(element){
        req.idea = element;
        next();
    }
    res.status(404).send('Object not found');
});

ideasRouter.get('/', (req, res, next) => {
    const ideas = db.getAllFromDatabase('ideas');
    res.send(ideas);
});

ideasRouter.get('/:ideaId', (req, res, next) => {
    res.send(req.idea);
});

ideasRouter.put('/:ideaId', checkMillionDollarIdea, (req, res, next) => {
    const updatedIdea = db.updateInstanceInDatabase('ideas', req.body)
    res.send(updatedIdea);
});

ideasRouter.post('/', checkMillionDollarIdea, (req, res, next) => {
    const info = req.body;
    if(info){
        const newIdea = db.addToDatabase('ideas', info);
        res.status(201).send(newIdea);
    }
    res.status(400).send("Bad Request")
});

ideasRouter.delete('/:ideaId', (req, res, next) => {
    const deletedIdea = db.deleteFromDatabasebyId('ideas', req.idea.id);
    if(deletedIdea){
        res.sendStatus(204);
    } else {
        res.status(500).send('Error Deleting Idea');
    }
});


module.exports = ideasRouter;