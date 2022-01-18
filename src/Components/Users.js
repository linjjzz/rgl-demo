import React from 'react'
import { withStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import IconButton from '@material-ui/core/IconButton';
import ClearIcon from '@material-ui/icons/Clear';
import { Link } from 'react-router-dom'
import { Line } from 'react-chartjs-2';
import { defaults } from 'react-chartjs-2'
import { Bubble } from 'react-chartjs-2';
defaults.global.legend.display = false;



const styles = theme => ({
  root: {
    flexGrow: 1,
    padding: '10px',
    height: '100%'
  },
  paper: {
    height: '100%',
    color: theme.palette.text.secondary,
    borderRadius: 0,
  },
  grid: {

    height: '100%',
    '& > div:nth-of-type(1)': {
      height: '30%',
    },
    '& > div:nth-of-type(2)': {
      height: '30%',
    },
    '& > div:nth-of-type(3)': {
      height: '70%',
    }

  },
  test: {
    height: '30%',
  },
  //card component
  cardheader: {
    paddingLeft: '10px',
    paddingRight: '10px',
    //borderBottom: '1px solid #ddd',
    height: '45px',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  chartcard: {
    height: 'calc( 90% - 15px )',
    width: '100%',
  },
  headerbtn: {
    width: '30px',
    height: '30px',
    padding: '3px',
    '&:hover': {
      //background: theme.palette.primary.main,
      background: "#f44336",
      color: theme.palette.common.white,
    }
  }
})



const data = {
  labels: ["dataa"],
  datasets: [
    {

      fill: false,
      lineTension: 0.1,
      backgroundColor: 'rgba(75,192,192,0.4)',
      borderColor: 'rgba(75,192,192,1)',
      borderCapStyle: 'butt',
      borderDash: [],
      borderDashOffset: 0.0,
      borderJoinStyle: 'miter',
      pointBorderColor: 'rgba(75,192,192,1)',
      pointBackgroundColor: '#fff',
      pointBorderWidth: 1,
      pointHoverRadius: 5,
      pointHoverBackgroundColor: 'rgba(75,192,192,1)',
      pointHoverBorderColor: 'rgba(220,220,220,1)',
      pointHoverBorderWidth: 2,
      pointRadius: 1,
      pointHitRadius: 10,
      data: [
        { x: 10, y: 20 },
        { x: 65, y: 75 },
        { x: 59, y: 49 },
        { x: 80, y: 90 },
        { x: 81, y: 29 },
        { x: 56, y: 36 },
        { x: 55, y: 25 },
        { x: 40, y: 100 },
      ]
    }
  ]
};


const BubbleExample = props => (

  <Bubble
    data={data}
    options={{
      maintainAspectRatio: false,
      legend: {
        display: false
      },
      scales: {
        yAxes: [{
          ticks: {
            max: 100,
            min: 0,
            //stepSize: 2
          }
        }],
        xAxes: [{
          ticks: {
            max: 100,
            min: 0,
            //stepSize: 2
          }
        }]
      },
    }}
  />

)


class Users extends React.Component {
  render() {
    const { classes } = this.props
    return (
      <div className={classes.root}>
        <Grid container spacing={16} className={classes.grid}>
          <Grid item xs={6} sm={4}>
            <CardItem classes={classes} object={<div classes={classes} />} />
          </Grid>
          <Grid item xs={6} sm={8}>
            <CardItem classes={classes} object={<div classes={classes} />} />
          </Grid>
          <Grid item xs={12}>
            <CardItem classes={classes} object={<div classes={classes} />} />
          </Grid>
    
        </Grid>
      </div>
    )
  }
}


export default withStyles(styles)(Users)

const CardItem = props => (
  <Card className={props.classes.paper}>

    <CardActions className={props.classes.cardheader}>
      <Typography variant="h5">
        Nyt tapahtuuu
      </Typography>

      <IconButton className={props.classes.headerbtn} >
        <ClearIcon />
      </IconButton>
    </CardActions>


    <CardContent className={props.classes.chartcard}>
      {props.object}
    </CardContent>

  </Card>
)




