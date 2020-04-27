import React, { useState } from 'react'
import styles from './News.module.css'

const News = ({ isIndia ,news} ) => {
    const [loadLimit, setLoadLimit] = useState(3);

console.log(news);


    //render func
    var renderCards = () => {
        return news.slice(0, loadLimit).map((news, i) => {
            return (
                <div key={i} className={styles.card}>
                    <h5>{news.title}</h5>
                    <h6>{news.description}</h6>
                    <a href={news.url} > Read more</a>

                </div>);

        });

    };


    return (
        <div className={styles.container}>
            <h2> Latest news on Corona virus</h2>
            {renderCards()}
            <div className={styles.loadButton}>
                {(loadLimit < news.length ? (<button onClick={() => setLoadLimit(loadLimit + 3)}> Load more </button>) : null)}

            </div>
        </div>
    )
}

export default News
