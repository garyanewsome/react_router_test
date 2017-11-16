import React from "react"
import { BrowserRouter as Router, Link } from 'react-router-dom'

import PageToo from './components/pageToo.js'
import PageAlso from './components/pageAlso.js'

class App extends React.Component {
  render(){
    return (
      <div>
        <h1>App Component Called By Index</h1>
          <Link to="/page_too" component={PageToo}>Page Too</Link>
        <br />
          <Link to="/page_also" component={PageAlso}>Page Also</Link>
      </div>
    )
  }
}

export default App
