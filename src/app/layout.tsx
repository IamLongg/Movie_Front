import type { Metadata } from 'next';
import './globals.css';
import Header from '@/components/Header';

export const metadata: Metadata = {
  title: 'Thúng Phim - Xem Phim Online Miễn Phí',
  description:
    'Xem phim online miễn phí với chất lượng cao, cập nhật liên tục. Phim Âu Mỹ, Hàn Quốc, Trung Quốc, Việt Nam và nhiều nước khác.',
  keywords: 'xem phim, phim online, phim hay, phim mới, streaming',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="vi" className="h-full bg-black text-white antialiased">
      <body className="min-h-screen bg-black font-sans text-white">
        <Header />
        {children}
      </body>
    </html>
  );
}
