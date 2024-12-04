const Category = require('../models/CategoryProduct');
const slugify = require('slugify');

exports.createCategory = async (req, res) => {
    try {
        const { name, description } = req.body;
        const slug = slugify(name, { lower: true });

        const category = await Category.create({
        name,
        description,
        slug
        });

        res.status(201).json({
        status: 'success',
        data: category
        });
    } catch (error) {
        res.status(400).json({
        status: 'error',
        message: error.message
        });
    }
    };

    exports.getAllCategories = async (req, res) => {
    try {
        const categories = await Category.findAll({
        where: { is_active: true }
        });

        res.status(200).json({
        status: 'success',
        data: categories
        });
    } catch (error) {
        res.status(500).json({
        status: 'error',
        message: error.message
        });
    }
    };

    exports.getCategoryById = async (req, res) => {
    try {
        const category = await Category.findByPk(req.params.id);
        
        if (!category) {
        return res.status(404).json({
            status: 'error',
            message: 'Kategori tidak ditemukan'
        });
        }

        res.status(200).json({
        status: 'success',
        data: category
        });
    } catch (error) {
        res.status(500).json({
        status: 'error',
        message: error.message
        });
    }
    };

    exports.updateCategory = async (req, res) => {
    try {
        const { name, description, is_active } = req.body;
        const slug = name ? slugify(name, { lower: true }) : undefined;

        const [updated] = await Category.update(
        { name, description, slug, is_active },
        { 
            where: { id: req.params.id },
            returning: true 
        }
        );

        if (updated[0] === 0) {
        return res.status(404).json({
            status: 'error',
            message: 'Kategori tidak ditemukan'
        });
        }

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

    exports.deleteCategory = async (req, res) => {
    try {
        const deleted = await Category.destroy({
        where: { id: req.params.id }
        });

        if (deleted === 0) {
        return res.status(404).json({
            status: 'error',
            message: 'Kategori tidak ditemukan'
        });
        }

        res.status(200).json({
        status: 'success',
        message: 'Kategori berhasil dihapus'
        });
    } catch (error) {
        res.status(500).json({
        status: 'error',
        message: error.message
        });
    }
};