import './globals.css';

import Footer from '@/components/Footer';

export const metadata = {
  viewport: 'width=device-width, initial-scale=1, maximum-scale=5',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="bg-[#020617] text-white">
        {children}
        <Footer />
      </body>
    </html>
  );
}
