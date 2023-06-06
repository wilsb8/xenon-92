const express = require('express');
const router = express.Router();
const nodemailer = require('nodemailer');


// Define a route
router.get('/', (req, res) => {
    const data = {
        message: 'Home'
    };
    res.render('index', {data});
});

module.exports = router;