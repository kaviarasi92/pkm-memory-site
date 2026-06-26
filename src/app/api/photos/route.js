import { NextResponse } from "next/server";
import cloudinary from "@/lib/cloudinary";


export async function GET(){


const result = await cloudinary.search
.expression("folder:PKM-Memories")
.sort_by("created_at","desc")
.execute();



const photos = result.resources.map((photo)=>({

url: photo.secure_url,
id: photo.public_id

}));


return NextResponse.json(photos);


}