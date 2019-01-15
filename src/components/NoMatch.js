import React, {Fragment} from 'react'
import {Link} from 'react-router-dom'

const NoMatch =  ({location}) => (
    <Fragment>
        <div className="alert alert-danger">
            {location.pathname} not fount!
        </div>
        <Link to='/'>Go to Home</Link>
    </Fragment>
)

export default NoMatch