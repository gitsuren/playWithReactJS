import React, {Component} from 'react';
import PropTypes from 'prop-types';
import ContactCard from "./ContactCard";

class ContactCardList extends Component {
    render() {

        return (
            <div>
                <ContactCard
                    contact={{name:"Mr. Whiskerson",
                        imgUrl:"http://placekitten.com/300/200",
                        phone:"(212) 555-1234",
                        email:"mr.shiskaz@catnap.meow"}}
                />
                 <ContactCard
                    contact={{name:"Mr. FluppyKins",
                        imgUrl:"http://placekitten.com/400/200",
                        phone:"(212) 555-4444",
                        email:"mr.FluppyKins@catnap.meow"}}
                />
                 <ContactCard
                    contact={{name:"Mr. Destroyer",
                        imgUrl:"http://placekitten.com/400/300",
                        phone:"(212) 555-3232",
                        email:"mr.Destroyer@catnap.meow"}}
                />

                <ContactCard
                    contact={{name:"Mr. Felix",
                        imgUrl:"http://placekitten.com/200/100",
                        phone:"(212) 555-1234",
                        email:"mr.Felix@catnap.meow"}}
                />
                {/*<ContactCard*/}
                {/*    name="Mr. FluppyKins"*/}
                {/*    imgUrl="http://placekitten.com/400/200"*/}
                {/*    phone="(212) 555-2345"*/}
                {/*    email="mr.FluppyKins@catnap.meow"*/}
                {/*/>*/}
                {/*<ContactCard*/}
                {/*    name="Mr. Destroyer"*/}
                {/*    imgUrl="http://placekitten.com/400/300"*/}
                {/*    phone="(212) 555-8888"*/}
                {/*    email="mr.Destroyer@catnap.meow"*/}
                {/*/>*/}
                {/*<ContactCard*/}
                {/*    name="Mr. Felix"*/}
                {/*    imgUrl="http://placekitten.com/200/100"*/}
                {/*    phone="(212) 555-9874"*/}
                {/*    email="mr.Felix@catnap.meow"*/}
                {/*/>*/}

            </div>
        );
    }
}

// ContactCardList.propTypes = {};

export default ContactCardList;

