import React from 'react';


class UserProfile extends React.Component {
    constructor(props) {
        super(props)
        this.state = {

        }
    }


    submitHandler = (event) => {
        event.preventDefault()
        console.log(`Submitting user profile form`);
    }

    render() {
        return (

            <>
                <h2>My Profile</h2>

                <form>
                    <label>Name</label>
                    <input type="text"></input>
                    <br></br>
                    <label>Email</label>
                    <input type="email"></input>
                    <br></br>
                    <label>Password</label>
                    <input type="password"></input>
                    <br></br>
                    <label>Password (confirm)</label>
                    <input type="password"></input>

                    <fieldset>
                        <legend>Address (default)</legend>
                        <label>Street</label>
                        <input type="text" placeholder="2121 Jump St."></input>
                        <br></br>
                        <label>City</label>
                        <input type="text" placeholder="Grumpy"></input>
                        <br></br>
                        <label>State</label>
                        <input type="text" placeholder="Massachusetts"></input>
                    </fieldset>
                    <p >Do you want to update your location when travelling?</p>
                    <input type="radio" name="location" id="location-no" value="false" checked />
                    <label for="location-no">No</label>
                    <br></br>
                    <input type="radio" name="location" id="location-yes" value="true" />
                    <label for="location-yes">Yes</label>
                    <br></br>
                    <button onClick={this.submitHandler}>I'm done.</button>
                </form>
            </>

        )
    }
};

export default UserProfile;