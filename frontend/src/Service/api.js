const express = require('express');
const mongoose = require('mongoose');
import registrationRoutes from 'backend\routes\registrationRoutes.js';

const app = express();
const PORT = process.env.PORT || 5000;

// Connect to MongoDB
mongoose.connect('mongodb://localhost:27017/registrationDB', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

app.use(express.json());
app.use('/api', registrationRoutes);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});