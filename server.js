const express = require('express');
const sequelize = require('./config/database');
const categoryRoutes = require('./routes/CategoryRoutes');
const productRoutes = require('./routes/ProductRoutes');
const corsMiddleware = require('./middleware/corsMiddleware'); // Impor middleware

const app = express();

// Gunakan middleware CORS
app.use(corsMiddleware);
app.use(express.json());

// Routes
app.use('/api/categories', categoryRoutes);
app.use('/api/products', productRoutes);
// In your server.js
app.use('/uploads/products', express.static('uploads/products'));

app.get('/*', (req, res) => res.sendFile(__dirname + '/index.html'));
// Sinkronisasi basis data
sequelize
  .sync()
  .then(() => console.log('Database synchronized'))
  .catch((error) => console.error('Database synchronization error:', error));

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server berjalan di port ${PORT}`);
});
