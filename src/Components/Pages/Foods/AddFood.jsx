import { useContext, useState } from "react";
import { Helmet } from "react-helmet-async";
import { AuthContext } from "../../Authentication/AuthProvider";
import Swal from "sweetalert2";
import Animation from "../../../Hooks/Animation";
// import useAxios from "../../../Hooks/useAxios";



const AddFood = () => {
     
     // const axios = useAxios();
     const {user} = useContext(AuthContext);
     const [quantity, setQuantity] = useState(1);
     const handleQuantityChange = (e) => {
          const newValue = parseInt(e.target.value, 10);

          if (newValue < 1) {
               setQuantity(1);
          } else {
               setQuantity(newValue);
          }
     };



     const handleAdd =(e) => {
          e.preventDefault();
          const food_name = e.target.foodName ? e.target.foodName.value : '';
          const quantity = e.target.quantity ? parseInt(e.target.quantity.value, 10) : 0;
          const made_by = e.target.addedUser? e.target.addedUser.value: '';
          const price = e.target.price ? parseFloat(e.target.price.value) : 0.0;
          const author_email = e.target.userEmail? e.target.userEmail.value: '';
          const food_origin = e.target.foodOrigin? e.target.foodOrigin.value: '';
          const food_image = e.target.foodImage? e.target.foodImage.value: '';
          const food_category = e.target.foodCategory? e.target.foodCategory.value: '';
          const description = e.target.description? e.target.description.value: '';

          const addItem = { food_name, quantity, made_by, price, author_email, food_origin, food_category, description, food_image }
          console.log(addItem);

          fetch('https://assignment-11-server-jade.vercel.app/add/food/', {
               method: 'POST',
               headers: {
                    'Content-Type': 'application/json'
               },
               body: JSON.stringify(addItem)
          })
               .then(res => res.json())
               .then(data => {
                    console.log(data)
                    if (data.acknowledged) {
                         Swal.fire({
                              position: 'center',
                              icon: 'success',
                              title: 'Food added successfully',
                              showConfirmButton: false,
                              timer: 3000
                         })

                    }
               })
  

     };
     return (
          
          <div>
               <Helmet>
                    <title>Delicious food | Add Food</title>
               </Helmet>
               <div className="max-w-3xl mx-auto min-h-screen items-center flex justify-center ">
                    <div className="py-5">
                         <div className="text-center">
                              <Animation><h2 className="text-5xl font-bold text-center font-rancho text-red-900">Add Food Item</h2></Animation>

                         </div>
                         <form onSubmit={handleAdd} className="max-w-[665px] mx-auto my-5">
                              <div className="flex gap-5">
                                   <div className="form-control w-full max-w-xs">
                                        <label className="label">
                                             <span className="label-text">Food Name</span>
                                        </label>
                                        <input type="text" placeholder="Food Name" name="foodName" className=" rounded-md p-2 border w-full max-w-xs" />
                                   </div>
                                   <div className="form-control w-full max-w-xs">
                                        <label className="label">
                                             <span className="label-text">Quantity</span>
                                        </label>
                                        <input
                                             type="number"
                                             value={quantity} 
                                             placeholder="1"
                                             name="quantity"
                                             className="rounded-md p-2 border w-full max-w-xs"
                                             onChange={handleQuantityChange} 
                                        />
                                   </div>
                              </div>


                              <div className="flex gap-5">
                                   <div className="form-control w-full max-w-xs">
                                        <label className="label">
                                             <span className="label-text">Food Category</span>
                                        </label>
                                        <input type="text"  placeholder=" Food Category" name="foodCategory" className="rounded-md p-2 border w-full max-w-xs" />
                                   </div>

                                   <div className="form-control w-full max-w-xs">
                                        <label className="label">
                                             <span className="label-text"> Food Origin (Country)</span>
                                        </label>
                                        <input type="text"  placeholder=" Food Origin (Country)" name="foodOrigin" className="rounded-md p-2 border w-full max-w-xs" />
                                   </div>
                              </div>

                              <div className="flex gap-5">
                                   <div className="form-control w-full max-w-xs">
                                        <label className="label">
                                             <span className="label-text">Unit Price (Tk)</span>
                                        </label>
                                        <input
                                             type="number"
                                            
                                             placeholder="100" 
                                             name="price"
                                             className="rounded-md p-2 border w-full max-w-xs"
                                        />
                                   </div>

                                   <div className="form-control w-full max-w-xs">
                                        <label className="label">
                                             <span className="label-text">Food Image(Url)</span>
                                        </label>
                                        {/* <input type="date" className="rounded-md p-2 border w-full max-w-xs" min={getCurrentDate()} /> */}
                                        <input
                                             type="text"
                                             name="foodImage"
                                             className="rounded-md p-2 border w-full max-w-xs"
                                             placeholder="Food Image(Url)"
                                        />

                                   </div>
                              </div>

                              <div className="flex gap-5">
                                   <div className="form-control w-full max-w-xs">
                                        <label className="label">
                                             <span className="label-text">Item Added By</span>
                                        </label>
                                        <input
                                             type="text"
                                             disabled
                                            value={user?.displayName}
                                             placeholder={user?.displayName} 
                                             name="addedUser"
                                             className="rounded-md p-2 border w-full max-w-xs"
                                        />
                                   </div>

                                   <div className="form-control w-full max-w-xs">
                                        <label className="label">
                                             <span className="label-text">Added User Email</span>
                                        </label>
                                        {/* <input type="date" className="rounded-md p-2 border w-full max-w-xs" min={getCurrentDate()} /> */}
                                        <input
                                             type="email"
                                             name="userEmail"
                                             disabled
                                             value={user?.email}
                                             className="rounded-md p-2 border w-full max-w-xs"
                                             placeholder={user?.email}
                                        />

                                   </div>
                              </div>
                              {/* description */}
                              <div>
                              <label className="label">
                                             <span className="label-text">Short description</span>
                                        </label>
                                   <textarea className="rounded-md p-2 border w-full max-w-[665px]" name="description"  cols="25" rows="2" placeholder="Short description of the food item"></textarea>
                              </div>

                              <div className=" gap-5 mt-5">

                                   <input type="submit" value="Add Item" className="input border w-full bg-red-900 text-white " />
                              </div>
                              
                         </form>
                    </div>
               </div> 
          </div>
     );
};

export default AddFood;