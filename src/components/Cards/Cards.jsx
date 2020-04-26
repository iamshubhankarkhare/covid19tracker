import React from 'react';
import { Card, CardContent, Typography, Grid } from '@material-ui/core';
import styles from './Cards.module.css';
import CountUp from 'react-countup';
import cx from 'classnames';



export default function Cards({ data: { confirmed, recovered, deaths, lastUpdate ,lastupdatedtime } ,isIndia}) {
    
    
    if (!confirmed) {
        return 'Loading..'
    }

    return (
        <div className={styles.container}>
            <Grid container spacing={3} justify="center">
                <Grid item component={Card} xs={12} md={3} className={cx(styles.card,styles.infected)}>
                    <CardContent>
                        <Typography color="textSecondary" >Infected</Typography>
                        <Typography variant="h5"><CountUp
                            start={0}
                            end={(isIndia?parseInt(confirmed): confirmed.value )}
                            duration={1.5}
                            seperator="," /></Typography>
                        <Typography color="textSecondary">{isIndia?(lastupdatedtime):(new Date(lastUpdate).toDateString())}</Typography>
                        <Typography variant="body2">Number of Recovered cases of covid</Typography>
                    </CardContent>
                </Grid>

                <Grid item component={Card} xs={12} md={3} className={cx(styles.card,styles.deaths)}>
                    <CardContent>
                        <Typography color="textSecondary" >Deaths</Typography>
                        <Typography variant="h5">
                            <CountUp
                                start={0}
                                end={(isIndia?parseInt(deaths): deaths.value )}
                                duration={1.5}
                                seperator="," /></Typography>
                        <Typography color="textSecondary">{isIndia?(lastupdatedtime):(new Date(lastUpdate).toDateString())}</Typography>
                        <Typography variant="body2">Number of deaths cases of covid</Typography>
                    </CardContent>
                </Grid>

                <Grid item component={Card} xs={12} md={3} className={cx(styles.card,styles.recovered)}>
                    <CardContent>
                        <Typography color="textSecondary" >Recovered</Typography>
                        <Typography variant="h5"><CountUp
                            start={0}
                             end={(isIndia?parseInt(recovered): recovered.value )}
                            duration={1.5}
                            seperator="," /></Typography>
                        <Typography color="textSecondary">{isIndia?(lastupdatedtime):(new Date(lastUpdate).toDateString())}</Typography>
                        <Typography variant="body2">Number of active cases of covid</Typography>
                    </CardContent>
                </Grid>
            </Grid >
        </div >
    )
}
