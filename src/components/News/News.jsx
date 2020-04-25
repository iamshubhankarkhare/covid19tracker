import React, { useState, useEffect } from 'react'
import { fetchNews } from '../../api'
import styles from './News.module.css'

const News = () => {
    const [fetchedNews, setFetchedNews] = useState([]);
    const [loadLimit, setLoadLimit] = useState(3);
    const [isDisplay, setIsDisplay]=useState(false)
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
                <div key={i}>
                    <h5>{news.title}</h5>
                    <button onClick={()=>{setIsDisplay(!isDisplay)}} key={i}>lauda</button>
                    {((isDisplay)?(news.description):"uuuuu")}
                    <a href={news.url} > Read More</a>
                    
                </div>);

        });

    };


    return (
        <div className={styles.container}>
            {renderCards()}
            {/* <button onClick={()=>setLoadLimit(loadLimit+3)}> load</button>
            {loadLimit}ghghg{fetchedNews.length} */}
            {(loadLimit<fetchedNews.length?( <button onClick={()=>setLoadLimit(loadLimit+3)}> load</button>):fetchedNews.length)}
        </div>
    )
}

export default News
