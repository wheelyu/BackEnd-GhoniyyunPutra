const Product = require('../models/Product');
const Category = require('../models/CategoryProduct');
const fs = require('fs');
const path = require('path');

exports.createProduct = async (req, res) => {
  try {
    const { 
      name, 
      category_id, 
      description, 
      price, 
      stock 
    } = req.body;

    // Validasi kategori
    const category = await Category.findByPk(category_id);
    if (!category) {
      return res.status(400).json({
        status: 'error',
        message: 'Kategori tidak valid'
      });
    }

    // Proses upload gambar
    const imageFile = req.file ? req.file.filename : null;

    const product = await Product.create({
      name, 
      category_id, 
      description, 
      price,
      image: imageFile,
      stock
    });

    res.status(201).json({
      status: 'success',
      data: product
    });
  } catch (error) {
    res.status(400).json({
      status: 'error',
      message: error.message
    });
  }
};

exports.getAllProducts = async (req, res) => {
  try {
    const products = await Product.findAll({
      include: [
        {
          model: Category,
          as: 'category',
          attributes: ['id', 'name']
        }
      ],
      where: { is_active: true }
    });

    res.status(200).json({
      status: 'success',
      data: products
    });
  } catch (error) {
    res.status(500).json({
      status: 'error',
      message: error.message
    });
  }
};

exports.getProductById = async (req, res) => {
  try {
    const product = await Product.findByPk(req.params.id, {
      include: [
        {
          model: Category,
          as: 'category',
          attributes: ['id', 'name']
        }
      ]
    });

    if (!product) {
      return res.status(404).json({
        status: 'error',
        message: 'Produk tidak ditemukan'
      });
    }

    res.status(200).json({
      status: 'success',
      data: product
    });
  } catch (error) {
    res.status(500).json({
      status: 'error',
      message: error.message
    });
  }
};

exports.updateProduct = async (req, res) => {
  try {
    const { 
      name, 
      category_id, 
      description, 
      price, 
      stock,
      is_active 
    } = req.body;

    // Cari produk yang akan diupdate
    const product = await Product.findByPk(req.params.id);
    if (!product) {
      return res.status(404).json({
        status: 'error',
        message: 'Produk tidak ditemukan'
      });
    }

    // Validasi kategori jika diubah
    if (category_id) {
      const category = await Category.findByPk(category_id);
      if (!category) {
        return res.status(400).json({
          status: 'error',
          message: 'Kategori tidak valid'
        });
      }
    }

    // Proses upload gambar baru
    let imageFile = product.image;
    if (req.file) {
      // Hapus gambar lama jika ada
      if (product.image) {
        const oldImagePath = path.join(__dirname, '../uploads/products/', product.image);
        if (fs.existsSync(oldImagePath)) {
          fs.unlinkSync(oldImagePath);
        }
      }
      imageFile = req.file.filename;
    }

    // Update produk
    const [updated] = await Product.update(
      { 
        name, 
        category_id, 
        description, 
        price,
        image: imageFile,
        sku,
        stock,
        is_active
      },
      { 
        where: { id: req.params.id },
        returning: true 
      }
    );

    res.status(200).json({
      status: 'success',
      data: updated[1][0]
    });
  } catch (error) {
    res.status(400).json({
      status: 'error',
      message: error.message
    });
  }
};

exports.deleteProduct = async (req, res) => {
  try {
    const product = await Product.findByPk(req.params.id);
    if (!product) {
      return res.status(404).json({
        status: 'error',
        message: 'Produk tidak ditemukan'
      });
    }

    // Hapus file gambar jika ada
    if (product.image) {
      const imagePath = path.join(__dirname, '../uploads/products/', product.image);
      if (fs.existsSync(imagePath)) {
        fs.unlinkSync(imagePath);
      }
    }

    // Hapus produk
    await product.destroy();

    res.status(200).json({
      status: 'success',
      message: 'Produk berhasil dihapus'
    });
  } catch (error) {
    res.status(500).json({
      status: 'error',
      message: error.message
    });
  }
};