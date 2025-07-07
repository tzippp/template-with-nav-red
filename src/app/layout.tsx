import '../styles/global.css';
import Navbar from './components/Navbar';

export const metadata = {
  title: 'Red Carpet Luxury Spa',
  description: 'Permanent makeup and beauty services in Rockland County',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="bg-white text-black font-light min-h-screen">
        <Navbar />
        <div className="pt-20">{children}</div>
      </body>
    </html>
  );
}
