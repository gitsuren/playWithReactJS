import React, {Component} from 'react';
import PropTypes from 'prop-types';
import Joke from "./Joke";
import jokesData from "./jokesData";

class JokeList extends Component {

    render() {

        //
        // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/filter
        // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/map
        // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/reduce
        // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/sort
        // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/every
        // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/some
        // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/find
        // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/findindex


        let jokesComponentArrays = jokesData.map(joke=> (<Joke key={joke.id} question={joke.question} punchLine={joke.punchLine}/>));

        return <div>
            {/*<Joke question="" punchLine="Only punchLine no Question"/>*/}
            {/*<Joke question="What comes after 10?" punchLine="11"/>*/}
            {/*<Joke question="What comes after 11?" punchLine="12"/>*/}
            {/*<Joke question="What comes after 12?" punchLine="13"/>*/}
            {/*<Joke question="What comes after 13?" punchLine="14"/>*/}
            {/*<Joke question="What comes after 14?" punchLine="15"/>*/}
            {jokesComponentArrays}
        </div>;
    }
}

JokeList.propTypes = {};

export default JokeList;
