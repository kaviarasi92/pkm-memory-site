"use client";


import {useState} from "react";

import {auth} from "@/lib/firebase";

import {
signInWithEmailAndPassword
}
from "firebase/auth";

import {
Eye,
EyeOff
}
from "lucide-react";



export default function Login(){


const [email,setEmail]=useState("");

const [password,setPassword]=useState("");

const [showPassword,setShowPassword]=useState(false);



const login=async()=>{


try{


await signInWithEmailAndPassword(

auth,

email,

password

);



window.location.href="/love";


}

catch(error){


alert(error.message);


}



};




return(


<div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-pink-200 via-white to-purple-200 dark:from-gray-900 dark:via-gray-800 dark:to-black px-5">


<div className="w-full max-w-md bg-white dark:bg-gray-900 shadow-2xl rounded-3xl p-10">


<h1 className="text-4xl font-bold text-center text-pink-600 dark:text-pink-400">

❤️ PKM Memories

</h1>



<p className="text-center mt-3 text-gray-600 dark:text-gray-300">

Our Family Love Vault

</p>




<input


className="
w-full
mt-8
p-4
rounded-xl
border
border-gray-300
dark:border-gray-600
bg-white
dark:bg-gray-800
text-black
dark:text-white
placeholder-gray-500
outline-none
focus:ring-2
focus:ring-pink-500
"


placeholder="Family Email"


type="email"


value={email}


onChange={(e)=>setEmail(e.target.value)}


/>





<div className="relative mt-5">


<input


className="
w-full
p-4
pr-12
rounded-xl
border
border-gray-300
dark:border-gray-600
bg-white
dark:bg-gray-800
text-black
dark:text-white
placeholder-gray-500
outline-none
focus:ring-2
focus:ring-pink-500
"


placeholder="Password"


type={showPassword ? "text":"password"}


value={password}


onChange={(e)=>setPassword(e.target.value)}


/>



<button


type="button"


className="absolute right-4 top-4 text-gray-600 dark:text-gray-300"


onClick={()=>setShowPassword(!showPassword)}


>


{

showPassword ?

<EyeOff size={22}/>

:

<Eye size={22}/>


}



</button>



</div>





<button


className="w-full mt-8 bg-pink-600 hover:bg-pink-700 text-white font-semibold py-4 rounded-xl transition"


onClick={login}


>
    


Enter Memories ❤️


</button>



</div>


</div>


)

}