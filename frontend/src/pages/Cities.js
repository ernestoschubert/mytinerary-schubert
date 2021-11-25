import React from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'

export default class Cities extends React.Component {
    constructor() {
        super();
        this.state = {
            cities : {}
        }
    }

    componentDidMount() {
        fetch("http://localhost:4000/api/cities")
            .then(res => res.json())
            .then(data => {
                this.setState({cities: data.response.cities})
            })
            .catch(err => console.error(err))
    }

    render() {
        // const arrCities = this.state.cities
        // console.log(this.state.cities)

        // componentDidUpdate() {}

        if(this.state.cities.length > 0){
            const allCities = this.state.cities.map(city => {
                            return  (
                                <div key={city.id} style={{backgroundImage: `${city.src}`, width: "auto", height: "30vh", color:"white"}}>
                                    <p>{city.city + " - " + city.country}</p>
                                </div>
                            )
                        })
                        return (
                            <div className="container-home">
                                <Header/>
                                <main>
                                    {allCities}
                                </main>
                                <Footer/>
                            </div>
                            )
        }

        return (
            <div className="container-home">
                <Header/>
                <main>
                    {/* {this.allCities} */}
                </main>
                <Footer/>
            </div>
        )
    }
}


// const Cities = () => {

//     const [cities, setCities] = useState([])

// useEffect(()=> {
//     fetch("http://localhost:4000/api/cities")
//             .then(res => res.json())
//             .then(data => setCities(data.response.cities))
//             .catch()
//         },[]);
        

//     return (
//         <div className="container-home">
//             <Header/>
//             <main>
//                 {
//                     cities.map(city => {
//                     return  (
//                         <div key={city.id} style={{backgroundImage: `${city.src}`, width: "auto", height: "30vh", color:"white"}}>
//                             <p>{city.city + " - " + city.country}</p>
//                         </div>
//                         )
//                     })
//                 }
//             </main>
//             <Footer/>
//         </div>
//     )
// }

// export default Cities;