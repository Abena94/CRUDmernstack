import express from "express";
import { createUser, getAllusers,deleteUser,updateUser } from "../controllers/user.js";


const router=express.Router();

router.get('/getall',getAllusers);
router.post('/createuser',createUser);
router.delete('/deleteuser/:id',deleteUser);
router.patch('/updateuser/:id',updateUser);





export default router;