import React from 'react';
import Link from 'next/link';
const links = [
    { href: 'https://allotrope.io', label: 'Allotrope' },
    { href: 'https://github.com/allotrope-io/cards', label: 'GitHub' },
].map(link => {
    link.key = `nav-link-${link.href}-${link.label}`;
    return link;
});
const Nav = () => (
    <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
        <div className="container">
            <Link href="/">
                <a className="navbar-brand">Cram Cards</a>
            </Link>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#main-navbar" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="main-navbar">
                <ul className="navbar-nav ml-lg-auto">
                    <li className="nav-item">
                        <Link href="/about">
                            <a className="nav-link">About</a>
                        </Link>
                    </li>
                    {links.map(({ key, href, label }) => (
                        <li className="nav-item" key={key}>
                            <a className="nav-link" href={href}>{label}</a>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
        {/*<style jsx>{`
      :global(body) {
        margin: 0;
        font-family: -apple-system, BlinkMacSystemFont, Avenir Next, Avenir,
          Helvetica, sans-serif;
      }
      nav {
        text-align: center;
      }
      ul {
        display: flex;
        justify-content: space-between;
      }
      nav > ul {
        padding: 4px 16px;
      }
      li {
        display: flex;
        padding: 6px 8px;
      }
      a {
        color: #067df7;
        text-decoration: none;
        font-size: 13px;
      }
    `}</style>*/}
    </nav>
);
export default Nav;