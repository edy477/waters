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
    const [locations,setLocations]= useState({locations:[]});
    const  [statelocations,setStateLocations]= useState({locations:[]});
    const cordinates= useContext(WaterContext);
    const [cities,setCities]= useState([]);
    const [largest,setLargerst]=useState([]);
    const cords = String(cordinates[0].center.longitude)+','+String(cordinates[0].center.latitude);
 //   console.log(states);



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



         //   console.log(items);



            const entries = Object.entries(result.data);

            let sj={
                "status": "ok",
                "coordinates": [],

            };
             sj["coordinates"] = entries.map(function (b) {

                        return b["1"];

            });


            sj ["coordinates"] = sj.coordinates.filter(o => o.state === states[0]);







            //  let mp = entries.map((o,mp) => (mp["keys"]=o) );
          //  entries.map(p => console.log(p["1"].city));

         /*   var total = entries
                .map(function(b) { return b["1"]; })
                .reduce((acc,cc) =>{
                        acc["keys"] = cc;
                        return acc;

                },{});
            let sj={
                "status": "ok",
                "coordinates": {}

            };


            for(let [key,value] of entries)
            {
                sj["coordinates"] = value;

            }
           // sj["coordinates"]=Object.assign({},Object.values(result.data).splice(1,1));


          //  sj.coordinates.map((item) => (console.log(item.city)));

            console.log(JSON.stringify(sj));

*/


         /*   let final = entries.reduce((op, [key,value]) =>{
                op["key"] =value;
                return op;
            },{});
        console.log(final);
*/
          /*  new_str = Object.keys(result.data).reduce((prev, current) => {
                return prev.replace(new RegExp(current, 'g'), dynamicValues[current]);
            }, value);*/
        /******  let value="";
          let final = Object.entries(result.data).reduce((op, [key,value]) => {
                let newKey = "coordinates";

                op[newKey || key ] = value;

                return op
            },{});
          const entries= Object.entries(result.data);
          console.log(entries);
            let obs = Object.entries(result.data).reduce((op, [key,value]) => {

                console.log(typeof (key));
                if(typeof (key) =='string')
                {
                    op["keys"]=value;

                }
                return op;

            },{});
       //     console.log(obs);

        /*    let results = Object.entries(result.data).reduce((acc, item) => ({
                ...acc, [item.name]: item.value
            }), {});*/
/*

            let results = Object.entries(result.data).reduce((acc, [key,value]) => ({
                ...acc, ["coordinates"]: value
            }), {});
            //console.log(results);

          //  console.log(final);
          //  console.log(final.coordinates.city);

            const jsn = JSON.stringify(items,replacer,' ');
      //      console.log(jsn);
*/  const location = {locations:[]};
    location["locations"]=result.data;
            let sendor = location.locations.filter(location => location.state === states[0].toString());
            let sorts = sendor.sort(function (a,b){


                //   let b = a.population;

                a =Number(a.population);
                b =Number(b.population);
                return a > b ? -1 : b > a ? 1 : 0;

            });

        // console.dir(sorts);
            setCities(sj.coordinates);

            setLocations({locations:result.data});


            setStateLocations({locations:sorts});
           // const filtered = locations.locations.filter()



        /*    const values = Object.values(result.data);
            const items = values.filter(o => o.state ===states[0]);
            console.log(items);
            setCurrent(items);
            console.log(current);
*/

        };

        fetchData();

    }, [states]);



    useEffect(() => {
        const values = Object.values(cities);
     //   console.log(states[0]);
       // console.log(values);
       // const items = values.filter(o => o.state === states[0]);



      //  console.log(items);

       /* function handlestatus() {
            const values = Object.values(cities);

            const items = values.filter(o => o.state === states[0]);
            console.log(items);
            setLargerst(items);

        }

handlestatus();*/


        //  const name = st.map( name => name.city);
         // console.log(typeof (st));
       //   console.log(st);
      //  console.dir(cities);
        },[states]);

     /*   console.log(Object.keys(cities));
        const keys = Object.keys(cities);
        const values =Object.values(cities);
        const arrays= Array.from(values);

        let obj = values.find(o => o.state === 'Colorado');
        const mk = states.toString();
        console.log(states[0]);
        const items = values.filter(o => o.state ===states[0]);*/


/*
        console.log(obj);
        console.log(items);
/*
    console.log(Object.keys(cities));
    const keys = Object.keys(cities);
    const values =Object.values(cities);
    const arrays= Array.from(values);

    let obj = values.find(o => o.state === 'Colorado');
    const mk = states.toString();
    console.log(states[0]);
    const items = values.filter(o => o.state ===states[0]);


    console.log(obj);
    console.log(items);
    setLargerst(items);
*/
    /*console.log(cordinates);
    console.log(cordinates[0].center.longitude);
console.log(Object.keys(cities));
console.log(largest);




console.log(cities["0"]);
*/
    //console.log(Object.values(cities));


    //onsole.log(Object.keys(cities["0"]));

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
//  console.dir(locations);

    //onsole.log(typeof (fail.population));
    //console.log(Number(fail.population));
    let sorted = sort(locations.locations);
    let failed  = ( testo(sorted) === undefined) ? "empty" : sorted;
 //   console.log(sorted);
//console.log(Object.values(cities.splice(0,5)));

    let sendor = locations.locations.filter(location => location.state === states[0].toString());
    let sorts = sendor.sort(function (a,b){


     //   let b = a.population;

          a =Number(a.population);
        b =Number(b.population);
        return a > b ? -1 : b > a ? 1 : 0;

    });


    //console.dir(sorts);
  //  console.dir(sendor);


  //  cities.coordinates.map((item) => (console.log(item.city)));
    return(
<div>
   <h1>Select City</h1>

   <Dropdown>
       {statelocations.locations.map(item => <Dropdown.Item value={item.city} key={item.city}>{item.city}</Dropdown.Item>)}
   </Dropdown>
    <div>
        {statelocations.locations.splice(1,1).map(({latitude,longitude}) => (<WaterCard lat={latitude} long={longitude}></WaterCard>))}


    </div>




<ul>


    <ul>

    </ul>

</ul>







</div>


    );


};

export default  DataWater;
