import { useState } from 'react';
import ReactMapGL, { Marker, Popup} from 'react-map-gl';
import getCenter from 'geolib/es/getCenter'

function Map({ searchResults }) {
    const [selectedLocation, setSelectedLocation] = useState({});
    // Transform search results object into
    // { latitude: num, longitude: num } object
    const coordinates = searchResults.map(result => ({
        longitude: result.long,
        latitude: result.lat,
    }));

    const center = getCenter(coordinates);

    const [viewport, setViewport] = useState({
        width: "100%",
        height: "100%",
        latitude: center.latitude,
        longitude: center.longitude,
        zoom: 11,
    });

    return (
        <ReactMapGL
            mapStyle="mapbox://styles/maxwellkimutai/cksmtdwcg08su17pqf5jbqw22"
            mapboxApiAccessToken={process.env.mapbox_key}
            {...viewport}
            onViewportChange={(nextViewport) => setViewport(nextViewport)}
        >
            {searchResults.map(result => (
                <div key={result.long}>
                    <Marker 
                        latitude={result.lat} 
                        longitude={result.long}
                        offsetTop={-10}
                        offsetLeft={-20}
                    >
                        <p 
                            role="img"
                            onClick={() => setSelectedLocation(result)} 
                            className="cursor-pointer text-2xl animate-bounce"
                            aria-label="push-pin"
                        >
                            📌 
                        </p>
                    </Marker>
                    {/* popup when we click on marker */}
                    {selectedLocation.long === result.long && (
                        <Popup 
                            closeOnClick 
                            onClose={() => setSelectedLocation({})}
                            longitude={result.long}
                            latitude={result.lat}    
                        >
                            {result.title}
                        </Popup>
                    )}
                </div>
            ))}
        </ReactMapGL>
    )
}

export default Map
