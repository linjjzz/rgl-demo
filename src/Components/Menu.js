import React from 'react'

import { withStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';

import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import MenuIcon from '@material-ui/icons/Menu';
import MenuList from '@material-ui/core/MenuList';
import MenuItem from '@material-ui/core/MenuItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import InboxIcon from '@material-ui/icons/MoveToInbox';
import DraftsIcon from '@material-ui/icons/Drafts';
import Avatar from '@material-ui/core/Avatar';
import { Link } from "react-router-dom";
import ListItem from '@material-ui/core/ListItem';
import Dashboard from '@material-ui/icons/Dashboard'


const defineIcon = componentName => {
  switch (componentName.i) {
    case "Location":
      return <InboxIcon />
    case "Chart":
      return <DraftsIcon />
    case "Users":
      return <MenuIcon />
    case "Timetable":
      return <MenuIcon />
    default:
      return
  }
}


const styles = theme => ({
  textcolor: {
    color: theme.palette.textColor.logopanel
  },
  //card
  profileCard:{
      height:'10%',
      //width: 'calc( 100% - 10px )',
      //backgroundColor: theme.palette.background.menupanel['A700'],
      //background:'rgb(36, 40, 42);',
      borderRadius: 0,
      display:'flex',
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: theme.palette.background.menupanel,
  },
  avatar:{
    width:50,
    height:50,
  },
  //list items
    listItems: {
      flexGrow:1,
      //width: '100%',
      backgroundColor: theme.palette.background.menupanel,
      
      borderRadius: 0,
      //width: 'calc( 100% - 10px )',
      width:'100%',
    },
 
  menuItem: {
      marginLeft: '11px',
      marginRight: '11px',
      borderRadius:'0.125em',
    '&$selected': {
      //background: '#fff !important',
      background:theme.palette.btncolor.main + '!important',
      '& *': { color: '#fff !important' },
    },
  },
  selected:{},

  primary: {
    color: theme.palette.common.white,
  },
  color:{
    color: theme.palette.common.white,
  },
  icon: {
    color: theme.palette.common.white,
  },
   // LogOutbtn
  LogOutbtn:{
     height:'5%',
     width: '100%',
     //backgroundColor: theme.palette.background.menupanel,
     borderRadius: 0,
     '& > button':{
       width:'100%',
       height:'100%',
       borderRadius: 0,
       background:"#f44336",
       color: theme.palette.common.white,
     }
  }
})

class Menu extends React.Component {
  render() {
    const layoutcomponents = this.props.getTradeshow.layoutcomponents.items // change this if data is different and let magic's doing his job
    const { classes} = this.props
     console.log("menu says userId is", this.props.UserId)
    return (
      <React.Fragment>
          <div className="Menu">
          <ProfileCard classes={classes}/>
          <ListItems classes={classes} layoutComponents={layoutcomponents} />
          <LogOutbtn classes={classes}/>
          </div>
      </React.Fragment>
    )
  }
}

export default withStyles(styles)(Menu)

//for testing
Menu.defaultProps ={
  getTradeshow: {
    "id": "Messutapahtuma2",
    "title": "OS-Messu",
    "layoutcomponents": {
      "items": [
        {
          "i": "Location",
          "x": 2,
          "y": 0,
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
  }
}




const ProfileCard = props => (
  <Card className={props.classes.profileCard} elevation={24}>
    <Avatar className={props.classes.avatar}>H</Avatar>
    <CardContent>
      <Typography variant="h6" noWrap={true}  className={props.classes.color}>
        Ali Bomayeah
      </Typography>
      <Typography   className={props.classes.color} >
        Administrator
      </Typography>
    </CardContent>
  </Card>
)

const ListItems = props => {
  return (
  <Paper className={props.classes.listItems} elevation={2}>
    <MenuList>

        <MenuItem  component={Link} to={"/"} selected={String(window.location.pathname) === "/" && true} 
          classes={{
            root: props.classes.menuItem,
            selected: props.classes.selected
          }}
        >
        <ListItemIcon className={props.classes.icon}>
          <InboxIcon />
        </ListItemIcon>
          <ListItemText primary="Dashboard" classes={{ primary: props.classes.primary }} 
      
        />
      </MenuItem>

      {props.layoutComponents.map((data, index) => (
          <MenuItem key={index} component={Link} to={"/" + data.i} selected={String(window.location.pathname) === "/" + data.i && true}
            classes={{
              root: props.classes.menuItem,
              selected: props.classes.selected
            }}
          >
            <ListItemIcon className={props.classes.icon}>
              <InboxIcon />
            </ListItemIcon>
            <ListItemText primary={data.i} classes={{ primary: props.classes.primary }} />
          </MenuItem>
      ))}
    
    </MenuList>
   
  </Paper>
  )
}

const LogOutbtn = props => (
  <Paper className={props.classes.LogOutbtn}>
    <Button variant="contained" className={props.classes.button}>
      Log Out
    </Button>
  </Paper>
)




{/*  disableTypography
            primary={
              <Typography type="body2" style={{ primary: props.classes.primary }}>
                MyTitle
            </Typography>
            } */}