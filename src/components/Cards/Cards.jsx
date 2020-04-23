import React from 'react';
import { Card, CardContent, Typography, Grid } from '@material-ui/core';
import styles from './Cards.module.css';
import CountUp from 'react-countup'



export default function Cards({ data: { confirmed, recovered, deaths, lastUpdate } }) {
    console.log(confirmed);
    if (!confirmed) {
        return 'Loading..'
    }
    console.log("cards")

    return (
        <div className={styles.container}>
            <Grid container spacing={3} justify="center">
                <Grid item component={Card}>
                    <CardContent>
                        <Typography color="textSecondary" gutterBottom>Infected</Typography>
                        <Typography variant="h5"><CountUp
                            start={0}
                            end={ confirmed.value }
                            duration={1.5}
                            seperator="," /></Typography>
                        <Typography color="textSecondary">REAL DATE</Typography>
                        <Typography variant="body2">Number of Recovered cases of covid</Typography>
                    </CardContent>
                </Grid>

                <Grid item component={Card}>
                    <CardContent>
                        <Typography color="textSecondary" gutterBottom>Deaths</Typography>
                        <Typography variant="h5">
                            <CountUp
                                start={0}
                                end={deaths.value}
                                duration={1.5}
                                seperator="," /></Typography>
                        <Typography color="textSecondary">REAL DATE</Typography>
                        <Typography variant="body2">Number of deaths cases of covid</Typography>
                    </CardContent>
                </Grid>

                <Grid item component={Card}>
                    <CardContent>
                        <Typography color="textSecondary" gutterBottom>Recovered</Typography>
                        <Typography variant="h5"><CountUp
                            start={0}
                            end={recovered.value}
                            duration={1.5}
                            seperator="," /></Typography>
                        <Typography color="textSecondary">REAL DATE</Typography>
                        <Typography variant="body2">Number of active cases of covid</Typography>
                    </CardContent>
                </Grid>
            </Grid >
        </div >
    )
}
