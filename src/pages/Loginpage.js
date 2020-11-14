import React, { useState } from 'react';
import { useMutation } from '@apollo/react-hooks';
import { Link } from 'react-router-dom';
import { LOGIN_USER } from '../utils/mutations';

function LoginPage(props) {
    const [formState, setFormState] = useState({ email: '', password: ''})
    const [login, { error }] = useMutation(LOGIN_USER);

    const handleFormSubmit = async event => {
        event.preventDefault();
        try {
            const mutationResponse = await login({ variales: { email: formState.email, password: formState.password } })
            const token = mutationResponse.data.login.token;
            Auth.login(token);
        } catch(e) {
            console.log(e)
        }
    };

    const handleChange = event => {
        const { name, value } = event.target;
        setFormState({
            ...formState,
            [name]: value
        });
    };

    return (
        <div>
            <Link to="/signup">
                Go to Signup
            </Link>

            <h2>Login</h2>
            <form onSubmit={handleFormSubmit}>
                <div>
                    <label htmlFor="email">Email address:</label>
                    <input
                    placeholder="Youremail@email.com"
                    name="email"
                    type="email"
                    id="email"
                    onChange={handleChange}
                    />
                </div>
                <div>
                    <label htmlFor="pwd">Password:</label>
                    <input
                    placeholder="***********"
                    name="password"
                    type="password"
                    id="pwd"
                    onChange={handleChange}
                    />
                </div>
                {
                    error ? <div>
                        <p>The provided credentials are incorrect. Please try again or signup</p>
                    </div> : null
                }
                <div>
                    <button type="submit">
                        Submit
                    </button>
                </div>
            </form>
        </div>
    );
}

export default LoginPage;