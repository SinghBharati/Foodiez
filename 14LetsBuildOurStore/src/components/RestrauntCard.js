import {IMG_CDN_URL} from "../config";


const RestaurantCard = (
    {name, cuisines, cloudinaryImageId, avgRating, lastMileTravelString, costForTwo
        , isNewlyOnboarded, areaName, sla
    }
) => {
    return (
        <div className="h-80 w-72 m-3 p-3 bg-amber-100 overflow-hidden rounded border-amber-400 border-2">
            {/*{console.log(restaurantList[0].data.name)}*/}
            <div className="relative">
                {isNewlyOnboarded && (
                    <h1 className="font-bold absolute top-0 left-0 text-white bg-amber-400 p-4 z-10">New</h1>
                )}
                <img
                    className="h-1/2 w-full rounded border-amber-400 border-2"
                    src={IMG_CDN_URL + cloudinaryImageId}
                />
            </div>
            <h2 className="text-2xl font-bold truncate">{name}</h2>
            <span className="flex space-x-7 text-lg font-bold">
                {!isNewlyOnboarded && <h4><i className="fa fa-star h-7 w-7 mr-1  text-xl text-center text-white bg-green-600 rounded-full" aria-hidden="true"></i>{avgRating}</h4>}
                <h4>{sla.slaString}</h4>
            </span>
            <h4 className="text-base font-bold">{costForTwo}</h4>
            <h4 className="text-base font-semibold truncate">{cuisines.join(", ")}</h4>
            <h4 className="text-base font-semibold">{areaName}</h4>
            {/*<h4 className="text-base font-semibold">{user.name}</h4>*/}
            {/*<h4 className="text-base font-semibold">{user.name} - {user.email}</h4>*/}

        </div>
    );
}

export default RestaurantCard