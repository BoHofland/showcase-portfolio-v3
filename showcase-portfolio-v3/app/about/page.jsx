import Header from '../components/header/page';

export default function About() {
  return (
    <main className="min-h-screen bg-background text-white">
      <Header />
      <div className="container mx-auto px-4 py-16">
        <h1 className="text-4xl font-bold mb-8">Over mij</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>
            <h2 className="text-2xl font-semibold mb-4">Wie ben ik</h2>
            <p className="text-gray-300 leading-relaxed">
              Hier kunt u een introductie over uzelf schrijven. Vertel over uw passie 
              voor development, uw ervaring en wat u drijft in uw werk.
            </p>
          </div>
          <div>
            <h2 className="text-2xl font-semibold mb-4">Vaardigheden</h2>
            <ul className="space-y-2 text-gray-300">
              <li>• Frontend Development (React, Next.js)</li>
              <li>• UI/UX Design</li>
              <li>• Responsive Web Design</li>
              <li>• JavaScript / TypeScript</li>
            </ul>
          </div>
        </div>
      </div>
    </main>
  );
}
