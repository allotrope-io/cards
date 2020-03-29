import React from 'react';
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
                <div className="row">
                    <div className="col-sm footer-nav">
                        <h6>NAV</h6>
                        {links.map(({ key, href, label }) => (
                            <li key={key}>
                                <a href={href}>{label}</a>
                            </li>
                        ))}
                    </div>
                    <div className="col-sm">

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