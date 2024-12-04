const cors = require('cors');

const corsOptions = {
  origin: 'http://localhost:5173', // Sesuaikan dengan domain front-end Anda
  methods: ['GET', 'POST', 'PUT', 'DELETE'], // Metode HTTP yang diizinkan
  credentials: true, // Izinkan cookie jika diperlukan
};

const corsMiddleware = cors(corsOptions);

module.exports = corsMiddleware;
