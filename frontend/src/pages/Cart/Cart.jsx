
import React, { useContext } from 'react';
import './Cart.css';
import { StoreContext } from '../../components/context/StoreContext';
import { useNavigate } from 'react-router-dom';

const Cart = () => {
  const { cartItems, food_list, removeFromCart, getTotalCartAmount, url } = useContext(StoreContext);
  const navigate = useNavigate();

  return (
    <div className="cart">
      <div className="cart-items">
        <div className="cart-items-title">
          <p>Items</p>
          <p>Title</p>
          <p>Price</p>
          <p>Quantity</p>
          <p>Total</p>
          <p>Remove</p>
        </div>
        <br />
        <hr />
        {food_list.map((item) => {
          if (cartItems[item._id] > 0) {
            return (
              <div key={item._id} className="cart-items-item">
                {/* Display image */}
                <img 
                  src={`${url}/images/${item.image}`} 
                  alt={item.name} 
                  className="food-image" 
                  onError={(e) => { e.target.src = `${url}/images/placeholder.jpg`; }} // Fallback if image not found
                />
                
                {/* Display item details */}
                <p>{item.name}</p>
                <p>${item.price}</p>
                <p>{cartItems[item._id]}</p>
                <p>${(item.price * cartItems[item._id]).toFixed(2)}</p>
                
                {/* Remove item from cart */}
                <p onClick={() => removeFromCart(item._id)} className="cross">x</p>
              </div>
            );
          }
          return null; // Skip items with 0 quantity
        })}
      </div>

      {/* Cart Summary */}
      <div className="cart-bottom">
        <div className="cart-total">
          <h2>Cart Total</h2>
          <div>
            <div className="cart-total-detail">
              <p>Subtotal</p>
              <p>${getTotalCartAmount().toFixed(2)}</p>
            </div>
            <hr />
            <div className="cart-total-detail">
              <p>Delivery Fee</p>
              <p>${getTotalCartAmount() === 0 ? 0 : 2.00}</p>
            </div>
            <hr />
            <div className="cart-total-detail">
              <b>Total</b>
              <b>${getTotalCartAmount() === 0 ? 0 : (getTotalCartAmount() + 2).toFixed(2)}</b>
            </div> 
          </div>
          <button onClick={() => navigate('/order')}>Stripe</button>
          <button onClick={() => navigate('/checkout')}>SSL COMMERZ</button>
        </div>
        <div className="cart-promocode">
          <div>
            <p>If you have a promo code, enter it here</p>
            <div className="cart-promocode-input">
              <input type="text" placeholder="Promo Code" />
              <button>Submit</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;




// import React, { useContext } from 'react'
// import './Cart.css'
// import { StoreContext  } from '../../components/context/StoreContext'
// import { useNavigate } from 'react-router-dom';

// const Cart = () => {

//   const {cartItems, food_list, removeFromCart, getTotalCartAmount, url} = useContext(StoreContext);

//   const navigate = useNavigate();
//   return (
//     <div className='cart'>
//       <div className="cart-items">
//         <div className="cart-items-title">
//           <p>Itmes</p>
//           <p>Title</p>
//           <p>Price</p>
//           <p>Quantity</p>
//           <p>Total</p>
//           <p>Remove</p>
//         </div>
//         <br />
//         <hr />
//         {food_list.map((item,index)=>{
//           if(cartItems[item._id]>0){
//             return <div>
//               <div className="cart-items-title cart-items-item">
//               <img src={url+'/images/'+item.image} alt="" />
//               <p>{user}</p>
//               <p>{item.name}</p>
//               <p>${item.price}</p>
//               <p>{cartItems[item._id]}</p>
//               <p>${item.price*cartItems[item._id]}</p>
//               <p onClick={()=>removeFromCart(item._id)} className='cross'>x</p>
//             </div>
//             <hr />
//             </div>

            
//           }
//         })}
//       </div>
//       <div className="cart-bottom">
//         <div className="cart-total">
//           <h2>Cart Total</h2>
//           <div>
//             <div className="cart-total-detail">
//               <p>Subtotal</p>
//               <p>${getTotalCartAmount()}</p>
//             </div>
//             <hr />
//             <div className="cart-total-detail">
//               <p>Delivery Fee</p>
//               <p>${getTotalCartAmount()===0?0:2}</p>
//             </div>
//             <hr />
//             <div className="cart-total-detail">
//               <b>Total</b>
//               <b>${getTotalCartAmount()===0?0:getTotalCartAmount()+2}</b>
//             </div> 
//           </div>
//           <button onClick={()=> navigate('/order')}>Stripe</button>
//           <button onClick={()=> navigate('/checkout')}> SSL COMMERZ</button>
//         </div>
//         <div className="cart-promocode">
//           <div>
//             <p>If you have a promo code, enter it here</p>
//             <div className='cart-promocode-input'>
//               <input type="text" placeholder='Promo Code'/>
//               <button>Submit</button>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   )
// }

// export default Cart



// // import React, { useContext } from 'react';
// // import { StoreContext } from '../../components/context/StoreContext';
// // import { useNavigate } from 'react-router-dom';
// // import './Cart.css';

// // const Cart = () => {
// //   const { cartItems, food_list, removeFromCart, getTotalCartAmount, url } = useContext(StoreContext);
// //   const navigate = useNavigate();

// //   return (
// //     <div className="cart">
// //       <div className="cart-items">
// //         <div className="cart-items-title">
// //           <p>Items</p>
// //           <p>Title</p>
// //           <p>Price</p>
// //           <p>Quantity</p>
// //           <p>Total</p>
// //           <p>Remove</p>
// //         </div>
// //         <br />
// //         <hr />
// //         {food_list.map((item) => {
// //           if (cartItems[item._id] > 0) {
// //             return (
// //               <div key={item._id} className="cart-item">
// //                 <img src={`${url}/images/${item.image}`} alt={item.name} />
// //                 <p>{item.name}</p>
// //                 <p>${item.price}</p>
// //                 <p>{cartItems[item._id]}</p>
// //                 <p>${item.price * cartItems[item._id]}</p>
// //                 <button onClick={() => removeFromCart(item._id)}>Remove</button>
// //               </div>
// //             );
// //           }
// //           return null;
// //         })}
// //       </div>
// //       <div className="cart-summary">
// //         <h2>Total: ${getTotalCartAmount()}</h2>
// //         <button onClick={() => navigate('/checkout')}>Proceed to Checkout</button>
// //       </div>
// //     </div>
// //   );
// // };

// // export default Cart;
