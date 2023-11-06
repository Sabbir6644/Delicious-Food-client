
import { List } from 'react-content-loader';

const MyListLoader = () => {
     return (
          <div>
        
          <List
            backgroundColor="#f3f3f3" // Set the background color
            backgroundOpacity={0.7} // Set the background opacity
            primaryColor="#ecebeb" // Set the primary color of the loader
            secondaryColor="#ffffff" // Set the secondary color of the loader
            width={400} // Set the width of the loader
            height={200} // Set the height of the loader
          />
        </div>
     );
};

export default MyListLoader;