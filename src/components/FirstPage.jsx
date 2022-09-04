import React from 'react';
import {Link} from 'react-router-dom'

const FirstPage = () => {
    return(
        <div>
            <h1>First Page</h1>
            <Link to='/second-page'>Second Page</Link>
        </div>
    )
}

export default FirstPage