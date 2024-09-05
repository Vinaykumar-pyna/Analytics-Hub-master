const mongoose = require('mongoose');
const fs = require('fs');
const Data = require('./Data');
const jsonFilePath = './jsondata.json';
const initializeDatabase = async () => {
    try {
        const jsonData = JSON.parse(fs.readFileSync(jsonFilePath, 'utf8'));
        console.log('JSON file read successfully.');
        await Data.insertMany(jsonData);
        console.log(`Data inserted successfully. Total documents inserted: ${jsonData.length}`);
    } catch (err) {
        console.error('Error initializing database:', err);
    }
};
module.exports = { initializeDatabase };
