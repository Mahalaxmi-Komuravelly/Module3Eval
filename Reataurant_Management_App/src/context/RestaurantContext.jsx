import { createContext } from "react";

export const RestaurantContext = createContext();

export const RestaurantProvider = ({children})=>{
    const [restuarants,setRestaurants] = useState([]);

    const getRes = () => {
      const response =  JSON.parse(localStorage.getItem("evalData"));
      setRestaurants(response);

    }

    const addRes = (restaurant)=>{
        setRestaurants(prev=>[...prev,restaurant]);
        localStorage.setItem("evalData",JSON.stringify(restuarants));
    }

    return(
        <RestaurantContext.Provider value = {{restuarants,addRes,getRes}}>
            {children}
        </RestaurantContext.Provider>
    )
}