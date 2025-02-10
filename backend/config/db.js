import mongoose from "mongoose";

export const  connectDB = async () =>{

    await mongoose.connect('mongodb+srv://kritikrishna000:kriti2blue@cluster0.twb0s.mongodb.net/food-del').then(()=>console.log("DB Connected"));
   
}


