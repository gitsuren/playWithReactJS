import React, {Component} from 'react';
import PropTypes from 'prop-types';

class MemeHeader extends Component {
    render() {
        return (
            <header className="meme-header">
                <img src="http://www.pngall.com/wp-content/uploads/2016/05/Trollface.png" alt={"problem??"}/>
                <p>Meme Generator</p>
            </header>
        );
    }
}

MemeHeader.propTypes = {};

export default MemeHeader;
