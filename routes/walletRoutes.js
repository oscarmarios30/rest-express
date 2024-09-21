// routes/walletRoutes.js
const express = require('express');
const router = express.Router();
const walletController = require('../controllers/walletController');

// Rutas para manejar las operaciones REST
router.post('/register', walletController.registerClient);
router.post('/recharge', walletController.rechargeWallet);
router.post('/pay', walletController.pay);
router.post('/confirm-payment', walletController.confirmPayment);
router.post('/balance', walletController.checkBalance);

module.exports = router;
