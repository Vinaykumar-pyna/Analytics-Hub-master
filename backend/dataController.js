const Data = require('./Data');
const initData = (req, res) => {
    const jsonData = require('../jsondata.json');
    const data = jsonData.map(item => new Data(item));
    Data.insertMany(data, (err) => {
        if (err) {
            console.error('Error initializing data:', err);
            res.status(500).json({error: 'Failed to initialize data'});
        } else {
            console.log('Data initialized successfully');
            res.json({message: 'Data initialized successfully'});
        }
    });
};
const getData = (req, res) => {
    const filters = req.query;
    Data.find(filters)
        .then((data) => {
            res.json(data);
        })
        .catch((err) => {
            res.status(500).json({error: err.message});
        });
};
module.exports = {
    initData,
    getData,
};
