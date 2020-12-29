import React, {Component} from 'react';
import PropTypes from 'prop-types';
//
// class Joke extends Component {
//     render() {
function Joke(props){
        return (
            <div>
                <h3 style = {{display: !props.question && "none"}}>Question: {props.question}</h3>
                <h3 style={{color:!props.question && "red"}}>Answer : {props.punchLine}</h3>
                <hr/>
            </div>
        );
}

// Joke.propTypes = {};

export default Joke;
