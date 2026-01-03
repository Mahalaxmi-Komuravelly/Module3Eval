import { createContext,useEffect,useState } from "react";

export const RestaurantContext = createContext();

export const RestaurantProvider = ({children})=>{
    const [restuarants,setRestaurants] = useState([]);

    useEffect( () => {
      const response =  JSON.parse(localStorage.getItem("evalData"));
      if(response){
        setRestaurants(response);
      }else{
        localStorage.setItem("evalData",JSON.stringify([]));
      }

    },[]);

    const addRes = (restaurant)=>{
        setRestaurants(prev=>{
            const updated = [...prev,restaurant];
            localStorage.setItem("evalData",JSON.stringify(updated));
            return updated;
        });
        
        
        
    }

    return(
        <RestaurantContext.Provider value={{restuarants,addRes}}>
            {children}
        </RestaurantContext.Provider>
    )
}