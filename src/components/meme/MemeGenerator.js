import React, {Component} from 'react';
import PropTypes from 'prop-types';

class MemeGenerator extends Component {


    //class variables are now first class citizen
    state = {
        topText: "HELLO",
        bottomText: "WORLD!",
        randomImg: "http://i.imgflip.com/1bij.jpg",
        allMemeImages: []
    };

    // constructor and binding is not required after 17~ version of reactjs
    // constructor(props) {
    //     super(props);
    //     this.state = {
    //         topText: "HELLO",
    //         bottomText: "WORLD!",
    //         randomImg: "http://i.imgflip.com/1bij.jpg",
    //         allMemeImages: []
    //     };
    //     this.handleChange=this.handleChange.bind(this);
    //     this.handleSubmit=this.handleSubmit.bind(this);
    // }

    // state = {
    //     topText: "HELLO",
    //     bottomText: "WORLD!",
    //     randomImg: "http://i.imgflip.com/1bij.jpg",
    //     allMemeImages: []
    // };

    componentDidMount() {
        fetch("https://api.imgflip.com/get_memes")
            .then(response => response.json())
            .then(response => {
                const {memes} = response.data
                //console.log(memes[0])
                this.setState({allMemeImages: memes})
            })
    }

    handleChange = event => {
        //console.log("WORKING!!!")
        const {name, value} = event.target;
        this.setState({[name]: value});
    };

    // Regular function that will require the binding at constructor
    // handleChange(event) {
    //     //console.log("WORKING!!!")
    //     const {name, value} = event.target;
    //     this.setState({[name]: value});
    // }

    handleSubmit = (event) => {
        event.preventDefault();
        const random =Math.floor(Math.random() * this.state.allMemeImages.length);
        let memeImg = this.state.allMemeImages[random].url;
        this.setState({
            randomImg: memeImg
        })
    }

    render() {
        return (
            <div>
                <form className="meme-form" onSubmit={this.handleSubmit}>
                    <input type="text"
                           name="topText"
                           value={this.state.topText}
                           placeholder="Top Text"
                           onChange={this.handleChange}/>

                    <input type="text"
                           name="bottomText"
                           value={this.state.bottomText}
                           placeholder="Bottom Text"
                           onChange={this.handleChange}/>
                    <button>GEN</button>
                </form>

                <br/>

                <div className="meme">
                    <img src={this.state.randomImg} alt=""/>
                    <h2 className="top">{this.state.topText}</h2>
                    <h2 className="bottom">{this.state.bottomText}</h2>
                </div>


            </div>
        );
    }
}

MemeGenerator.propTypes = {};

export default MemeGenerator;
