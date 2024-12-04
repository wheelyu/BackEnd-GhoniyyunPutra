const express = require('express');
const sequelize = require('./config/database');
const categoryRoutes = require('./routes/CategoryRoutes');
const productRoutes = require('./routes/ProductRoutes');
const corsMiddleware = require('./middleware/corsMiddleware'); // Impor middleware
const path = require('path'); // Impor path untuk penanganan file
require('dotenv').config(); // Tambahkan dotenv untuk membaca file .env

const app = express();

// Gunakan middleware CORS
app.use(corsMiddleware);
app.use(express.json());

// Routes
app.use('/api/categories', categoryRoutes);
app.use('/api/products', productRoutes);

// Static files untuk uploads
app.use('/uploads/products', express.static(path.join(__dirname, 'uploads/products')));

// Serve index.html untuk semua route lain
app.get('/*', (req, res) => res.sendFile(path.join(__dirname, 'index.html')));

// Sinkronisasi basis data
sequelize
  .sync()
  .then(() => console.log('Database synchronized'))
  .catch((error) => console.error('Database synchronization error:', error));

// Menentukan port
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server berjalan di port ${PORT}`);
});
