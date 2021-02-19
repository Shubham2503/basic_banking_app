import axios from 'axios'
import React, { useState, useEffect } from 'react'
import Button from 'react-bootstrap/esm/Button'
import styles from './index.module.css'
import Form from 'react-bootstrap/Form'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

const User = (props) => {

    const [uid, setUid] = useState(null)
    const [data, setData] = useState([])
    const [mail,setMail] = useState('')
    const [amount,setAmount] = useState(0)

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

    
        console.log('amount' + amount);
        console.log('mail' + mail);

    return (
        <>
            <div className={styles.container}>
                <h2>Account Details</h2>
                <div className={styles.wraper}>
                    <p>First Name : {data.fname}</p>
                    <p>Last Name : {data.lname}</p>
                    <p>Email : {data.email}</p>
                    <p>Address : {data.address}</p>
                    {data.dob && <p>Date of birth : {data.dob.slice(0, 10)}</p>}
                    <p>Balance : {data.balance}</p>
                </div>
            </div>
            <div className={styles.container}>
                <h2>Transaction</h2>
                <Form className={styles.wraper}>
                    <Form.Group as={Row}>
                        <Form.Label column sm="3">
                            Email
                            </Form.Label>
                        <Col>
                            <Form.Control type="text" placeholder="Enter email" onChange={(e) => setMail(e.target.value)}/>
                        </Col>
                    </Form.Group>
                    <Form.Group as={Row}>
                        <Form.Label column sm="3">
                            Amount
                            </Form.Label>
                        <Col>
                            <Form.Control type="Number" placeholder="Amount" onChange={(e) => setAmount(e.target.value)}/>
                        </Col>
                    </Form.Group>
                    <Button varient="primary" tyep="submit" >Transfer</Button>
                </Form>
            </div>
        </>
    )
}

export default User