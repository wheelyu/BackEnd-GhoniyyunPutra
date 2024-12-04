const sequelize = require('./config/database');
const CategoryProduct = require('./models/CategoryProduct');
const Product = require('./models/Product');

(async () => {
    try {
        // Sinkronisasi tabel
        await sequelize.sync({ force: true }); // Hati-hati: `force: true` akan menghapus tabel lama.
        console.log('Database synchronized!');
    } catch (err) {
        console.error('Error synchronizing:', err);
    } finally {
        sequelize.close();
    }
})();
