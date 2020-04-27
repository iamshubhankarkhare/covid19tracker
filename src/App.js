import React, { Component, Fragment } from 'react'
import { Cards, Chart, CountryPicker, Loader, Guidelines, News } from './components'
import styles from './App.module.css';
import { fetchData, fetchIndianData, fetchIndianStateData, fetchNews} from './api'
import covid from './assets/covid3.png'



export default class App extends Component {
    state = {
        data: {},
        country: '',
        isLoading: true,
        isIndia: false,
        indianData: {},
        news:[]
    }

    async componentDidMount() {
        const fetchedData = await fetchData();
        const fetchedIndianData = await fetchIndianData();
        console.log(fetchedIndianData);
        this.setState({ indianData: fetchedIndianData })
       

        this.setState({ data: fetchedData })
        this.setState({ isLoading: false })

        const fetchedNews=await fetchNews(this.state.isIndia)
        this.setState({ news:fetchedNews })
        console.log(this.state.news);

    }

    handleCountryChange = async (country) => {
        console.log(country)
        const fetchedIndianData = await fetchIndianStateData(country);
        console.log(fetchedIndianData);
        this.setState({ indianData: fetchedIndianData })
        const fetchedData = await fetchData(country);
        this.setState({ data: fetchedData, country: country })
    }

    handleIndiaToggle=async()=>{
        console.log(!this.state.isIndia)
        const fetchedNews=await fetchNews(!this.state.isIndia)
        this.setState({ news:fetchedNews })
       

    }
    

    render() {
        const { data, country, isIndia, indianData, news} = this.state;


        return (
            <div className={styles.container}>
                {this.state.isLoading ? (<Loader></Loader>) : (<Fragment>
                    <div className={styles.headWrapper}>
                        {/* <div className={styles.test}></div> */}
                        <img src={covid} alt="covid"></img>
                        <div className={styles.toggle}>
                            <input type="checkbox" id="switch" onClick={() => {
                                this.setState({ isIndia: !isIndia });
                                this.handleIndiaToggle()
                               
                            }} ></input><label htmlFor="switch">Toggle</label>
                        </div>
                    </div>
                    <Cards data={isIndia ? indianData : data} isIndia={isIndia} />
                    <CountryPicker handleCountryChange={this.handleCountryChange} isIndia={isIndia} />
                    <Chart data={isIndia ? indianData : data} country={country} isIndia={isIndia} />
                    <News isIndia={isIndia} news={news} ></News>
                    <Guidelines></Guidelines>
                </Fragment>)}
            </div>
        )
    }
}