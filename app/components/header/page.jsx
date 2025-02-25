import Link from "next/link";

export default function Header() {
  return (
    <header className="p-4 bg-transparent relative z-20">
      <div className="container mx-auto">
        <nav className="flex justify-end space-x-8">
          <Link 
            href="/" 
            className="text-2xl text-white relative group overflow-hidden"
          >
            <span className="inline-block transform transition-transform duration-300 group-hover:-translate-y-full">
              Home
            </span>
            <span className="absolute left-0 inline-block transform translate-y-full transition-transform duration-300 group-hover:translate-y-0 text-primary">
              Home
            </span>
          </Link>
          <a 
            href="#contact" 
            className="text-2xl text-white relative group overflow-hidden"
          >
            <span className="inline-block transform transition-transform duration-300 group-hover:-translate-y-full">
              Contact
            </span>
            <span className="absolute left-0 inline-block transform translate-y-full transition-transform duration-300 group-hover:translate-y-0 text-primary">
              Contact
            </span>
          </a>
        </nav>
      </div>
    </header>
  );
}
