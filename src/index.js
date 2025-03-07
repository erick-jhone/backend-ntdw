const express = require('express');
const cors = require('cors'); 
const app = require('./config/container'); 
const espacoRoutes = require('./routes/espacoRoutes');
const reservaRoutes = require('./routes/reservaRoutes');

app.use(cors());  
app.use(cors({
  origin: 'http://localhost:5173',  
}));

app.use(express.json()); 
app.use('/espaco', espacoRoutes);
app.use('/reserva', reservaRoutes);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
