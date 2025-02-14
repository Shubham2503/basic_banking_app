import React from 'react'
import ReactDOM from 'react-dom'
import styles from './App.module.css'
import { BrowserRouter as Router, Switch, Route } from "react-router-dom"
import Home from './pages/Home'
import AllUsers from './pages/AllUsers'
import AllTransaction from './pages/AllTransaction'
import User from './pages/Users'
import Navbar from './components/Navbar'

const App = () => {
    return (
        <div className={styles.container}>
            <Router>
                <Navbar />
                <Switch>
                    <Route path="/alltransaction">
                        <AllTransaction />
                    </Route>
                    <Route path="/allusers">
                        <AllUsers />
                    </Route>
                    <Route path="/user/:uid" component={User}/>
                    <Route path="/">
                        <Home />
                    </Route>
                </Switch>
            </Router>
        </div>
    );
}

export default App;
