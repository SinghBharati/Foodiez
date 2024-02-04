import RestaurantCard from "./RestrauntCard";
import { SWIGGY_API_URL} from "../config";
import {useState, useContext} from "react";
import Shimmer from "./Shimmer";
import {Link} from "react-router-dom";
import {filterData} from "../utils/utils";
import useRestaurantData from "../utils/useRestaurantData";
import useOnline from "../utils/useOnline";


const Body = () => {
    const [searchText, setSearchText] = useState("")
    const [allRestaurants, filteredRestaurants, setFilteredRestaurants] = useRestaurantData(SWIGGY_API_URL);
    const isOnline = useOnline();

    if(!isOnline) return <h1>You are offline!</h1>

    // if allRestaurants is empty don't render restaurants cards (Early Return)
     if (!allRestaurants) return null;

    return allRestaurants?.length === 0 ? (<Shimmer/>) :(
        <>
            <div className="m-3 flex justify-center">
                <input
                    type="text"
                    placeholder="Search your Restaurant..."
                    className="h-12 w-80 p-3 rounded-l-lg border-amber-400 border-2 font-semibold"
                    value={searchText}
                    onChange={(e) => {
                            setSearchText(e.target.value)
                        }
                    }
                />
                <button
                    className="p-3 rounded-r-lg bg-amber-400 font-bold hover:bg-amber-700 hover:text-white"
                    onClick={() => {
                            //filter Data
                            const data = filterData(searchText, allRestaurants);
                            //Update teh state of restaurants list
                            setFilteredRestaurants(data);
                        }
                    }
                >Search</button>
            </div>

            {filteredRestaurants?.length === 0 ? (
                <h1>No Restaurant Found!</h1>
            ) : (
                <div className="flex flex-wrap justify-center">
                    {/* We are mapping restaurants array and passing JSON array data to RestaurantCard component as props with unique key as restaurant.data.id */}
                    {
                        filteredRestaurants.map((restaurant) => {
                            return  <Link
                                to={"/restaurant/"+restaurant?.info?.id}
                                key = {restaurant?.info?.id}>
                                <RestaurantCard  {...restaurant?.info}/>
                            </Link>
                        })
                    }
                </div>
            )}
        </>
    );
}

export default Body;