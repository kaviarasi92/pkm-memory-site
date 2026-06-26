"use client";

import { useState } from "react";


export default function LovePage(){

const [noPosition,setNoPosition] = useState({
top:"50%",
left:"55%"
});


const moveNoButton = ()=>{

const newTop = Math.random()*80 + "%";
const newLeft = Math.random()*80 + "%";


setNoPosition({
top:newTop,
left:newLeft
});


};


return(

<div className="min-h-screen flex flex-col items-center justify-center bg-pink-100 relative overflow-hidden">


<h1 className="text-4xl md:text-5xl font-bold text-pink-600 text-center">

Do you love the Queen of the Family - KAVIARASI ❤️

</h1>



<div className="mt-10 flex gap-10">


<button

className="bg-green-600 text-white px-8 py-4 rounded-xl text-xl"

onClick={()=>{
alert("I knew it ❤️ Queen KAVIARASI wins!");
window.location.href="/dashboard";
}}

>

ALWAYS YES

</button>



<button

className="bg-red-600 text-white px-8 py-4 rounded-xl text-xl absolute"

style={{
top:noPosition.top,
left:noPosition.left
}}

onMouseEnter={moveNoButton}

>

No

</button>


</div>


</div>


)

}