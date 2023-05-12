import User from "../models/user.js";
import mongoose from "mongoose";

export const getAllusers =  async(req,res) => {
try {
    const users=await User.find();
    res.status(200).json({users});
} catch (error) {
    res.status(404).json({message:error.message});
}
}

export const createUser = async (req,res) =>{
    
const newUser=new User({
    firstName:req.body.firstName,
    lastName:req.body.lastName,
    Avatar:req.body.Avatar,
    StudentNumber:req.body.StudentNumber
});
    try {
   await newUser.save();
    res.status(201).json({newUser});
} catch (error) {
    res.status(400).json({message:error.message});
}
}

export const deleteUser = async (req, res) => {
    const { id } = req.params;
  
    if (!mongoose.Types.ObjectId.isValid(id))
      return res.status(404).send(`No user with id: ${id}`);
  
    await User.findByIdAndRemove(id);
  
    res.json({ message: "Post deleted successfully." });
  };

  export const updateUser = async (req, res) => {
    const { id } = req.params;
    const { firstName,lastName,Avatar,StudentNumber } = req.body;
  
    if (!mongoose.Types.ObjectId.isValid(id))
      return res.status(404).send(`No user with id: ${id}`);
  
    const updatedUser = { firstName,lastName,Avatar,StudentNumber, _id: id };
  
    await User.findByIdAndUpdate(id, updatedUser, { new: true });
  
    res.json(updatedUser);
  };