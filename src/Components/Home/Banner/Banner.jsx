import ban1 from "../../../assets/images/ban1.png"
import ban2 from "../../../assets/images/ban2.png"
import ban3 from "../../../assets/images/ban3.png"
import ban4 from "../../../assets/images/ban4.png"


const Banner = () => {
     return (
          <div className="carousel w-full max-h-[600px] rounded-md">
  <div id="slide1" className="carousel-item relative w-full rounded-md">
    <img src={ban1} className="w-full" />
    {/* gradient */}
    <div className="h-full w-full bg-gradient-to-r from-[#151515] to-[#15151500] absolute rounded-md">

    </div>
    {/* text section */}
    <div className="max-w-sm space-y-4 text-white absolute transform -translate-y-1/2 left-5 right-5 top-1/2 ">
<h2 className="text-5xl font-bold">
Delight in Our Delicious Food Creations - Explore Today!
</h2>
<p>Savor delectable dishes, an array of flavors, and exceptional dining experiences at our restaurant. Explore our menu today!</p>
    <div>
    <button className="btn btn-outline text-white">See All Food</button>
    </div>
    </div>
    {/* btn  */}
    <div className="absolute flex justify-between gap-4 transform -translate-y-1/2 left-5 right-5 top-[85%]">
      <a href="#slide4" className="btn btn-circle bg-[#ffffff33] text-white">❮</a> 
      <a href="#slide2" className="btn btn-circle bg-[#ffffff33] text-white">❯</a>
    </div>
  </div> 
  {/* slider 2 */}
  <div id="slide2" className="carousel-item relative w-full">
    <img src={ban2} className="w-full" />
     {/* gradient */}
     <div className="h-full w-full bg-gradient-to-r from-[#151515] to-[#15151500] absolute rounded-md">

</div>
{/* text section */}
<div className="max-w-sm space-y-4 text-white absolute transform -translate-y-1/2 left-5 right-5 top-1/2 ">
<h2 className="text-5xl font-bold">
Delight in Our Delicious Food Creations - Explore Today!
</h2>
<p>Savor delectable dishes, an array of flavors, and exceptional dining experiences at our restaurant. Explore our menu today!</p>
<div>
    <button className="btn btn-outline text-white">See All Food</button>
    </div>
</div>
{/* btn  */}
<div className="absolute flex justify-between gap-4 transform -translate-y-1/2 left-5 right-5 top-[85%]">
  <a href="#slide1" className="btn btn-circle bg-[#ffffff33] text-white">❮</a> 
  <a href="#slide3" className="btn btn-circle bg-[#ffffff33] text-white">❯</a>
</div>
  </div> 
  {/* slider 3 */}

  <div id="slide3" className="carousel-item relative w-full">
    <img src={ban3} className="w-full" />
     {/* gradient */}
    <div className="h-full w-full bg-gradient-to-r from-[#151515] to-[#15151500] absolute rounded-md">

    </div>
    {/* text section */}
    <div className="max-w-sm space-y-4 text-white absolute transform -translate-y-1/2 left-5 right-5 top-1/2 ">
    <h2 className="text-5xl font-bold">
Delight in Our Delicious Food Creations - Explore Today!
</h2>
<p>Savor delectable dishes, an array of flavors, and exceptional dining experiences at our restaurant. Explore our menu today!</p>
<div>
    <button className="btn btn-outline text-white">See All Food</button>
    </div>
    </div>
    {/* btn  */}
    <div className="absolute flex justify-between gap-4 transform -translate-y-1/2 left-5 right-5 top-[85%]">
      <a href="#slide3" className="btn btn-circle bg-[#ffffff33] text-white">❮</a> 
      <a href="#slide4" className="btn btn-circle bg-[#ffffff33] text-white">❯</a>
    </div>
  </div> 
  {/* slider 4 */}
  <div id="slide4" className="carousel-item relative w-full">
    <img src={ban4} className="w-full" />
    {/* gradient */}
    <div className="h-full w-full bg-gradient-to-r from-[#151515] to-[#15151500] absolute rounded-md">

    </div>
    {/* text section */}
    <div className="max-w-sm space-y-4 text-white absolute transform -translate-y-1/2 left-5 right-5 top-1/2 ">
    <h2 className="text-5xl font-bold">
Delight in Our Delicious Food Creations - Explore Today!
</h2>
<p>Savor delectable dishes, an array of flavors, and exceptional dining experiences at our restaurant. Explore our menu today!</p>
<div>
    <button className="btn btn-outline text-white">See All Food</button>
    </div>
    </div>
    {/* btn  */}
    <div className="absolute flex justify-between gap-4 transform -translate-y-1/2 left-5 right-5 top-[85%]">
      <a href="#slide3" className="btn btn-circle bg-[#ffffff33] text-white">❮</a> 
      <a href="#slide1" className="btn btn-circle bg-[#ffffff33] text-white">❯</a>
    </div>
  </div>
</div>
     );
};

export default Banner;