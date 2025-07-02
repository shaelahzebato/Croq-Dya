import { getServerSession } from "next-auth"
import { authOptions } from "@/lib/auth"
import { prisma } from "@/lib/prisma"
import { NextResponse } from "next/server"

export async function PATCH(req: Request) {
  const session = await getServerSession(authOptions)

  if (!session || !session.user) {
    return NextResponse.json({ error: "Non autorisé" }, { status: 401 })
  }

  const data = await req.json()

  const updated = await prisma.user.update({
    where: { id: session.user.id },
    data: {
      firstName: data.firstName,
      lastName: data.lastName,
      phone: data.phone,
      genre: data.genre,
      address: data.address,
      birthDate: data.birthdate ? new Date(data.birthdate) : undefined,
    }
  })

  return NextResponse.json({ message: "Profil mis à jour", user: updated })
}
