"use client";

import { useState, Suspense } from "react";
import { useSearchParams } from "next/navigation";


function UploadForm() {

  const params = useSearchParams();

  const album = params.get("album") || "family";


  const [file, setFile] = useState(null);


  const upload = async () => {

    if (!file) {
      alert("Please select a photo first");
      return;
    }


    const formData = new FormData();


    formData.append(
      "file",
      file
    );


    formData.append(
      "folder",
      album
    );


    const res = await fetch(
      "/api/upload",
      {
        method: "POST",
        body: formData
      }
    );


    const data = await res.json();


    console.log(data);


    alert("Photo uploaded ❤️");


  };


  return (

    <div className="min-h-screen flex flex-col items-center justify-center">


      <h1 className="text-3xl font-bold">

        Upload to {album}

      </h1>



      <input

        type="file"

        accept="image/*"

        onChange={(e)=>setFile(e.target.files[0])}

        className="mt-5"

      />



      <button

        className="bg-blue-600 text-white p-3 mt-5 rounded"

        onClick={upload}

      >

        Upload

      </button>



    </div>

  );

}



export default function Upload() {


  return (

    <Suspense

      fallback={

        <div className="min-h-screen flex items-center justify-center">

          Loading...

        </div>

      }

    >

      <UploadForm />

    </Suspense>

  );

}