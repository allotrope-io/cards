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
    <nav class="navbar navbar-expand-lg navbar-dark bg-default">
        <div class="container">
            <Link href="/">
                <a class="navbar-brand">Cram Cards</a>
            </Link>
            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#main-navbar" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="main-navbar">
                <ul class="navbar-nav ml-lg-auto">
                    <li class="nav-item">
                        <Link href="/about">
                            <a class="nav-link">About</a>
                        </Link>
                    </li>
                    {links.map(({ key, href, label }) => (
                        <li class="nav-item" key={key}>
                            <a class="nav-link" href={href}>{label}</a>
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