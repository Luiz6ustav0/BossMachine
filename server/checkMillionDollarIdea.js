const checkMillionDollarIdea = (req, res, next) => {
    const {numWeeks, weeklyRevenue} = req.body;
    const totalMoney = Number(numWeeks) * Number(weeklyRevenue);
    if(!numWeeks || !weeklyRevenue || isNaN(totalMoney) || totalMoney < 1000000){
        res.sendStatus(400);
    } else{
        next();
    }
};


module.exports = checkMillionDollarIdea;