export default function Home() {
  return (
    <div className="bg-cream min-h-screen p-8">
      {/* Titre avec Dancing Script */}
      <h1 className="font-dancing font-bold text-6xl text-rose-bonbon mb-4">
        Croq'Dya
      </h1>
      
      {/* Texte avec Quicksand light */}
      <p className="font-quicksand font-light text-chocolat text-lg mb-4">
        Texte léger avec Quicksand
      </p>
      
      {/* Texte avec Quicksand normal */}
      <p className="font-quicksand font-normal text-violet-doux text-base mb-4">
        Texte normal avec Quicksand
      </p>
      
      {/* Texte avec Quicksand bold */}
      <p className="font-quicksand font-bold text-or-rose text-xl mb-6">
        Texte gras avec Quicksand
      </p>
      
      {/* Élément avec gradient */}
      <div className="bg-gradient-rose-fraise p-6 rounded-lg text-blanc-casse font-dancing text-2xl">
        Élément avec dégradé rose-fraise
      </div>
      
      {/* Alternative avec classe personnalisée */}
      <div className="bg-gradient-rose-fraise p-4 mt-4 rounded-lg">
        <span className="text-cream font-quicksand font-medium">
          Autre élément avec dégradé
        </span>
      </div>
    </div>
  );
}