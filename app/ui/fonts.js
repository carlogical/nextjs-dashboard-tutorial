import { Noto_Sans, Lusitana, Inter } from 'next/font/google';
export const notoSans = Noto_Sans({ subsets: ['latin'] });
export const inter = Inter({ subsets: ['latin'] });
export const lusitana = Lusitana({
  weight: ['400', '700'],
  subsets: ['latin'],
});
