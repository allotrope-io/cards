import Head from './head';
import Nav from './nav';
import Foot from './foot';
import Footer from './footer';

export interface LayoutFullWidthProps {
    stretch?: boolean;
    isTraditionalPage?: boolean;
    title: string;
    children?: any;
}

function LayoutFullWidth(props: LayoutFullWidthProps) {
    let containingDivClassNames = '';
    if (props.stretch != true) {
        containingDivClassNames = 'container padTop padBottom';
    }
    if (!props.isTraditionalPage) {
        containingDivClassNames = containingDivClassNames + ' is-fluid';
    }

    return (
        <div>
            <Head title={props.title} />
            <Nav />
            <div className={containingDivClassNames}>
                {props.children}
            </div>
            {props.isTraditionalPage && <Footer />}
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