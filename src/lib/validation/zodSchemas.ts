import { z } from 'zod';

export const signInSchema = z.object({
  email: z.string().email("Adresse email invalide !"),
  password: z.string().min(6, "Le mot de passe doit contenir au moins 6 caractères !")
})
export type SigInFormValues = z.infer<typeof signInSchema>;


export const signUpSchema = z.object({
  nom: z.string().min(2, "Votre nom est court !"),
  prenom: z.string().min(2, "Votre prénom est court !"),
  telephone: z.string().min(10, "Numéro de téléphone invalide !"),
  email: z.string().email("Adresse email invalide !"),
  password: z.string().min(6, "Le mot de passe doit contenir au moins 6 caractères !"),
  date: z.string(),
  genre: z.enum(["femme", "homme", "autre", "prefere-ne-pas-dire"], {
    errorMap: () => ({ message: "Veuillez sélectionner un genre valide." })
  })
});

export type SignUpFormValues = z.infer<typeof signUpSchema>;


export const modalNewProduct = z.object({
  name: z.string().min(1, "Le nom est requis."),
  category: z.enum(["Gâteaux", "Cupcakes", "Macarons", "Tartes", "Cookies", "Glaces"], {
    errorMap: () => ({ message: "La catégorie est requise." })
  }),
  description: z.string().min(1, "La description est requise."),
  shortDescription: z.string().min(1, "La description courte est requise."),
  
  sizes: z.array(z.string()).nonempty("Au moins une taille est requise."),
  preparationTime: z.string().min(1, "Le temps de préparation est requis."),
  deliveryTime: z.string().min(1, "Le temps de livraison est requis."),
  
  ingredients: z.array(z.string()).nonempty("Ajoutez au moins un ingrédient."),
  keyIngredients: z.array(z.string()).optional(),
  allergens: z.array(z.string()).optional(),
  badges: z.array(z.string()).optional(),
  
  images: z.union([z.string(), z.any()]),

  isVegan: z.boolean(),
  isGlutenFree: z.boolean(),
  isDiabetic: z.boolean(),
  isAvailable: z.boolean(),

  difficulty: z.number().min(1).max(5),
  rating: z.number().min(0).max(5).optional(),

  packagingOptions: z.array(z.string()).optional(),
  defaultMessage: z.string().optional(),
  allowCustomMessage: z.boolean(),

  loyaltyPoints: z.number().min(0).optional(),
})

export type ModalNewProductValues = z.infer<typeof modalNewProduct>


export const productFormSchema = z.object({
  name: z.string().min(2, "Le nom est requis"),
  category: z.string().min(1, "La catégorie est requise"),
  shortDescription: z
    .string()
    .min(10, "Description trop courte")
    .max(160, "Description trop longue"),
  preparationTime: z.string().min(1, "Champ requis"),
  deliveryTime: z.string().optional(),
  loyaltyPoints: z
    .number({ invalid_type_error: "Doit être un nombre" })
    .min(0, "Minimum 0")
    .default(0),
});

export type ProductFormData = z.infer<typeof productFormSchema>;


export const sizeSchema = z.object({
  name: z.string().min(1, "Nom de taille requis"),
  persons: z.number().min(1, "Au moins 1 personne"),
  price: z.number().min(0.1, "Prix invalide"),
});