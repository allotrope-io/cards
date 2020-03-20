import LayoutFullWidth from "../components/layout-full-width";
import React, {useState, useContext} from 'react';
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
        const {name, value} = event.currentTarget;
        switch(name) {
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
            <div className="row">
                        <div className="col-md-6">
                            <p className="text-center">Sign in with:</p>
                            <button
                                onClick={signInWithGoogle}
                                className="btn btn-white-bg btn-google btn-secondary">
                                <div className="icon"></div> Google
                            </button>
                            <button onClick={signInWithGithub} className="btn btn-white-bg btn-secondary">
                                <Icon path={mdiGithub} size={1} /> &nbsp; Github
                            </button>
                            <p className="text-center signin-divider">or</p>
                            {error !== null && <div className="alert alert-warning" role="alert">{error}</div>}
                            <form>
                                <div className="form-group">
                                    <label htmlFor="userEmail">E-mail Address</label>
                                    <input
                                        type="email"
                                        placeholder="email"
                                        value={email}
                                        name="userEmail"
                                        id="userEmail"
                                        onChange={(event) => onChangeHandler(event)}
                                        className="form-control form-control-alternative"
                                    />
                                </div>
                                <div className="form-group">
                                    <label htmlFor="userPassword">Password</label>
                                    <input
                                        type="password"
                                        id="userPassword"
                                        name="userPassword"
                                        placeholder="Passphrase here (8+ chars...)"
                                        value={password}
                                        onChange={(event) => onChangeHandler(event)}
                                        className="form-control form-control-alternative"
                                    />
                                </div>
                                <button 
                                    className="btn btn-primary" 
                                    type="submit"
                                    onClick={(event) => {signInWithEmailAndPasswordHandler(event, email, password)}}
                                    >Sign in</button>
                            </form>
                        </div>
                        <div className="col-md-6">
                            <h4 className="display-2">Pace yourself.</h4>
                            <p className="lead">"Rome wasn't built in a day"</p>
                            <Link href="/signup">
                                <a className="btn btn-sm">Register</a>
                            </Link>
                            <Link href="/account/recover-password">
                                <a className="btn btn-sm">Recover Password</a>
                            </Link>
                        </div>
                    </div>
            </LayoutFullWidth>
    <style jsx>{`
    .btn-white-bg {
        background-color: #fff;
    }
    .signin-divider {
        margin-top: 15px;
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
        margin: 0 24px -5px 0;
    }
    `}</style>
        </div>
    )
}

export default SignIn;