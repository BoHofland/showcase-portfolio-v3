import TextSliderWerk from "./components/TextSliderWerk/TextSliderWerk";
import TextSliderContact from "./components/TextSliderContact/TextSliderContact";
import PortfolioSection from "./components/PortfolioSection/PortfolioSection";
import Header from "./components/header/page";
import Contact from "./components/contact/page";
const portfolioItems = [
  {
    id: 1,
    label: "Featured",
    title: "Modern Web Applications",
    description: "Crafting seamless digital experiences through innovative web solutions. Specializing in responsive design and interactive user interfaces that engage and delight users across all devices.",
    image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&q=80&w=600&h=800"
  },
  {
    id: 2,
    label: "Responsive",
    title: "Mobile-First Development",
    description: "Building progressive web applications with a mobile-first approach. Creating adaptive layouts that provide optimal user experience across all screen sizes.",
    image: "https://images.unsplash.com/photo-1555421689-491a97ff2040?auto=format&fit=crop&q=80&w=600&h=800"
  },
  {
    id: 3,
    label: "Scalable",
    title: "Cloud Architecture",
    description: "Designing scalable cloud solutions that power modern applications. Expertise in serverless architecture and microservices deployment for optimal performance.",
    image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=80&w=600&h=800"
  }
];

export default function Home() {
  return (
    <div>
      <Header />
      
      
      {/* TextSlider animatie */}
      <TextSliderWerk />
      

      
      {/* Portfolio sectie */}
      <main className="min-h-screen bg-background">
        <div className="max-w-6xl mx-auto px-4 py-16">
          <PortfolioSection items={portfolioItems} />
        </div>
      </main>

            {/* ContactAnimatie */}
      <div className="mt-12"> {/* Voeg wat marge toe tussen de twee animaties */}
        <TextSliderContact />
      </div>

      {/* Contact sectie */}
      <Contact />
    </div>
  );
}
