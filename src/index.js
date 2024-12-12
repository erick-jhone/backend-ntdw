const express = require('express');
const app = require('./config/container'); 
const userRoutes = require('./routes/userRoutes');
const espacoRoutes = require('./routes/espacoRoutes');
const reservaRoutes = require('./routes/reservaRoutes');

app.use(express.json()); 
app.use('/user', userRoutes); 
app.use('/espaco', espacoRoutes);
app.use('/reserva', reservaRoutes);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});