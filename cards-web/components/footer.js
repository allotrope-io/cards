import React from 'react';
import Link from 'next/link';

const links = [
    { href: 'https://allotrope.io', label: 'Allotrope' },
    { href: 'https://github.com/allotrope-io/cards', label: 'GitHub' },
].map(link => {
    link.key = `nav-link-${link.href}-${link.label}`;
    return link;
});

function Footer(props) {
    return (
        <div className="footer">
            <div className="container">
                <div className="columns">
                    <div className="column is-one-fifth footer-nav">
                        <h6>LINKS</h6>
                        <li>
                            <Link href="/about">
                                <a>About</a>
                            </Link>
                        </li>
                        {links.map(({ key, href, label }) => (
                            <li key={key}>
                                <a href={href}>{label}</a>
                            </li>
                        ))}
                    </div>
                    <div className="column">
                        <h6>SPACED REPETITION</h6>
                        <p>
                            Looking to integrate your learning with your memorization? Cram cards is
                            the most seamless workflow to support you.
                        </p>
                    </div>
                </div>
            </div>
            <style jsx>{`
                .footer li {
                    list-style: none;
                } 
            `}</style>
        </div>
    )
}

export default Footer;