"use client";

import React, { useState } from "react";
import {
  X,
  Upload,
  Plus,
  Minus,
  Save,
  Eye,
  Camera,
  Tag,
  Clock,
  Package,
  DollarSign,
  Type,
  FileText,
  Palette,
  Sparkles,
  AlertCircle,
  CheckCircle,
  Star,
  Users,
  MessageSquare,
  Gift,
} from "lucide-react";

interface ModalNewProductProps {
  open: boolean;
  onClose: () => void;
}

interface ProductSize {
  id: string;
  name: string;
  persons: number;
  price: number;
}

interface ProductForm {
  name: string;
  category: string;
  description: string;
  shortDescription: string;
  sizes: ProductSize[];
  preparationTime: string;
  deliveryTime: string;
  ingredients: string[];
  keyIngredients: string[];
  allergens: string[];
  badges: string[];
  images: File[];
  isVegan: boolean;
  isGlutenFree: boolean;
  isDiabetic: boolean;
  isAvailable: boolean;
  difficulty: number;
  rating: number;
  packagingOptions: string[];
  defaultMessage: string;
  allowCustomMessage: boolean;
  loyaltyPoints: number;
}

function ModalNewProduct({ open, onClose }: ModalNewProductProps) {
  const [currentStep, setCurrentStep] = useState(1);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [previewImages, setPreviewImages] = useState<string[]>([]);

  const [formData, setFormData] = useState<ProductForm>({
    name: "",
    category: "",
    description: "",
    shortDescription: "",
    sizes: [
      { id: "1", name: "Individuel", persons: 1, price: 0 },
      { id: "2", name: "Pour 2 personnes", persons: 2, price: 0 },
      { id: "3", name: "Pour 6 personnes", persons: 6, price: 0 },
      { id: "4", name: "Pour 8 personnes", persons: 8, price: 0 },
    ],
    preparationTime: "",
    deliveryTime: "",
    ingredients: [""],
    keyIngredients: [""],
    allergens: [],
    badges: [],
    images: [],
    isVegan: false,
    isGlutenFree: false,
    isDiabetic: false,
    isAvailable: true,
    difficulty: 3,
    rating: 5,
    packagingOptions: ["Standard", "Boîte cadeau", "Emballage écologique"],
    defaultMessage: "",
    allowCustomMessage: true,
    loyaltyPoints: 10,
  });

  const categories = [
    { id: "gateaux", name: "Gâteaux", emoji: "🎂" },
    { id: "cupcakes", name: "Cupcakes", emoji: "🧁" },
    { id: "macarons", name: "Macarons", emoji: "🌈" },
    { id: "tartes", name: "Tartes", emoji: "🥧" },
    { id: "cookies", name: "Cookies", emoji: "🍪" },
    { id: "glaces", name: "Glaces", emoji: "🍦" },
  ];

  const allergensList = [
    "Gluten",
    "Œufs",
    "Lait",
    "Fruits à coque",
    "Arachides",
    "Soja",
    "Sésame",
    "Sulfites",
    "Moutarde",
    "Céleri",
  ];

  const availableBadges = [
    "Nouveau",
    "Bestseller",
    "Favori",
    "Signature",
    "Premium",
    "Artisanal",
    "Bio",
    "Local",
    "Traditionnel",
    "Innovant",
    "Festif",
    "Édition limitée",
  ];

  const handleInputChange = (field: keyof ProductForm, value: any) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  const addIngredient = (type: "ingredients" | "keyIngredients") => {
    setFormData((prev) => ({
      ...prev,
      [type]: [...prev[type], ""],
    }));
  };

  const removeIngredient = (
    index: number,
    type: "ingredients" | "keyIngredients"
  ) => {
    setFormData((prev) => ({
      ...prev,
      [type]: prev[type].filter((_, i) => i !== index),
    }));
  };

  const updateIngredient = (
    index: number,
    value: string,
    type: "ingredients" | "keyIngredients"
  ) => {
    setFormData((prev) => ({
      ...prev,
      [type]: prev[type].map((item, i) => (i === index ? value : item)),
    }));
  };

  const updateSize = (
    index: number,
    field: keyof ProductSize,
    value: string | number
  ) => {
    setFormData((prev) => ({
      ...prev,
      sizes: prev.sizes.map((size, i) =>
        i === index ? { ...size, [field]: value } : size
      ),
    }));
  };

  const toggleAllergen = (allergen: string) => {
    setFormData((prev) => ({
      ...prev,
      allergens: prev.allergens.includes(allergen)
        ? prev.allergens.filter((a) => a !== allergen)
        : [...prev.allergens, allergen],
    }));
  };

  const toggleBadge = (badge: string) => {
    setFormData((prev) => ({
      ...prev,
      badges: prev.badges.includes(badge)
        ? prev.badges.filter((b) => b !== badge)
        : [...prev.badges, badge],
    }));
  };

  const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = Array.from(e.target.files || []);
    setFormData((prev) => ({
      ...prev,
      images: [...prev.images, ...files],
    }));

    files.forEach((file) => {
      const reader = new FileReader();
      reader.onload = (e) => {
        setPreviewImages((prev) => [...prev, e.target?.result as string]);
      };
      reader.readAsDataURL(file);
    });
  };

  const removeImage = (index: number) => {
    setFormData((prev) => ({
      ...prev,
      images: prev.images.filter((_, i) => i !== index),
    }));
    setPreviewImages((prev) => prev.filter((_, i) => i !== index));
  };

  const validateStep = (step: number): boolean => {
    switch (step) {
      case 1:
        return !!(
          formData.name &&
          formData.category &&
          formData.shortDescription
        );
      case 2:
        return !!(
          formData.description &&
          formData.sizes.some((s) => s.price > 0) &&
          formData.preparationTime
        );
      case 3:
        return formData.ingredients.filter((ing) => ing.trim()).length > 0;
      default:
        return true;
    }
  };

  const handleSubmit = async () => {
    setIsSubmitting(true);

    await new Promise((resolve) => setTimeout(resolve, 2000));

    console.log("Nouveau produit créé:", formData);

    setIsSubmitting(false);
    onClose();
  };

  const nextStep = () => {
    if (validateStep(currentStep) && currentStep < 4) {
      setCurrentStep(currentStep + 1);
    }
  };

  const prevStep = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1);
    }
  };

  if (!open) return null;
  return (
    <main className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4">
      <section className="bg-white rounded-2xl w-full max-w-5xl max-h-[90vh] overflow-hidden shadow-2xl">
        {/* Header avec couleurs CroqDya */}
        <header className="bg-gradient-to-r from-[#FF69B4] to-[#FFB6C1] text-white p-6 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center">
              <Plus className="w-6 h-6" />
            </div>
            <div>
              <h2 className="text-2xl font-bold font-['Dancing_Script']">
                Nouveau Produit CroqDya
              </h2>
              <p className="text-pink-100">Étape {currentStep} sur 4</p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center hover:bg-white/30 transition-colors cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>
        </header>

        {/* Progress Bar */}
        <section className="bg-[#FFF8DC] h-3">
          <div
            className="bg-[#FF69B4] h-full transition-all duration-300 ease-out"
            style={{ width: `${(currentStep / 4) * 100}%` }}
          />
        </section>

        {/* Content */}
        <section className="p-6 overflow-y-auto max-h-[calc(90vh-200px)] bg-[#FFF8DC]">
          
        </section>


        {/* Footer */}
        <footer className="bg-white border-t-2 border-[#FFB6C1] p-6 flex items-center justify-between">
          <button
            onClick={prevStep}
            disabled={currentStep === 1}
            className="px-6 py-3 border-2 border-[#FFB6C1] rounded-xl text-[#8B4513] hover:bg-[#FFF8DC] disabled:opacity-50 disabled:cursor-not-allowed transition-colors font-medium cursor-pointer"
          >
            ← Précédent
          </button>

          <div className="flex gap-2">
            {[1, 2, 3, 4].map((step) => (
              <div
                key={step}
                className={`w-4 h-4 rounded-full transition-colors ${
                  step === currentStep
                    ? "bg-[#FF69B4]"
                    : step < currentStep
                      ? "bg-green-500"
                      : "bg-[#FFB6C1]"
                }`}
              />
            ))}
          </div>

          {currentStep < 4 ? (
            <button
              onClick={nextStep}
              disabled={!validateStep(currentStep)}
              className="px-6 py-3 bg-[#FF69B4] text-white rounded-xl hover:bg-[#FF69B4]/90 disabled:opacity-50 disabled:cursor-not-allowed transition-colors flex items-center gap-2 font-medium cursor-pointer"
            >
              Suivant →
            </button>
          ) : (
            <button
              onClick={handleSubmit}
              disabled={isSubmitting}
              className="px-6 py-3 bg-green-600 text-white rounded-xl hover:bg-green-700 disabled:opacity-50 transition-colors flex items-center gap-2 font-medium cursor-pointer"
            >
              {isSubmitting ? (
                <>
                  <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin" />
                  Création en cours...
                </>
              ) : (
                <>
                  <Save className="w-4 h-4" />
                  Créer le Produit
                </>
              )}
            </button>
          )}
        </footer>
      </section>
    </main>
  );
}

export default ModalNewProduct;
