import { ButtonModel } from "../models/Buttons.Model.js";
const sendButtons = async (req, res) => {
    try {
        const { page = 1 } = req.query;
        const buttons = await ButtonModel.find({
            IsLive: true,
        })
            .sort({ createdAt: -1 })
            .skip((page - 1) * 15)
            .limit(15);
        return {
            success: true,
            data: buttons,
        };
    } catch (error) {
        return {
            success: false,
            message: error.message,
        };
    }
};

// protected route for admin to add button
const sendAllButtons = async (req, res) => {
    try {
        const data = await ButtonModel.find()
            .sort({ createdAt: -1 })
            .select("-ReactTailwindCode");
        if (!data) {
            return {
                success: false,
                message: "No buttons found",
            };
        }
        return {
            success: true,
            data,
        };
    } catch (error) {
        return {
            success: false,
            message: error.message,
        };
    }
};

const addButton = async (req, res) => {
    try {
        console.log(req.body);
        const { buttonCategory, ReactTailwindCode, email } = req.body;
        if (!buttonCategory || !ReactTailwindCode || !email) {
            return {
                success: false,
                message: "All fields are required",
            };
        }

        const newButton = await ButtonModel.create({
            buttonCategory,
            ReactTailwindCode,
            creatorEmail: email,
        });
        if (!newButton) {
            return {
                success: false,
                message: "Button not added",
            };
        }

        return {
            success: true,
            message: "Button Submitted successfully",
        };
    } catch (error) {
        return {
            success: false,
            message: error.message,
        };
    }
};

const updateButton = async (req, res) => {
    try {
        const { id } = req.params;
        if (!id) {
            return {
                success: false,
                message: "Button id is required",
            };
        }
        const { IsLive } = req.body;
        const button = await ButtonModel.findOneAndUpdate(
            { _id: id },
            { IsLive },
            { returnDocument: "after" },
        );
        if (!button) {
            return {
                success: false,
                message: "Button not found",
            };
        }
        return {
            success: true,
            message: "Button updated successfully",
            data: button,
        };
    } catch (error) {
        return {
            success: false,
            message: error.message,
        };
    }
};

const deleteButton = async (req, res) => {
    try {
        const { id } = req.params;
        if (!id) {
            return {
                success: false,
                message: "Button id is required",
            };
        }
        const button = await ButtonModel.findOneAndDelete({ _id: id });
        if (!button) {
            return {
                success: false,
                message: "Button not found",
            };
        }
        return {
            success: true,
            message: "Button deleted successfully",
        };
    } catch (error) {
        return {
            success: false,
            message: error.message,
        };
    }
};

const singleBtnSendAndUpdateView = async (req, res) => {
    try {
        const { id } = req.params;
        if (!id) {
            return {
                success: false,
                message: "Button id is required",
            };
        }
        const button = await ButtonModel.findOneAndUpdate(
            { _id: id },
            {
                $inc: {
                    NumberOfViews: +1,
                },
            },
            {
                returnDocument: "after",
            }
        );
        if (!button) {
            return {
                success: false,
                message: "Button not found",
            };
        }
        return {
            success: true,
            data: button,
        };
    } catch (error) {
        return {
            success: false,
            message: error.message,
        };
    }
};

export { sendButtons, addButton, sendAllButtons, updateButton, deleteButton, singleBtnSendAndUpdateView };
