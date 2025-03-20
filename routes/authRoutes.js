const express = require('express');
const router = express.Router();
const authController = require('../controllers/authController');

// Signup Routes
router.get('/signup', (req, res) => {
    res.render('signup'); // Ensure 'signup.ejs' or 'signup.pug' exists in the views folder
});
router.post('/signup', authController.registerUser);

// Login Routes
router.get('/login', (req, res) => {
    res.render('login'); // Ensure 'login.ejs' or 'login.pug' exists in the views folder
});
router.post('/login', authController.loginUser);

// Logout Route
router.get('/logout', authController.logoutUser);

module.exports = router;
