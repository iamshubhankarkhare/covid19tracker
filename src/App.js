import React, { Component, Fragment } from 'react'
import { Cards, Chart, CountryPicker, Loader } from './components'
import styles from './App.module.css';
import { fetchData } from './api'

export default class App extends Component {
    state = {
        data: {},
        country: '',
        isLoading: true
    }

    async componentDidMount() {
        const fetchedData = await fetchData();
        this.setState({ data: fetchedData })
        this.setState({ isLoading: false })
    }

    handleCountryChange = async (country) => {
        const fetchedData = await fetchData(country);
        this.setState({ data: fetchedData, country: country })


    }


    render() {
        const { data, country } = this.state;

        return (
            <div className={styles.container}>
                {this.state.isLoading ? (<Loader></Loader>) : (<Fragment>
                    <h1>App</h1>
                    <Cards data={data} />
                    <CountryPicker handleCountryChange={this.handleCountryChange} />
                    <Chart data={data} country={country} />
                </Fragment>)}
            </div>
        )
    }
}