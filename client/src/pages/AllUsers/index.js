import React, { useEffect, useState } from 'react'
import styles from './index.module.css'
import axios from 'axios'
import Table from 'react-bootstrap/Table'
import Button from 'react-bootstrap/Button'
import { Link, NavLink } from "react-router-dom"

const AllUsers = () => {
    const [users, setUsers] = useState([])

    useEffect(() => {
        console.log('useEffect called')
        getUsers()
    }, [])


    const getUsers = async () => {
        await axios.get('/user')
            .then(res => {
                setUsers(res.data.data)
            }).catch(err => {
                console.log(err)
            })
    }

    const handleclick = () => {

    }

    console.log(users)
    return (
        <div className={styles.container}>
            <Table responsive striped bordered hover variant="dark">
                <thead>
                    <tr>
                        <th>#</th>
                        <th>First Name</th>
                        <th>Last Name</th>
                        <th>Email</th>
                        <th>Address</th>
                        <th>DOB</th>
                        <th>Balance</th>
                    </tr>
                </thead>
                <tbody>
                    {users.map((ele, index) => {
                        return (
                            <tr>
                                <td key={index}>{index+1}</td>
                                <td key={index}>{ele.fname}</td>
                                <td key={index}>{ele.lname}</td>
                                <td key={index}>{ele.email}</td>
                                <td key={index}>{ele.address}</td>
                                <td key={index}>{ele.dob.slice(0,10)}</td>
                                <td key={index}>{ele.balance}</td>
                                <td key={index}><Link style={{color: "#0CF"}} to={'/user/'+ele._id}>View</Link></td>
                            </tr>
                        )
                    })}
                </tbody>
            </Table>
        </div>
    )

}

export default AllUsers