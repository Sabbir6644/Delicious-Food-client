import { Helmet } from "react-helmet-async";
import BlogCard from "./BlogCard";


const Blog = () => {
     const blogs = [
          {
            id: 1,
            title: 'Discover Our New Menu',
            date: 'November 15, 2023',
            author: 'Delicious Food',
            content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit...',
          },
          {
            id: 2,
            title: 'Cooking Tips from Our Chef',
            date: 'November 10, 2023',
            author: 'Chef John',
            content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit...',
          },
          {
               "title": "The Benefits of Eating Seasonal Foods",
               "date": "October 15, 2023",
               "author": "Sarah Johnson",
               "content": "Learn about the advantages of consuming foods that are in season. We'll explore how seasonal foods are not only fresher and tastier but also more sustainable. Discover the health benefits and tips for incorporating seasonal produce into your diet."
           },
           {
               "title": "Exploring the Cultural Significance of Street Food",
               "date": "November 2, 2023",
               "author": "Raj Patel",
               "content": "Street food is more than just a quick meal; it's a reflection of a region's culture and heritage. In this blog, we delve into the world of street food, examining its history, unique flavors, and the communities that create these delectable dishes."
           },
           {
               "title": "The Art of Food Presentation: Making Your Meals Instagram-Worthy",
               "date": "December 10, 2022",
               "author": "Emily Davis",
               "content": "In the age of social media, the presentation of your food is as crucial as its taste. Explore the art of plating and garnishing your dishes to create visually appealing, Instagram-worthy meals. We'll share expert tips and tricks for enhancing your culinary creations."
           },
           {
               "title": "Sustainability in the Restaurant Industry: A Path to a Greener Future",
               "date": "January 20, 2023",
               "author": "David Turner",
               "content": "Discover the initiatives and innovations within the restaurant industry aimed at reducing environmental impact. Learn how establishments are adopting sustainable practices, from sourcing local ingredients to minimizing food waste."
           },
           {
               "title": "The Comfort Food Connection: How It Impacts Our Mood and Well-Being",
               "date": "February 14, 2023",
               "author": "Dr. Ava Mitchell",
               "content": "Comfort food has a unique way of affecting our emotions and well-being. This blog explores the psychology behind comfort foods and the science of why they make us feel better. Find out how to enjoy these dishes in moderation for a positive impact on your mood."
           }
          // Add more blog items here
        ];
     return (
          <div>
               <Helmet>
                    <title>Delicious food | Blog</title>
               </Helmet>

             <div className="min-h-screen  py-8">
             <div className="py-4 mb-2">
                    <h2 className="text-5xl font-bold text-center font-rancho">Delicious Food Blog</h2>
               </div>
      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {blogs.map((blog) => (
            <BlogCard key={blog.id} blog={blog} />
          ))}
        </div>
      </div>
    </div>

          </div>
     );
};

export default Blog;





