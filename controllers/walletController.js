// controllers/walletController.js
const axios = require('axios');

// URL base del servicio SOAP en Laravel
const SOAP_BASE_URL = 'http://127.0.0.1:8000/soap';

module.exports = {
    // Registrar un cliente
    registerClient: async (req, res) => {
        try {
            const response = await axios.post(`${SOAP_BASE_URL}/register`, req.body);
            res.json(response.data);
        } catch (error) {
            res.status(500).json({ error: 'Error al registrar cliente.' });
        }
    },

    // Recargar billetera
    rechargeWallet: async (req, res) => {
        try {
            const response = await axios.post(`${SOAP_BASE_URL}/recharge`, req.body);
            res.json(response.data);
        } catch (error) {
            res.status(500).json({ error: 'Error al recargar billetera.' });
        }
    },

    // Iniciar el proceso de pago
    pay: async (req, res) => {
        try {
            const response = await axios.post(`${SOAP_BASE_URL}/pay`, req.body);
            res.json(response.data);
        } catch (error) {
            res.status(500).json({ error: 'Error al iniciar el pago.' });
        }
    },

    // Confirmar pago
    confirmPayment: async (req, res) => {
        try {
            const response = await axios.post(`${SOAP_BASE_URL}/confirm-payment`, req.body);
            res.json(response.data);
        } catch (error) {
            res.status(500).json({ error: 'Error al confirmar el pago.' });
        }
    },

    // Consultar saldo
    checkBalance: async (req, res) => {
        try {
            const response = await axios.post(`${SOAP_BASE_URL}/balance`, req.body);
            res.json(response.data);
        } catch (error) {
            res.status(500).json({ error: 'Error al consultar saldo.' });
        }
    }
};
