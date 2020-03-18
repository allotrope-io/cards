import LayoutFullWidth from "../components/layout-full-width";
import React, {useState} from 'react';
import Icon from '@mdi/react';
import { mdiGoogle, mdiGithub } from '@mdi/js';

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
                            <button className="btn">
                                <Icon path={mdiGoogle} size={1} /> Google
                            </button>
                            <button className="btn">
                                <Icon path={mdiGithub} size={1} />Github
                            </button>
                            <p className="text-center">or</p>
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
        </div>
    )
}

/// @TODO: remove this old code
class SignInOld extends React.Component {
    constructor(props) {
        super(props);
        this.state = { username: "", password: "", error: "" };
        this.handleChangeUsername = this.handleChangeUsername.bind(this);
        this.handleChangePassword = this.handleChangePassword.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    async handleSubmit(event) {
        event.preventDefault();
        console.log('handleSubmit called! Username ' + this.state.username);
    }

    handleChangeUsername(event) {
        this.setState({ username: event.target.value });
    }

    handleChangePassword(event) {
        this.setState({ password: event.target.value });
    }

    render() {
        return (
            <div>
                <LayoutFullWidth title="Sign in to Cram Cards">
                    <div className="row">
                        <div className="col-md-6">
                            <form onSubmit={this.handleSubmit}>
                                <div className="form-group">
                                    <label htmlFor="email">E-mail Address</label>
                                    <input
                                        type="text"
                                        id="email"
                                        placeholder="email"
                                        value={this.state.username}
                                        onChange={this.handleChangeUsername}
                                        className="form-control form-control-alternative"
                                    />
                                </div>
                                <div className="form-group">
                                    <label htmlFor="pw">Password</label>
                                    <input
                                        type="password"
                                        id="pw"
                                        placeholder="Passphrase here (8+ chars...)"
                                        value={this.state.password}
                                        onChange={this.handleChangePassword}
                                        className="form-control form-control-alternative"
                                    />
                                </div>
                                <button className="btn btn-primary" type="submit">Sign in</button>
                            </form>
                        </div>
                        <div className="col-md-6">
                            <p>User registration coming soon</p>
                        </div>
                    </div>

                </LayoutFullWidth>
            </div>
        )
    }
}

export default SignIn;