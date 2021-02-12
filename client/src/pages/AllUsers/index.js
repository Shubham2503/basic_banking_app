import React, { useEffect, useState } from 'react'
import styles from './index.module.css'
import axios from 'axios'
import Table from 'react-bootstrap/Table'

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

    console.log(users)
    return (
        <div className={styles.container}>
            <p> all users </p><Table striped bordered hover variant="dark">
                <thead>
                    <tr>
                        <th>#</th>
                        <th>First Name</th>
                        <th>Last Name</th>
                        <th>Username</th>
                    </tr>
                </thead>
                <tbody>
                    {users.map((ele, index) => {
                        return (
                            <tr>
                                <td key={index}>{index}</td>
                                <td key={index}>{ele.uname}</td>
                                <td key={index}>{ele.address}</td>
                                <td key={index}>{ele.balence}</td>
                            </tr>
                        )
                    })}
                </tbody>
            </Table>
        </div>
    )

}

export default AllUsers