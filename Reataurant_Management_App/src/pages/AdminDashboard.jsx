import React, { useContext, useState } from 'react'
import { RestaurantContext } from '../context/RestaurantContext'
import Dashboard from '../components/Dashboard';

const AdminDashboard = () => {
const {restuarants,addRes} = useContext(RestaurantContext);

const [restaurantID,setRestaurantID] = useState(0);
const [restaurantName,setRestaurantName] = useState("");
const [address,setAddress] = useState("");
const [type,setType] = useState("");
const [parkingLot,setparkingLot] = useState("");
const image= "https://coding-platform.s3.amazonaws.com/dev/lms/tickets/7524df6e-46fa-4506-8766-eca8da47c2f1/2izhqnTaNLdenHYF.jpeg"

const [restaurant,setRestaurant] = useState({
    restaurantID,
    restaurantName,
    address,
    type,
    parkingLot,
    image
})

const handleChange = (e)=>{
    const {name,value} = e.target;
    setRestaurant(prev=>({...prev,[name]:value}))
}

const handleSubmit = ()=>{
    addRes(restaurant);
    setRestaurantID(null);
    setRestaurantName("");
    setAddress(""),
    setType("");
    setparkingLot(null)
}
  return (
    <div>
      <div className='sidebar'>
            <form onSubmit={handleSubmit}>
                <input type="text" placeholder='Restuarant Id' value={restaurant.restaurantID} name="restaurantID" onChange={handleChange}/><br />
                <input type="text" placeholder='Restaurant Name' value={restaurant.restaurantName} name="restaurantName" onChange={handleChange}/><br />
                <input type="text" placeholder='Address' value={restaurant.address} name="address" onChange={handleChange}/><br />
                <select name="type" value={restaurant.type} onChange={handleChange}>
                    <option value="">Select Type</option>
                    <option value="Rajasthani">Rajasthani</option>
                    <option value="Gujarati">Gujarati</option>
                    <option value="Mughlai">Mughlai</option>
                    <option value="Jain">Jain</option>
                    <option value="Thai">Thai</option>
                    <option value="North Indian">North Indian</option>
                    <option value="South  Indian">South  Indian</option>
                </select><br />
                <select name="parkingLot" value={restaurant.parkingLot} onChange={handleChange}>
                    <option value="">parkingLot</option>
                    <option value="true">true</option>
                    <option value="false">false</option>
                    
                </select><br />
                <button type='submit'>Add</button>
            </form>
      </div>
      <Dashboard/>
    </div>
  )
}

export default AdminDashboard
