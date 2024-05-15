'use client';
// React
import { useState } from 'react';

// Next JS
import Image from 'next/image';

// Images
import Logo from '@/_assets/images/icons/logo.svg';
import IconMenu from '@/_assets/images/icons/icon-menu.svg';
import IconClose from '@/_assets/images/icons/icon-close.svg';
import Link from 'next/link';

export const Navbar = () => {
  const [open, setOpen] = useState();
  return (
    <nav className={open ? `navbar fixed w-full h-full items-start` : `navbar relative items-center`}>
      <div className="navbar-logo">
        <Image className="d-block d-lg-none" src={Logo} alt="" />
        <h4>The Campus Manager</h4>
      </div>
      <div className="navbar-menu" onClick={() => setOpen(!open)}>
        <Image className="d-block d-lg-none" src={open ? IconClose : IconMenu} alt="" />
      </div>

      <ul className={open ? `navbar-link flex` : `navbar-link hidden lg:flex`}>
        <li className="navbar-item">
          <Link href="#">Home</Link>
        </li>
        <li className="navbar-item">
          <Link href="#">Product</Link>
        </li>
        <li className="navbar-item">
          <Link href="#">About</Link>
        </li>
        <li className="navbar-item">
          <Link href="#">Contact</Link>
        </li>
      </ul>
    </nav>
  );
};
