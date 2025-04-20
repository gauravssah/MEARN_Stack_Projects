import categoryModel from "../models/categoryModel.js";
import slugify from "slugify";

export const createCategoryController = async (req, res) => {
    try {
        const { name } = req.body;

        // ✅ Validate input
        if (!name || name.trim() === "") {
            return res.status(400).send({ message: "Name is required!" });
        }

        // ✅ Check if category already exists (case-insensitive match recommended)
        const existingCategory = await categoryModel.findOne({ name: name.trim() });

        if (existingCategory) {
            return res.status(200).send({
                success: false,
                message: "Category already exists",
            });
        }

        // ✅ Create new category
        const category = await new categoryModel({
            name: name.trim(),
            slug: slugify(name, { lower: true }),
        }).save();

        return res.status(201).send({
            success: true,
            message: "New category created",
            category,
        });

    } catch (error) {
        console.error("Error creating category:", error);
        res.status(500).send({
            success: false,
            message: "Error while creating category",
            error: error.message,
        });
    }
};


// update category

export const updateCategoryController = async (req, res) => {
    try {
        const { name } = req.body;
        const { id } = req.params;
        const category = await categoryModel.findByIdAndUpdate(id, { name, slug: slugify(name) }, { new: true });

        res.status(200).send({
            success: true,
            message: "Category updating successfully",
            category,
        })


    } catch (error) {
        console.log(error);

        res.status(500).send({
            success: false,
            error,
            message: "Error while updating category"
        })
    }
};


// get all category
export const categoryController = async (req, res) => {
    try {
        const category = await categoryModel.find({});
        res.status(200).send({
            success: true,
            message: "All Category List",
            category,
        })
    } catch (error) {
        console.log(error);
        res.status(500).send({
            success: false,
            error,
            message: "Error while getting All category",
            error
        })
    }
};


// single category

export const singleCategoryController = async (req, res) => {
    try {
        const category = await categoryModel.findOne({ slug: req.params.slug });
        res.status(200).send({
            success: true,
            message: "Get single category sucessfully",
            category,
        })

    } catch (error) {
        console.log(error);
        res.status(500).send({
            success: false,
            error,
            message: "Error while getting single category",
            error
        })
    }
}


// delete Category

export const deleteCategoryController = async (req, res) => {
    try {
        const { id } = req.params;
        await categoryModel.findByIdAndDelete(id);
        res.status(200).send({
            success: true,
            message: "Category deleted sucessfully",
        })

    } catch (error) {
        console.log(error);
        res.status(500).send({
            success: false,
            error,
            message: "Error while deleting  category",
            error
        })
    }
}
