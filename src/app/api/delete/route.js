import {NextResponse} from "next/server";

import cloudinary from "@/lib/cloudinary";


export async function POST(req){


const {id}=await req.json();


await cloudinary.uploader.destroy(id);



return NextResponse.json({

message:"Deleted"

});


}