import LayoutFullWidth from "../components/layout-full-width";
import React, {useState} from 'react';
import Icon from '@mdi/react';
import { mdiGithub } from '@mdi/js';

const SignIn = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState(null);
    const signInWithEmailAndPasswordHandler =
        (event, email, password) => {
            event.preventDefault();
        };
    const onChangeHandler = (event) => {
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
                            <button className="btn btn-google">
                                <div className="icon"></div> Google
                            </button>
                            <button className="btn">
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
                            <p>User registration coming soon</p>
                        </div>
                    </div>
            </LayoutFullWidth>
    <style jsx>{`
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
        margin: 0 24px -5px -4px;
    }
    `}</style>
        </div>
    )
}

export default SignIn;