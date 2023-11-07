/* eslint-disable react/prop-types */

import { IoBagCheckOutline } from 'react-icons/io5';
import { RiDeleteBinLine } from 'react-icons/ri';
import { Link } from "react-router-dom";


const OrderDetails = ({ food, index }) => {
     // console.log(food);
     return (
          <tr>
          <th>{index + 1}</th>
          <td><img className="h-12 w-12" src={food?.food_image} alt="" /></td>
          <td>{food.foodName}</td>
          <td>{food.quantity}</td>
          <td> {food.price} Tk</td>
          <td> {food.buyingDate}</td>
          <td> {food.buyerName}</td>
          {/* /updateFood */}
          <td className='flex gap-4'><Link to={``}><button className="font-semibold text-3xl bg-gray-200 p-2 rounded-md"><RiDeleteBinLine /></button></Link>
          <Link to={``}><button className="font-semibold text-3xl bg-gray-200 p-2 rounded-md"><IoBagCheckOutline /></button></Link>
          </td>
     </tr>
     );
};

export default OrderDetails;