import React, { useContext } from 'react'
import { RestaurantContext } from '../context/RestaurantContext'

const Dashboard = () => {
    const {restuarants} = useContext(RestaurantContext);

  return (
    <div>
      {restuarants.length === 0? (<p>
        no data
      </p>):
      (
        <div>
            {
              restuarants.map((res,index)=>(
                
                <div>
                    <img src="{res.image}"/>
                    <h3>{res.restaurantName}</h3>
                    <p>{res.type}</p>
                    <p>{res.address}</p>
                 </div>   
              ))  
            }
        </div>
      )}
    </div>
  )
}

export default Dashboard
