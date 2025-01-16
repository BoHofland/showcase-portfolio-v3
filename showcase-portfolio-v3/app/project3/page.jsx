export default function Project3() {
  return (
    <main className="min-h-screen bg-background text-white py-16">
      <div className="container mx-auto px-4">
        {/* Hoofdtitel */}
        <h1 className="text-6xl font-bold mb-8">
          Project 3 Titel
        </h1>

        {/* Project intro */}
        <div className="text-2xl text-gray-300 mb-16 max-w-4xl">
          <p>
            Korte beschrijving van project 3.
          </p>
        </div>

        {/* Project details sectie */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 mb-16">
          <div className="space-y-8">
            <h2 className="text-4xl font-semibold mb-6">Het Project</h2>
            <p className="text-xl text-gray-300">
              Hier komt je projectbeschrijving. Leg uit wat het doel was, welke problemen je hebt opgelost,
              en welke technologieën je hebt gebruikt.
            </p>
          </div>
          <div>
            <img
              src="/images/project3-detail.jpg" // Voeg je eigen afbeelding toe
              alt="Project detail"
              className="rounded-lg w-full h-auto"
            />
          </div>
        </div>

        {/* Proces sectie */}
        <div className="mb-16">
          <h2 className="text-4xl font-semibold mb-8">Het Proces</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="space-y-4">
              <h3 className="text-2xl font-medium">Research</h3>
              <p className="text-gray-300">
                Beschrijf hier je research fase en belangrijke bevindingen.
              </p>
            </div>
            <div className="space-y-4">
              <h3 className="text-2xl font-medium">Design</h3>
              <p className="text-gray-300">
                Leg uit hoe je tot je design beslissingen bent gekomen.
              </p>
            </div>
            <div className="space-y-4">
              <h3 className="text-2xl font-medium">Development</h3>
              <p className="text-gray-300">
                Beschrijf de technische uitdagingen en oplossingen.
              </p>
            </div>
          </div>
        </div>

        {/* Resultaat sectie */}
        <div className="mb-16">
          <h2 className="text-4xl font-semibold mb-8">Het Resultaat</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <img
              src="/images/project3-result1.jpg" // Voeg je eigen afbeelding toe
              alt="Project resultaat 1"
              className="rounded-lg w-full h-auto"
            />
            <img
              src="/images/project3-result2.jpg" // Voeg je eigen afbeelding toe
              alt="Project resultaat 2"
              className="rounded-lg w-full h-auto"
            />
          </div>
        </div>
      </div>
    </main>
  );
} 