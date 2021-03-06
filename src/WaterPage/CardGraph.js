import React,{useState,useEffect,useContext,useRef} from "react";
import useAxios from 'axios-hooks';
import lodash from 'lodash';
import axios from 'axios';
import { Button,Card ,Media,Heading,Title,Table} from 'react-bulma-components';
import { Layout } from "../MapPage";
import WaterContext from "../Context/WaterContext";
import StateContext from "../Context/StateContext";
import DataContext from "../Context/DataContext";
import {StatsContext} from "../Context/StatsContextProvider";
import Chart from "chart.js";
import moment from "moment";
import * as d3 from 'd3';
import WeatherIcon from 'react-icons-weather';

const CardGraph = ({data})=>{

    function testo(t) {      //defining a function
        if (t === undefined) {       //if t=undefined, call tt
            console.log(t)      //call t
        }
        return t;
    }
    const canvas = useRef(null);
    const chartjs = useRef(null);
    const charts = useRef(null);
    const [state, setState] = useContext(StatsContext);
    const [daily,setDaily]= useState(state.daily);

    const dailys =state.daily;

const  unixtime = moment.unix(1582258260);
const dayname= unixtime.format('MM DD YY');
//console.log(moment(dayname).format('dddd'));
    let fail  = ( testo(state.daily.data) === undefined) ? "empty" : state.daily.data;
    let hour  = ( testo(state.hourly.data) === undefined) ? "empty" : state.hourly.data;
    let times=[];
    let summary=[];
    let temperatureMax=[];
    let iconnames=[];
    let humidity =[];
let sunrisetime = [];
let sunsettime = [];
    let partly;
    let htemperature=[];
    let windspeed = [];

   let hours = [];
     Object.values(hour).splice(1,12).map(item => htemperature.push(item.temperature));
    Object.values(hour).splice(1,12).map(item => hours.push( moment.unix(item.time).format('LT ddd')));

  //  hour.map(item => console.log(item.temperature));
    Object.values(fail).map(item => times.push(item.time));
    Object.values(fail).map(item => summary.push(item.summary));

    Object.values(fail).map(item => windspeed.push(item.windSpeed));
    Object.values(fail).map(item => temperatureMax.push(item.temperatureMax));
    Object.values(fail).map(item => iconnames.push(item.icon));
    Object.values(fail).map(item => humidity.push(item.humidity*100));
    Object.values(fail).map(item => sunrisetime.push( moment.unix(item.sunriseTime).format('LT')));
    Object.values(fail).map(item => sunsettime.push( moment.unix(item.sunsetTime).format('LT')));


    let daynames= times.map(item => moment.unix(item).format('dddd'));
    let datenames = times.map(item => moment.unix(item).format('MM/DD'));

    useEffect(() => {


         partly = iconnames["0"];

        const myChartRef=charts.current.getContext("2d");
        new Chart(myChartRef, {
            type: "line",
            data: {

                labels: hours,
                datasets: [
                    {
                    backgroundColor: 'rgb(156, 39, 176)',
            borderColor: 'rgb(156, 39, 176)',
            fill: false,
                        label: "Hourly Temperature",
                        data: htemperature,
                    }
                ]
            },
            options: {
                maintainAspectRatio: false,
                responsive:false

            }
        });









    },[state]);


let iconmap = iconnames.map(item => {

let ts = item;


const tse="partly-cloudy-day";
if(ts === tse)
{

}
let str = '"' + ts + '"';






}
);
let rendericons = () => {





    const ts ="partly-cloudy-day";//console.dir(ts);
       return <div><WeatherIcon name="darksky" iconId={ts} flip="horizontal" rotate="90" /></div>






};


    return(

        <div className="cardgraphsi">
            <p> 7 DAYS FORECAST</p>

<Table className="table is-bordered">

<thead >
<th># </th>
{daynames.map(item => <th>{item}</th>)}
</thead>
    <tbody>
    <tr>
        <td></td>
        {datenames.map(item => <th>{item}</th>)}
    </tr>
    <tr>
        <td></td>
        {summary.map(item => <th><h3>{item}</h3></th>)}
    </tr>
    <tr>

    </tr>

    <tr>
        <td></td>
        {temperatureMax.map(item => <th>{item} &#176;C</th>)}
    </tr>
    <tr>
        <td>
Humidity
        </td>
        {humidity.map(item => <th>{item} %</th>)}
    </tr>



    <tr>

        <td>
            Sunrise Time
        </td>
        {sunrisetime.map(item => <th>{item}</th>)}

    </tr>
    <tr>

        <td>
            Sunsetime Time
        </td>
        {sunsettime.map(item => <th>{item}</th>)}

    </tr>
    </tbody>
</Table>

                <canvas ref={charts}  width="900"></canvas>



        </div>
    )

};

export  default CardGraph;
