import React, { Component } from 'react'
import { Cards, Chart, CountryPicker } from './components'
import styles from './App.module.css';
import { fetchData } from './api'

export default class App extends Component {
    state={
        data: {}
    }

     async componentDidMount() {
        const fetchedData = await fetchData();
        this.setState({data:fetchedData})
    }


    render() {
        const {data}=this.state;
        return (
            <div className={styles.container}>
                <h1>App</h1>
                <Cards data={this.state.data} />
                <CountryPicker />
                <Chart />
            </div>
        )
    }
}