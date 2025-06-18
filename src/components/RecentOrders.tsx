"use client"

import { Box } from "lucide-react"
import React from "react"

type OrderStatus = "En attente" | "Confirmée" | "Prête" | "Livrée"

type Order = {
  id: string
  client: string
  total: string
  status: OrderStatus
}

const orders: Order[] = [
  { id: "#CDY-156", client: "Joa Touré", total: "67,80€", status: "En attente" },
  { id: "#CDY-155", client: "Arsène Coulibaly", total: "28,50€", status: "Confirmée" },
  { id: "#CDY-154", client: "Sira Sidibé", total: "32,90€", status: "Prête" },
  { id: "#CDY-153", client: "Christ Lael", total: "49,80€", status: "Livrée" },
]

const statusClasses: Record<OrderStatus, string> = {
  "En attente": "bg-yellow-100 text-yellow-800",
  "Confirmée": "bg-cyan-100 text-cyan-800",
  "Prête": "bg-green-100 text-green-800",
  "Livrée": "bg-rose-100 text-rose-800",
}

export default function RecentOrders() {
  return (
    <section className="bg-white p-6 rounded-2xl shadow-md w-full overflow-x-auto">
      <h2 className="text-4xl font-bold text-[#FF69B4] dancing_script mb-6 flex items-center gap-2">
        <Box className="h-10 w-10 text-[#8B4513]"/> Commandes Récentes
      </h2>
      <table className="min-w-full border-collapse">
        <thead>
          <tr className="border-b-2 border-[#FFF8DC]">
            <th className="text-left py-3 px-4 text-[#8B4513] text-sm font-semibold">Commande</th>
            <th className="text-left py-3 px-4 text-[#8B4513] text-sm font-semibold">Client</th>
            <th className="text-left py-3 px-4 text-[#8B4513] text-sm font-semibold">Total</th>
            <th className="text-left py-3 px-4 text-[#8B4513] text-sm font-semibold">Statut</th>
          </tr>
        </thead>
        <tbody>
          {orders.map((order) => (
            <tr key={order.id} className="border-b border-[#FFF8DC] hover:bg-pink-50 transition-colors">
              <td className="py-3 px-4 font-semibold text-[#FF69B4]">{order.id}</td>
              <td className="py-3 px-4 text-[#8B4513]">{order.client}</td>
              <td className="py-3 px-4 font-bold text-[#8B4513]">{order.total}</td>
              <td className="py-3 px-4">
                <span
                  className={`text-xs font-semibold py-1 px-3 rounded-full ${statusClasses[order.status]}`}
                >
                  {order.status}
                </span>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </section>
  )
}
