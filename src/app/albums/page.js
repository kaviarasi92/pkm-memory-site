"use client";


import {useState} from "react";


export default function Albums(){


const [album,setAlbum]=useState("");



return(

<div className="min-h-screen flex flex-col items-center justify-center">


<h1 className="text-4xl font-bold">

📁 Create Album

</h1>



<input

className="border p-3 mt-5"

placeholder="Wedding 2026"

onChange={(e)=>setAlbum(e.target.value)}

/>



<button

className="bg-purple-600 text-white px-5 py-3 mt-5 rounded"

onClick={()=>{

window.location.href=
`/upload?album=${album}`

}}

>

Create Album

</button>


</div>


)


}