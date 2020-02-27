import Link from 'next/link';
import Head from './head';
import Nav from './nav';
import Foot from './foot';

function TemplateFullWidth(props) {
    let containingDivClassNames = '';
    if (props.stretch != "true") {
        containingDivClassNames = 'container padTop';
    }

    return (
        <div>
            <Head title={props.title} />
            <Nav />
            <div className={containingDivClassNames}>
                {props.children}
            </div>
            <Foot />
            <style jsx>{`
            .padTop {
                padding-top: 100px;
            }
            `}</style>
        </div>
    )
}

export default TemplateFullWidth;