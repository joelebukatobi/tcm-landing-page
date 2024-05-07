// Next JS
import Image from 'next/image';

// Components
import { Container } from '@/_components/molecules/Container';

// Images
import Logo from '@/_assets/images/icons/logo.svg';
import IconMenu from '@/_assets/images/icons/icon-menu.svg';
import Link from 'next/link';

export const Navbar = () => {
  return (
    <Container>
      <nav className="navbar">
        <div className="navbar-logo">
          <Image className="d-block d-lg-none" src={Logo} alt="" />
          <h4>The Campus Manager</h4>
        </div>
        <div className="navbar-menu">
          <Image className="d-block d-lg-none" src={IconMenu} alt="" />
        </div>
        <ul className="navbar-link">
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
    </Container>
  );
};
