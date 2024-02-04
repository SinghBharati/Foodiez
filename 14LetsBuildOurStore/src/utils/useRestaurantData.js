import {useEffect, useState} from "react";

const useRestaurantData = (SWIGGY_API_URL) => {
    const [allRestaurants, setAllRestaurants] = useState([]);
    const [filteredRestaurants, setFilteredRestaurants] = useState([]);


    useEffect(() => {
        getRestaurant()
    }, [])

    async function getRestaurant() {
        try{
            const data = await fetch(SWIGGY_API_URL);
            // if response is not ok then throw new Error
            if (!data.ok) {
                const err = data.status;
                throw new Error(err);
            }
            const jsons = await data.json();
            //console.log(jsons?.data?.success?.cards[4]?.gridWidget?.gridElements?.infoWithStyle?.restaurants)
            // setAllRestaurants(jsons?.data?.success?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
            setAllRestaurants(jsons?.data?.success?.cards[4]?.gridWidget?.gridElements?.infoWithStyle?.restaurants);

            //console.log(jsons?.data?.cards[3]?.card?.card?.gridElements?.infoWithStyle?.restaurants)
            setFilteredRestaurants(jsons?.data?.success?.cards[4]?.gridWidget?.gridElements?.infoWithStyle?.restaurants);
        }catch (error){
            console.log(error)
        }
    }

    return [allRestaurants, filteredRestaurants, setFilteredRestaurants];

}

export default useRestaurantData;