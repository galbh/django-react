const express = require('express');

const router = express.Router();

// Mock data
const loggedInUser = require('../mock/loggedInUser.json');

const serverResponseTime = 200;

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
router.get('/internal/user-info', (req, res) => send(res.status(200), loggedInUser));

// Sign out
router.post('/internal/commands/sign-out', (req, res) => {
  send(res.status(200));
});

module.exports = router;
