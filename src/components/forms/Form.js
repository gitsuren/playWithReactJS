import React, {Component} from 'react';

class Form extends Component {
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

        type==="checkbox"?this.setState({[name]: checked}): this.setState({[name]: value})
    }

    render() {
        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                    <input type="text"
                           name="firstName"
                           value={this.state.firstName}
                           placeholder="First Name"
                           onChange={this.handleChange}/>
                    <br/>
                    <input type="text"
                           name="lastName"
                           value={this.state.lastName}
                           placeholder="Last Name" onChange={this.handleChange}/>
                    <br/>
                    <label>Is Friendly?</label>
                    <input
                        type="checkbox"
                        name="isFriendly"
                        onChange={this.handleChange}
                        checked={this.state.isFriendly}/>
                    <br/>
                    <input type="text"
                           name="age"
                           value={this.state.age}
                           placeholder="Age" onChange={this.handleChange}/>
                    <br/>
                    <label>Gender?</label>
                    <label>
                    <input
                        type="radio"
                        name="gender"
                        onChange={this.handleChange}
                        value="male" checked={this.state.gender==="male"}/>
                    Male</label>
                    <label>
                    <input
                        type="radio"
                        name="gender"
                        onChange={this.handleChange}
                        value="female"
                        checked={this.state.gender==="female"}/>
                    Female</label>

                    <br/>
                    <label>Favorite Color:</label>
                    <select
                        name={this.state.favColor}
                        onChange={this.handleChange}
                        name="favColor">
                        <option value="blue">BLUE</option>
                        <option value="green">GREEN</option>
                        <option value="red">RED</option>
                    </select>
                    <br/>
                    <label>Favorite Color:</label>
                    <select
                        name={this.state.destination}
                        onChange={this.handleChange}
                        name="destination">
                        <option value="">---Please chooose a destination</option>
                        <option value="chicago">Chicago</option>
                        <option value="desmoines">DesMoines</option>
                        <option value="newyork">New York</option>
                    </select>

                    <br/>

                    <label>
                    <input
                        type="checkbox"
                        name="isVegan"
                        onChange={this.handleChange}
                        checked={this.state.dietaryRestriction.isVegan}/>
                        Vegan?</label>
                    <br/>
                    <label>
                        <input
                            type="checkbox"
                            name="isKosher"
                            onChange={this.handleChange}
                            checked={this.state.dietaryRestriction.isKosher}/>
                        Kosher?</label>
                    <br/>
                    <label>
                        <input
                            type="checkbox"
                            name="isLactoseFree"
                            onChange={this.handleChange}
                            checked={this.state.dietaryRestriction.isLactoseFree}/>
                        Lactose Free?</label>
                    <br/>

                    <button>Submit</button>

                    <h2>Entered Information:</h2>
                    <h1>{this.state.firstName} {this.state.lastName}</h1>
                    <h2>You are a {this.state.gender}</h2>
                    <h2>Your Fav Color is {this.state.favColor}</h2>
                    <h2>Your age is {this.state.age}</h2>
                    <h2>Your destination is {this.state.destination}</h2>
                    <h2>Your dietary restrictions is :</h2>
                    <h2>Is Vegan :{this.state.dietaryRestriction.isVegan}</h2>
                    <h2>Is Kosher :{this.state.dietaryRestriction.isKosher}</h2>
                    <h2>Is Lactose Free :{this.state.dietaryRestriction.isLactoseFree}</h2>


                </form>
            </div>
        );
    }
}

Form.propTypes = {};

export default Form;
