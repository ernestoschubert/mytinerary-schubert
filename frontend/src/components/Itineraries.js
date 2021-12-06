import Accordion from 'react-bootstrap/Accordion';

const Itineraries = (props) => {

    return (
        <div key={props.key} className="itineraries-container mb-2 mt-2">
            <div className="cont-likes-publisher">
                <div className="publisher">
                    <div className="img-bg">
                        <img src={props.itinerary.src} alt="publisher profile"/>
                    </div>
                    <h5 className="ms-3 italic-shadow linkedin-logo"><a href="https://www.linkedin.com/" target="_new" className="ms-2"><img src="/assets/linkedin.png" alt="linkedin logo" className="me-2"/>{props.itinerary.firstName + " " + props.itinerary.lastName}</a></h5>
                </div>
                <div className="ms-4">{("❤️") + props.itinerary.likes}</div>
            </div>
            <div className="cont-info-it">
                <div>
                    <h2 className="mb-5 mt-2 italic-shadow">{props.itinerary.title}</h2>
                </div>
                <div className="it-info">
                <p className="italic-shadow">Price: {("💸").repeat(props.itinerary.price)}</p>
                <p className="italic-shadow">Duration: {("⏱️").repeat(props.itinerary.duration)}</p>
                <p className="italic-shadow">Hastags: {props.itinerary.hastags.map(hastag => {
                    return <a href={`/city/${props.itinerary.city}`} className="ms-2">{hastag}</a>
                })}</p>
                </div>
            </div>
            <Accordion defaultActiveKey="0" className="mt-4">
                <Accordion.Item eventKey="1">
                    <Accordion.Header>View more</Accordion.Header>
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
export default Itineraries;
