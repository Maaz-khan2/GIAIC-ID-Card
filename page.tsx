"use client";
import Image from "next/image";
import Link from "next/link";
// import "./styles.css";
import React from "react";

export default function Home() {
  return (
    <>
      <title>ID Card</title>
      <div className="flex flex-col min-h-screen bg-white">
        <div className="flex-grow flex items-center justify-center p-6 md:p-12">
          <div className="p-8 rounded-lg max-w-3xl w-full border-4 bg-gray-100 border-blue-300 relative overflow-hidden">


            {/* Background Image */}
            <div className="absolute inset-0">
              <img
                src="/image/kam.png"
                alt="background"
                className="w-full h-full object-cover opacity-10"
                style={{ position: "absolute", top: 0, left: 0 }}
              />
            </div>

            

            {/* Content Section */}
            <div className="relative z-10 flex flex-col md:flex-row items-start md:items-center">
              {/* Left Section - Text */}
              <div className="w-full md:w-2/3 p-4">
                <img
                  className="max-w-[120px] max-h-[120px] mb-4"
                  src="image/logo.png"
                  alt="Logo"
                />

                <p className="p-1">
                  <strong className="text-sky-500">Name:</strong> Maaz Khan
                </p>
                <p className="p-1">
                  <strong className="text-sky-500">Roll No:</strong> 478288
                </p>
                <p className="p-1">
                  <strong className="text-sky-500">Distance Learning:</strong>{" "}
                  No
                </p>
                <p className="p-1">
                  <strong className="text-sky-500">City:</strong> Karachi
                </p>
                <p className="p-1">
                  <strong className="text-sky-500">Center:</strong> Governor
                  House Karachi
                </p>
                <p className="p-1">
                  <strong className="text-sky-500">Campus:</strong> Main
                </p>
                <p className="p-1">
                  <strong className="text-sky-500">Day & Time:</strong> Sunday,
                  2:00pm to 5:00pm
                </p>
                <p className="p-1">
                  <strong className="text-sky-500">Batch:</strong> 1
                </p>

                {/* Button */}
               <Link target="blank" href={"http://localhost:3000/secondcard"}> <button className="transition-all duration-500 ease-in-out bg-blue-900 hover:bg-blue-500 hover:shadow-xl text-white w-full py-3 mt-5 rounded-lg">
                  Q2&WMB
                </button>

                </Link>
              </div>

              {/* Right Section - Image and Signature */}
              <div className="w-full md:w-1/3 flex flex-col items-center md:items-end md:ml-4 mt-6 md:mt-5">
                <img
                  className="w-50 h-60 rounded-lg mb-4"
                  src="image/Coat.jpg"
                  alt="User Image"
                />
                <p className="border-t-2 border-blue-900 shadow-lg px-4 py-2 mt-4">
                  Authorized Signature
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
