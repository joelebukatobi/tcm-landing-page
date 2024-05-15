// Next JS
import Head from 'next/head';

// Components
import { Navbar } from '@/_components/organisms/Navbar';

// Icons
import Favicon from '@/_assets/images/icons/icon-favicon.svg';

export const metadata = {
  title: 'The Campus Manager',
  description: '...',
};
export default function Layout({ children }) {
  return (
    <>
      <div className="wrapper">
        <Navbar />
        {children}
      </div>
    </>
  );
}
