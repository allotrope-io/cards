import Link from 'next/link';
import Head from './head';
import Nav from './nav';
import Foot from './foot';

const TemplateFullWidth = props => (
    <div>
        <Head title={props.title} />
        <Nav />
        <div className={props.stretch ? '' : 'container'}>
            {props.children}
        </div>
        <Foot />
    </div>
);

export default TemplateFullWidth;