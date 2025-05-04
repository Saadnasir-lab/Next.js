"use server"
import fs from "fs/promises"

export const submit=async(data)=>{
    // fs.appendFile("users.txt" , `The name is ${data.username} and pasword is ${data.password}`)
    fs.writeFile("user.txt",`The name is ${data.get("name")} and address is ${data.get("add")}`)
}