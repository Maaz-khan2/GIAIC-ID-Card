"use client"

import React , { useEffect, useState } from "react";


export default function use() {
    const [click, setClick] = useState(20);

  useEffect(() => {

      document.title = `You click ${click} Times.`
  })


    return (
      <>

        {/* <title>usestate & effect hook</title> */}


        <h1 className="ml-40 mt-40  text-center text-8xl font-bold text-red-500">
          You clicked {click} times
        </h1>
        <button

          onClick={() => setClick((prevclick) => prevclick-30)}

          style={{ marginLeft: "47%" }}
          className="text-2xl border-4 bg-pink-200 py-7 px-20 text-center mt-20 rounded-lg font-bold hover:text-white hover:bg-pink-500 transition-all duration-300 "
        >
          Click {click} here
        </button>
      </>
    );
  }
  