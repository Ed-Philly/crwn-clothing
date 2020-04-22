import React, { Component } from 'react';
import FormInput from '../../components/form-input/form-input.componet';
import './sign-in.style.scss';
import CustomButton from '../../components/custom-button/custom-button.component';
import { googleSignInStart, emailSignInStart } from '../../redux/user/user.action'
import { connect } from 'react-redux'

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
        const { emailSignInStart } = this.props

        emailSignInStart(email, password);

        this.setState({ email: '', password: '' });

    }

    handleChange = (e) => {
        const { value, name } = e.target;
        this.setState({ [name]: value })
    }


    render() {
        const { googleSignInStart } = this.props
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
                        <CustomButton type="button" onClick={googleSignInStart} isGoogleSignIn>
                            {' '}
        Sign in with Google {' '}</CustomButton>

                    </div>
                </form>
            </div>
        );
    }
}
const mapDispatchToProps = dispatch => ({
    googleSignInStart: () => dispatch(googleSignInStart()),
    emailSignInStart: (email, password) => dispatch(emailSignInStart({ email, password }))
})
export default connect(null, mapDispatchToProps)(SignIn);