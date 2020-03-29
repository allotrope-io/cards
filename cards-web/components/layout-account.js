import LayoutFullWidth from './layout-full-width';
import SignIn from '../pages/signin';
function LayoutAccount(props) {
    const user = null;
    return (
        <div>
            <LayoutFullWidth title={props.title}>
                <div className="columns">
                    <div className="column is-one-fifth">
                        <aside className="menu">
                            <p className="menu-label">
                                Account
                            </p>
                            <ul className="menu-list">
                                <li>
                                    <a className="nav-link active" href="#!">Profile</a>
                                </li>
                                <li>
                                    <a className="nav-link" href="#!">History</a>
                                </li>
                                <li>
                                    <a className="nav-link" href="#!">Settings</a>
                                </li>
                            </ul>
                        </aside>
                    </div>
                    <div className="col">
                        {props.children}
                    </div>
                </div>
            </LayoutFullWidth>
        </div>
    )
}

export default LayoutAccount;