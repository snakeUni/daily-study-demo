import { useState } from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import V5 from './v5'
import V2 from './v2'
import './App.css'

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Switch>
          <Route component={V5} path="/v5" exact />
          <Route component={V2} path="/v2" exact />
        </Switch>
      </BrowserRouter>
    </div>
  )
}

export default App
