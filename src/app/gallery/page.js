"use client";


import {useEffect,useState} from "react";


export default function Gallery(){


const [photos,setPhotos]=useState([]);



useEffect(()=>{


fetch("/api/gallery")

.then(res=>res.json())

.then(data=>setPhotos(data));


},[]);




const removePhoto=async(id)=>{


await fetch("/api/delete",{

method:"POST",

headers:{
"Content-Type":"application/json"
},

body:JSON.stringify({

id

})


});


setPhotos(

photos.filter(
p=>p.public_id!==id
)

);



};



return(


<div className="min-h-screen bg-pink-50 p-10">


<h1 className="text-4xl font-bold text-center text-pink-600">

🖼 Family Memories ❤️

</h1>



<div className="grid md:grid-cols-3 gap-6 mt-10">


{

photos.map(photo=>(


<div

key={photo.id}

className="bg-white rounded-xl shadow p-4"

>


<img

src={photo.secure_url}

className="rounded-xl"

/>



<button

className="mt-3 bg-red-600 text-white px-4 py-2 rounded"

onClick={()=>removePhoto(photo.public_id)}

>

Delete

</button>



</div>


))


}


</div>



</div>


)


}