"use client"

import React, { useContext } from "react";
import { Firstname } from "../usecontext/A";

function B (props){

  const firstname = useContext(Firstname)

    return(

        <div>

             {firstname}


        </div>    


    )
     
}

export default B;