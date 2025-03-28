const express = require('express');
const router = express.Router();
const authController = require('../controllers/authController');

// Signup Routes
router.post('/signup', authController.registerUser);
router.get('/signup', (req, res) => {
    res.render('signup'); // Ensure 'signup.ejs' or 'signup.pug' exists in the views folder
});

// Login Routes
router.post('/login', authController.loginUser);
router.get('/login', (req, res) => {
    res.render('login'); // Ensure 'login.ejs' or 'login.pug' exists in the views folder
});
// Logout Route
router.get('/logout', authController.logoutUser);

module.exports = router;
