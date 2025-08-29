// controllers/productController.js
import slugify from "slugify";
import productModel from "../models/productModel.js";
import fs from 'fs';

export const createProductController = async (req, res) => {
    try {
        const { name, description, price, category, quantity, shipping } = req.fields;
        const { photo } = req.files;

        // Validation
        switch (true) {
            case !name:
                return res.status(400).send({ error: "Product name is required." });
            case !description:
                return res.status(400).send({ error: "Product description is required." });
            case !price:
                return res.status(400).send({ error: "Product price is required." });
            case !category:
                return res.status(400).send({ error: "Product category is required." });
            case !quantity:
                return res.status(400).send({ error: "Product quantity is required." });
            case photo && photo.size > 1000000:
                return res.status(400).send({ error: "Product photo should be less than 1MB." });
        }


        // Create new product
        const product = new productModel({
            ...req.fields,
            slug: slugify(name),
        });

        // Handle product photo
        if (photo) {
            product.photo.data = fs.readFileSync(photo.path);
            product.photo.contentType = photo.type;
        }

        await product.save();
        res.status(201).send({
            success: true,
            message: "Product created successfully",
            product,
        });
    } catch (error) {
        console.log("Error while creating product:", error);
        res.status(500).send({
            success: false,
            message: "Failed to create product",
            error,
        });
    }
};


// get all products 
export const getProductController = async (req, res) => {
    try {
        const products = await productModel.find({}).populate('category').select("-photo").sort({ createdAt: -1 });

        res.status(200).send({
            success: true,
            message: "All products fetched successfully.",
            total: products.length,
            products,
        });

    } catch (error) {
        console.log("Error while fetching all products:", error);
        res.status(500).send({
            success: false,
            message: "Failed to fetch products.",
            error,
        });
    }
};

// getSingleProductController

export const getSingleProductController = async (req, res) => {
    try {
        const product = await productModel.findOne({ slug: req.params.slug }).select('-photo').populate("category");
        res.status(200).send({
            success: true,
            message: "Single product fetched successfully.",
            product
        })

    } catch (error) {
        console.log("Error while fetching single product:", error);
        res.status(500).send({
            success: false,
            message: "Failed to fetch single product.",
            error,
        });
    }
};

// productPhotoController

export const productPhotoController = async (req, res) => {
    try {
        const product = await productModel.findById(req.params.pid).select('photo');

        if (product.photo.data) {
            res.set("Content-type", product.photo.contentType);
            return res.status(200).send(product.photo.data);
        } else {
            res.status(404).send({ message: "Product photo not found." });
        }


    } catch (error) {
        console.log("Error while fetching product photo:", error);
        res.status(500).send({
            success: false,
            message: "Failed to fetch product photo.",
            error,
        });
    }
};

// deleteProductController

export const deleteProductController = async (req, res) => {
    try {
        await productModel.findByIdAndDelete(req.params.pid).select("-photo");
        res.status(200).send({
            success: true,
            message: "Product Deleted Successfully"
        });

    } catch (error) {
        console.log("Product Deleting Getting Error:", error);
        res.status(500).send({
            success: false,
            message: "Error in Getting Deleting product",
            error,
        });
    }
};

// update Product Controller
export const updateProductController = async (req, res) => {
    try {
        const { name, description, price, category, quantity, shipping } = req.fields;
        const { photo } = req.files;

        // validation
        switch (true) {
            case !name:
                return res.status(400).send({ error: "Name is required" });
            case !description:
                return res.status(400).send({ error: "Description is required" });
            case !price:
                return res.status(400).send({ error: "Price is required" });
            case !category:
                return res.status(400).send({ error: "Category is required" });
            case !quantity:
                return res.status(400).send({ error: "Quantity is required" });
            case photo && photo.size > 1000000:
                return res.status(400).send({ error: "Photo should be less than 1MB" });
        }

        const product = await productModel.findByIdAndUpdate(req.params.pid,
            { ...req.fields, slug: slugify(name) }, { new: true }
        )

        if (photo) {
            product.photo.data = fs.readFileSync(photo.path);
            product.photo.contentType = photo.type;
        }

        await product.save();
        res.status(201).send({
            success: true,
            message: "Product updated successfully",
            product,
        });
    } catch (error) {
        console.log("Product Creation Error:", error);
        res.status(500).send({
            success: false,
            message: "Error in update product",
            error,
        });
    }
};


// search product

export const searchProductController = async (req, res) => {
    try {
        const { keyword } = req.params;
        const results = await productModel.find({
            $or: [
                { name: { $regex: keyword, $options: "i" } },
                { description: { $regex: keyword, $options: "i" } },
            ],
        }).select("-photo");

        res.json(results);

    } catch (error) {
        console.log("Product Creation Error:", error);
        res.status(500).send({
            success: false,
            message: "Error in Searching product",
            error,
        });
    }
};

