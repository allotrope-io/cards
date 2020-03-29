import LayoutFullWidth from "../components/layout-full-width";
import React, { useState } from 'react';
import Icon from '@mdi/react';
import Link from 'next/link';
import { mdiGithub, mdiLoginVariant } from '@mdi/js';
import { auth, generateUserDocument } from "../components/firebase";
import Router from "next/router";

const SignIn = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [displayName, setDisplayName] = useState('');
    const [error, setError] = useState(null);
    const createUserWithEmailAndPasswordHandler =
        async (event: React.SyntheticEvent, email: string, password: string) => {
            event.preventDefault();
            let madeFBUser = false;
            try {
                const { user } = await auth.createUserWithEmailAndPassword(email, password);
                madeFBUser = true;
                generateUserDocument(user, { displayName });
            } catch (error) {
                if (madeFBUser) {
                    setError(`Error signing up with email and password, contact support with your email ${email} (Err: AUTH_YES_DB_NO)`);
                } else {
                    setError('Error signing up with email and password, please try again.');
                }
            }
            setEmail("");
            setPassword("");
            setDisplayName("");
            Router.push('/account');
        };
    const onChangeHandler = (event: any) => {
        const { name, value } = event.currentTarget;
        switch (name) {
            case 'userEmail':
                setEmail(value);
                break;
            case 'displayName':
                setDisplayName(value);
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
            <LayoutFullWidth title="Sign Up | Cram Cards">
                <div className="columns">
                    <div className="column">
                        <p className="has-text-centered">Create account with:</p>
                        <div className="buttons">
                            <button className="button btn-google">
                                <div className="icon"></div> Google
                            </button>
                            <button className="button">
                                <Icon path={mdiGithub} size={1} /> &nbsp; Github
                            </button>
                        </div>
                        <p className="has-text-centered signin-divider">or by email</p>
                        {error !== null && <div className="alert alert-warning" role="alert">{error}</div>}
                        <form>
                            <div className="field">
                                <label className="label" htmlFor="displayName">Display Name:</label>
                                <input
                                    type="text"
                                    placeholder="E.g. LearningNinja"
                                    value={displayName}
                                    name="displayName"
                                    id="displayName"
                                    onChange={(event) => onChangeHandler(event)}
                                    className="input is-floating"
                                />
                            </div>
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
                                    className="button is-link is-floating"
                                    type="submit"
                                    onClick={(event) => { createUserWithEmailAndPasswordHandler(event, email, password) }}
                                >Sign Up</button>
                                <Link href="/signin">
                                    <a className="button is-white">
                                        Login with existing account &nbsp;
                                    <Icon path={mdiLoginVariant} size={1} />
                                    </a>
                                </Link>
                            </div>
                        </form>
                    </div>
                    <div className="column">
                        <h5 className="title">Free</h5>
                        <p>Because great study tools should be.</p>
                        <h5>Easy to use</h5>
                        <p>So you can focus on using what's important: learning.</p>
                    </div>
                </div>
            </LayoutFullWidth>
            <style jsx>{`
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