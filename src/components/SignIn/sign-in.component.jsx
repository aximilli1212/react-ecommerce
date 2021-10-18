import React from 'react'
import FormInput from "../FormInput/form-input.component";

class SignIn extends React.Component {
    constructor() {
        super();

        this.state = {
            email: 'd',
            password:''
        }

        const handleChange = ()=>{

        }
    }

    render() {
        return (
            <div className='sign-in'>
                <h2> I already have an account</h2>
                <span>Sign in with your email and password.</span>
                <FormInput
                    name='email'
                    type='email'
                    label='Email'
                    value={this.state.email}
                    handleChange={this.handleChange}
                    required
                />
                <FormInput
                 name='password'
                 type='password'
                 label='Password'
                 value={this.state.password}
                 handleChange={this.handleChange}
                 required
                />
            </div>
        )
    }
}

export default SignIn
