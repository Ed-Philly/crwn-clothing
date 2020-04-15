import React, { Component } from 'react';
import FormInput from '../../components/form-input/form-input.componet';
import './sign-in.style.scss';
import CustomButton from '../../components/custom-button/custom-button.component';
import { auth, signInWithGoogle } from '../../firebase/firebase.utils';


class SignIn extends Component {
    constructor(props) {
        super(props);

        this.state = {
            email: '',
            password: ''
        }
    }
    handleSubmit = (event) => {
        event.preventDefault()
        const { email, password } = this.state;

        try {
            auth.signInWithEmailAndPassword(email, password);
            this.setState({ email: '', password: '' });
        } catch (error) {
            console.log(error);
        }

    }

    handleChange = (e) => {
        const { value, name } = e.target;
        this.setState({ [name]: value })
    }


    render() {
        return (
            <div className="sign-in">
                <h2>I already have an account</h2>
                <span>Sign in with your email and password</span>

                <form onSubmit={this.handleSubmit}>
                    <FormInput
                        name="email"
                        type="text"
                        value={this.state.email} required
                        handleChange={this.handleChange}
                        label="email" />

                    <FormInput
                        name="password"
                        type="password"
                        value={this.state.password} required
                        handleChange={this.handleChange}
                        label="password" />

                    <div className="buttons">
                        <CustomButton type="submit">Sign in</CustomButton>
                        <CustomButton onClick={signInWithGoogle} isGoogleSignIn>
                            {' '}
        Sign in with Google {' '}</CustomButton>

                    </div>
                </form>
            </div>
        );
    }
}

export default SignIn;