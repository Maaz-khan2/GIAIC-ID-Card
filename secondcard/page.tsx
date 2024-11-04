
"use client";
import Image from "next/image";
import React from "react";
import Link from "next/link";

export default function SecondCard() {
  return (
    <>
      <title>Second Card</title>

      <div className="flex flex-col min-h-screen bg-white p-5 md:p-20">
        <div className="flex-grow flex items-center justify-center">
          <div className="relative py-[5%] px-20 rounded-lg max-w-3xl w-full border-4 bg-gray-100 border-blue-300 overflow-hidden">
            
            {/* Background Image */}
            <div className="absolute inset-0 flex items-center justify-center opacity-10">
              <Image
                src="/image/logo.png"
                alt="background image"
                layout="fill"
                objectFit="cover"
                quality={100}
                className="z-0"
              />
            </div>

            {/* Content Wrapper */}
            <div className="relative z-10 flex flex-col md:flex-row items-center md:items-start justify-between space-y-8 md:space-y-0 md:space-x-8">

              {/* Text Section */}
              <div className="text-center md:text-left">
                <h2 className="text-xl md:text-2xl lg:text-3xl font-bold text-blue-900 mb-2">
                  Governor Sindh
                </h2>
                <h2 className="text-xl md:text-2xl lg:text-3xl font-bold text-blue-900 mb-2">
                  Kamran Khan
                </h2>
                <h2 className="text-xl md:text-2xl lg:text-3xl font-bold text-blue-900 mb-2">
                  Tessori's Initiative for
                </h2>
                <h2 className="text-xl md:text-2xl lg:text-3xl font-bold text-blue-900 mb-2">
                  Artificial Intelligence,
                </h2>
                <h2 className="text-xl md:text-2xl lg:text-3xl font-bold text-blue-900 mb-2">
                  Web 3.0 & Metaverse
                </h2>



    {/* Link Button - Visible on Medium Screens and Above */}
    <div className="flex justify-start">
            <Link href="http://localhost:3000" passHref>
              <button className="hidden md:block bg-blue-400 py-3 px-6 text-white font-bold mt-4">
                BACK
              </button>
            </Link>
          </div>





              </div>

              {/* QR Code and Q2 Text Section */}
              <div style={{marginTop:"-10%"}} className="flex flex-col items-center md:items-end">
                <Image
                  src="/image/scan icon.png"
                  alt="Scan Icon"
                  width={250}
                  height={100}
                  className="rounded-lg"
                />
                <p style={{fontSize:"140px"}} className=" md:text-6xl lg:text-7xl text-sky-300 font-bold mt-4">
                  Q2
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
