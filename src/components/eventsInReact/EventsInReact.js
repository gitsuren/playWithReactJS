import React, {Component} from 'react';
import PropTypes from 'prop-types';

class EventsInReact extends Component {

    constructor() {
        super();
        this.state = {
            count: 0
        }
        //this is the must to bind the function for event change
        this.handleClick = this.handleClick.bind(this);
    }

    //https://reactjs.org/docs/events.html#supported-events
    handleClick(){
        console.log("I was clicked");
        this.setState(prevState => ({count: prevState.count + 1}));
    }

    render() {
        return (
            <div>
                <img onMouseOver={()=> console.log("HOVERED!!!")} src="https://www.fillmurray.com/200/100" alt=""/>
                {/*<button onClick={() => console.log("I was clicked")}>Click Me</button>*/}
                <br/>
                <h1>{this.state.count}</h1>
                <button onClick={this.handleClick}>Change!!!</button>
            </div>
        );
    }
}

EventsInReact.propTypes = {};

export default EventsInReact;
