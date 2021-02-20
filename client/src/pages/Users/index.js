import axios from 'axios'
import React, { useState, useEffect } from 'react'
import Button from 'react-bootstrap/esm/Button'
import styles from './index.module.css'
import Form from 'react-bootstrap/Form'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Modal from 'react-bootstrap/Modal'


const User = (props) => {

    const [uid, setUid] = useState(null)
    const [data, setData] = useState([])
    const [mail, setMail] = useState('')
    const [amount, setAmount] = useState('')
    const [show, setShow] = useState(false)
    const [validated, setValidated] = useState(false)
    const [iserror, setIserror] = useState(false)


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

    const handleClick = async (event) => {

        const form = event.currentTarget;
        if (form.checkValidity() === false) {
            event.preventDefault()
            setIserror(true)
            setShow(true)
            event.stopPropagation()
        }
        setValidated(true);

        if (mail !== '' && amount !== '') {
            await axios.post('/transaction', {
                id: uid,
                email: mail,
                amount: amount
            })
                .then((res) => {
                    console.log("success")
                    setIserror(false)
                    setShow(true)
                })
                .catch(err => {
                    setIserror(false)
                    console.log(err)
                })
        }
    }

    useEffect(async () => {
        setUid(props.match.params.uid)
        await getData()
    }, [uid])

    if (uid == null || data === [])
        return null

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
                <Form noValidate validated={validated} className={styles.wraper}>
                    <Form.Group as={Row} controlId="validationCustom01">
                        <Form.Label column sm="3"> Email </Form.Label>
                        <Col>
                            <Form.Control type="text" placeholder="Enter email" onChange={(e) => setMail(e.target.value)} required />
                            <Form.Control.Feedback type="invalid">Enter Valid email</Form.Control.Feedback>
                        </Col>
                    </Form.Group>
                    <Form.Group as={Row} controlId="validationCustom02">
                        <Form.Label column sm="3"> Amount </Form.Label>
                        <Col>
                            <Form.Control type="Number" placeholder="Amount" min="1" onChange={(e) => setAmount(e.target.value)} required />
                            <Form.Control.Feedback type="invalid">Enter Valid Amount</Form.Control.Feedback>
                        </Col>
                    </Form.Group>
                    <Button varient="primary" tyep="submit" onClick={handleClick}>Transfer</Button>
                </Form>


                <Modal show={show} onHide={() => setShow(false)}>
                    <Modal.Header closeButton>
                        <Modal.Title>Transaction</Modal.Title>
                    </Modal.Header>
                    {
                        iserror ? <Modal.Body>Woohoo, payment successfull</Modal.Body> :
                            <Modal.Body>opsee, something went wrong</Modal.Body>
                    }
                    <Modal.Footer>
                        <Button variant="secondary" onClick={() => setShow(false)}>
                            Close
                        </Button>
                    </Modal.Footer>
                </Modal>
            </div>
        </>
    )
}

export default User