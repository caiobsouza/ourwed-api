module.exports = (app) => {
    require('./routes/base')(app);
    require('./routes/guests')(app);
};
