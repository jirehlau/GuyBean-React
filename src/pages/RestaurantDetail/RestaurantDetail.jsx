import './RestaurantDetail.css';
import { Component } from 'react';

class RestaurantDetail extends Component{
    render(){
        return(
            <div className="restDetailsMain">
                {this.state.restaurantList.map(r => {
                    return (<div className="restaurant">
                        <h2 className="restName">{r.name}</h2>
                        <p className="restNumber">{r.contactNumber}</p> <br></br><br></br>
                        <div className="imageContainer">{<img src= {r.pictureURL} alt="" className="image"/>}</div><br></br><br></br><br></br><hr/>
                    </div>)
                })}
            </div>
        )
    }
}

export default RestaurantDetail;