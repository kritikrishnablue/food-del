// import React, { useContext, useState } from 'react'
// import './FoodItem.css'
// import { assets } from '../../assets/assets'
// import { StoreContext } from '../../Context/StoreContext';

// const FoodItem = ({ image, name, price, desc , id }) => {

//     const [itemCount, setItemCount] = useState(0);
//     const {cartItems,addToCart,removeFromCart,url,currency} = useContext(StoreContext);

//     return (
//         <div className='food-item'>
//             <div className='food-item-img-container'>
//                 <img className='food-item-image' src={url+"/images/"+image} alt="" />
//                 {!cartItems[id]
//                 ?<img className='add' onClick={() => addToCart(id)} src={assets.add_icon_white} alt="" />
//                 :<div className="food-item-counter">
//                         <img src={assets.remove_icon_red} onClick={()=>removeFromCart(id)} alt="" />
//                         <p>{cartItems[id]}</p>
//                         <img src={assets.add_icon_green} onClick={()=>addToCart(id)} alt="" />
//                     </div>
//                 }
//             </div>
//             <div className="food-item-info">
//                 <div className="food-item-name-rating">
//                     <p>{name}</p> <img src={assets.rating_starts} alt="" />
//                 </div>
//                 <p className="food-item-desc">{desc}</p>
//                 <p className="food-item-price">{currency}{price}</p>
//             </div>
//         </div>
//     )
// }
// export default FoodItem

// 


import React, { useContext, useState } from 'react';
import './FoodItem.css';
import { assets } from '../../assets/assets';
import { StoreContext } from '../../Context/StoreContext';

const FoodItem = ({ image, name, price, desc, id }) => {
    const [itemCount, setItemCount] = useState(0);
    const { cartItems = {}, addToCart = () => {}, removeFromCart = () => {}, url = '', currency = '₹' } = useContext(StoreContext);

    // Validate ID to prevent undefined errors
    if (!id) {
        console.warn("Invalid ID for FoodItem:", name);
        return null;
    }

    return (
        <div className='food-item'>
            <div className='food-item-img-container'>
                <img className='food-item-image' src={`${url}/images/${image}`} alt={name} />
                {cartItems && cartItems[id] ? (
                    <div className="food-item-counter">
                        <img src={assets.remove_icon_red} onClick={() => removeFromCart(id)} alt="Remove" />
                        <p>{cartItems[id]}</p>
                        <img src={assets.add_icon_green} onClick={() => addToCart(id)} alt="Add" />
                    </div>
                ) : (
                    <img className='add' onClick={() => addToCart(id)} src={assets.add_icon_white} alt="Add to Cart" />
                )}                
            </div>
            <div className="food-item-info">
                <div className="food-item-name-rating">
                    <p>{name}</p> <img src={assets.rating_starts} alt="Rating" />
                </div>
                <p className="food-item-desc">{desc}</p>
                <p className="food-item-price">{currency}{price}</p>
            </div>
        </div>
    );
};

export default FoodItem;
