import React, { Component } from 'react'
import Navbar from './components/Navbar'

import NewsMain from './components/NewsMain'



export class App extends Component {
  render() {
    return (
      <div>
        <Navbar/>
        <NewsMain/>
      </div>
    
    )

  }
}

export default App