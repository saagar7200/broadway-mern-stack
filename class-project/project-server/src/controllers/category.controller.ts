import { Request, Response } from "express";
import { asyncHandler } from "../utils/asyncHandler.util";
import Category from "../models/category.model";
import CustomError from "../middlewares/errorhandler.middleare";

export const create = asyncHandler(async (req: Request, res: Response) => {
	const body = req.body;
	const category = await Category.create(body);

	res.status(201).json({
		status: "success",
		success: true,
		data: category,
		message: "Category created successfully!",
	});
});

export const getAll = asyncHandler(async (req: Request, res: Response) => {
	const categories = await Category.find({});

	res.status(200).json({
		success: true,
		status: "success",
		data: categories,
		message: "Categories fetched successfully!",
	});
});

export const update = asyncHandler(async (req: Request, res: Response) => {
	const { name, description } = req.body;
	const id = req.params.id;
	if (!id) {
		throw new CustomError("id is required", 404);
	}
	const category = await Category.findByIdAndUpdate(
		id,
		{ name, description },
		{ new: true }
	);
	if (!category) {
		throw new CustomError("Category not found", 404);
	}

	res.status(200).json({
		success: true,
		status: "success",
		data: category,
		message: "Category updated successfully!",
	});
});

export const remove = asyncHandler(async (req: Request, res: Response) => {
	const id = req.params.id;
	if (!id) {
		throw new CustomError("id is required", 404);
	}
	const category = await Category.findById(id);
	if (!category) {
		throw new CustomError("Category not found", 404);
	}

	await Category.findByIdAndDelete(category._id);

	res.status(200).json({
		success: true,
		status: "success",
		data: category,
		message: "Category deleted successfully!",
	});
});

export const getById = asyncHandler(async (req: Request, res: Response) => {
	const id = req.params.id;
	if (!id) {
		throw new CustomError("id is required", 404);
	}
	const category = await Category.findById(id);
	if (!category) {
		throw new CustomError("Category not found", 404);
	}

	res.status(200).json({
		success: true,
		status: "success",
		data: category,
		message: "Category fetched successfully!",
	});
});
