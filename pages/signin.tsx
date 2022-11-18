import React, { useState } from 'react';
import Router from 'next/router';
import Layout from '../components/Layout';
import { signIn } from 'next-auth/react';

const SignIn: React.FC = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const submitData = async (e: React.SyntheticEvent) => {
        e.preventDefault();
        const signInResult = await signIn('credentials', {
            redirect: false,
            email,
            password,
        });
        if (signInResult?.ok) {
            await Router.push('/');
        } else {
            alert(`Signin failed. Please check your email and password.`);
            console.error('Signin failed:', signInResult?.error);
        }
    };

    return (
        <Layout>
            <div className="page">
                <form onSubmit={submitData}>
                    <h1>Signin</h1>
                    <input
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="Email address"
                        type="text"
                        value={email}
                    />
                    <input
                        onChange={(e) => setPassword(e.target.value)}
                        placeholder="Your password"
                        type="password"
                        value={password}
                    />
                    <input
                        disabled={!email || !password}
                        type="submit"
                        value="Signin"
                    />
                    <a
                        className="back"
                        href="#"
                        onClick={() => Router.push('/')}
                    >
                        or Cancel
                    </a>
                </form>
                <p>
                    {"Don't have an account yet? "}
                    <a
                        className="signup"
                        onClick={() => Router.push('/signup')}
                    >
                        Signup now
                    </a>
                    .
                </p>
            </div>
            <style jsx>{`
                .page {
                    background: white;
                    padding: 3rem;
                    display: flex;
                    flex-direction: column;
                    justify-content: center;
                    align-items: center;
                }
                form {
                    max-width: 1024px;
                }
                input[type='text'],
                input[type='password'] {
                    width: 100%;
                    padding: 0.5rem;
                    margin: 0.5rem 0;
                    border-radius: 0.25rem;
                    border: 0.125rem solid rgba(0, 0, 0, 0.2);
                }
                input[type='submit'] {
                    background: #ececec;
                    border: 0;
                    padding: 1rem 2rem;
                    cursor: pointer;
                }
                input[type='submit']:disabled {
                    cursor: not-allowed;
                }
                .signup {
                    cursor: pointer;
                    text-decoration: underline;
                }
                .back {
                    margin-left: 1rem;
                }
            `}</style>
        </Layout>
    );
};

export default SignIn;
