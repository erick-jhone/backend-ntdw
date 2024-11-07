const express = require('express');
const app = require('./config/container'); 
const userRoutes = require('./routes/userRoutes'); 

app.use(express.json()); 
app.use('/user', userRoutes); 

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});