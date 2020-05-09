import React, { useContext } from 'react';
import Link from 'next/link';
import { UserContext } from './user-provider';
import { auth } from './firebase';

const Nav = () => {
  const user = useContext(UserContext).user;
  return (
    <nav className="navbar is-link is-transparent">
      <div className="container">
        <div className="navbar-brand">
          <Link href="/">
            <a className="navbar-item">Cram Cards</a>
          </Link>

          <button className="navbar-burger burger" type="button"
            data-toggle="collapse"
            data-target="main-navbar"
            aria-controls="navbarSupportedContent"
            aria-expanded="false" aria-label="menu">
            <span className="navbar-toggler-icon"></span>
          </button>
        </div>

        <div className="navbar-menu" id="main-navbar">
          <div className="navbar-start">
            <Link href="/about">
              <a className="navbar-item">About</a>
            </Link>
          </div>
          <div className="navbar-end">
            {user ?
              <div className="navbar-item has-dropdown is-hoverable">
                <Link href="/account">
                  <a className="navbar-link is-arrowless">
                    <img style={{ width: '23px', height: '23px' }}
                      src={user.photoURL || "https://placehold.it/75x75"}
                      className="rounded-circle"
                      aria-label="Account" />
                  </a>
                </Link>
                <div className="navbar-dropdown is-right is-boxed">
                  <Link href="/account">
                    <a className="navbar-item">My Account</a>
                  </Link>
                  <a className="navbar-item" onClick={() => { auth.signOut() }}>Sign out</a>
                </div>
              </div>
              :
              <div className="navbar-item buttons">
                <Link href="/signin">
                  <a className="button is-link is-inverted is-outlined">
                    Sign in
                  </a>
                </Link>
                <Link href="/signup">
                  <a className="button is-white">
                    <strong>Join</strong>
                  </a>
                </Link>
              </div>
            }
          </div>
        </div>
      </div>
      <style jsx>{`
      .navbar.is-link.is-transparent {
        background-color: #6273e8;
      }
      `}</style>
    </nav >
  )
}
export default Nav;