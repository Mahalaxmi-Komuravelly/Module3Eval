import React, { useContext, useState } from 'react'
import { RestaurantContext } from '../context/RestaurantContext'

const AdminDashboard = () => {
const {restuarants,addRes,getRes} = useContext(RestaurantContext);

const [restaurantID,setRestaurantID] = useState(null);
const [restaurantName,setRestaurantName] = useState("");
const [address,setAddress] = useState("");
const [type,setType] = useState("");
const [parkingLot,setparkingLot] = useState(null);
const image= "https://coding-platform.s3.amazonaws.com/dev/lms/tickets/7524df6e-46fa-4506-8766-eca8da47c2f1/2izhqnTaNLdenHYF.jpeg"

const restaurant = {
    restaurantID,
    restaurantName,
    address,
    type,
    parkingLot,
    image
}
  return (
    <div>
      <div className='sidebar'>
            <form>
                <input type="text" placeholder='Restuarant Id'  />
            </form>
      </div>
    </div>
  )
}

export default AdminDashboard
