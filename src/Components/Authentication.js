import React from 'react'
import App from './App'


class Authentication extends React.Component{
  state={
    //User: null,
    User:{
      "id": "4321",
      "username": "Conkeldurr",
      "lastevent": "Messu1"
    }
  }
  render(){
    return(
      <React.Fragment>
        {this.state.User === null ? <div>Loading</div> : <App UserId={this.state.User.id} />} 
      </React.Fragment>
    );
  }
}

export default Authentication