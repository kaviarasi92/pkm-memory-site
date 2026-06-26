import { NextResponse } from "next/server";

import { db } from "@/lib/firebase";

import { collection, getDocs } from "firebase/firestore";


export async function GET(){


const snapshot = await getDocs(

collection(db,"photos")

);



const photos = snapshot.docs.map(doc=>({

id:doc.id,

...doc.data()

}));


return NextResponse.json(photos);


}