const express = require('express');
const bodyParser = require('body-parser');
const walletRoutes = require('./routes/walletRoutes');

const app = express();
const port = 3000;

app.use(bodyParser.json());
app.use('/api', walletRoutes);

app.listen(port, () => {
    console.log(`REST service listening at http://localhost:${port}`);
});
