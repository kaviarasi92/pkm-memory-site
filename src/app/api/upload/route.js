import { NextResponse } from "next/server";

import cloudinary from "@/lib/cloudinary";

import { db } from "@/lib/firebase";

import { collection, addDoc } from "firebase/firestore";


export async function POST(req){


const formData = await req.formData();


const file = formData.get("file");

const folder = formData.get("folder");


const bytes = await file.arrayBuffer();

const buffer = Buffer.from(bytes);



const result = await new Promise((resolve,reject)=>{


cloudinary.uploader.upload_stream(

{

folder:`PKM-Memories/${folder}`

},

(error,result)=>{


if(error)

reject(error);

else

resolve(result);


}

).end(buffer);


});



// SAVE PHOTO DETAILS

await addDoc(

collection(db,"photos"),

{

public_id: result.public_id,

secure_url: result.secure_url,

folder: folder,

createdAt: new Date()

}

);



return NextResponse.json(result);


}