import { Schema, model } from "mongoose";

const buttonSchema = new Schema({
    buttonCategory : {
        type : String,
        required : [true, "Button Category is required"],
    },
    ReactTailwindCode : {
        type : String,
        required : [true, "React Tailwind Code is required"],
    },
    NumberOfViews : {
        type : Number,
        default : 0,
    },
    NumbersOfCopyCode : {
        type : Number,
        default : 0,
    }
},{
    timestamps : true,
});

export const ButtonModel = model("Button", buttonSchema);