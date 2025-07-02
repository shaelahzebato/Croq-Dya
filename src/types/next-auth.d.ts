import NextAuth, { DefaultSession, DefaultUser } from "next-auth";

declare module "next-auth" {
  interface Session {
    user: {
      id: string;
      role: "CLIENT" | "ADMIN";
    } & DefaultSession["user"];
  }

  interface User extends DefaultUser {
    role: "CLIENT" | "ADMIN";
  }
}

declare module "next-auth/jwt" {
  interface JWT {
    id: string;
    role: "CLIENT" | "ADMIN";
  }
}



// import NextAuth, { DefaultSession } from "next-auth"
// import { JWT } from "next-auth/jwt"

// declare module "next-auth" {
//   interface Session {
//     user: {
//       id: string
//       role: "CLIENT" | "ADMIN"
//       firstName: string
//       lastName: string
//       phone?: string
//       birthdate?: string
//       address?: string
//       memberSince?: string
//     } & DefaultSession["user"]
//   }

//   interface User {
//     id: string
//     role: "CLIENT" | "ADMIN"
//     firstName: string
//     lastName: string
//     phone?: string
//     birthdate?: string
//     address?: string
//     memberSince?: string
//   }
// }

// declare module "next-auth/jwt" {
//   interface JWT {
//     id: string
//     role: "CLIENT" | "ADMIN"
//     firstName: string
//     lastName: string
//     phone?: string
//     birthdate?: string
//     address?: string
//     memberSince?: string
//   }
// }