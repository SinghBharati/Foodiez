import {useEffect, useState} from "react";
import {RESTAURANT_TYPE_KEY, RESTAURANT_MENU_API_URL} from "../config";

const useRestaurant = (id) => {
    const [restaurant, setRestaurant] = useState(null);
    const [restaurantMenu, setRestaurantMenu] = useState([]);

    useEffect(() => {
        getRestaurantMenu();
    }, [])

    async function getRestaurantMenu(){
        const data = await fetch( RESTAURANT_MENU_API_URL + id);
        const json = await data.json();
        // console.log(json)

        // const restaurantData = json?.data?.cards[2]?.card?.card?.info
        const restaurantData =  json?.data?.cards
            ?.map((x) => x.card)
            ?.find((x) => x && x.card["@type"] === RESTAURANT_TYPE_KEY)?.card
            ?.info || null;
        //console.log(restaurantData)
        setRestaurant(restaurantData)

         const cardData = json?.data?.cards[5]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card.itemCards;
        //console.log(cardData)
        setRestaurantMenu(cardData)
    }
    return [restaurant, restaurantMenu];
}

export default useRestaurant;