import React from "react";
import ReactDOM from "react-dom";
//import App from './Components/App'
import Authentication from './Components/Authentication'
import "./styles.css";
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import blue from '@material-ui/core/colors/blue';

const theme = createMuiTheme({
  typography: {
    useNextVariants: true,
  },
  palette: {
    btncolor:{
      main: '#304ffe',
    },
    background:{
      headerpanel:'#fff',
      menupanel:'#303538',
      //menupanel: '#fff',
      contentpanel:'#F0F0F0',
      //logopanel:'#303538',
      logopanel: '#fff',
    },
    textColor:{
      headerpanel: '#000',
      //menupanel: '#fff',
      menupanel: '#000',
      contentpanel: '#000',
      //logopanel: '#fff',
      logopanel: '#303538',
    }
   
  },
  overrides: {
    MuiMenuItem: {
      /*
      selected: {
        background:'#fff !important',
        '& *': { color: '#000 !important' },
      },
    */
    },
  },
});

class WithProvider extends React.Component{
  render(){
    return(
      <MuiThemeProvider theme={theme}>
        <Authentication />
      </MuiThemeProvider>
    )
  }
}



const rootElement = document.getElementById("root");
ReactDOM.render(<WithProvider />, rootElement);
