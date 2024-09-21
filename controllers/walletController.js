const axios = require('axios');

const SOAP_BASE_URL = 'http://localhost/soap-laravel/public/soap';

module.exports = {
    registerClient: async (req, res) => {
        try {
            const response = await axios.post(`${SOAP_BASE_URL}/register`, req.body);
            res.json(response.data);
        } catch (error) {
            res.status(500).json({ error: 'Error al registrar cliente.' });
        }
    },

    rechargeWallet: async (req, res) => {
        try {
            const response = await axios.post(`${SOAP_BASE_URL}/recharge`, req.body);
            res.json(response.data);
        } catch (error) {
            res.status(500).json({ error: 'Error al recargar billetera.' });
        }
    },

    pay: async (req, res) => {
        try {
            const response = await axios.post(`${SOAP_BASE_URL}/pay`, req.body);
            res.json(response.data);
        } catch (error) {
            res.status(500).json({ error: 'Error al iniciar el pago.' });
        }
    },

    confirmPayment: async (req, res) => {
        try {
            const response = await axios.post(`${SOAP_BASE_URL}/confirm-payment`, req.body);
            res.json(response.data);
        } catch (error) {
            res.status(500).json({ error: 'Error al confirmar el pago.' });
        }
    },

    checkBalance: async (req, res) => {
        try {
            const response = await axios.post(`${SOAP_BASE_URL}/balance`, req.body);
            res.json(response.data);
        } catch (error) {
            res.status(500).json({ error: 'Error al consultar saldo.' });
        }
    }
};
