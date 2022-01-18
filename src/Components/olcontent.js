import React from 'react'
import { withStyles } from '@material-ui/core/styles';

import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';

import CardHeader from '@material-ui/core/CardHeader';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';

import Avatar from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/IconButton';
import ClearIcon from '@material-ui/icons/Clear';
import ShareIcon from '@material-ui/icons/Share';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import CardActionArea from '@material-ui/core/CardActionArea';
import { Link } from 'react-router-dom'
import ButtonBase from '@material-ui/core/ButtonBase';

import {Line} from 'react-chartjs-2';
import { defaults } from 'react-chartjs-2'
import { Bubble } from 'react-chartjs-2';
defaults.global.legend.display = false;


const styles = theme => ({
  root: {
    padding: '10px',
    flexGrow: 1,
    background:theme.palette.background.contentpanel,
    height: '100%',
    '& > div > div:nth-of-type(1)': {
      height: '30%'
    },
    '& > div > div:nth-of-type()': {
      height: '30%'
    }

  },
  container: {
    height: "100%",
 

  },
  paper: {
    textAlign: "center",
    color: theme.palette.text.secondary,
    height: "100%",
    borderRadius:0,
  },
  ///card
  cardheader:{
    paddingLeft:'10px',
    paddingRight:'10px',
    //background:'#ddd',
    borderBottom:'1px solid #ddd',
    height:'40px',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems:'center',
  },
  chartcard:{
    height: 'calc( 100% - 20px )',
    width:'100%',
  },
  headerIcon:{
    width: '30px', 
    height: '30px', 
    padding: '3px',
    '&:hover': {
      //background: theme.palette.primary.main,
      background: "#f44336",
      color:theme.palette.common.white,
    }
  }
})

class Content extends React.Component {
  render() {
    const {classes} = this.props
    return (
      <React.Fragment>
          <div class="Content">
          <div className={classes.root}>
            <Grid container spacing={24} className={classes.container}>
              <Grid item xs={12}>
                <CardItem classes={classes} object={<BubbleExample classess={classes}/>}/>
              </Grid>
              <Grid item xs={6}>
                 <CardItem classes={classes} object={<BubbleExample classess={classes}/>}/>
              </Grid>
              <Grid item xs={6}>
                <CardItem classes={classes} object={<BubbleExample classess={classes} />} />
              </Grid>
              <Grid item xs={6}>
                <CardItem classes={classes} object={<BubbleExample classess={classes} />} />
              </Grid>
              <Grid item xs={6}>
                <CardItem classes={classes} object={<BubbleExample classess={classes} />} />
              </Grid>
            </Grid>
          </div>
        </div>
      </React.Fragment>
    )
  }
}

export default withStyles(styles)(Content)


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
        { x: 10, y:20 },
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


const BubbleExample = props =>(
  
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


const linedata = {
  labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
  datasets: [
    {
      label: 'My First dataset',
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
      data: [65, 59, 80, 81, 56, 55, 40]
    }
  ]
};


const CardItem = props =>(
  <Card className={props.classes.paper}>

    <CardActions className={props.classes.cardheader}>
      <Typography variant="h5">
        Nyt tapahtuuu
      </Typography>

      <IconButton className={props.classes.headerIcon} >
        <ClearIcon />
      </IconButton>
    </CardActions>

  
    <CardContent className={props.classes.chartcard}>
      {props.object}
    </CardContent>

  </Card>
)


{/* <Link to={""}>{props.name}</Link> //similarly use `a` if not using react-router*/ }