"use client";


import {signOut} from "firebase/auth";

import {auth} from "@/lib/firebase";

import {useRouter} from "next/navigation";



export default function Dashboard(){


const router = useRouter();



const logout = async()=>{


await signOut(auth);


router.push("/login");


};



return(


<div className="min-h-screen bg-gradient-to-br from-pink-100 via-white to-purple-100 dark:from-gray-900 dark:to-black p-8">


<div className="max-w-4xl mx-auto text-center">


<h1 className="text-5xl font-bold text-pink-600 dark:text-pink-400">

❤️ PKM Memories ❤️

</h1>


<p className="mt-5 text-xl text-gray-700 dark:text-gray-300">

"Our Family's Love Vault where memories live, smiles stay forever and moments are always remembered"

</p>



<div className="grid md:grid-cols-3 gap-6 mt-12">


<button

onClick={()=>router.push("/upload")}

className="bg-pink-600 text-white p-8 rounded-3xl text-xl shadow-xl hover:scale-105 transition"

>

📸

<br/>

Upload Memory

</button>





<button

onClick={()=>router.push("/albums")}

className="bg-purple-600 text-white p-8 rounded-3xl text-xl shadow-xl hover:scale-105 transition"

>

📁

<br/>

Create Album

</button>





<button

onClick={()=>router.push("/gallery")}

className="bg-blue-600 text-white p-8 rounded-3xl text-xl shadow-xl hover:scale-105 transition"

>

🖼️

<br/>

View Memories

</button>



</div>





<button


onClick={logout}


className="mt-12 bg-red-600 text-white px-8 py-3 rounded-xl"


>


Logout


</button>



</div>


</div>


)

}