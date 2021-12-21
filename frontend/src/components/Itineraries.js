import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import Accordion from 'react-bootstrap/Accordion';
import Activities from './Activities';
import { connect } from 'react-redux';
import itinerariesActions from '../redux/actions/itinerariesActions';
import Comments from './Comments';

const Itineraries = (props) => {

    const {id} = useParams()
    const {_id, src, firstName, lastName, likes, title, price, duration, hastags} = props.itinerary;

    const [viewMoreLess, setViewMoreLess] = useState(false);

    const [like, setLike] = useState(false);
    
    const [activity, setActivities] = useState([]);

    // useEffect(() => {
    //     props.getItineraryActivities(_id)
    //     .then(res => setActivities(res))
    //     .catch(err => console.log(err))
    //     // eslint-disable-next-line react-hooks/exhaustive-deps
    // }, [])

    async function getActivities() {
        try {
            let res = await props.getItineraryActivities(_id)
            if(res) {
                setActivities(res)
            }
        } catch(err) {
            console.error(err)
        }
    }
    
    
    
    const onClickLike = (e) => {
        e.preventDefault()
    }

    const handlerActivities = () => {
        setViewMoreLess(!viewMoreLess)
        getActivities()
    }

    return (
        <div key={_id} className="itineraries-container mb-2 mt-2">
            <div className="cont-likes-publisher">
                <div className="publisher mb-2">
                    <div className="img-bg">
                        <img src={src} className='publisher-img' alt="publisher profile"/>
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
                        <img onClick={() => setLike(!like)} 
                            src={like ? '/assets/heart-red.png' : '/assets/heart.png'} 
                            className='like-heart' 
                            width=""
                            alt='heart'
                        />
                        <span onClick={(e) => onClickLike(e)} className="cont-likes">
                            {likes.length === 1? likes : likes.length}
                        </span>
                    </div>
                </div>
            </div>
            <div className="cont-info-it">
                <div>
                    <h2 className="mb-5 mt-2 italic-shadow">{title}</h2>
                </div>
                <div className="it-info">
                    <p className="italic-shadow">
                        Price: {("💸").repeat(price)}
                    </p>
                    <p className="italic-shadow">
                        Duration: {("⏱️").repeat(duration)}
                    </p>
                    <p className="italic-shadow">
                        Hastags: {hastags.map((hastag, index) => {
                            return <a href={`/city/${id}`} key={index} className="ms-2">{hastag}</a>
                        })}
                    </p>
                </div>
            </div>
            <Accordion defaultActiveKey="0" className="mt-4">
                <Accordion.Item eventKey="1">
                    <Accordion.Header onClick={() => handlerActivities()}>
                        { viewMoreLess ?  "View less" : "View more"}
                    </Accordion.Header>
                        <Accordion.Body className='cont-act-comments'>
                            <div className="itinerary-div">
                                <Activities activities={activity} />
                                <Comments />
                            </div>
                        </Accordion.Body>
                </Accordion.Item>
            </Accordion>
        </div>
    )
}

const mapStateToProps = (state) => {
    return {
        token: state.users.token
    }
}

const mapDispatchToProps = {
    getItineraryActivities: itinerariesActions.getItineraryActivities
}

export default connect(mapStateToProps,mapDispatchToProps)(Itineraries);
