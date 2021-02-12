import React from 'react'
import ReactDOM from 'react-dom'
import styles from './App.module.css'
import { BrowserRouter as Router, Switch, Route } from "react-router-dom"
import Home from './pages/Home'
import AllUsers from './pages/AllUsers'
import Navbar from './components/Navbar'

const App = () => {
    return (
        <div className={styles.container}>
            <Router>
                <Navbar />
                <Switch>
                    <Route path="/allusers">
                        <AllUsers />
                    </Route>
                    <Route path="/">
                        <Home />
                    </Route>
                </Switch>
            </Router>
        </div>
    );
}

export default App;
