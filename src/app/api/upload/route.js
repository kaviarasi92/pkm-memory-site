import {NextResponse} from "next/server";

import cloudinary from "@/lib/cloudinary";


export async function POST(req){


const formData=await req.formData();


const file=formData.get("file");

const folder=formData.get("folder");



const bytes=await file.arrayBuffer();

const buffer=Buffer.from(bytes);



const result=await new Promise(

(resolve,reject)=>{


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


)

.end(buffer);



}

);



return NextResponse.json(result);


}