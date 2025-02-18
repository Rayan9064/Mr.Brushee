import { Nunito } from 'next/font/google';
import './globals.css'; // Import global styles

const nunito = Nunito({
  subsets: ['latin'],
  variable: '--font-nunito', // Define CSS variable
});

export const metadata = {
  title: 'Mr. Brushee - Clean Shoes, Anywhere',
  description: 'Portable shoe cleaning solution for fresh kicks anywhere.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={nunito.variable}>
      <body>
        {children}
      </body>
    </html>
  );
}
