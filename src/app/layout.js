'use client';

// SCSS
import '@/_assets/styles/main.scss';
export default function RootLayout({ children }) {
  //
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
