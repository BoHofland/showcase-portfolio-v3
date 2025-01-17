import Image from 'next/image';

export default function Hero() {
  return (
    <section className="bg-background py-32 md:py-40">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center gap-8 md:gap-16 mt-16 mb-8">
          {/* Afbeelding */}
          <div className="w-full md:w-1/2">
            <Image
              src="/images/Neon-foto.png"
              alt="Bo Hofland"
              width={900}
              height={900}
              className="w-full h-auto rounded-lg"
              priority
            />
          </div>

          {/* Tekst met extra margin-top */}
          <div className="w-full md:w-1/2 mt-8 md:mt-12">
            <h1 className="text-8xl font-bold text-white mb-6">
              Bo Hofland
            </h1>
            <div className="text-2xl text-gray-300 space-y-2">
              <p>ICT & Media design student op Fontys Tilburg</p>
              <p>front-end developer</p>
              <p>UX/UI designer</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
} 