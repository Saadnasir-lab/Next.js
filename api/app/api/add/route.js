import { NextResponse } from "next/server";
import { readFileSync } from "fs";

let a = JSON.parse(readFileSync("package.json", "utf8"));


export async function POST(request) {
    console.log(a);
    let data=await request.json()
    console.log(data);
    return NextResponse.json({success:true, data})
}
