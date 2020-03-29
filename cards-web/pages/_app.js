// This file allows for global CSS import; these files are concatenated into a single minified `.css` file in production
// import '../public/css/nucleo-icons.css';
// import '../public/css/nucleo-svg.css';
// import '../public/css/font-awesome.css';
// import '../public/css/argon-design-system.min.css';
import '../public/css/bulma.css';
import '../public/css/global.css';
import UserProvider from '../components/user-provider';


// Default export for `pages/_app.js` file
export default function CardsApp({ Component, pageProps }) {
    return (
        <UserProvider>
            <Component {...pageProps} />
        </UserProvider>
    );
}