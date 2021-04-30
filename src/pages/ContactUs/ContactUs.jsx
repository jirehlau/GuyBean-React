import './ContactUs.css';
import { Component } from 'react';
import { Link } from 'react-router-dom';

class ContactUs extends Component{
    render(){
        return(
            <div className="contactUs">
                <nav className="AddRestaurantFormNav">
                    <ul id="arfNav">
                        <li><Link to ='../MyRestaurants'>Home</Link></li>
                        <li>Company</li>
                        <li><Link to ='../AddRestaurantForm'>Add Restaurant</Link></li>
                        <li><Link to ='../ContactUs'>Contact Us</Link></li>
                    </ul>
                </nav>
            </div>
        )
    }
}

export default ContactUs;