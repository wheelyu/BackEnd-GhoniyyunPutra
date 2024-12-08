const { Sequelize } = require('sequelize');

const sequelize = new Sequelize('if0_37874893_ghoniyyunputra', 'if0_37874893', '3blW2nxq1DZ3p ', {
  host: 'sql312.infinityfree.com',
  dialect: 'mysql',
  port: 3306,
  dialectOptions: {
    ssl: {
      require: true, // biasanya diperlukan untuk koneksi cloud
      rejectUnauthorized: false // opsional, tergantung konfigurasi SSL Anda
    }
  },
  timezone: '+07:00',
  logging: false
});

module.exports = sequelize; 