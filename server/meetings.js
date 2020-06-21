const express = require('express');
const db = require('./db');

const meetingsRouter = express.Router();


meetingsRouter.get('/', (req, res, next) => {
    const meetingsArr = db.getAllFromDatabase('meetings');
    if(meetingsArr){
        res.send(meetingsArr);
    } else {
        res.sendStatus(204);
    }
});

meetingsRouter.post('/', (req, res, next) => {
    const newMeeting = db.addToDatabase('meetings', db.createMeeting());
    res.status(201).send(newMeeting);
});

meetingsRouter.delete('/', (req, res, next) => {
    db.deleteAllFromDatabase('meetings');
    res.sendStatus(204);
});


module.exports = meetingsRouter;