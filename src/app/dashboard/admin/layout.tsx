export default function AdminLayout({ children }: { children: React.ReactNode }) {
  return (
    <main>
      {children}
    </main>
  );
}







// // app/admin/layout.tsx

// export default function AdminLayout({ children }: { children: React.ReactNode }) {
//   return (
//     <html lang="fr">
//       <body>
//         {/* Pas de navbar ici */}
//         <main>{children}</main>
//       </body>
//     </html>
//   )
// }
