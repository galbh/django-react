const express = require('express');

const router = express.Router();

// Mock data

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

// Login
router.post('/accounts/login', (req, res) => {
  send(res.status(200));
});

// Request reset password email
router.post('/accounts/request-reset-password-by-email', (req, res) => {
  send(res.status(200));
});

// Confirm reset password
router.post('/accounts/reset-password/:uidb64/:token', (req, res) => {
  send(res.status(200));
});

module.exports = router;
