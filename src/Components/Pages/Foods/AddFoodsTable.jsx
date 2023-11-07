/* eslint-disable react/prop-types */

import { FiEdit } from 'react-icons/fi';
import { Link } from 'react-router-dom';

const AddFoodsTable = ({ food, index }) => {

     return (
          <tr>
               <th>{index + 1}</th>
               <td>{food.foodName}</td>
               <td><img className="h-12 w-12" src={food?.food_image} alt="" /></td>
               <td> {food.price}</td>
               {/* /updateFood */}
               <td><Link to={`/updateFood/${food._id}`}><button className="font-semibold text-3xl bg-gray-200 p-2 rounded-md"><FiEdit /></button></Link></td>
          </tr>
     );
};

export default AddFoodsTable;