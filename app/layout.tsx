import './globals.css';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: '에어시트 코리아',
  description: '라이딩 승차감을 혁신하는 자전거 안장 서스펜션 전문 브랜드, 에어시트(Air Seat) 코리아 공식 몰입니다.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ko">
      <body className="bg-white text-black antialiased">
        <header className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-gray-100">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
            <a href="/" className="font-black text-lg tracking-tighter text-black">
              AIR SEAT KOREA
            </a>
            <nav className="flex items-center gap-6 text-sm font-semibold">
              <a href="/dealers" className="text-gray-600 hover:text-black transition-colors">대리점 찾기</a>
              <a href="/supporters" className="text-gray-600 hover:text-black transition-colors">서포터즈 신청</a>
            </nav>
          </div>
        </header>
        {children}
      </body>
    </html>
  );
}
