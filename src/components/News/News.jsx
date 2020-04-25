import React, { useState, useEffect } from 'react'
import { fetchNews } from '../../api'
import styles from './News.module.css'

const News = () => {
    const [fetchedNews, setFetchedNews] = useState([]);
    const [loadLimit, setLoadLimit] = useState(3);
    // useEffect(() => {
    //     const incLimit = () => {

    //         setLoadLimit(loadLimit + 3);
    //     }
    //     console.log(loadLimit);

    //     incLimit();
    // }, [setLoadLimit])

    //news
    useEffect(() => {
        const fetchAPI = async () => {
            setFetchedNews(await fetchNews());
        }
        fetchAPI();

        return () => {
            console.log("cleANUP");

        }
    }, [setFetchedNews])
    console.log(fetchedNews);
    //render func
    var renderCards = () => {
        return fetchedNews.slice(0, loadLimit).map((news, i) => {
            return (
                <div key={i} className={styles.card}>
                    <h5>{news.title}</h5>
                    <h6>{news.description}</h6>
                    <a href={news.url} > Read More</a>

                </div>);

        });

    };


    return (
        <div className={styles.container}>
            {renderCards()}
            <div className={styles.loadButton}>
            {(loadLimit < fetchedNews.length ? (<button onClick={() => setLoadLimit(loadLimit + 3)}> Load more </button>) : null)}

            </div>
        </div>
    )
}

export default News
