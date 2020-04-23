import React, { useState ,useEffect} from 'react'
import {fetchDailyData} from '../../api'
import {Line , Bar} from 'react-chartjs-2';
import styles from './Chart.module.css'


export default function Chart() {
    const [dailyaData,setDailyData] = useState([])

    useEffect(()=>{
        const fetchAPI=async()=>{
            setDailyData(await fetchDailyData());
        }
        console.log("chart ")
        console.log(dailyaData);

        fetchAPI();
    },[]);

    const lineChart=(
        dailyaData.length ?(
            <Line
            data={{
                labels:dailyaData.map(({date})=>date),
                datasets:[{
                    data:dailyaData.map(({confirmed})=>confirmed),
                    label:'Infected',
                    borderColor: "#3333ff",
                    fill:true
                },{
                    data:dailyaData.map(({deaths})=>deaths),
                    label:'Daths',
                    borderColor: "red",
                    backgroundColor:"antiquewhite",
                    fill:true
                }]
            }}/>):null
        );
    return (
        <div className={styles.container}>
           {lineChart}
        </div>
    )
}
