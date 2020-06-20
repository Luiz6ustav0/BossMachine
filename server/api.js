const express = require('express');
const apiRouter = express.Router();


const minionsRouter = require('./minions/minions');
apiRouter.use('/minions', minionsRouter);

const ideasRouter = require('./ideas/ideas')
apiRouter.use('/ideas', ideasRouter);

module.exports = apiRouter;