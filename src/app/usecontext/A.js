"use client"

import React, {createContext} from "react";

export const Firstname = createContext()

function A (props){

    return(

        <div>

             <Firstname.Provider value="hn kaha he tu yaha ho may tu kaha he">

                   {props.children}

             </Firstname.Provider>


        </div>    


    )
     
}

export default A;