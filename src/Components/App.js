import React from 'react'
import { Route, BrowserRouter } from "react-router-dom";
import NoSsr from "@material-ui/core/NoSsr";
import gql from "graphql-tag";
import { graphql } from "react-apollo";

//components
import Header from './Header'
import Logo from './Logo'
import Menu from './Menu'
import Content from './Content'

class App extends React.Component{
  state = {
    lastEvent: this.props.loading  ? null : this.props.getUser.lastevent
  }
  changeTradeshow = nextTradeShow => {
    this.setState({lastEvent:nextTradeShow})
  }
  render(){

    if(this.props.loading){
      return <div>  </div>
    }
    const TradeShowApiKey = this.props.getUser.tradeshows.items.filter(data => data.tradeshow.title !== this.props.lastEvent)[0].tradeshow.id
    const tradeshows = this.props.getUser.tradeshows
    console.log(TradeShowApiKey)
    return(
      <React.Fragment>
        <div className="grid-container">
          <Logo />
          <NoSsr>
            <BrowserRouter>
              <Route
                path="/"
                render={({ location }) => (
                  <React.Fragment>

                    <Menu UserId={this.props.UserId} TradeShowApiKey={TradeShowApiKey} />
                    <Content UserId={this.props.UserId} TradeShowApiKey={TradeShowApiKey}/>
                    <Header UserId={this.props.UserId} lastEvent={this.state.lastEvent} tradeshows={tradeshows} changeTradeshow={this.changeTradeshow}/>
                                      
                  </React.Fragment>
                )}
              />
            </BrowserRouter>
          </NoSsr>
        </div>
      </React.Fragment>
    )
  }
}

export default App


App.defaultProps = {
  loading: false,
  getUser: {
    id: "1234",
    username: "Ali Bomayeah",
    lastevent: "OS-Messu",
    tradeshows: {
      items: [
        {
          tradeshow: {
            "id": "Messutapahtuma1",
            "title": "IT-Messu"
          }
        },
        {
          tradeshow: {
            "id": "Messutapahtuma2",
            "title": "OS-Messu"
          }
        }
      ]
    }
  }

}