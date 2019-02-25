import React from "react"
import { Route } from "react-router-dom"
import "./App.css"
import { Home, About, Contact, Navigation } from "./components"

const App = () => (
  <main>
    <h1>React Router Mini</h1>
    <Navigation />
    <Route exact path="/" component={Home} />
    <Route path="/about" component={About} />
    <Route path="/contact" component={Contact} />
  </main>
)

export default App
