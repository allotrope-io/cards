import LayoutAccount from "../../components/layout-account";
import { UserContext } from "../../components/user-provider";
import { useContext } from "react";
import { auth } from "../../components/firebase";
import { useRouter } from "next/router";
import LayoutFullWidth from "../../components/layout-full-width";

const Account = () => {
    const user = useContext(UserContext).user;
    if (user === null) {
        if (typeof window === 'undefined') {
            return (<LayoutFullWidth title="Account | Cram Cards"></LayoutFullWidth>)
        } else {
            useRouter().push('/signin');
            return (<div></div>);
        }
    }
    const {photoURL, displayName, email} = user;
    return (
        <div>
            <LayoutAccount title="Your Profile">
                <div className="columns">
                    <div className="column">
                        <img style={{ maxWidth: '75px', maxHeight: '75px'}}
                            src={photoURL || "https://placehold.it/75x75"}
                            className="rounded-circle" />
                    </div>
                    <div className="column">
                        <p>{displayName} - {email}</p>
                        <button className="button" onClick = {() => {auth.signOut()}}>Sign out</button>
                    </div>
                </div>

            </LayoutAccount>
        </div>
    )
}

export default Account;