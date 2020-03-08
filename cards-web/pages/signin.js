import LayoutFullWidth from "../components/layout-full-width";
import { Component } from "react";

class SignIn extends Component {
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