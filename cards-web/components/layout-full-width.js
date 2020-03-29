import Head from './head';
import Nav from './nav';
import Foot from './foot';
import Footer from './footer';

function LayoutFullWidth(props) {
    let containingDivClassNames = '';
    if (props.stretch != "true") {
        containingDivClassNames = 'container padTop padBottom';
    }

    return (
        <div>
            <Head title={props.title} />
            <Nav />
            <div className={containingDivClassNames}>
                {props.children}
            </div>
            <Footer />
            <Foot />
            <style jsx>{`
            .padTop {
                padding-top: 100px;
            }
            .padBottom {
                padding-bottom: 100px;
            }
            `}</style>
        </div>
    )
}

export default LayoutFullWidth;