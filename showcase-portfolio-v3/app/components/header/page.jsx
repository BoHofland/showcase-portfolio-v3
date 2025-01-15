import Link from "next/link";

export default function Header() {
  return (
    <header className="p-4 bg-background relative z-20">
      <div className="container mx-auto">
        <nav className="flex justify-end space-x-4">
          <Link 
            href="/about" 
            className="text-white hover:text-primary transition-colors duration-300"
          >
            About
          </Link>
          <a 
            href="#contact" 
            className="text-white hover:text-primary transition-colors duration-300"
          >
            Contact
          </a>
        </nav>
      </div>
    </header>
  );
}
