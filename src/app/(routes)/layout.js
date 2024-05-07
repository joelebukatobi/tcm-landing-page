import { Navbar } from '@/_components/organisms/Navbar';
export default function Layout({ children }) {
  return (
    <div className="wrapper">
      <Navbar />
      {children}
    </div>
  );
}
