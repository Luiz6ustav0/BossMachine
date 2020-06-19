const express = require('express');
const apiRouter = express.Router();

// minions module 
const minionsRouter = require('./minions/minions');
apiRouter.use('/minions', minionsRouter);

module.exports = apiRouter;
