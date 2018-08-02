const express = require('express');

const router = express.Router();

// Mock data
// const ders = require('../mock/ders.json');

// Simulate server delayed response
function send (res, data) {
  setTimeout(() => {
    res.send(data);
  }, 500);
}

/**
 * Internal Api routes
 */

// Add Inverter
router.post(
  '/solaredge-vendor/commands/on-board-solaredge-inverter',
  (req, res) => send(res.status(200), { responseText: 'solaredge inverter added' })
);

// Add example Inverter
router.post(
  '/shpan-vendor/commands/on-board-shpan-inverter',
  (req, res) => send(res.status(200), { responseText: 'shpan inverter added' })
);

module.exports = router;
