import Link from "next/link";

export default function Header() {
  return (
    <header className="p-4 bg-background relative z-20">
      <div className="container mx-auto">
        <nav className="flex justify-end space-x-8">
          <Link 
            href="/about" 
            className="text-2xl text-white hover:text-primary relative group transition-colors duration-300"
          >
            About
            <span className="absolute left-0 right-0 bottom-0 h-0.5 bg-primary transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></span>
          </Link>
          <a 
            href="#contact" 
            className="text-2xl text-white hover:text-primary relative group transition-colors duration-300"
          >
            Contact
            <span className="absolute left-0 right-0 bottom-0 h-0.5 bg-primary transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></span>
          </a>
        </nav>
      </div>
    </header>
  );
}
