
import { Map, Marker } from "pigeon-maps"
const Maps = () => {
     return (
          <Map height={400} defaultCenter={[23.793705, 90.406622]} defaultZoom={11}>
          <Marker width={50} anchor={[23.793705, 90.406622]} />
        </Map>
     );
};

export default Maps;



