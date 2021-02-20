import React from 'react'
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import { Link, NavLink } from "react-router-dom"
import styles from './index.module.css'


const Navbr = () => {
    return (
        <div className={styles.container}>
            <Navbar collapseOnSelect expand="md">
                <Navbar.Brand><Link className={styles.navBrand} style={{ textDecoration: "none"}} to="/"> <h1 className={styles.head1} >YBank</h1></Link></Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav" className={styles.rNavbar}>
                    <Nav className="justify-content-end" style={{ width: "100%" }}>
                        <Nav.Item>
                            <Link className={styles.navLink} to="/allusers">Customers</Link>
                        </Nav.Item>
                        <Nav.Item>
                            <Link className={styles.navLink}to="/alltransaction" >Transaction</Link>
                        </Nav.Item>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        </div>
    )
}

export default Navbr