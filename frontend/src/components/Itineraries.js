import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import Accordion from 'react-bootstrap/Accordion';
import Activities from './Activities';
import { connect } from 'react-redux';
import itinerariesActions from '../redux/actions/itinerariesActions';
import Comments from './Comments';
import Alert from './Alert';

const Itineraries = (props) => {

    const {id} = useParams()
    const {_id, src, firstName, lastName, likes, title, price, duration, hastags, comments} = props.itinerary;
    const [viewMoreLess, setViewMoreLess] = useState(false);
    const [activity, setActivities] = useState([]);
    const [like, setLike] = useState(false);
    const [itinerariesLikes, setItinerariesLikes] = useState(likes)

    const likeOrDislike = itinerariesLikes.includes(props._id) ? '/assets/heart-red.png' : '/assets/heart.png';

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

    const handlerActivities = () => {
        setViewMoreLess(!viewMoreLess)
        getActivities()
    }

    const likeItinerary = async () => {
        if(!props.token){
            Alert('error', 'You must be logged in to like this post')
        }else{
            let response = await props.likeItinerary(_id, props.token)
            setItinerariesLikes(response.data.response)
        }
        setLike(true)
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
                        <img onClick={!like ? likeItinerary : null} 
                            src={likeOrDislike}
                            className='like-heart'
                            alt='heart'
                        />
                        <span className="cont-likes">
                            {likes.length === 1? likes : likes.length - 1}
                        </span>
                    </div>
                </div>
            </div>
            <div className="cont-info-it">
                <div>
                    <h2 className="mb-5 mt-2 h2-title-itine italic-shadow">{title}</h2>
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
                                <Comments itineraryId={_id} itineraryComments={comments}/>
                            </div>
                        </Accordion.Body>
                </Accordion.Item>
            </Accordion>
        </div>
    )
}

const mapStateToProps = (state) => {
    return {
        token: state.users.token,
        _id: state.users._id,
        user: state.users.user
    }
}

const mapDispatchToProps = {
    getItineraryActivities: itinerariesActions.getItineraryActivities,
    likeItinerary: itinerariesActions.likeItinerary
}

export default connect(mapStateToProps,mapDispatchToProps)(Itineraries);
