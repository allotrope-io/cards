import Head from '../components/head';
import Nav from '../components/nav';
import LayoutFullWidth from '../components/layout-full-width';

export default function About() {
    return (
        <div>
            <LayoutFullWidth title="About us">
                <p>Cram Cards is an open-source spaced repetition memorization and learning tool.</p>
            </LayoutFullWidth>
        </div>
    );
}