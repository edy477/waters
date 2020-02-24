import React,{useState,useEffect, useRef,useContext} from "react";
import WaterContext from "../Context/WaterContext";
import StateContext from "../Context/StateContext";
import mapboxgl from "mapbox-gl";
import "mapbox-gl/dist/mapbox-gl.css";
const styles = {
    width: "70vw",
    height: "80vh",


};

const MapboxGLMap = () => {
    const [map, setMap] = useState(null);
    const mapContainer = useRef(null);
    const [features,setFeatures]= useState(null);
    const [coordinates,setCoordinates]= useState(null);
    const[themeMode, setThemeMode] = useContext(StateContext);

    useEffect(() => {
        mapboxgl.accessToken = "pk.eyJ1IjoiZWR5NDc3IiwiYSI6ImNrNXR6d3dyMzE0MGszbW5xdDZnODdieTYifQ.tQ6zNKVm10yrS9JQoVgsFA";
        const initializeMap = ({ setMap, mapContainer }) => {
            const map = new mapboxgl.Map({
                container: mapContainer.current,
                style: "mapbox://styles/mapbox/streets-v11", // stylesheet location
                center: [-96, 41],
                zoom: 3.5
            });
let  hoveredStateId = null;

            map.on("load", () => {
                setMap(map);
                map.resize();
                map.scrollZoom.disable();

                map.addSource('states', {
                    'type': 'geojson',
                    'data':
                        'https://docs.mapbox.com/mapbox-gl-js/assets/us_states.geojson'

                });
                map.addSource('cities',{
                    'type':'geojson',
                        'data':'https://api.mapbox.com/datasets/v1/edy477/ck6e1taz50oxc2nuuel7rg7h2/features?access_token=pk.eyJ1IjoiZWR5NDc3IiwiYSI6ImNrNXR6d3dyMzE0MGszbW5xdDZnODdieTYifQ.tQ6zNKVm10yrS9JQoVgsFA'
                });

                map.addLayer({
                    'id': 'state-fills',
                    'type': 'fill',
                    'source': 'states',
                    'layout': {},
                    'paint': {
                        'fill-color': '#627BC1',
                        'fill-opacity': [
                            'case',
                            ['boolean', ['feature-state', 'hover'], false],
                            0.5,
                            0.2
                        ]
                    }
                });



                map.addLayer({
                    'id': 'state-borders',
                    'type': 'line',
                    'source': 'states',
                    'layout': {},
                    'paint': {
                        'line-color': '#627BC1',
                        'line-width': 2
                    }
                });


                map.on('mousemove', 'state-fills', function(e) {
                    if (e.features.length > 0) {
                        if (hoveredStateId) {
                            map.setFeatureState(
                                { source: 'states', id: hoveredStateId },
                                { hover: false }
                            );
                        }
                        hoveredStateId = e.features[0].id;
                        map.setFeatureState(
                            { source: 'states', id: hoveredStateId },
                            { hover: true }
                        );
                    }
                });
                map.on('mouseleave', 'state-fills', function() {
                    if (hoveredStateId) {
                        map.setFeatureState(
                            { source: 'states', id: hoveredStateId },
                            { hover: false }
                        );
                    }
                    hoveredStateId = null;
                });

                map.on('click','state-fills',function(e)
                {
                    const fet = map.queryRenderedFeatures(e.point);

                    setThemeMode(fet[0].properties.STATE_NAME);
                    setFeatures(fet[0].properties.STATE_NAME);


                });



            });
        };

        if (!map) initializeMap({ setMap, mapContainer });
    }, [map]);



    return <div ref={el => (mapContainer.current = el)} style={styles} />;
};

export default MapboxGLMap;
