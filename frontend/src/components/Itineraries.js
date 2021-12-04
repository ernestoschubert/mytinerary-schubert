import Accordion from 'react-bootstrap/Accordion';
import Button from 'react-bootstrap/Button';
import { Link } from 'react-router-dom';

const Itinerary = (props) => {


    return (
        <div className="itineraries-container">
            <div className="cont-likes-publisher">
                <div className="publisher">
                    <img src='/assets/itinerary/rihanna.jpg' alt="publisher profile"/>
                    <p>publisher fullname</p>
                </div>
                <div className="ms-4"> Likes</div>
            </div>
            <div className="cont-info-it">
                <div>
                    title
                </div>
                <div className="it-info">
                <p>price</p>
                <p>duration</p>
                <p>hastags</p>
                </div>
            </div>
            <Accordion defaultActiveKey="0" className="mt-4">
                <Accordion.Item eventKey="0">
                    <Accordion.Header>Activities</Accordion.Header>
                        <Accordion.Body>
                            <div className="itinerary-div">
                        {/* <p>{description === undefined ? <Loader size="sm"/> : description}</p> */}
                                <p className="underconst"> Under Construction </p>
                                <img src="/assets/underconstruction.png" width="200" className="mb-4" alt="under construction"/>
                            </div>
                        </Accordion.Body>
                </Accordion.Item>
            </Accordion>
        </div>
    )
}
export default Itinerary;
