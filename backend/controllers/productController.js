// function for add product
import { v2 as cloudinary } from "cloudinary";
import productModel from "../models/productModel.js";

const addProduct = async (req, res) => {
  try {
    const {
      name,
      description,
      price,
      category,
      subCategory,
      sizes,
      bestseller,
    } = req.body;
    let parsedSizes = [];

    if (Array.isArray(sizes)) {
      parsedSizes = sizes;
    } else {
      try {
        parsedSizes = JSON.parse(sizes);
      } catch (err) {
        parsedSizes = [];
      }
    }  
    
    console.log("RAW sizes from frontend:", sizes);
    const image1 = req.files.image1 && req.files.image1[0];
    const image2 = req.files.image2 && req.files.image2[0];
    const image3 = req.files.image3 && req.files.image3[0];
    const image4 = req.files.image4 && req.files.image4[0];
    const images = [image1, image2, image3, image4].filter(
      (item) => item !== undefined
    );
    let imagesUrl = await Promise.all(
      images.map(async (item) => {
        let result = await cloudinary.uploader.upload(item.path, {
          resource_type: "image",
        });
        return result.secure_url;
      })
    );
    const productData = {
      name,
      description,
      category,
      price: Number(price),
      subCategory,
      sizes: parsedSizes,
      bestseller: bestseller === "true" ? true : false,
      image: imagesUrl,
      date: Date.now(),
    };
    console.log(productData);
    const product = new productModel(productData);
    await product.save();
    res.json({ success: true, message: "Product added" });
    console.log(imagesUrl);
    console.log(
      name,
      description,
      price,
      category,
      subCategory,
      sizes,
      bestseller
    );
    console.log(image1, image2, image3, image4);
  } catch (error) {
    res.json({ success: false, message: error.message });
  }
};

/// function for list product
const listProduct = async (req, res) => {
  try {
    const products = await productModel.find({});
    res.json({ success: true, products });
  } catch (error) {
    res.json({ success: false, message: error.message });
  }
};

// function for remove Product
const removeProduct = async (req, res) => {
  try {
    await productModel.findByIdAndDelete(req.body.id);
    res.json({ success: true, message: "product remove" });
  } catch (error) {
    res.json({ success: false, message: error.message });
  }
};

// function for single Product info
const singleProduct = async (req, res) => {
  try {
    const { productId } = req.body;
    const product = await productModel.findById(productId);
    res.json({ success: true, message: product });
  } catch (error) {
    res.json({ success: false, message: error.message });
  }
};
const updateProduct = async (req, res) => {
  try {
    const { id, sizes } = req.body;

    let parsedSizes = [];
    if (Array.isArray(sizes)) {
      parsedSizes = sizes;
    } else {
      try {
        parsedSizes = JSON.parse(sizes);
      } catch (err) {
        parsedSizes = [];
      }
    }

    const updatedProduct = await productModel.findByIdAndUpdate(
      id,
      { sizes: parsedSizes },
      { new: true }
    );

    res.json({ success: true, message: "Product updated", product: updatedProduct });
  } catch (error) {
    res.json({ success: false, message: error.message });
  }
};

export { listProduct, addProduct, removeProduct, singleProduct,updateProduct };
