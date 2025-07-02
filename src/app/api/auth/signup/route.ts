import { prisma } from "@/lib/prisma"
import { resend } from "@/lib/resend"
import { hash } from "bcryptjs"
import { NextResponse } from "next/server"

export async function POST(request: Request) {
  try {
    const { nom, prenom, telephone, email, password, date, genre  } = await request.json()

    // 2. Vérifier si l’utilisateur existe
    const existingUser = await prisma.user.findUnique({ where: { email } })
    if (existingUser) return NextResponse.json({ error: 'Cet email est déjà utilisé.' }, { status: 400 })

    // 3. Hachage du mot de passe
    const hashedPassword = await hash(password, 10)

    // 4. Création de l’utilisateur
    const user = await prisma.user.create({
      data: {
        firstName: nom,
        lastName: prenom, 
        email,
        phone: telephone,
        password: hashedPassword,
        birthDate: new Date(date),
        role: 'CLIENT',
        genre,
      },
    })    

    // 5. Envoi de l’e-mail de bienvenue
    await resend.emails.send({
      from: 'admin@croqdya.com',
      to: email,
      subject: 'Bienvenue chez CroqDya 🍰',
      html: `<p>Bonjour ${prenom},<br>Bienvenue dans l’univers gourmand de <strong>CroqDya</strong> !</p>`,
    })

    return NextResponse.json({ user })
  } catch (error) {
    console.error("Signup error:", error)
    return NextResponse.json({ error: "Erreur interne" }, { status: 500 })
  }
}