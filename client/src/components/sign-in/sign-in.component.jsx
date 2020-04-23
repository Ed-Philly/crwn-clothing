import React, { useState } from 'react';
import FormInput from '../../components/form-input/form-input.componet';
import './sign-in.style.scss';
import CustomButton from '../../components/custom-button/custom-button.component';
import { googleSignInStart, emailSignInStart } from '../../redux/user/user.action'
import { connect } from 'react-redux'

const SignIn = ({ emailSignInStart, googleSignInStart }) => {
    const [userCredentials, setCredentials] = useState({ email: '', password: '' });
    const { email, password } = userCredentials;

    const handleSubmit = (event) => {
        event.preventDefault()
        emailSignInStart(email, password);

    }

    const handleChange = (e) => {
        const { value, name } = e.target;
        setCredentials({ ...userCredentials, [name]: value })
    }
    return (
        <div className="sign-in">
            <h2>I already have an account</h2>
            <span>Sign in with your email and password</span>

            <form onSubmit={handleSubmit}>
                <FormInput
                    name="email"
                    type="text"
                    value={email} required
                    handleChange={handleChange}
                    label="email" />

                <FormInput
                    name="password"
                    type="password"
                    value={password} required
                    handleChange={handleChange}
                    label="password" />

                <div className="buttons">
                    <CustomButton type="submit">Sign in</CustomButton>
                    <CustomButton type="button" onClick={googleSignInStart} isGoogleSignIn>
                        {' '}
        Sign in with Google {' '}</CustomButton>

                </div>
            </form>
        </div>
    );
}
const mapDispatchToProps = dispatch => ({
    googleSignInStart: () => dispatch(googleSignInStart()),
    emailSignInStart: (email, password) => dispatch(emailSignInStart({ email, password }))
})
export default connect(null, mapDispatchToProps)(SignIn);