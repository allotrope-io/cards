import React from 'react';
import Link from 'next/link';
import Icon from '@mdi/react';
import { mdiAccountCircle } from '@mdi/js';

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
                    <li className="nav-item">
                      <Link href="/signin">
                        <a className="nav-link nav-link-icon">
                          <Icon path={mdiAccountCircle} size={1} color={'#fff'} />
                          <span className="nav-link-inner--text d-lg-none">Sign in</span>
                        </a>
                      </Link>
                    </li>
                </ul>
            </div>
        </div>
<style jsx>{`
.nav-link-icon:hover {
  opacity: 0.5;
}
`}</style>
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