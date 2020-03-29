import LayoutFullWidth from "../components/layout-full-width";
import React, { useState, useContext } from 'react';
import Icon from '@mdi/react';
import Link from 'next/link';
import Router from 'next/router';
import { mdiGithub } from '@mdi/js';
import { signInWithGoogle, signInWithGithub, auth } from '../components/firebase';
import { UserContext } from "../components/user-provider";

const SignIn = () => {
    const user = useContext(UserContext).user;
    if (user !== null) {
        Router.push('/account');
    }
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState(null);
    const signInWithEmailAndPasswordHandler =
        (event: React.SyntheticEvent, email: string, password: string) => {
            event.preventDefault();
            auth.signInWithEmailAndPassword(email, password).catch(error => {
                setError("Unable to sign-in. Please double-check your email and password.");
                if (error.code === "auth/internal-error") {
                    console.error("Internal server error", error);
                }
            });
        };
    const onChangeHandler = (event: any) => {
        const { name, value } = event.currentTarget;
        switch (name) {
            case 'userEmail':
                setEmail(value);
                break;
            case 'userPassword':
                setPassword(value);
                break;
            default:
                throw new Error('Action type unknown: ' + name);
        }
    }


    return (
        <div>
            <LayoutFullWidth title="Sign in to Cram Cards">
                <div className="columns">
                    <div className="column is-two-fifths">
                        <p className="has-text-centered">Sign in with:</p>
                        <div className="buttons">
                            <button
                                onClick={signInWithGoogle}
                                className="button btn-google">
                                <div className="icon"></div> Google
                            </button>
                            <button onClick={signInWithGithub} className="button">
                                <Icon path={mdiGithub} size={1} /> &nbsp; Github
                            </button>
                        </div>
                        <p className="has-text-centered signin-divider">or</p>
                        {error !== null && <div className="notification is-warning is-light" role="alert">{error}</div>}
                        <form>
                            <div className="field">
                                <label className="label" htmlFor="userEmail">E-mail Address</label>
                                <input
                                    type="email"
                                    placeholder="email"
                                    value={email}
                                    name="userEmail"
                                    id="userEmail"
                                    onChange={(event) => onChangeHandler(event)}
                                    className="input is-floating"
                                />
                            </div>
                            <div className="field">
                                <label className="label" htmlFor="userPassword">Password</label>
                                <input
                                    type="password"
                                    id="userPassword"
                                    name="userPassword"
                                    placeholder="Passphrase here (8+ chars...)"
                                    value={password}
                                    onChange={(event) => onChangeHandler(event)}
                                    className="input is-floating"
                                />
                            </div>
                            <div className="buttons">
                                <button
                                    className="button is-floating is-link"
                                    type="submit"
                                    onClick={(event) => { signInWithEmailAndPasswordHandler(event, email, password) }}
                                >Sign in</button>
                                <Link href="/account/recover-password">
                                    <a className="button is-text">Reset Password</a>
                                </Link>
                            </div>
                        </form>
                    </div>
                    <div className="column">
                        <div id="tsparticles">
                            <p className="title title-rome">"Rome wasn't built in a day"</p>
                            <div className="buttons">
                                <Link href="/signup">
                                    <a className="button is-link is-light">Register</a>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </LayoutFullWidth>
            <style jsx>{`
    .title-rome {
        margin-top: 65px;
    }
    .signin-divider {
        margin-top: 15px;
        position: relative;
        margin-bottom: 15px;
    }
    .signin-divider::before {
        content: ' ';
        background-color: #fff;
        height: 15px;
        width: 35px;
        position: absolute;
        margin-top: 5px;
        margin-left: -10px;
        z-index: -1;
    }
    .signin-divider::after {
        content: ' ';
        width: 90%;
        background-color: #eee;
        height: 1px;
        position: absolute;
        left: 5%;
        margin-top: 13px;
        z-index: -2;
    }

    .btn-google .icon {
        background: url('imgs/icon-google.svg');
        max-height: 18px;
        max-width: 18px;
        margin: 0 24px 0 0;
    }
    `}</style>
        </div>
    )
}

export default SignIn;