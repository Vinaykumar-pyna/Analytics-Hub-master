const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const dataRoutes = require('./routes');
const { initializeDatabase } = require('./initializeDatabase');
const app = express();
const port = 5000;
app.use(cors());
app.use(express.json());
mongoose.connect('mongodb://127.0.0.1:27017/dashboard', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
})
    .then(() => {
        console.log('Connected to MongoDB');
        initializeDatabase();
        app.listen(port, () => {
            console.log(`Server started on port ${port}`);
        });
    })
    .catch((err) => {
        console.error('Error connecting to MongoDB:', err);
    });
app.use('/api', dataRoutes);
