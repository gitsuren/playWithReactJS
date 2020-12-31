import React, {Component} from 'react';
import PropTypes from 'prop-types';

class FormComponent extends Component {
    render() {
        return (
            <main>
                <form onSubmit={this.props.handleSubmit}>
                    <input type="text"
                           name="firstName"
                           value={this.props.firstName}
                           placeholder="First Name"
                           onChange={this.props.handleChange}/>
                    <br/>
                    <input type="text"
                           name="lastName"
                           value={this.props.lastName}
                           placeholder="Last Name" onChange={this.props.handleChange}/>
                    <br/>
                    <label>Is Friendly?</label>
                    <input
                        type="checkbox"
                        name="isFriendly"
                        onChange={this.props.handleChange}
                        checked={this.props.isFriendly}/>
                    <br/>
                    <input type="text"
                           name="age"
                           value={this.props.age}
                           placeholder="Age" onChange={this.props.handleChange}/>
                    <br/>
                    <label>Gender?</label>
                    <label>
                        <input
                            type="radio"
                            name="gender"
                            onChange={this.props.handleChange}
                            value="male" checked={this.props.gender==="male"}/>
                        Male</label>
                    <label>
                        <input
                            type="radio"
                            name="gender"
                            onChange={this.props.handleChange}
                            value="female"
                            checked={this.props.gender==="female"}/>
                        Female</label>

                    <br/>
                    <label>Favorite Color:</label>
                    <select
                        name={this.props.favColor}
                        onChange={this.props.handleChange}
                        name="favColor">
                        <option value="blue">BLUE</option>
                        <option value="green">GREEN</option>
                        <option value="red">RED</option>
                    </select>
                    <br/>
                    <label>Destination:</label>
                    <select
                        name={this.props.destination}
                        onChange={this.props.handleChange}
                        name="destination">
                        <option value="">---Please chooose a destination---</option>
                        <option value="chicago">Chicago</option>
                        <option value="desmoines">DesMoines</option>
                        <option value="newyork">New York</option>
                    </select>

                    <br/>

                    {/*<label>*/}
                    {/*    <input*/}
                    {/*        type="checkbox"*/}
                    {/*        name="isVegan"*/}
                    {/*        onChange={this.props.handleChange}*/}
                    {/*        checked={this.props.dietaryRestriction.isVegan}/>*/}
                    {/*    Vegan?*/}
                    {/*</label>*/}
                    {/*<br/>*/}
                    {/*<label>*/}
                    {/*    <input*/}
                    {/*        type="checkbox"*/}
                    {/*        name="isKosher"*/}
                    {/*        onChange={this.props.handleChange}*/}
                    {/*        checked={this.props.dietaryRestriction.isKosher}/>*/}
                    {/*    Kosher?</label>*/}
                    {/*<br/>*/}
                    {/*<label>*/}
                    {/*    <input*/}
                    {/*        type="checkbox"*/}
                    {/*        name="isLactoseFree"*/}
                    {/*        onChange={this.props.handleChange}*/}
                    {/*        checked={this.props.dietaryRestriction.isLactoseFree}/>*/}
                    {/*    Lactose Free?</label>*/}
                    {/*<br/>*/}

                    <button>Submit</button>

                    <h2>Entered Information:</h2>
                    <h1>{this.props.firstName} {this.props.lastName}</h1>
                    <h2>You are a {this.props.gender}</h2>
                    <h2>Your Fav Color is {this.props.favColor}</h2>
                    <h2>Your age is {this.props.age}</h2>
                    <h2>Your destination is {this.props.destination}</h2>
                    {/*<h2>Your dietary restrictions is :</h2>*/}
                    {/*<h2>Is Vegan :{this.props.dietaryRestriction.isVegan}</h2>*/}
                    {/*<h2>Is Kosher :{this.props.dietaryRestriction.isKosher}</h2>*/}
                    {/*<h2>Is Lactose Free :{this.props.dietaryRestriction.isLactoseFree}</h2>*/}


                </form>
            </main>
        );
    }
}

FormComponent.propTypes = {};

export default FormComponent;
