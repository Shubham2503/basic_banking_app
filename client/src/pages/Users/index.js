import axios from 'axios'
import React, { useState, useEffect } from 'react'
import Button from 'react-bootstrap/esm/Button'
import styles from './index.module.css'
const User = (props) => {

    const [uid, setUid] = useState(null)
    const [data, setData] = useState([])


    const getData = async () => {
        const uri = '/user/' + uid
        await axios.get(uri)
            .then(data => {
                setData(data.data)
            })
            .catch(err => {
                console.log(err)
            })
    }

    useEffect(async () => {
        setUid(props.match.params.uid)
        await getData()
    }, [uid])

    if (uid == null || data === [])
        return null


    return (
        <div className={styles.container}>
            <h2>USER</h2>
            <div className={styles.wraper}>
                <p>First Name : {data.fname}</p>
                <p>Last Name : {data.lname}</p>
                <p>Email : {data.email}</p>
                <p>Address : {data.address}</p>
                {data.dob && <p>Date of birth : {data.dob.slice(0, 10)}</p>}
                <p>Balance : {data.balance}</p>
            </div>
            <Button varient="primary">Transfer</Button>
        </div>
    )
}

export default User