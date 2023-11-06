import { useQuery } from "@tanstack/react-query";
import { useEffect, useState } from "react";
import { Helmet } from "react-helmet-async";
import useAxios from "../../../Hooks/useAxios";
import AllFoodCard from "./AllFoodCard";
import MyListLoader from "../Spiner/MyListLoader";


const AllFoods = () => {
     const [foodCard, setFoodCard]= useState([]);
     const [isLoading, setIsLoading]=useState(true)
     const axios = useAxios();
     // console.log(data.data);
     const allFoodsCount = async () => {
          const res = await axios.get('/allFoodsCount');
          return res;
     }
     // Pagination start
     const [foodItemCount, setFoodItemCount] = useState(0);
     const foodCardPerPage = 9;
     const totalPages = Math.ceil(foodItemCount / foodCardPerPage);
     const pages = [...Array(totalPages).keys()];
     const { data: count } = useQuery({
          queryKey: ['allFoodsCount'],
          queryFn: allFoodsCount,
     });
     useEffect(() => {
          if (count?.data?.count) {
               setFoodItemCount(count.data.count);
          }
     }, [count?.data?.count]);


     // Search
     const handleSearch = e => {
          e.preventDefault();
          const inputValue = e.target.input.value;
          console.log(inputValue);
          // Search  

     }

     // Pagination
     const [currentPage, setCurrentPage] = useState(0)
     const handlePrev = () => {
          if (currentPage > 0) {
               setCurrentPage(currentPage - 1);
               // refetch();
          }
     }
     const handleNext = () => {
          if (currentPage < pages.length - 1) {
               setCurrentPage(currentPage + 1);
               // refetch();
          }
     }

     useEffect(() => {
          setIsLoading(true); 
        
          fetch(`https://assignment-11-server-jade.vercel.app/allFoods?page=${currentPage}&size=${foodCardPerPage}`)
            .then((res) => res.json())
            .then((data) => {
              setFoodCard(data);
              setIsLoading(false); 
            });
        }, [currentPage]);

     // Pagination

     return (
          <div>
               <Helmet>
                    <title>Delicious food | All Foods</title>
               </Helmet>
               <div>
               <div className="mt-2 py-4">
                    <h2 className="text-5xl font-bold text-center font-rancho">Best Food in City</h2>
               </div>

                    <div className="flex justify-end pr-2 lg:pr-8 pt-8">
                         <form onSubmit={handleSearch} className="relative">
                              <input type="text" name="input" placeholder="Search by food name" className="input input-bordered w-[300px]" />
                              <input type="submit" value={'Search'} className="btn btn-active absolute right-0" />

                         </form>
                    </div>

                    {
                       
                              isLoading? (
                                   <div className='flex justify-center'>
                                   <MyListLoader></MyListLoader>
                              </div>
                              ): (
                                   <div className="grid grid-cols-2 gap-2">
                                   {foodCard?.map((food) => (
                                        <AllFoodCard key={food._id} food={food}></AllFoodCard>
                                   ))}
                              </div>
                              )
                         
                    }


               </div>

               <div className='flex justify-center gap-2 my-2'>
                    <button className="bg-gray-100 py-2 px-4 rounded-md" onClick={handlePrev}>Prev</button>
                    {
                         pages?.map((page, index) => <button

                              className={currentPage === page ? 'bg-red-900 rounded-md px-2 text-white' : ''}
                              onClick={() => {

                                   setCurrentPage(index);
                             

                              }} key={page}>
                              {page+1}</button>)
                    }

                    <button className="bg-gray-100 py-2 px-4 rounded-md" onClick={handleNext}>Next</button>

               </div>
          </div>
     );
};

export default AllFoods;