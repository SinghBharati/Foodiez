import {IMG_CDN_URL} from "../config";
import {useDispatch, useSelector} from "react-redux";
import store from "../utils/store";
import {removeItem, clearCart} from "../utils/cartSlice";

const CartItem = () => {
    const cartItems = useSelector(store => store.cart.items)
    const dispatch = useDispatch();
    const removeFoodItem = (item) => {
        dispatch(removeItem(item))
    }

    const handleClearCart = () => {
        dispatch(clearCart())
    }

    return (
        <>
            <button
                className="font-bold  text-white bg-red-400 p-4 m-4"
                onClick={() => handleClearCart()}
            >Clear Cart</button>

            <h1 className="font-bold text-xl">Cart Item</h1>
            {cartItems.map((cartItem) => {
                return (
                    <div className="h-36 w-3/4 m-3 flex justify-items-center rounded border-2 border-amber-400" key={cartItem.id}>
                        <img
                            className="h-full w-36 rounded"
                            src={IMG_CDN_URL + cartItem.imageId} alt="Menu Item Image"  />

                        <div className="p-3 overflow-hidden">
                            <h2 className="text-xl font-bold truncate">{cartItem.name}</h2>
                            <h3 className="flex-wrap text-sm overflow-auto">{cartItem.description}</h3>
                        </div>

                        <div >
                            <button
                                className="font-bold  top-0 left-0 text-white bg-amber-400 p-4 z-10"
                                onClick={() => removeFoodItem(cartItem)}
                            >Remove Item</button>
                        </div>
                    </div>
                    )
            })}
        </>
    )

}

export default CartItem;