// // app/dashboard/page.tsx ou components/ContentGrid.tsx
// "use client";

// import React from "react";

// const orders = [
//   { id: "#CDY-156", client: "Marie Dubois", total: "67,80€", status: "En attente" },
//   { id: "#CDY-155", client: "Thomas Martin", total: "28,50€", status: "Confirmée" },
//   { id: "#CDY-154", client: "Sophie Laurent", total: "32,90€", status: "Prête" },
//   { id: "#CDY-153", client: "Pierre Durand", total: "49,80€", status: "Livrée" },
// ];

// const statusClasses = {
//   "En attente": "bg-yellow-100 text-yellow-800",
//   "Confirmée": "bg-cyan-100 text-cyan-800",
//   "Prête": "bg-green-100 text-green-800",
//   "Livrée": "bg-rose-100 text-rose-800",
// };

// export default function DashboardContent() {
//   return (
//     <section className="max-w-6xl mx-auto px-6 py-14">
//       <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 content-grid">
//         {/* Table des commandes */}
//         <div className="lg:col-span-2 bg-white rounded-2xl p-6 shadow-md">
//           <h2 className="text-3xl text-[#FF69B4] font-dancing mb-6">📦 Commandes Récentes</h2>
//           <div className="overflow-x-auto">
//             <table className="min-w-full orders-table">
//               <thead>
//                 <tr className="text-left border-b-2 border-[#FFF8DC]">
//                   <th className="p-3 text-[#8B4513] font-semibold">Commande</th>
//                   <th className="p-3 text-[#8B4513] font-semibold">Client</th>
//                   <th className="p-3 text-[#8B4513] font-semibold">Total</th>
//                   <th className="p-3 text-[#8B4513] font-semibold">Statut</th>
//                 </tr>
//               </thead>
//               <tbody>
//                 {orders.map((order) => (
//                   <tr key={order.id} className="border-b border-[#FFF8DC]">
//                     <td className="p-3 font-semibold text-[#FF69B4]">{order.id}</td>
//                     <td className="p-3 text-[#8B4513]">{order.client}</td>
//                     <td className="p-3 text-[#8B4513] font-bold">{order.total}</td>
//                     <td className="p-3">
//                       <span
//                         className={`text-sm font-semibold py-1 px-3 rounded-full ${statusClasses[order.status]}`}
//                       >
//                         {order.status}
//                       </span>
//                     </td>
//                   </tr>
//                 ))}
//               </tbody>
//             </table>
//           </div>
//         </div>

//         {/* Actions rapides */}
//         <div className="bg-white rounded-2xl p-6 shadow-md quick-actions">
//           <h2 className="text-3xl text-[#FF69B4] font-dancing mb-6">⚡ Actions Rapides</h2>

//           <div className="space-y-4">
//             <div className="flex items-center gap-4 p-4 rounded-xl bg-[#FFF0F5] hover:bg-pink-50 transition">
//               <div className="text-2xl">➕</div>
//               <div>
//                 <h4 className="text-lg font-bold text-[#8B4513]">Ajouter un Produit</h4>
//                 <p className="text-sm text-[#8B4513]">Créer une nouvelle pâtisserie</p>
//               </div>
//             </div>

//             <div className="flex items-center gap-4 p-4 rounded-xl bg-[#FFF0F5] hover:bg-pink-50 transition">
//               <div className="text-2xl">📦</div>
//               <div>
//                 <h4 className="text-lg font-bold text-[#8B4513]">Gérer les Commandes</h4>
//                 <p className="text-sm text-[#8B4513]">Voir toutes les commandes</p>
//               </div>
//             </div>

//             <div className="flex items-center gap-4 p-4 rounded-xl bg-[#FFF0F5] hover:bg-pink-50 transition">
//               <div className="text-2xl">👥</div>
//               <div>
//                 <h4 className="text-lg font-bold text-[#8B4513]">Clients Inscrits</h4>
//                 <p className="text-sm text-[#8B4513]">Gérer la base clients</p>
//               </div>
//             </div>

//             <div className="flex items-center gap-4 p-4 rounded-xl bg-[#FFF0F5] hover:bg-pink-50 transition">
//               <div className="text-2xl">⚙️</div>
//               <div>
//                 <h4 className="text-lg font-bold text-[#8B4513]">Paramètres</h4>
//                 <p className="text-sm text-[#8B4513]">Configuration boutique</p>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// }










// // "use client"

// // import { Badge } from "@/components/ui/badge"
// // import { ScrollArea } from "@/components/ui/scroll-area"

// // const commandes = [
// //   { id: "#CDY-156", client: "Marie Dubois", total: "67,80€", statut: "En attente" },
// //   { id: "#CDY-155", client: "Thomas Martin", total: "28,50€", statut: "Confirmée" },
// //   { id: "#CDY-154", client: "Sophie Laurent", total: "32,90€", statut: "Prête" },
// //   { id: "#CDY-153", client: "Pierre Durand", total: "49,80€", statut: "Livrée" },
// // ]

// // const getBadgeVariant = (statut: string) => {
// //   switch (statut) {
// //     case "En attente":
// //       return "outline"
// //     case "Confirmée":
// //       return "default"
// //     case "Prête":
// //       return "secondary"
// //     case "Livrée":
// //       return "success"
// //     default:
// //       return "outline"
// //   }
// // }

// // export default function CommandeTable() {
// //   return (
// //     <ScrollArea className="w-full bg-white rounded-md p-6 text-[#8B4513]">
// //       <div className="min-w-[600px]">
// //         <h2 className="dancing_script text-4xl text-[#FF69B4] font-bold mb-6">📦 Commandes Récentes</h2>
// //         <table className="w-full text-left text-sm">
// //           <thead className="bg-white text-[#8B4513]">
// //             <tr>
// //               <th className="p-4">Commande</th>
// //               <th className="p-4">Client</th>
// //               <th className="p-4">Total</th>
// //               <th className="p-4">Statut</th>
// //             </tr>
// //           </thead>
// //           <tbody>
// //             {commandes.map((commande, index) => (
// //               <tr key={index} className="border-t border-pink-100 hover:bg-pink-50 transition">
// //                 <td className="p-4 font-medium text-[#FF69B4]">{commande.id}</td>
// //                 <td className="p-4">{commande.client}</td>
// //                 <td className="p-4">{commande.total}</td>
// //                 <td className="p-4">
// //                   <Badge variant={getBadgeVariant(commande.statut)}>
// //                     {commande.statut}
// //                   </Badge>
// //                 </td>
// //               </tr>
// //             ))}
// //           </tbody>
// //         </table>
// //       </div>
// //     </ScrollArea>
// //   )
// // }