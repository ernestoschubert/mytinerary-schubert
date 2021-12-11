import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import Accordion from 'react-bootstrap/Accordion';

const Itineraries = (props) => {

    const {id} = useParams()

    const [viewMoreLess, setViewMoreLess] = useState(false);

    const {_id, src, firstName, lastName, likes, title, price, duration, hastags} = props.itinerary;

    return (
        <div key={_id} className="itineraries-container mb-2 mt-2">
            <div className="cont-likes-publisher">
                <div className="publisher mb-2">
                    <div className="img-bg">
                        <img src={src} alt="publisher profile"/>
                    </div>
                    <h5 className="ms-3 italic-shadow linkedin-logo">
                        <a href="https://www.linkedin.com/" target="_new" className="ms-2 d-flex align-items-center">
                            {firstName + " " + lastName}
                            <img src="/assets/linkedin.png" alt="linkedin logo" className="ms-2"/>
                        </a>
                    </h5>
                </div>
                <div className="ms-4">
                    <div className="likes">
                        <img src='/assets/heart.svg' width="24" alt='heart'/>
                        <span className="mt-3">{likes.length === 1 && likes[0] === 0 ? likes : likes.length}</span>
                    </div>
                </div>
            </div>
            <div className="cont-info-it">
                <div>
                    <h2 className="mb-5 mt-2 italic-shadow">{title}</h2>
                </div>
                <div className="it-info">
                    <p className="italic-shadow">Price: {("💸").repeat(price)}</p>
                    <p className="italic-shadow">Duration: {("⏱️").repeat(duration)}</p>
                    <p className="italic-shadow">Hastags: {hastags.map((hastag, index) => {
                                return <a href={`/city/${id}`} key={index} className="ms-2">{hastag}</a>
                            })}
                    </p>
                </div>
            </div>
            <Accordion defaultActiveKey="0" className="mt-4">
                <Accordion.Item eventKey="1">
                    <Accordion.Header onClick={() => setViewMoreLess(!viewMoreLess)}>{ viewMoreLess ?  "View less" : "View more"}</Accordion.Header>
                        <Accordion.Body>
                            <div className="itinerary-div">
                                <p className="underconst"> Under Construction </p>
                                <img src="/assets/underconstruction.png" width="200" className="mb-4" alt="under construction"/>
                            </div>
                        </Accordion.Body>
                </Accordion.Item>
            </Accordion>
        </div>
    )
}
export default Itineraries;
