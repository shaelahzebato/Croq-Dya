// 'use client';

// import { usePathname } from 'next/navigation';
// import Navbar from '@/components/Navbar';
// import Footer from '@/components/Footer';

// export default function LayoutWrapper({ children }: { children: React.ReactNode }) {
//   const pathname = usePathname();

//   // Chemins où navbar et footer ne doivent PAS s'afficher
//   const hideLayout = pathname.startsWith('/dashboard/client') || pathname.startsWith('/dashboard/admin');

//   return (
//     <>
//       {!hideLayout && <Navbar />}
//       {children}
//       {!hideLayout && <Footer />}
//     </>
//   );
// }
