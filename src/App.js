import React, { Component, Fragment } from 'react'
import { Cards, Chart, CountryPicker, Loader, Guidelines, News } from './components'
import styles from './App.module.css';
import { fetchData, fetchIndianData } from './api'



export default class App extends Component {
    state = {
        data: {},
        country: '',
        isLoading: true,
        isIndia: false,
        indianData: {}
    }

    async componentDidMount() {
        const fetchedData = await fetchData();
        const fetchedIndianData = await fetchIndianData();
        console.log(fetchedIndianData);
        this.setState({ indianData:fetchedIndianData })
        console.log(this.state.indianData);
        
        this.setState({ data: fetchedData })
        this.setState({ isLoading: false })
    }

    handleCountryChange = async (country) => {
        const fetchedData = await fetchData(country);
        this.setState({ data: fetchedData, country: country })


    }



    render() {
        const { data, country, isIndia, indianData } = this.state;


        return (
            <div className={styles.container}>
                {this.state.isLoading ? (<Loader></Loader>) : (<Fragment>
                    <h1>App hhgg</h1>
                    <input type="checkbox" onClick={() => {
                        this.setState({ isIndia: !isIndia });
                        console.log(isIndia);
                    }} ></input><label>{isIndia}</label>
                    <Cards data={isIndia?indianData:data} isIndia={isIndia} />
                    <CountryPicker handleCountryChange={this.handleCountryChange} isIndia={isIndia} />
                    <Chart data={isIndia?indianData:data} country={country} isIndia={isIndia}/>
                    <News></News>
                    <Guidelines></Guidelines>
                </Fragment>)}
            </div>
        )
    }
}