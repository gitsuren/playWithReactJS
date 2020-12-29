import React, {Component} from 'react';
import PropTypes from 'prop-types';

// class ContactCard extends Component {
//     render() {
//         return (
//             <div className="contact-card">
//                 <img src=""/>
//                 <h3>Mr</h3>
//                 <p></p>
//                 <p></p>
//
//             </div>
//         );
//     }
// }

// ContactCard.propTypes = {};

function ContactCard(props){
        console.log(props)
        return (
            // When the contact props were not passed..
            // <div className="contact-card">
            //     <img src={props.imgUrl}/>
            //     <h3>{props.name}</h3>
            //     <p>Phone: {props.phone}</p>
            //     <p>Email: {props.email}</p>
            //
            // </div>

            <div className="contact-card">
                    <img src={props.contact.imgUrl}/>
                    <h3>{props.contact.name}</h3>
                    <p>Phone: {props.contact.phone}</p>
                    <p>Email: {props.contact.email}</p>

            </div>
        );
}

export default ContactCard;
