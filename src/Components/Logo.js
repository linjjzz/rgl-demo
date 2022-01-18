import React from 'react'
import { withStyles } from '@material-ui/core/styles';

import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import DashboardIcon from '@material-ui/icons/Dashboard';

const styles = theme => ({
  root: {
    display:"flex",
    height:'100%',
    borderRadius:0,
    justifyContent: 'center',
    alignItems: 'center',
    background:theme.palette.background.logopanel,
    borderRight: '1px solid #ddd',
   
  },
  textcolor:{
    color: theme.palette.textColor.logopanel
  }
})

class Logo extends React.Component {
  render() {
    const {classes} = this.props
    return (
      <React.Fragment>
          <div className="Logo">
          <Paper className={classes.root} elevation={2}>
            <Typography variant="h4" className={classes.textcolor}>
              Cohdata <DashboardIcon />
            </Typography>
           
          </Paper>
          </div>
      </React.Fragment>
    )
  }
}

export default withStyles(styles)(Logo)
