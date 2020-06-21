import React from 'react'
import { Card, CardContent, Typography, Grid } from '@material-ui/core'
import CountUp from 'react-countup'
import styles from './Cards.module.css'
import cx from 'classnames'

const Cards = ({ data: { confirmed, recovered, deaths, lastUpdate }}) => {  
  if(!confirmed) {
    return 'Loading...'
  }
  return (
    <div className={styles.container}>
      <Grid container spacing={3} justify='center'>
        <Grid item component={Card} xs={12} md={3} className={cx(styles.card, styles.infected)}>
          <CardContent>
            <Typography color='textSecondary' gutterBottom>Infectados</Typography>
            <Typography variant='h5'>
              <CountUp start={0} end={confirmed.value} duration={3} separator=',' />
            </Typography>
            <Typography color='textSecondary'>{new Date(lastUpdate).toLocaleDateString('pt-BR', {dateStyle: 'short', timeStyle: 'short'})}h</Typography>
            <Typography variant='body2'>Número de casos ativos da COVID-19</Typography>
          </CardContent>
        </Grid>
        <Grid item component={Card} xs={12} md={3} className={cx(styles.card, styles.recovered)}>
          <CardContent>
            <Typography color='textSecondary' gutterBottom>Recuperados</Typography>
            <Typography variant='h5'>
              <CountUp start={0} end={recovered.value} duration={3} separator=',' />
            </Typography>
            <Typography color='textSecondary'>{new Date(lastUpdate).toLocaleDateString('pt-BR', {dateStyle: 'short', timeStyle: 'short'})}h</Typography>
            <Typography variant='body2'>Número de recuperados da COVID-19</Typography>
          </CardContent>
        </Grid>
        <Grid item component={Card} xs={12} md={3} className={cx(styles.card, styles.deaths)}>
          <CardContent>
            <Typography color='textSecondary' gutterBottom>Mortes</Typography>
            <Typography variant='h5'>
              <CountUp start={0} end={deaths.value} duration={3} separator=',' />
            </Typography>
            <Typography color='textSecondary'>{new Date(lastUpdate).toLocaleDateString('pt-BR', {dateStyle: 'short', timeStyle: 'short'})}h</Typography>
            <Typography variant='body2'>Número de mortes causadas pela COVID-19</Typography>
          </CardContent>
        </Grid>
      </Grid>
    </div>
  )
}

export default Cards
