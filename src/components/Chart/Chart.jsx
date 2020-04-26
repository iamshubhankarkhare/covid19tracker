import React, { useState, useEffect } from 'react'
import { fetchDailyData } from '../../api'
import { Line, Bar } from 'react-chartjs-2';
import styles from './Chart.module.css'


export default function Chart({ data: { confirmed, deaths, recovered }, country ,isIndia}) {
  const [dailyaData, setDailyData] = useState({})
// console.log( confirmed, deaths, recovered);
// console.log(isIndia);

  useEffect(() => {
    const fetchAPI = async () => {
      setDailyData(await fetchDailyData());
    }
    fetchAPI();
  }, []);

  const lineChart = (
    dailyaData.length ? (
      <Line
        data={{
          labels: dailyaData.map(({ date }) => date),
          datasets: [{
            data: dailyaData.map(({ confirmed }) => confirmed),
            label: 'Infected',
            borderColor: "#3333ff",
            fill: true
          }, {
            data: dailyaData.map(({ deaths }) => deaths),
            label: 'Daths',
            borderColor: "red",
            backgroundColor: "linear-gradient(225deg, #f2effd, #cbc9d4)",
            fill: true
          }]
        }} />) : null
  );
  const barChart = (
    confirmed ? (
      <Bar
        data={{
          labels: ['Infected', 'Recovered', 'Deaths'],
          datasets: [
            {
              label: 'People',
              backgroundColor: ['rgba(0, 0, 255, 0.5)', 'rgba(0, 255, 0, 0.5)', 'rgba(255, 0, 0, 0.5)'],
              data: isIndia?([confirmed, recovered, deaths]):([confirmed.value, recovered.value, deaths.value]),
            },
          ],
        }}
        options={{
          legend: { display: false },
          title: { display: true, text: `Current state in ${country}` },
        }}
      />
    ) : null
  );




  return (
    
      <div className={styles.container}>
        {isIndia?(barChart):(country ? barChart : lineChart)}
      </div>
  )
}
