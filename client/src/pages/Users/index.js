import React, { useState, useEffect } from 'react'

const User = (props) => {

    const [uid,setUid] = useState(null)

    useEffect(() => {
        setUid(props.match.params.uid)
    }, [])

    if(uid == null)
    return null


    return(
        <div>
            <p>user </p>
            <p>{uid}</p>
        </div>
    )
}

export default User