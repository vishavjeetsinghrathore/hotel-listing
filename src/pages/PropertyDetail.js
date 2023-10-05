

import React from 'react'
import { useParams } from 'react-router-dom'
import PropertyCard from '../components/PropertyCard';


const PropertyDetail = ({ tabdata }) => {

    const { id } = useParams();
    const element = tabdata.find((p) => (p.id === parseInt(id)));
    console.log(element)
    return (
        <div>
            <PropertyCard element={element} />
        </div>
    )
}

export default PropertyDetail;