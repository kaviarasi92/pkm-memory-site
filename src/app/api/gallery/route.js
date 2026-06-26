import {NextResponse} from "next/server";

import cloudinary from "@/lib/cloudinary";


export async function GET(){


const result =
await cloudinary.search
.expression(
"folder:PKM-Memories"
)
.sort_by(
"created_at",
"desc"
)
.max_results(100)
.execute();



return NextResponse.json(result.resources);



}