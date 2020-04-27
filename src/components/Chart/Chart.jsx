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
            borderColor: "#1b216e",
            fill: true
          }, {
            data: dailyaData.map(({ deaths }) => deaths),
            label: 'Deaths',
            borderColor: "red",
            backgroundColor: "#e2dfec",
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
              backgroundColor: ['rgba(13, 101, 184, 0.7)', 'rgba(36, 181, 11, 0.7)', 'rgba(255, 0, 0, 0.7)'],
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
