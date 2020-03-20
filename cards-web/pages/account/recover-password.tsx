import { useState } from "react";
import LayoutFullWidth from "../../components/layout-full-width";
import { auth } from "../../components/firebase";

const PasswordReset = props => {
    const [email, setEmail] = useState("");
    const [emailHasBeenSent, setEmailHasBeenSent] = useState(false);
    const [error, setError] = useState(null);
    const onChangeHandler = event => {
        const { name, value } = event.currentTarget;
        switch (name) {
            case "userEmail":
                setEmail(value);
                break;
            default:
                throw Error("Unknown event type given: " + name);
        }
    }
    const sendResetEmail = event => {
        event.preventDefault();
        auth
            .sendPasswordResetEmail(email)
            .then(() => {
                setEmailHasBeenSent(true);
                setTimeout(() => {setEmailHasBeenSent(false)}, 3000);
            })
            .catch(() => {
                setError("Error resetting password");
            });
    };
    return (
        <LayoutFullWidth title="Reset Password">
            <div className="row">
                <div className="col-6">
                    <h3>Reset your Password</h3>
                    <form>
                        {emailHasBeenSent && (
                            <div className="alert alert-default">
                                If this email matches an email in our records, a password reset will be sent.
                            </div>
                        )}
                        {error !== null && (
                            <div className="alert alert-warning">
                                {error}
                            </div>
                        )}
                        <div className="form-group">
                            <label htmlFor="userEmail">E-mail Address</label>
                            <input
                                type="email"
                                placeholder="email"
                                value={email}
                                name="userEmail"
                                onChange={onChangeHandler}
                                className="form-control form-control-alternative"
                            />
                        </div>
                        <button className="btn btn-primary">
                            Send Reset Link
                        </button>
                    </form>
                </div>
            </div>
        </LayoutFullWidth>
    )
}

export default PasswordReset;