import Image from "next/image";
import Link from "next/link";

interface Dessert {
  name: string;
  image: string;
  description: string;
}

export default function CarouselParType({
  titre,
  image,
  items
}: {
  titre: string;
  image: string;
  items: Dessert[];
}) {
  return (
    <section className="px-6 py-10 space-y-6 max-w-6xl mx-auto">
        <div className="flex justify-between items-center">
            <div className="flex items-center gap-4">
                <div className="relative w-16 h-16 sm:w-20 sm:h-20 lg:w-[90px] lg:h-[90px]">
                    <Image
                        src={image}
                        alt="Gâteau d'anniversaire aux fraises"
                        fill
                        className="object-cover rounded-full shadow-2xl animate-float"
                        priority
                    />
                    <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-transparent via-white/10 to-white/20 pointer-events-none" />
                </div>
                <h2 className="text-[#8B4513] text-lg sm:text-xl lg:text-2xl font-semibold">{titre}</h2>
            </div>
            <Link href="/menu" className="text-sm text-[#FF69B4] underline hover:text-[#FF1493]">
                Explorez nos {titre.toLowerCase()}
            </Link>
        </div>

        <div className="flex overflow-x-auto gap-6 scroll-smooth hide-scrollbar">
            {items.map((item, idx) => (
                <div
                    key={idx}
                    className="bg-white rounded-xl shadow-lg p-4 min-w-[250px] max-w-xs flex-shrink-0 cursor-pointer hover:scale-105 transition"
                >
                    <div className="relative w-full h-48 mb-4">
                        <Image
                            src={item.image}
                            alt={item.name}
                            fill
                            className="rounded-lg object-cover"
                        />
                    </div>
                    <h3 className="text-[#FF69B4] font-semibold text-lg">{item.name}</h3>
                    <p className="text-[#8B4513] text-sm">{item.description}</p>
                </div>
            ))}
        </div>
    </section>
  );
}
