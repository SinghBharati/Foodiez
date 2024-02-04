import {useParams} from "react-router-dom";
import {IMG_CDN_URL} from "../config";
import useRestaurant from "../utils/useRestaurant";
import ShimmerMenu from "./ShimmerMenu";
import {addItem} from "../utils/cartSlice";
import {useDispatch} from "react-redux";

const RestaurantMenu = () => {
    const params = useParams();
    const {id} = params;
    const [restaurant, restaurantMenu] = useRestaurant(id);
    // console.log(restaurantMenu == null)

    const dispatch = useDispatch();

    // const handleAddItem = () => {
    //     dispatch(addItem("grapes"));
    //     //dispatch an action(addItem) and pass the payload(grapes )
    // }

    const addFoodItem = (item) => {
        dispatch(addItem(item))
    }


    if (restaurantMenu == null) return <h1 className="font-bold text-3xl text-center"><i className="fa fa-frown-o" aria-hidden="true"></i> No Menu Available...</h1>;

    return restaurantMenu?.length === 0 ? (<ShimmerMenu/>) :(
        <>
            <div className="flex justify-around mt-3">
                <span>
                    <h1 className="text-2xl font-bold">{restaurant.name}</h1>
                    <h4 className="text-base font-semibold">{restaurant.cuisines.join(", ")}</h4>
                    <h4 className="text-xl font-semibold">{restaurant.areaName}</h4>
                </span>

                <span className="flex text-lg font-bold">
                {restaurant.avgRating && <h4 className="text-green-600 border-gray-200 border-2 rounded p-3 m-1">
                    <i className="mr-1 fa fa-star text-xl text-center text-green-600 rounded-full" aria-hidden="true"></i>
                    {restaurant.avgRating}</h4>}
                </span>
                {/*<img src={IMG_CDN_URL+restaurant.cloudinaryImageId} alt="Restaurant logo"/>*/}
            </div>

            {/*<div>*/}
            {/*    <button*/}
            {/*        className="p-4 m-4 bg-amber-400 font-bold"*/}
            {/*        onClick={() => handleAddItem()}*/}
            {/*    >Add Item</button>*/}
            {/*</div>*/}

            <h3 className="text-center text-3xl font-bold">Menu Items</h3>
            <div className="flex flex-wrap justify-center">
                {restaurantMenu.map((menuItem) => {
                    return (
                        <div className="h-36 w-3/4 m-3 flex justify-items-center rounded border-2 border-amber-400" key={menuItem.card.info.id}>
                            <img
                                className="h-full w-36 rounded"
                                src={IMG_CDN_URL + menuItem.card.info?.imageId} alt="Menu Item Image"  />

                            <div className="p-3 overflow-hidden">
                                <h2 className="text-xl font-bold truncate">{menuItem.card.info.name}</h2>
                                {menuItem.card.info.isVeg ?
                                    <h3 className="m-0.5 pl-0.5  h-5 w-5 text-xs border-2 border-green-600"><i className="fa fa-circle text-green-600"></i></h3> :
                                    <h3 className="m-0.5 pl-0.5  h-5 w-5 text-xs border-2 border-red-600"><i className="fa fa-circle text-red-600"></i></h3>}
                                <h3 className="text-lg font-semibold">₹ {menuItem.card.info.price/100}</h3>

                                <h3 className="flex-wrap text-sm overflow-auto">{menuItem.card.info.description}</h3>
                            </div>

                            <div className="relative">
                                <button
                                    className="font-bold absolute top-0 left-0 text-white bg-amber-400 p-4 z-10"
                                    onClick={() => addFoodItem(menuItem.card.info)}
                                >Add Item</button>
                            </div>

                        </div>
                    )
                })}
            </div>
        </>
    );
}

export default RestaurantMenu;