const express = require('express');

const router = express.Router();

// Mock data
// const loggedInUser = require('../mock/loggedInUser.json');

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

// Logout
router.get('/accounts/logout', (req, res) => send(res.status(200)));

module.exports = router;
