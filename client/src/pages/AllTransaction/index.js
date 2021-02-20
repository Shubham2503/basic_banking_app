import React, { useEffect, useState } from 'react'
import styles from './index.module.css'
import axios from 'axios'
import Table from 'react-bootstrap/Table'

const AllTransaction = () => {
    const [transactions, setTransactions] = useState([])

    useEffect(() => {
        getTransaction()
    }, [])


    const getTransaction = async () => {
        await axios.get('/transaction')
            .then(res => {
                setTransactions(res.data.data)
            }).catch(err => {
                console.log(err)
            })
    }

    return (
        <div className={styles.container}>
            <Table responsive striped bordered hover variant="dark">
                <thead>
                    <tr>
                        <th>#</th>
                        <th>Sender</th>
                        <th>Receiver</th>
                        <th>Amount</th>
                    </tr>
                </thead>
                <tbody>
                    {transactions.map((ele, index) => {
                        return (
                            <tr>
                                <td key={index}>{index+1}</td>
                                <td key={index}>{ele.email1}</td>
                                <td key={index}>{ele.email2}</td>
                                <td key={index}>{ele.amount}</td>
                            </tr>
                        )
                    })}
                </tbody>
            </Table>
        </div>
    )

}

export default AllTransaction