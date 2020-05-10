import React, { useContext, useState } from 'react';
import Link from 'next/link';
import { UserContext } from './user-provider';
import { auth } from './firebase';

export interface NavProps {
  isTraditionalPage?: boolean;
}

const Nav = (props: NavProps) => {
  const user = useContext(UserContext).user;
  const [navOpen, setNavOpen] = useState(false);

  return (
    <nav className="navbar is-link is-transparent">
      <div className={props.isTraditionalPage ? "container" : "container is-fluid"}>
        <div className="navbar-brand">
          <Link href="/">
            <a className="navbar-item">Cram Cards</a>
          </Link>

          <a className={navOpen ? "navbar-burger is-active " : "navbar-burger"} type="button"
            aria-expanded="false" aria-label="menu" onClick={() => setNavOpen(!navOpen)}>
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
          </a>
        </div>

        <div className={navOpen ? "navbar-menu is-active " : "navbar-menu"} id="main-navbar">
          <div className="navbar-start">
            <Link href="/discover">
              <a className="navbar-item">Discover</a>
            </Link>
          </div>
          <div className="navbar-end">
            {user ?
              <div className="navbar-item has-dropdown is-hoverable">
                <Link href="/account">
                  <a className="navbar-link is-arrowless">
                    <figure className="image is-24x24">
                      <img 
                        src={user.photoURL || "https://placehold.it/75x75"}
                        className="is-rounded"
                        aria-label="Account" />
                    </figure>
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