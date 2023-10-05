

import React from 'react'
import {FcLike} from "react-icons/fc"
import {CiLocationOn} from 'react-icons/ci'
import {LiaHotelSolid} from 'react-icons/lia'
import {BiBed} from 'react-icons/bi'
import {LiaBathSolid} from 'react-icons/lia'
import Area from "../area.png"

import {Link} from 'react-router-dom'

const PropertyCard=({element})=>{

    console.log(element)
// console.log(element?.id)
      return(
        <div className="w-[350px] bg-white bg-opacity-80 p-1 rounded-md overflow-hidden">
            
            <div className="relative">
                <Link to={`/property/${element?.id}`}>
                <img className="w-[400px] h-[250px] p-2 rounded-2xl" src={element?.image} alt="{element?.name}"/>

                </Link>
             
              
                <FcLike fontSize="1.75rem"  className="right-6 top-5 absolute  bg-white p-1 rounded-full"/>
                <div className="absolute left-6 text-center text-blue-600 font-bold top-5 rounded-full w-[25%] h-[14%] bg-white">
                  {element?.rental}
                </div>

                  <div  className={`  ${element?.famous==='Popular'
                    ? "bg-blue-700 w-[30%] text-center text-white absolute top-48 p-2 font-medium"
                    : "bg-white"
                } `}>
                     {element?.famous}
                  </div>
            
              
            </div>
           
            <div className="flex  ml-4 mt-2">
                <CiLocationOn color="red" className="mt-1"/>
                <div>
                    {element?.location}
                </div>
            </div>
            <div className=" font-semibold ml-4 mt-2">
                {element?.name}
            </div>
            <div className="flex flex-row mt-4 border-dotted border-b-2 justify-between ml-5 mr-6">
                 <div className="flex flex-col border-r-2 ">
                    <LiaHotelSolid fontSize={24}/>
                    <div className="mt-2 mx-auto">
                        {element?.room}
                    </div>
                 </div>
                 <div className="flex flex-col border-dotted border-r-2">
                    <BiBed fontSize={24}/>
                    <div className="mt-2 mx-auto">
                        {element?.bed}
                    </div>
                 </div>
                 <div className="flex flex-col border-dotted border-r-2">
                    <LiaBathSolid fontSize={24}/>
                    <div className="mt-2 mx-auto">
                        {element?.Bath}
                    </div>
                 </div>
                 <div className="flex flex-col">
                    <img src={Area}/>
                    <div className="mt-2 mx-auto">
                        {element?.Area}
                    </div>
                 </div>
                 
            </div>
            <div className="flex justify-between mt-5 ml-5 mr-6 mb-6">
                <div className="flex gap-0">
                <div className="text-blue-600 font-extrabold">${element?.price}</div>
                <div>/month</div>
                </div>
                
                <button className="bg-transparent hover:bg-blue-500 text-blue-900 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded-full">
                    Read More
                </button>
            </div>
            
           
        </div>
      )
}

export default PropertyCard