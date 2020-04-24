import React, { Component } from 'react'
import { Cards, Chart, CountryPicker, Loader } from './components'
import styles from './App.module.css';
import { fetchData } from './api'

export default class App extends Component {
    state={
        data: {},
        country:''
    }

     async componentDidMount() {
        const fetchedData = await fetchData();
        this.setState({data:fetchedData})
    }

    handleCountryChange= async(country)=>{
        const fetchedData = await fetchData(country);
        this.setState({data:fetchedData , country:country})
        

    }


    render() {
        const {data, country}=this.state;
       
        return (
            <div className={styles.container}>
                <h1>App</h1>
                <Cards data={data} />
                <CountryPicker handleCountryChange={this.handleCountryChange} />
                <Chart  data={data} country= {country} />
                <Loader></Loader>
            </div>
        )
    }
}