import LayoutFullWidth from './layout-full-width';
import SignIn from '../pages/signin';
function LayoutAccount(props) {
    const user = null;
    return (
        <div>
            <LayoutFullWidth title={props.title}>
                <div className="row">
                    <div className="col-2 card">
                        <ul className="list-group nav flex-column">
                            <li className="nav-item">
                                <a className="nav-link active" href="#!">Home</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#!">History</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#!">Settings</a>
                            </li>
                        </ul>
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