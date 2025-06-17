export default function ClientLayout({ children }: { children: React.ReactNode }) {
  return (
    <main>
      {children}
    </main>
  );
}


// // app/client/layout.tsx

// export default function ClientLayout({ children }: { children: React.ReactNode }) {
//   return (
//     <html lang="fr">
//       <body>
//         {/* Pas de navbar non plus ici */}
//         <main>{children}</main>
//       </body>
//     </html>
//   )
// }
