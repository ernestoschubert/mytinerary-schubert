import React from 'react'
import Button from 'react-bootstrap/Button'
import Spinner from 'react-bootstrap/Spinner'

const Loader = () => {
    return (
        <>
            <Button variant="warning" className="spinner" disabled>
                <Spinner
                as="span"
                animation="border"
                size="md"
                role="status"
                aria-hidden="true"
                />
                <span className="visually-hidden">Loading...</span>
            </Button>{' '}
        </>
    )
}

export default Loader;
