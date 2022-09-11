import React from 'react'
import { useNavigate } from 'react-router-dom'

const FormPage = () => {
    let navigate = useNavigate()
    const handlerSubmit = (event) => {
        event.preventDefault()
        navigate('/')
    }
    return(
        <>
            <form onSubmit={handlerSubmit}>
                <button type="submit">Submit</button>
            </form>
        </>
    )
}

export default FormPage