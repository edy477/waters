import React,{useState,useEffect,useContext} from "react";
import useAxios from 'axios-hooks';
import lodash from 'lodash';
import axios from 'axios';
import { Button, Card,Dropdown} from 'react-bulma-components';
import { Layout } from "../MapPage";
import WaterContext from "../Context/WaterContext";
import StateContext from "../Context/StateContext";
import WaterCard from "./WaterCard";
const DataWater = ()=>{
    const states =useContext(StateContext);
    const [current,setCurrent]=useState(states);
     const [city,setCity] = useState({city:[]});
    const [locations,setLocations]= useState({locations:[]});
    const  [statelocations,setStateLocations]= useState({locations:[]});
    const cordinates= useContext(WaterContext);
    const [cities,setCities]= useState([]);
    const [largest,setLargerst]=useState([]);
    const cords = String(cordinates[0].center.longitude)+','+String(cordinates[0].center.latitude);



    const url ='https://cors-anywhere.herokuapp.com/https://api.darksky.net/forecast/83fbb50fcda904a33752ffc002463681/41.3601,-96.0589';

    const [{ data: getData, loading: getLoading, error: getError }] = useAxios(
        url
    );



    useEffect(() => {

        const fetchData = async () => {






                const result = await axios(
                    'https://gist.githubusercontent.com/Miserlou/c5cd8364bf9b2420bb29/raw/2bf258763cdddd704f8ffd3ea9a3e81d25e2c6f6/cities.json',
                );

                const values = Object.values(result.data);







            const entries = Object.entries(result.data);





 const location = {locations:[]};
    location["locations"]=result.data;
    console.log(result.data);
            let sendor = location.locations.filter(location => location.state === states[0].toString());
            let sorts = sendor.sort(function (a,b){


                //   let b = a.population;

                a =Number(a.population);
                b =Number(b.population);
                return a > b ? -1 : b > a ? 1 : 0;

            });

        // console.dir(sorts);


            setLocations({locations:result.data});


            setStateLocations({locations:sorts});
            console.log(sorts["0"]);

            setCity({city:sorts["0"]});



        };

        fetchData();

    }, [states]);



    useEffect(() => {
        const values = Object.values(cities);



    },[states]);


const sort = (arrays) =>{

  //  console.dir(arrays);
   let  sim = arrays.sort(function (a, b) {

        if (a.population > b.population) {

            return 1;
        }
        if (a.population < b.population) {
            return -1;
        }
        // a must be equal to b
        return 0;
    });
   return sim;
};
    function testo(t) {      //defining a function
        if (t === undefined) {       //if t=undefined, call tt
            console.log(t)      //call t
        }
        return t;
    }

    let test = locations.locations.find(holiday => holiday.city === "Chicago");
    let fail  = ( testo(test) === undefined) ? "empty" : test;

    let sorted = sort(locations.locations);
    let failed  = ( testo(sorted) === undefined) ? "empty" : sorted;



    let sendor = locations.locations.filter(location => location.state === states[0].toString());
    let sorts = sendor.sort(function (a,b){




          a =Number(a.population);
        b =Number(b.population);
        return a > b ? -1 : b > a ? 1 : 0;

    });



let onChange = (selected) => {




let    star =  statelocations.locations.find(item => item.city === selected.toString());
   setCity({city:star});





};

    let latitude  = ( testo(city.city.latitude) === undefined) ? "34.0522342" : city.city.latitude;
    let longitude =  ( testo(city.city.longitude) === undefined) ? "-118.2436849" : city.city.longitude;

console.dir(latitude);
console.dir(longitude);

    return(


<div>

    <h1>{states[0]}</h1>
    <h1>Select City</h1>
   <Dropdown onChange={onChange} >

       {statelocations.locations.map(item => <Dropdown.Item value={item.city} className="is-active" key={item.city} >{item.city}</Dropdown.Item>)}
   </Dropdown>



    <div>




    </div>
    <div>

<WaterCard lat={latitude} long={longitude}/>

    </div>




<ul>


    <ul>

    </ul>

</ul>







</div>


    );


};

export default  DataWater;
