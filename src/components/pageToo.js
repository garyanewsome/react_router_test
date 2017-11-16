import React from "react"
import { BrowserRouter as Router, Link } from 'react-router-dom'
import history from './../history.js'

import App from './../app.js'
import PageAlso from './pageAlso.js'

class PageToo extends React.Component {
  render(){
    return (
      <div>
        <h1>Page Too Component in src</h1>
        <Link to="/" component={App}>Home!</Link>
        <br />
        <Link to="/page_also" component={PageAlso}>Page Also</Link>
      </div>
    )
  }
}

export default PageToo
