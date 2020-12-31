import React, {Component} from 'react';
import FormComponent from "./FormComponent";

class FormContainer extends Component {
    constructor(props) {
        super(props);
        this.state = {
            firstName: "",
            lastName: "",
            isFriendly: true,
            age: "",
            gender: "male",
            favColor: "green",
            destination: "",
            dietaryRestriction: {
                isVegan: false,
                isKosher: false,
                isLactoseFree: false
            }
        }
        this.handleChange=this.handleChange.bind(this)
    }

    handleChange(event){
        const {name, value,type, checked} = event.target;

        type==="checkbox"?this.setState({[name]: checked}): this.setState({[name]: value});
    }

    render() {
        return (
            <FormComponent
                handleChange={this.handleChange}
                {...this.state}
            />
        );
    }
}

// FormContainer.propTypes = {};

export default FormContainer;
