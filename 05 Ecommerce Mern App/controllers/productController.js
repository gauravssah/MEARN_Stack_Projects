// controllers/productController.js
import slugify from "slugify";
import productModel from "../models/productModel.js";
import fs from 'fs';

export const createProductController = async (req, res) => {
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

        const product = new productModel({
            ...req.fields,
            slug: slugify(name)
        });

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
        console.log("Product Creation Error:", error);
        res.status(500).send({
            success: false,
            message: "Error in creating product",
            error,
        });
    }
};


// get all products 
export const getProductController = async (req, res) => {
    try {
        const products = await productModel.find({}).populate('category').select("-photo").limit(12).sort({ createdAt: -1 });

        res.status(200).send({
            success: true,
            message: "All Products",
            total: products.length,
            products,
        });

    } catch (error) {
        console.log("all Product Getting Error:", error);
        res.status(500).send({
            success: false,
            message: "Error in Getting all product",
            error,
        });
    }
}

// getSingleProductController

export const getSingleProductController = async (req, res) => {
    try {
        const product = await productModel.findOne({ slug: req.params.slug }).select('-photo').populate("category");
        res.status(200).send({
            success: true,
            message: "single product fetched",
            product
        })

    } catch (error) {
        console.log("Single Product Getting Error:", error);
        res.status(500).send({
            success: false,
            message: "Error in Getting Single product",
            error,
        });
    }
}

// productPhotoController

export const productPhotoController = async (req, res) => {
    try {
        const product = await productModel.findById(req.params.pid).select('photo');

        if (product.photo.data) {
            res.set("Content-type", product.photo.contentType);
            return res.status(200).send(product.photo.data);
        }


    } catch (error) {
        console.log("Product Photo Getting Error:", error);
        res.status(500).send({
            success: false,
            message: "Error in Getting Photo of product",
            error,
        });
    }
}

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
}

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
}