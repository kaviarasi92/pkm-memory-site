"use client";


import {useState} from "react";

import {useSearchParams} from "next/navigation";



export default function Upload(){


const params=useSearchParams();


const album=params.get("album");

const [file,setFile]=useState(null);



const upload=async()=>{


const formData=new FormData();


formData.append(
"file",
file
);


formData.append(
"folder",
album
);



const res=await fetch(

"/api/upload",

{

method:"POST",

body:formData

}

);



const data=await res.json();


console.log(data);



alert("Photo uploaded ❤️");



};



return(


<div className="min-h-screen flex flex-col items-center justify-center">


<h1 className="text-3xl font-bold">

Upload to {album}

</h1>



<input

type="file"

onChange={(e)=>setFile(e.target.files[0])}

/>



<button

className="bg-blue-600 text-white p-3 mt-5"

onClick={upload}

>

Upload

</button>



</div>


)

}