import axios from 'axios';
require('dotenv').config();
const api = process.env.REACT_APP_NEWS_API;


const newsUrl = `https://gnews.io/api/v3/search?q=corona&token=${api}`
const url = "https://covid19.mathdro.id/api";
const urlIndia = "https://api.covid19india.org/data.json";
export const fetchData = async (country) => {

    let changeableUrl = url
    if (country) {
        changeableUrl = `${url}/countries/${country}`;
    }
    try {
        const { data: { confirmed, recovered, deaths, lastUpdate } } = await axios.get(changeableUrl);
        return { confirmed, recovered, deaths, lastUpdate };
    } catch (error) {
        console.error();

    }
}

export const fetchDailyData = async () => {
    try {
        const { data } = await axios.get(`${url}/daily`);
        const modifiedData = data.map((dailyData) => ({
            confirmed: dailyData.confirmed.total,
            deaths: dailyData.deaths.total,
            date: dailyData.reportDate
        }));

        return modifiedData;
    } catch (error) {
        console.error();

    }
}
export const fetchCountries = async () => {

    try {
        const { data: { countries } } = await axios.get(`${url}/countries`);

        return countries.map((country) => country.name);
    } catch (error) {
        console.error();

    }
}

export const fetchNews = async () => {

    try {
        const { data: { articles } } = await axios.get(`${newsUrl}`);
        return articles.map((news) => news);
    } catch (error) {
        console.log(error.response);

    }

    // try {
    //     return articles.map((news) => news);
    //     console.log(articles);
    // } catch (error) {
    //     console.error();

    //}
}
export const fetchIndianData = async () => {
    try {
        const { data: { statewise } } = await axios.get(`${urlIndia}`);
        //console.log ( statewise[0].confirmed, statewise[0].recovered, statewise[0].deaths );
        const { confirmed, recovered, deaths, lastupdatedtime } = statewise[0];
        return ({ confirmed, recovered, deaths, lastupdatedtime });
    } catch (error) {
        console.error();

    }
}

export const fetchStates = async () => {
    try {
        const { data: { statewise } } = await axios.get(`${urlIndia}`);

        return (statewise.map((states) => states.state));
    } catch (error) {
        console.error();

    }
}
export const fetchIndianStateData = async (country) => {
    try {
        const { data: { statewise } } = await axios.get(`${urlIndia}`);
        for (let index = 0; index < statewise.length; index++) {
            if (statewise[index].state === country) {
                const obj = {
                    confirmed: statewise[index].confirmed,
                    recovered: statewise[index].recovered,
                    deaths: statewise[index].deaths,
                    lastupdatedtime: statewise[index].lastupdatedtime,
                    state: statewise[index].state
                }


                return (obj);

            }

        }
    } catch (error) {
        console.error();

    }
}

