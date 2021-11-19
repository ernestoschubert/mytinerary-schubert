import React from 'react'
import Carousel from 'react-bootstrap/Carousel';

const Carousels = () => {


    return (
        <Carousel fade>
            <Carousel.Item>
            <div className="container fluid first-slide">
                    <div className="row">
                        <div className="col-10 col-md-6">
                            <img className="d-block slade-img" src="./assets/instagram.png" alt="Second slide" />
                            <Carousel.Caption>
                            <h3>Second slide label</h3>
                            </Carousel.Caption>
                        </div>
                        <div className="col-10 col-md-6">
                            <img className="d-block slade-img" src="./assets/instagram.png" alt="Second slide" />
                            <Carousel.Caption>
                            <h3>Second slide label</h3>
                            </Carousel.Caption>
                        </div>
                        <div className="col-10 col-md-6">
                            <img className="d-block slade-img" src="./assets/instagram.png" alt="Second slide" />
                            <Carousel.Caption>
                            <h3>Second slide label</h3>
                            </Carousel.Caption>
                        </div>
                        <div className="col-10 col-md-6">
                            <img className="d-block slade-img" src="./assets/instagram.png" alt="Second slide" />
                            <Carousel.Caption>
                            <h3>Second slide label</h3>
                            </Carousel.Caption>
                        </div>
                    </div>
                </div>
            </Carousel.Item>
            <Carousel.Item>
                <div className="container fluid first-slide">
                    <div className="row">
                        <div className="col-10 col-md-6">
                            <img className="d-block slade-img" src="./assets/twitter.png" alt="Second slide" />
                            <Carousel.Caption>
                            <h3>Second slide label</h3>
                            </Carousel.Caption>
                        </div>
                        <div className="col-10 col-md-6">
                            <img className="d-block slade-img" src="./assets/twitter.png" alt="Second slide" />
                            <Carousel.Caption>
                            <h3>Second slide label</h3>
                            </Carousel.Caption>
                        </div>
                        <div className="col-10 col-md-6">
                            <img className="d-block slade-img" src="./assets/twitter.png" alt="Second slide" />
                            <Carousel.Caption>
                            <h3>Second slide label</h3>
                            </Carousel.Caption>
                        </div>
                        <div className="col-10 col-md-6">
                            <img className="d-block slade-img" src="./assets/twitter.png" alt="Second slide" />
                            <Carousel.Caption>
                            <h3>Second slide label</h3>
                            </Carousel.Caption>
                        </div>
                    </div>
                </div>
            </Carousel.Item>
            <Carousel.Item>
            <div className="container fluid first-slide">
                    <div className="row">
                        <div className="col-10 col-md-6">
                            <img className="d-block slade-img" src="./assets/facebook.png" alt="Second slide" />
                            <Carousel.Caption>
                            <h3>Second slide label</h3>
                            </Carousel.Caption>
                        </div>
                        <div className="col-10 col-md-6">
                            <img className="d-block slade-img" src="./assets/facebook.png" alt="Second slide" />
                            <Carousel.Caption>
                            <h3>Second slide label</h3>
                            </Carousel.Caption>
                        </div>
                        <div className="col-10 col-md-6">
                            <img className="d-block slade-img" src="./assets/facebook.png" alt="Second slide" />
                            <Carousel.Caption>
                            <h3>Second slide label</h3>
                            </Carousel.Caption>
                        </div>
                        <div className="col-10 col-md-6">
                            <img className="d-block slade-img" src="./assets/facebook.png" alt="Second slide" />
                            <Carousel.Caption>
                            <h3>Second slide label</h3>
                            </Carousel.Caption>
                        </div>
                    </div>
                </div>
            </Carousel.Item>
        </Carousel>

    )
}

// function ControlledCarousel() {
//     const [index, setIndex] = useState(0);
  
//     const handleSelect = (selectedIndex, e) => {
//       setIndex(selectedIndex);
//     };
  
//     return (
//       <Carousel activeIndex={index} onSelect={handleSelect}>
//         <Carousel.Item>
//           <img
//             className="d-block w-100"
//             src="holder.js/800x400?text=First slide&bg=373940"
//             alt="First slide"
//           />
//           <Carousel.Caption>
//             <h3>First slide label</h3>
//             <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
//           </Carousel.Caption>
//         </Carousel.Item>
//         <Carousel.Item>
//           <img
//             className="d-block w-100"
//             src="holder.js/800x400?text=Second slide&bg=282c34"
//             alt="Second slide"
//           />
  
//           <Carousel.Caption>
//             <h3>Second slide label</h3>
//             <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
//           </Carousel.Caption>
//         </Carousel.Item>
//         <Carousel.Item>
//           <img
//             className="d-block w-100"
//             src="holder.js/800x400?text=Third slide&bg=20232a"
//             alt="Third slide"
//           />
  
//           <Carousel.Caption>
//             <h3>Third slide label</h3>
//             <p>
//               Praesent commodo cursus magna, vel scelerisque nisl consectetur.
//             </p>
//           </Carousel.Caption>
//         </Carousel.Item>
//       </Carousel>
//     );
//   }

export default Carousels;
