import { useState } from "react";
import LayoutFullWidth from "../../components/layout-full-width";
import { auth } from "../../components/firebase";

const PasswordReset = () => {
    const [email, setEmail] = useState("");
    const [emailHasBeenSent, setEmailHasBeenSent] = useState(false);
    const [error, setError] = useState(null);

    const onChangeHandler = (event: any) => {
        const { name, value } = event.currentTarget;
        switch (name) {
            case "userEmail":
                setEmail(value);
                break;
            default:
                throw Error("Unknown event type given: " + name);
        }
    }

    const sendResetEmail = (event: any) => {
        event.preventDefault();
        
        const emailValid = email.match(/^([\w.%+-]+)@([\w-]+\.)+([\w]{2,})$/i);
        if (emailValid) {
            if (emailHasBeenSent) {
                setError("You've recently requested an email reset, please wait...");
            } else {
                auth
                .sendPasswordResetEmail(email)
                .then(() => {
                    sentAnEmail();
                })
                .catch(error => {
                    if (error.code === 'auth/user-not-found') {
                        sentAnEmail();
                    } else {
                        setError(`Error resetting password. (${error.message})`);
                    }
                });
            }
        } else {
            setError("Please enter a valid email address.");
        }
    };

    const sentAnEmail = () => {
        setError(null);
        setEmailHasBeenSent(true);
        setTimeout(() => { setEmailHasBeenSent(false)}, 10000);
    }

    return (
        <LayoutFullWidth title="Reset Password">
            <div className="columns">
                <div className="column is-one-third">
                    <h3 className="title">Reset your Password</h3>
                    <form>
                        {emailHasBeenSent && (
                            <div className="notification">
                                If this email matches an email in our records, a password reset email will be sent.
                            </div>
                        )}
                        {error !== null && (
                            <div className="notification is-danger is-light">
                                {error}
                            </div>
                        )}
                        <div className="field">
                            <label className="label" htmlFor="userEmail">E-mail Address</label>
                            <input
                                type="email"
                                placeholder="email"
                                value={email}
                                name="userEmail"
                                onChange={onChangeHandler}
                                className="input is-floating"
                            />
                        </div>
                        <button onClick={sendResetEmail} className="button is-link">
                            Send Reset Link
                        </button>
                    </form>
                </div>
            </div>
        </LayoutFullWidth>
    )
}

export default PasswordReset;