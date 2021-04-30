import { Component } from 'react';
import './MyRestaurants.css';


class MyRestaurants extends Component {
    state = {
        restaurantList: [],
    };
    async componentDidMount() {
        try {
            let jwt = localStorage.getItem('token')
            let fetchRestaurantsResponse = await fetch('/api/restaurantRoutes/myrestaurants', {
                method: "GET",
                headers: {"Content-Type": "application/json",'Authorization': 'Bearer ' + jwt},
              }) 
              let restaurant = await fetchRestaurantsResponse.json();   
              console.log(restaurant)      
              this.setState({ restaurantList: restaurant})
            console.log("putting restaurant in state")
        } catch (err) {
            console.error('ERROR:', err) // <-- log if error
        }
      }


    render(){
        return(
            <main className="MyRestaurants">
                <nav className="MyRestaurantsNav">
                </nav>
                    <h1>Restaurants</h1>  
            <div className="swiper">
                <section className="restaurantInfo">
                    {this.state.restaurantList.map(r => {
                       return (<div className="restaurant">
                            <h2 className="restName">{r.name}</h2>
                            <p className="restNumber">{r.contactNumber}</p> 
                            <p className="restAddress">{r.address}</p> 
                            <div className="imageContainer">{<img src= {r.pictureURL} alt="" className="image"/>}</div><br></br><br></br><br></br><hr/>
                        </div>)
                    })}
                </section>
            </div>
            </main>
        )
    }
}

export default MyRestaurants;