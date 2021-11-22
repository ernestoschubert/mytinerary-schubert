import React from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'

export default class Cities extends React.Component {
    render() {
        return (
            <div className="container-home">
                <Header/>
                <div style={{height:'91vh'}}></div>
                <Footer/>
            </div>
        )
    }
}