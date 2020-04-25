import axios from 'axios';
const api = process.env.REACT_APP_NEWS_API;
console.log(api)

const newsUrl = `https://newsapi.org/v2/top-headlines?q=corona&apiKey=${api}`
const url = "https://covid19.mathdro.id/api";
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
        // console.log(articles)
    } catch (error) {
        console.error();

    }
}
