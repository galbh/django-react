const express = require('express');

const router = express.Router();

// Mock data
const loggedInUser = require('../mock/loggedInUser.json');

const serverResponseTime = 1000;

// Simulate server delayed response
function send (res, data) {
  setTimeout(() => {
    res.send(data);
  }, serverResponseTime);
}

/**
 * Api routes
 */

// Get Logged in user
router.get('/accounts/logged-in-user', (req, res) => send(res.status(200), loggedInUser));

// Logout
router.get('/accounts/logout', (req, res) => send(res.status(200)));

module.exports = router;
