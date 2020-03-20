import React, { createContext } from 'react';
import { auth, generateUserDocument } from './firebase';
import { User } from 'firebase';
const initialContext: { user: User; } = {
    user: null
}
export const UserContext = createContext(initialContext);

class UserProvider extends React.Component {
    state: {
        user: User;
    } = {
        user: null
    };

    componentDidMount = async () => {
        auth.onAuthStateChanged(async userAuth => {
            const user = await generateUserDocument(userAuth);
            this.setState({ user: userAuth });
        });
    }

    render() {
        return (
            <UserContext.Provider value={this.state}>
                {this.props.children}
            </UserContext.Provider>
        );
    }
}
export default UserProvider;