import { useContext, useEffect, useState } from "react";
import { Helmet } from "react-helmet-async";
import { useLoaderData } from "react-router-dom";
import Swal from "sweetalert2";
import { AuthContext } from "../../Authentication/AuthProvider";


const FoodPurchase = () => {
     const food = useLoaderData();
     const {_id,food_name, price:prc, food_image}=food;
     
    const {user}=useContext(AuthContext);
// console.log('user', user);
     // prevent previous date selection
     const getCurrentDate = () => {
          const today = new Date();
          const year = today.getFullYear();
          const month = String(today.getMonth() + 1).padStart(2, '0');
          const day = String(today.getDate()).padStart(2, '0');
          return `${year}-${month}-${day}`;
     }
     const unitPrice =parseInt(prc);
     const [quantity, setQuantity] = useState(1);
     const [price, setPrice] = useState(unitPrice);


     const handleQuantityChange = (e) => {
          const newValue = parseInt(e.target.value, 10);

          if (newValue < 1) {
               setQuantity(1);
          } else {
               setQuantity(newValue);
          }
     };

     useEffect(() => {
          const newPrice = quantity * unitPrice;
          setPrice(newPrice);
     }, [quantity]);

     useEffect(() => {
          setPlaceholderPrice(price.toString());
     }, [price]);
        
     const [placeholderPrice, setPlaceholderPrice] = useState(price.toString());


     const handlePurches = e => {
          e.preventDefault();
          const foodName = e.target.foodName ? e.target.foodName.value : '';
          const buyerName = e.target.buyerName? e.target.buyerName.value: '';
          const buyerEmail = e.target.buyerEmail? e.target.buyerEmail.value: '';
          const buyingDate = e.target.buyingDate? e.target.buyingDate.value: '';
          const id = _id;
          const purches = { foodName, quantity, buyerName, price, buyerEmail, buyingDate, id, food_image }
          // console.log(purches);

          fetch('https://assignment-11-server-jade.vercel.app/createOrder/', {
               method: 'POST',
               headers: {
                    'Content-Type': 'application/json'
               },
               body: JSON.stringify(purches)
          })
               .then(res => res.json())
               .then(data => {
                    console.log(data)
                    if (data.message ==='Order created successfully') {
                         Swal.fire({
                              position: 'center',
                              icon: 'success',
                              title: 'Order successful',
                              showConfirmButton: false,
                              timer: 2500
                         })

                    }else{
                         Swal.fire({
                              position: 'center',
                              icon: 'error',
                              title: data.error,
                              showConfirmButton: false,
                              timer: 2500
                         })
                    }
               })
     }


     return (
          <div>
               <Helmet>
                    <title>Delicious Food | Food Purchase</title>
               </Helmet>

               {/* Purches form */}

               <div className="max-w-3xl mx-auto min-h-screen items-center flex justify-center ">
                    <div className="py-5">
                         <div className="text-center">
                              <h2 className="text-5xl font-bold text-red-900 text-center font-rancho">Food Purchase</h2>

                         </div>
                         <form onSubmit={handlePurches} className="max-w-[665px] mx-auto my-5">
                              <div className="flex gap-5">
                                   <div className="form-control w-full max-w-xs">
                                        <label className="label">
                                             <span className="label-text">Food Name</span>
                                        </label>
                                        <input type="text" value={food_name} disabled placeholder={food_name} name="foodName" className=" rounded-md p-2 border w-full max-w-xs" />
                                   </div>
                                   <div className="form-control w-full max-w-xs">
                                        <label className="label">
                                             <span className="label-text">Quantity</span>
                                        </label>
                                        <input
                                             type="number"
                                             value={quantity} // Use the state value as the input value
                                             placeholder="1"
                                             name="quantity"
                                             className="rounded-md p-2 border w-full max-w-xs"
                                             onChange={handleQuantityChange} // Call the event handler
                                        />
                                   </div>
                              </div>


                              <div className="flex gap-5">
                                   <div className="form-control w-full max-w-xs">
                                        <label className="label">
                                             <span className="label-text"> Buyer Name</span>
                                        </label>
                                        <input type="text" disabled value={user?.displayName} placeholder={user?.displayName} name="buyerName" className="rounded-md p-2 border w-full max-w-xs" />
                                   </div>

                                   <div className="form-control w-full max-w-xs">
                                        <label className="label">
                                             <span className="label-text">Buyer Email</span>
                                        </label>
                                        <input type="text" disabled value={user?.email} placeholder={user?.email} name="buyerEmail" className="rounded-md p-2 border w-full max-w-xs" />
                                   </div>
                              </div>

                              <div className="flex gap-5">
                                   <div className="form-control w-full max-w-xs">
                                        <label className="label">
                                             <span className="label-text">Price (TK)</span>
                                        </label>
                                        <input
                                             type="text"
                                             disabled
                                             value={price}
                                             placeholder={placeholderPrice} // This placeholder value is updated in real-time
                                             name="price"
                                             className="rounded-md p-2 border w-full max-w-xs"
                                        />
                                   </div>


                                   {/* <div className="form-control w-full max-w-xs">
                                        <label className="label">
                                             <span className="label-text">Price</span>
                                        </label>
                                        <input type="number" disabled value={price} placeholder={placeholderPrice} name="price" className="rounded-md p-2 border w-full max-w-xs" />
                                   </div> */}


                                   <div className="form-control w-full max-w-xs">
                                        <label className="label">
                                             <span className="label-text">Buying Date</span>
                                        </label>
                                        {/* <input type="date" className="rounded-md p-2 border w-full max-w-xs" min={getCurrentDate()} /> */}
                                        <input
                                             type="date"
                                             name="buyingDate"
                                             className="rounded-md p-2 border w-full max-w-xs"
                                             min={getCurrentDate()} // Set the minimum date to the current date
                                        />

                                   </div>
                              </div>


                              <div className=" gap-5 mt-5">

                                   <input type="submit" value="Purchase" className="input border w-full bg-red-900 text-white " />
                              </div>

                         </form>
                    </div>
               </div>
          </div>
     );
};

export default FoodPurchase;