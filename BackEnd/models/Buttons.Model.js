import { Schema, model } from "mongoose";

const buttonSchema = new Schema({
    creatorEmail: {
        type: String,
        required: [true, "Email is required"],
    },
    IsLive: {
        type: Boolean,
        default: false,
    },
    buttonCategory: {
        type: String,
        required: [true, "Button Category is required"],
    },
    ReactTailwindCode: {
        type: String,
        required: [true, "React Tailwind Code is required"],
    },
    NumberOfViews: {
        type: Number,
        default: 0,
    },
}, {
    timestamps: true,
    versionKey: false,
});

export const ButtonModel = model("Button", buttonSchema);