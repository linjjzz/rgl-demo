import React from "react";
import { graphql } from 'react-apollo'
import { withStyles } from '@material-ui/core/styles';
//import { listUIComponents } from '../Queries/queries'
//import flow from 'lodash/flow';
import IconButton from '@material-ui/core/IconButton';
import AddIcon from '@material-ui/icons/Add';
//components
import ShowcaseLayout from "./ShowcaseLayout";

const styles = theme =>({
floatAddbtn:{
  background:'	#1E90FF',
  position: 'absolute',
  right: 0,
  bottom: 0,
  margin:'20px',
  }
})


class Dashboard extends React.Component {
  constructor(props) {
    super(props);

    this.onLayoutChange = this.onLayoutChange.bind(this);
  }

  onLayoutChange(layout) {
    //this.setState({ layout: layout });
    console.log(layout)
    console.log("mutation => new layout")
  }

  AddWidget = (newWidget) =>{
    //this.setState(state => ({ layout: [...state.layout, newWidget], }));
    console.log("mutation => new widget")
  }
  RemoveWidget = (i) =>{
    //this.setState(state => ({ layout: [...state.layout.filter(widget => widget.i !== i)], }));
    console.log("mutation => remove widget")
  }
  render() {
    const layout = this.props.getTradeshow.layoutcomponents.items  //change this
    return (
      <React.Fragment>   
        <ShowcaseLayout 
        onLayoutChange={this.onLayoutChange} 
        layout={layout}
        AddWidget={this.AddWidget}
        RemoveWidget={this.RemoveWidget}
        />      
      </React.Fragment>
    );
  }
}

//const contentDiv = document.getElementById("root");
//const gridProps = window.gridProps || {};
//ReactDOM.render(React.createElement(ExampleLayout, gridProps), contentDiv);

export default Dashboard

//for testing
Dashboard.defaultProps = {

 
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


/*
export default flow(
  graphql(listUIComponents, {
    options: {
      fetchPolicy: 'cache-and-network'
    },
    props: props => ({
      Widgets: props.data.listUIComponents ? props.data.listUIComponents.items : [],
      data: props.data
    })
  }),
  withStyles(styles)
)(Dashboard)
*/
