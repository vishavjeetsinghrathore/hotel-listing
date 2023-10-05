


import React from 'react'
import PropertyCard from "../components/PropertyCard"
import { propertiesData } from '../properties';
import { useState } from 'react'
import { BiSolidHourglassTop } from 'react-icons/bi'

const tabsName = [
    "London",
    "Paris",
    "Mumbai",
    "NewYork",

];

const Home = ({ tabdata, setTabdata }) => {

    const [activeCity, setActiveCity] = useState(tabsName[0]);
    //const [tabdata, setTabdata] = useState(propertiesData[0].tabdata);

    const [noOfElement, setnoOfElement] = useState(6);
    const slice = tabdata.slice(0, noOfElement);

    const showMore = () => {

        
        setnoOfElement(noOfElement + 3);
    }

    const setMyTab = (city) => {
        setActiveCity(city);
        const result = propertiesData.filter((tabd) => tabd.tab === city);
        console.log(result)
        setTabdata(result[0].tabdata);
    };



    return (
        <div className="w-11/12">

            <div className="w-11/12 flex flex-wrap max-w-max  space-x-4 gap-y-4 mx-auto py-4 justify-center mt-4 ml-44">
                {tabsName.map((city) => {

                    return (
                        <div>
                            <button
                                className={` text-[16px] flex flex-row items-center gap-2 ${activeCity === city
                                    ? "bg-blue-700 text-white font-medium"
                                    : "text-richblack-200 bg-blue-100"
                                    } px-7 py-[7px] rounded-full transition-all duration-200 cursor-pointer hover:bg-richblack-900 hover:text-richblack-5`}
                                // key={city}
                                onClick={() => setMyTab(city)}
                                key={city}>
                                {city}
                            </button>

                        </div>
                    );
                })}
            </div>

            <div className="grid grid-cols-3 max-w-6xl p-5 mx-auto space-y-10 space-x-5 gap-y-15 my-14 min-h-[80vh]">
                {
                    slice.map((element) => {

                        return (
                            <PropertyCard key={element.id} element={element} />
                        )
                    })
                }

            </div>

            <div className="flex items-center justify-center ">


                <button className="bg-blue-700 text-white font-medium  flex flex-row items-center gap-2 px-7 py-[7px] rounded-full transition-all duration-200 cursor-pointer"
                    onClick={() => showMore()}
                >
                    <BiSolidHourglassTop />
                    Show More
                </button>
            </div>

        </div>
    )
}

export default Home

