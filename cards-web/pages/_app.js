// This file allows for global CSS import; these files are concatenated into a single minified `.css` file in production
import '../public/css/bulma.css';
import '../public/css/global.css';
import UserProvider from '../components/user-provider';
import { Scrollbars } from 'react-custom-scrollbars';
import BodyScrollbar from '../components/helpers/body-scrollbar';

export default function CardsApp({ Component, pageProps }) {
    return (
        <UserProvider>
            <BodyScrollbar>
                <Component {...pageProps} />
            </BodyScrollbar>
        </UserProvider>
    );
}