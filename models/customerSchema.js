import mongoose,{Schema} from "mongoose";

// define the Schema (the structure of the article)
const userSchema = new Schema({
    firstName: String,
    lastName: String,
    email: String,
    phoneNumber: String,
    age: Number,
    country: String,
    gender: String,
}, { timestamps: true});

// Create a model based on that schema
 export const User = mongoose.model("customer",userSchema)
