import React, { Component } from 'react'
import {JokesContainer} from './pages/JokesContainer'

class App extends Component {
  constructor(){
    super()
    
    this.state = {
     openPanel: false,
    }
  }

  render() {
    return (
      <>
        {this.state.openPanel && <JokesContainer/>}
        <button onClick={()=>this.setState({openPanel: !this.state.openPanel})}>
        { this.state.openPanel ? "Close Jokes" : "Show Jokes"}</button>
      </>
    )
  }
}




export default App;
