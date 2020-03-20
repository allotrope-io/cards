import React, { useContext } from 'react';
import Link from 'next/link';
import Icon from '@mdi/react';
import { mdiAccountCircle } from '@mdi/js';
import { UserContext } from './user-provider';

const Nav = () => {
  const user = useContext(UserContext).user;
  return (
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
              {user ?
                <Link href="/account">
                  <a className="nav-link nav-link-icon">
                    <img style={{ width: '23px', height: '23px'}} 
                    src={user.photoURL || "https://placehold.it/75x75"} 
                    className="rounded-circle" />
                    <span className="nav-link-inner--text d-lg-none">My Account</span>
                  </a>
                </Link>
                :
                <Link href="/signin">
                  <a className="nav-link nav-link-icon">
                    <Icon path={mdiAccountCircle} size={1} color={'#fff'} />
                    <span className="nav-link-inner--text d-lg-none">Sign in</span>
                  </a>
                </Link>}
            </li>
          </ul>
        </div>
      </div>
      <style jsx>{`
      .nav-link-icon:hover {
      opacity: 0.5;
      }
      `}</style>
    </nav>
  )
}
export default Nav;