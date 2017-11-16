import React from "react"
import { BrowserRouter as Router, Link } from 'react-router-dom'

import PageToo from './pageToo.js'
import App from './../app.js'

class PageAlso extends React.Component {
  render(){
    return (
      <div>
        <h1>Page Also Component in src</h1>
          <Link to="/" component={App}>Home!</Link>
          <br />
          <Link to="/page_too" component={PageToo}>Page Too</Link>
      </div>
    )
  }
}

export default PageAlso
