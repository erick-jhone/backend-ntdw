const express = require('express');
const { scopePerRequest } = require('awilix-express');
const container = require('./config/container');
const userRoutes = require('./routes/userRoutes');

const app = express();

app.use(express.json());
app.use(scopePerRequest(container));

app.use('/users', userRoutes);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));