"use server"
import mongoose from "mongoose"
import 'dotenv/config'
import { Password } from "./make"

const MONGODB_URI = process.env.MONGODB_URI

async function connectDB(){
    await mongoose.connect(MONGODB_URI);
}

export async function savepassword (object){
    await connectDB()
    let password= new Password({...object})
    await password.save()
}

export async function findpasswords() {
    await connectDB();

    const data = await Password.find()

    const plain = data.map(i => ({
        id: i._id.toString(),
        site: i.site,
        password: i.password,
        username: i.username
    }));
    return plain;
}

export async function delet(id) {
    await connectDB();
    await Password.findByIdAndDelete(id);
}

export async function hedit(id , update) {
    await connectDB()
    await Password.findByIdAndUpdate(id , {...update})
}