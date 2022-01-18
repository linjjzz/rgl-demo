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
import {Line} from 'react-chartjs-2';
import { defaults } from 'react-chartjs-2'
import { Bubble } from 'react-chartjs-2';
import { Switch, Route } from "react-router-dom";
//import flow from 'lodash/flow';
import { graphql } from 'react-apollo'
import gql from "graphql-tag";

//
import Dashboard from './testcomponents/Dashboard'
import Location from './Location'
import Users from './Users'
import Timetable from './Timetable'
import Chart from './Chart'

const defineComponent = (component, TradeshowApiKey) => {
  switch (component.i) {
    case 'Location': {
      console.log(component.i)
      return <Location TradeshowApiKey={TradeshowApiKey} />
    }
    case 'Users': {
      return <Users TradeshowApiKey={TradeshowApiKey} />
    }
    case 'Chart': {
      return <Chart TradeshowApiKey={TradeshowApiKey} />
    }
    case 'Timetable': {
      return <Timetable TradeshowApiKey={TradeshowApiKey} />
    }
    default:
      return <div />
  }
}
/*
const GetCurrentTradeshowsComponents = gql` 
query getTradeshow($id: ID!)  {
  getTradeshow(id:$id){
    id
    title
    layoutcomponents{
      items{
        i
        x
        y
        w
        h
      }
    }
  }
}
`
*/



const styles = theme => ({
  root: {
    background: '#F0F0F0',
    overflowY: 'scroll',
  },
})

class Content extends React.Component {
  render() {
    console.log("contents says userId is", this.props.UserId)
    //console.log( defineComponent('Location', TradeshowApiKey))
    //console.log(<Location  />)
    const { classes, TradeshowApiKey} = this.props
    const layoutComponents = this.props.getTradeshow.layoutcomponents.items // change this if data is different and let magic's doing his job
    const classname = ["Content"]
    classname.push(classes.root)
    return (   
          <div className={classname.join(" ")}>
            <Switch>
             {layoutComponents.map((data, index)=>(
              <Route path={"/" + data.i} render={() =>  defineComponent(data, TradeshowApiKey)}/> 
             ))}
              <Route path={"/Profile"} render={() => <div>Profile </div> }/> 
              <Route path={"/"} render={() => <Dashboard UserId={"UserId"} />}  />
              <Location />

            </Switch>
          </div>
    )
  }
}

export default withStyles(styles)(Content)


Content.defaultProps  = {
   getTradeshow: {
      id: "Messutapahtuma2",
      title: "OS-Messu",
      layoutcomponents: {
        items: [
          {
            "i": "Location",
            "x": 2,
            "y": 0,
            "w": 2,
            "h": 2
          },
          {
            "i": "Jotain",
            "x": 0,
            "y": 1,
            "w": 2,
            "h": 2
          },
          {
            "i": "Timetable",
            "x": 2,
            "y": 2,
            "w": 2,
            "h": 1
          },
          {
            "i": "Chart",
            "x": 0,
            "y": 0,
            "w": 1,
            "h": 1
          },
          {
            "i": "Users",
            "x": 1,
            "y": 0,
            "w": 1,
            "h": 1
          }
        ]
      }
    },
}




{/* <Link to={""}>{props.name}</Link> //similarly use `a` if not using react-router*/ }


