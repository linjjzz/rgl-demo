import React from "react";
import { WidthProvider, Responsive } from "react-grid-layout";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import { withStyles } from "@material-ui/core/styles";
import IconButton from '@material-ui/core/IconButton';
import AddIcon from '@material-ui/icons/Add';

import Typography from '@material-ui/core/Typography';
import CardActions from '@material-ui/core/CardActions';
import ClearIcon from '@material-ui/icons/Clear';
import { defaults } from 'react-chartjs-2'
import { Bubble } from 'react-chartjs-2';
defaults.global.legend.display = false;

const ResponsiveReactGridLayout = WidthProvider(Responsive);

const styles = theme => ({

  root: {
    background: "#fff !important",
    //borderRadius: 0,
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
  },
  floatAddbtn:{
  background:'	#1E90FF',
  position: 'absolute',
  right: 0,
  bottom: 0,
  margin:'20px',
  }
});

class Layout extends React.Component {
  static defaultProps = {
    className: "layout",
    cols: { lg: 4, md: 4, sm: 4, xs: 4, xxs: 4 },
    rowHeight: 210
  };

  constructor(props) {
    super(props);
    this.state = {
      newCounter: 0
    };
    this.onAddItem = this.onAddItem.bind(this);
    this.onBreakpointChange = this.onBreakpointChange.bind(this);
  }
 
  onAddItem() {
    let newWidget = {
      i: "n" + this.state.newCounter,
      x: (this.props.layout.length * 2) % (this.state.cols || 12),
      y: Infinity, // puts it at the bottom
      w: 2,
      h: 2
    };
    this.setState({ newCounter: this.state.newCounter + 1 });
    this.props.AddWidget(newWidget);
  }

  onBreakpointChange(breakpoint, cols) {
    this.setState({
      breakpoint: breakpoint,
      cols: cols
    });
  }

  onLayoutChange = layout => {
    this.props.onLayoutChange(layout);
  };

  onRemoveItem(i) {
    this.props.RemoveWidget(i);
  }

  render() {
   
    const { classes } = this.props;
    return (
      <div className={classes.rot}>

        <ResponsiveReactGridLayout
          onLayoutChange={this.onLayoutChange}
          onBreakpointChange={this.onBreakpointChange}
          {...this.props}
          useCSSTransforms={true}>

          {this.props.layout.map((data, index) => (

            <Card key={data.i} data-grid={data} className={classes.root}>

              <CardActions className={classes.cardheader}>
                <Typography variant="h5">
                  Nyt tapahtuuu
                </Typography>

                <IconButton className={classes.headerbtn} >
                  <ClearIcon />
                </IconButton>
              </CardActions>


              <CardContent className={classes.chartcard}>
                {data.i === "Location" ? <BubbleExample /> : data.i}
              </CardContent>

            </Card>

           
          ))}
        </ResponsiveReactGridLayout>

        <IconButton aria-label="Delete" className={classes.floatAddbtn} onClick={this.onAddItem}>
          <AddIcon fontSize="default" />
        </IconButton>
      </div>
    );
  }
}

export default withStyles(styles)(Layout);




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