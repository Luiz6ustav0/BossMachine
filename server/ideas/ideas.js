const express = require('express');
const db = require('../db');
const ideasRouter = express.Router();


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

ideasRouter.put('/:ideaId', (req, res, next) => {
    const updatedIdea = db.updateInstanceInDatabase('ideas', req.body)
    res.send(updatedIdea);
});

ideasRouter.post('/', (req, res, next) => {});

ideasRouter.delete('/', (req, res, next) => {});
module.exports = ideasRouter;